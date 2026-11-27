import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render, prerenderRoutes, getPageMeta, faqs, guides, guidePath, releases, SITE_URL, OG_IMAGE } = await import(
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

const latestVersion = releases[0]?.version ?? null;

const DEMO_VIDEO_UPLOAD_DATE = "2026-09-05";

const homeStructuredData = (description, body) => {
  const assetUrl = (pattern) => {
    const match = body.match(pattern);
    return match ? `${SITE_URL}${match[1]}` : undefined;
  };
  const author = { "@id": `${SITE_URL}/#author` };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "WailBrew",
        url: `${SITE_URL}/`,
        inLanguage: "en",
        publisher: author,
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#author`,
        name: "Nico Wickersheim",
        url: "https://github.com/wickenico",
        homeLocation: { "@type": "Place", name: "Freiburg im Breisgau, Germany" },
        sameAs: ["https://github.com/wickenico"],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: "WailBrew",
        description,
        url: `${SITE_URL}/`,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "macOS 12.0 or later",
        softwareRequirements: "Homebrew",
        ...(latestVersion && { softwareVersion: latestVersion }),
        downloadUrl: "https://github.com/wickenico/WailBrew/releases/latest",
        installUrl: "https://formulae.brew.sh/cask/wailbrew",
        image: `${SITE_URL}/icon-512.png`,
        screenshot: OG_IMAGE,
        license: "https://opensource.org/licenses/MIT",
        isAccessibleForFree: true,
        inLanguage: ["en", "de", "fr", "es", "it", "pt-BR", "ru", "tr", "ko", "he", "zh-Hans", "zh-Hant"],
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        author,
        publisher: author,
        sameAs: [
          "https://github.com/wickenico/WailBrew",
          "https://formulae.brew.sh/cask/wailbrew",
          "https://alternativeto.net/software/wailbrew/about/",
          "https://www.reddit.com/r/WailBrew",
        ],
      },
      {
        "@type": "VideoObject",
        name: "WailBrew demo",
        description: "Browsing, installing and upgrading Homebrew packages with WailBrew on macOS.",
        thumbnailUrl: assetUrl(/poster="([^"]+)"/),
        contentUrl: assetUrl(/<source src="([^"]+\.mp4)"/),
        uploadDate: DEMO_VIDEO_UPLOAD_DATE,
        duration: "PT20S",
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
  };
};

const imageExists = (imageUrl) => {
  if (!imageUrl) return false;
  const exists = fs.existsSync(path.join(distDir, imageUrl.slice(SITE_URL.length)));
  if (!exists) console.warn(`missing ${imageUrl.slice(SITE_URL.length)}, using default og:image (run pnpm og:guides)`);
  return exists;
};

const breadcrumbLabels = {
  "/about": "About",
  "/privacy": "Privacy Policy",
  "/changelog": "Changelog",
  "/guides": "Guides",
  "/sponsor": "Support WailBrew",
};

const breadcrumbList = (route, title) => {
  const guide = guides.find(({ slug }) => guidePath(slug) === route);
  const crumbs = [
    ["Home", "/"],
    ...(guide
      ? [
          ["Guides", "/guides"],
          [guide.title, route],
        ]
      : [[breadcrumbLabels[route] ?? title, route]]),
  ];
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map(([name, href], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${SITE_URL}${href}`,
    })),
  };
};

const guideArticle = (route) => {
  const guide = guides.find(({ slug }) => guidePath(slug) === route);
  if (!guide) return null;
  return {
    "@type": "TechArticle",
    headline: guide.title,
    description: guide.description,
    url: `${SITE_URL}${route}`,
    mainEntityOfPage: `${SITE_URL}${route}`,
    datePublished: guide.published,
    dateModified: guide.updated,
    image: imageExists(getPageMeta(route).image) ? getPageMeta(route).image : OG_IMAGE,
    inLanguage: "en",
    author: { "@type": "Person", name: "Nico Wickersheim", url: "https://github.com/wickenico" },
    publisher: { "@type": "Person", name: "Nico Wickersheim", url: "https://github.com/wickenico" },
    about: { "@type": "SoftwareApplication", name: "Homebrew", url: "https://brew.sh" },
  };
};

const jsonLdScript = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

const renderPage = async (route, { notFound = false } = {}) => {
  const { title, description, type = "website", imageAlt, ...meta } = getPageMeta(notFound ? "/404" : route);
  const image = meta.image && imageExists(meta.image) ? meta.image : undefined;
  const url = `${SITE_URL}${route}`;

  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(title)}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);

  html = setMeta(html, "name", "description", description);
  html = setMeta(html, "property", "og:title", title);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:type", type);
  if (image) {
    html = setMeta(html, "property", "og:image", image);
    html = setMeta(html, "property", "og:image:alt", imageAlt ?? title);
    html = setMeta(html, "name", "twitter:image", image);
  }
  html = setMeta(html, "name", "twitter:title", title);
  html = setMeta(html, "name", "twitter:description", description);

  const body = await render(notFound ? "/404" : route);

  let headExtras = "";
  if (notFound) {
    headExtras = '<meta name="robots" content="noindex" />';
    html = html.replace(/\s*<link rel="canonical" href="[^"]*" \/>/, "");
  } else if (route === "/") {
    headExtras = jsonLdScript(homeStructuredData(description, body));
  } else {
    const graph = [guideArticle(route), breadcrumbList(route, title)].filter(Boolean);
    headExtras = jsonLdScript({ "@context": "https://schema.org", "@graph": graph });
  }

  return html
    .replace("<!--head-extras-->", headExtras)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
};

const outFile = (route) => (route === "/" ? "index.html" : `${route.slice(1)}.html`);

for (const route of prerenderRoutes) {
  const file = path.join(distDir, outFile(route));
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, await renderPage(route));
  console.log(`prerendered ${route} -> dist/${outFile(route)}`);
}

fs.writeFileSync(path.join(distDir, "404.html"), await renderPage("/404", { notFound: true }));
console.log("prerendered 404 -> dist/404.html");

const routeSources = {
  "/": ["src/pages/Index.tsx", "src/components", "src/content/faq.ts"],
  "/about": ["src/pages/About.tsx"],
  "/privacy": ["src/pages/Privacy.tsx"],
  "/sponsor": ["src/pages/Sponsor.tsx"],
};

const today = new Date().toISOString().slice(0, 10);
const latestDate = (dates) => dates.toSorted().at(-1);

const fixedLastModified = {
  "/changelog": releases[0]?.date,
  "/guides": latestDate(guides.map(({ updated }) => updated)),
  ...Object.fromEntries(guides.map(({ slug, updated }) => [guidePath(slug), updated])),
};

const lastModified = (route) => {
  if (fixedLastModified[route]) return fixedLastModified[route];
  try {
    const date = execFileSync("git", ["log", "-1", "--format=%cs", "--", ...(routeSources[route] ?? ["src"])], {
      cwd: root,
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return date || today;
  } catch {
    return today;
  }
};

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${prerenderRoutes
  .map(
    (route) => `  <url>\n    <loc>${SITE_URL}${route}</loc>\n    <lastmod>${lastModified(route)}</lastmod>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
console.log(`generated sitemap.xml (${prerenderRoutes.length} urls)`);
