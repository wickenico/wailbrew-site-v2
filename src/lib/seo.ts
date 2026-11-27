export const SITE_URL = "https://www.wailbrew.app";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export interface PageMeta {
  title: string;
  description: string;
}

export const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: "WailBrew – Free Homebrew GUI for macOS | Cakebrew Alternative",
    description:
      "WailBrew is a free, open-source Homebrew GUI for macOS. Install, update and remove formulae, casks and services with a click – native on Apple Silicon and Intel.",
  },
  "/about": {
    title: "About WailBrew – Open-Source Homebrew GUI for macOS",
    description:
      "The story behind WailBrew, the open-source Homebrew GUI for macOS built with Go, Wails and React by Nico Wickersheim in Freiburg, Germany.",
  },
  "/privacy": {
    title: "Privacy Policy – WailBrew",
    description:
      "How the WailBrew website handles your data: hosting on Vercel, cookieless analytics and public GitHub API requests.",
  },
};

export const notFoundMeta: PageMeta = {
  title: "Page not found – WailBrew",
  description: "This page doesn't exist. Head back to WailBrew, the free Homebrew GUI for macOS.",
};

export const getPageMeta = (path: string): PageMeta => pageMeta[path] ?? notFoundMeta;
