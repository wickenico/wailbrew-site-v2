export interface GuideMeta {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  command: string;
  published: string;
  updated: string;
}

export const guides: GuideMeta[] = [
  {
    slug: "update-homebrew-packages",
    title: "How to update all Homebrew packages on your Mac",
    metaTitle: "How to Update All Homebrew Packages on macOS",
    description:
      "brew update vs. brew upgrade explained: check what's outdated, upgrade everything or single packages, include auto-updating casks and pin versions you want to keep.",
    command: "brew upgrade",
    published: "2026-11-27",
    updated: "2026-11-27",
  },
  {
    slug: "uninstall-homebrew-packages",
    title: "How to uninstall Homebrew packages without leaving junk behind",
    metaTitle: "How to Uninstall Homebrew Packages and Unused Dependencies",
    description:
      "Remove formulae and casks cleanly: check what depends on a package, uninstall it, zap leftover app files and clean up dependencies nothing needs anymore.",
    command: "brew autoremove",
    published: "2026-11-27",
    updated: "2026-11-27",
  },
  {
    slug: "homebrew-cleanup",
    title: "How to free up disk space with brew cleanup",
    metaTitle: "Free Up Disk Space on macOS with brew cleanup",
    description:
      "Homebrew keeps old versions and downloads around. Learn how to preview and run brew cleanup, empty the download cache and find out how much space you get back.",
    command: "brew cleanup --dry-run",
    published: "2026-11-27",
    updated: "2026-11-27",
  },
  {
    slug: "homebrew-services",
    title: "How to manage Homebrew services on macOS",
    metaTitle: "Homebrew Services: Start, Stop and Restart on macOS",
    description:
      "Run PostgreSQL, Redis, MySQL or nginx in the background with brew services: list, start, stop and restart services and control whether they launch at login.",
    command: "brew services list",
    published: "2026-11-27",
    updated: "2026-11-27",
  },
  {
    slug: "homebrew-formula-vs-cask",
    title: "Homebrew formulae vs. casks: what's the difference?",
    metaTitle: "Homebrew Formula vs. Cask: What's the Difference?",
    description:
      "Formulae are command-line tools and libraries, casks are Mac apps. What that means for installing, updating and where Homebrew puts your files.",
    command: "brew install --cask firefox",
    published: "2026-11-27",
    updated: "2026-11-27",
  },
  {
    slug: "brewfile-backup",
    title: "How to back up and restore your Homebrew setup with a Brewfile",
    metaTitle: "Back Up and Restore Homebrew Packages with a Brewfile",
    description:
      "Moving to a new Mac? Export every formula, cask and tap into a Brewfile with brew bundle dump and reinstall everything with a single command.",
    command: "brew bundle dump",
    published: "2026-11-27",
    updated: "2026-11-27",
  },
];

export const guidePath = (slug: string) => `/guides/${slug}`;
