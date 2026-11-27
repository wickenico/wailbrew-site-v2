import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render, prerenderRoutes, getPageMeta, faqs, SITE_URL, OG_IMAGE } = await import(
  pathToFileURL(ssrEntry).href
);

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

const escapeAttr = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const setMeta = (html, attr, key, value) => {
  const pattern = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`);
  if (!pattern.test(html)) throw new Error(`Missing <meta ${attr}="${key}"> in index.html`);
  return html.replace(pattern, `$1${escapeAttr(value)}$2`);
};

const homeStructuredData = (description) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "WailBrew",
      description,
      url: `${SITE_URL}/`,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "macOS 12.0 or later",
      softwareRequirements: "Homebrew",
      downloadUrl: "https://github.com/wickenico/WailBrew/releases/latest",
      image: OG_IMAGE,
      screenshot: OG_IMAGE,
      license: "https://opensource.org/licenses/MIT",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@type": "Person", name: "Nico Wickersheim", url: "https://github.com/wickenico" },
      sameAs: ["https://github.com/wickenico/WailBrew", "https://www.reddit.com/r/WailBrew"],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
});

const renderPage = (route, { notFound = false } = {}) => {
  const { title, description } = getPageMeta(notFound ? "/404" : route);
  const url = `${SITE_URL}${route}`;

  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(title)}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);

  html = setMeta(html, "name", "description", description);
  html = setMeta(html, "property", "og:title", title);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "name", "twitter:title", title);
  html = setMeta(html, "name", "twitter:description", description);

  let headExtras = "";
  if (notFound) {
    headExtras = '<meta name="robots" content="noindex" />';
    html = html.replace(/\s*<link rel="canonical" href="[^"]*" \/>/, "");
  } else if (route === "/") {
    const json = JSON.stringify(homeStructuredData(description)).replace(/</g, "\\u003c");
    headExtras = `<script type="application/ld+json">${json}</script>`;
  }

  return html
    .replace("<!--head-extras-->", headExtras)
    .replace('<div id="root"></div>', `<div id="root">${render(notFound ? "/404" : route)}</div>`);
};

const outFile = (route) => (route === "/" ? "index.html" : `${route.slice(1)}.html`);

for (const route of prerenderRoutes) {
  fs.writeFileSync(path.join(distDir, outFile(route)), renderPage(route));
  console.log(`prerendered ${route} -> dist/${outFile(route)}`);
}

fs.writeFileSync(path.join(distDir, "404.html"), renderPage("/404", { notFound: true }));
console.log("prerendered 404 -> dist/404.html");
