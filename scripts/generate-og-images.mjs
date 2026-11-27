import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { guides } from "../src/content/guides.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "og", "guides");
const chromePath = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const logoUrl = pathToFileURL(path.join(root, "src", "assets", "logo.webp")).href;
const port = 9336;

const escapeHtml = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const pageHtml = (guide) => `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif;
    color: hsl(210 40% 98%);
    background:
      radial-gradient(ellipse 70% 60% at 20% -10%, rgba(151, 103, 228, 0.45), transparent 70%),
      radial-gradient(ellipse 60% 60% at 110% 110%, rgba(34, 211, 238, 0.25), transparent 70%),
      linear-gradient(180deg, hsl(222 47% 11%) 0%, hsl(217 33% 15%) 100%);
    padding: 64px 72px;
    display: flex;
    flex-direction: column;
  }
  .top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 48px; }
  .brand { display: flex; align-items: center; gap: 14px; }
  .brand img { width: 56px; height: 56px; }
  .brand span {
    font-size: 36px; font-weight: 800; letter-spacing: -0.5px;
    background: linear-gradient(135deg, hsl(263 70% 65%), hsl(189 95% 52%));
    -webkit-background-clip: text; color: transparent;
  }
  .label {
    font-size: 18px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
    padding: 8px 16px; border-radius: 999px;
    background: rgba(151, 103, 228, 0.18); border: 1px solid rgba(151, 103, 228, 0.45);
  }
  h1 { font-size: 64px; line-height: 1.08; font-weight: 800; letter-spacing: -1.5px; max-width: 1000px; }
  .terminal {
    margin-top: auto; align-self: flex-start;
    display: flex; align-items: center; gap: 16px;
    font-family: "SF Mono", Menlo, monospace; font-size: 30px;
    padding: 20px 28px; border-radius: 14px;
    background: hsl(220 25% 8%); border: 1px solid hsl(217 33% 25%);
    box-shadow: 0 20px 60px rgba(0,0,0,0.45);
  }
  .terminal .prompt { color: hsl(215 20% 55%); }
  .terminal code { color: hsl(189 95% 52%); }
</style>
</head>
<body>
  <div class="top">
    <div class="brand"><img src="${logoUrl}" /><span>WailBrew</span></div>
    <div class="label">Homebrew guide</div>
  </div>
  <h1>${escapeHtml(guide.title)}</h1>
  <div class="terminal"><span class="prompt">$</span><code>${escapeHtml(guide.command)}</code></div>
</body>
</html>`;

const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "wailbrew-og-"));
const chrome = spawn(
  chromePath,
  [
    "--headless=new",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profileDir}`,
    "--allow-file-access-from-files",
    "about:blank",
  ],
  { stdio: "ignore" },
);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

try {
  let target;
  for (let attempt = 0; attempt < 50 && !target; attempt++) {
    await sleep(200);
    try {
      target = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === "page");
    } catch {}
  }
  if (!target) throw new Error("Chrome did not start");

  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve) => ws.addEventListener("open", resolve));
  let nextId = 0;
  const pending = new Map();
  ws.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) pending.get(message.id)(message.result);
  });
  const send = (method, params = {}) =>
    new Promise((resolve) => {
      const id = ++nextId;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });

  await send("Emulation.setDeviceMetricsOverride", { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
  fs.mkdirSync(outDir, { recursive: true });

  for (const guide of guides) {
    const htmlFile = path.join(profileDir, `${guide.slug}.html`);
    fs.writeFileSync(htmlFile, pageHtml(guide));
    await send("Page.navigate", { url: pathToFileURL(htmlFile).href });
    await sleep(800);
    const { data } = await send("Page.captureScreenshot", { format: "jpeg", quality: 85 });
    fs.writeFileSync(path.join(outDir, `${guide.slug}.jpg`), Buffer.from(data, "base64"));
    console.log(`generated public/og/guides/${guide.slug}.jpg`);
  }

  ws.close();
} finally {
  chrome.kill();
}
