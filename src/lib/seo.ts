import { guides, guidePath } from "@/content/guides";

export const SITE_URL = "https://www.wailbrew.app";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export interface PageMeta {
  title: string;
  description: string;
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
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
  "/changelog": {
    title: "Changelog – What's New in WailBrew",
    description:
      "Release notes for every WailBrew version: new features, improvements and fixes in the free, open-source Homebrew GUI for macOS.",
  },
  "/guides": {
    title: "Homebrew Guides for macOS – WailBrew",
    description:
      "Practical Homebrew guides: update and uninstall packages, free up disk space, manage services, understand casks and back up your setup with a Brewfile.",
  },
  ...Object.fromEntries(
    guides.map((guide) => [
      guidePath(guide.slug),
      {
        title: `${guide.metaTitle} – WailBrew`,
        description: guide.description,
        type: "article",
        image: `${SITE_URL}/og/guides/${guide.slug}.jpg`,
        imageAlt: guide.title,
      },
    ]),
  ),
};

export const notFoundMeta: PageMeta = {
  title: "Page not found – WailBrew",
  description: "This page doesn't exist. Head back to WailBrew, the free Homebrew GUI for macOS.",
};

export const getPageMeta = (path: string): PageMeta => pageMeta[path] ?? notFoundMeta;
