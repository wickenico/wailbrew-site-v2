import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outFile = path.join(root, "src", "content", "releases.json");
const MAX_RELEASES = 25;

if (process.argv.includes("--if-missing") && fs.existsSync(outFile)) process.exit(0);

const cleanBody = (html) =>
  html
    .replace(/<h1[^>]*>[\s\S]*?<\/h1>/g, "")
    .replace(/<h2[^>]*>\s*Dependencies\s*<\/h2>[\s\S]*?(?=<h[12][\s>]|$)/g, "")
    .replace(/<p><strong>Full Changelog<\/strong>[\s\S]*?<\/p>/g, "")
    .replace(/\s(?:class|dir|data-[\w-]+|aria-[\w-]+)="[^"]*"/g, "")
    .replace(/<(\/?)tt>/g, "<$1code>")
    .replace(/\s*\(<a href="https:\/\/github\.com\/[^"]+\/commit\/[^"]+"><code>\w+<\/code><\/a>\)/g, "")
    .replace(/<(\/?)h3>/g, "<$1h4>")
    .replace(/<(\/?)h2>/g, "<$1h3>")
    .replace(/<ul>\s*<\/ul>/g, "")
    .trim();

const fetchReleases = async () => {
  const headers = { Accept: "application/vnd.github.html+json" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const response = await fetch("https://api.github.com/repos/wickenico/WailBrew/releases?per_page=50", {
    headers,
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) throw new Error(`GitHub API responded with ${response.status}`);

  return (await response.json())
    .filter((release) => !release.draft && !release.prerelease)
    .slice(0, MAX_RELEASES)
    .map((release) => ({
      version: release.tag_name.replace(/^v/, ""),
      date: release.published_at.slice(0, 10),
      url: release.html_url,
      html: cleanBody(release.body_html ?? ""),
    }));
};

try {
  const releases = await fetchReleases();
  fs.writeFileSync(outFile, `${JSON.stringify(releases, null, 2)}\n`);
  console.log(`fetched ${releases.length} releases -> src/content/releases.json`);
} catch (error) {
  if (fs.existsSync(outFile)) {
    console.warn(`could not fetch releases (${error.message}), keeping existing releases.json`);
  } else {
    fs.writeFileSync(outFile, "[]\n");
    console.warn(`could not fetch releases (${error.message}), wrote empty releases.json`);
  }
}
