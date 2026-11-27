export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Is WailBrew free?",
    answer:
      "Yes. WailBrew is completely free and open source under the MIT license. There are no paid tiers or subscriptions.",
  },
  {
    question: "Do I still need Homebrew installed?",
    answer:
      "Yes. WailBrew is a graphical front-end for Homebrew, so brew must be installed first (see brew.sh). WailBrew detects the brew path for your Mac's architecture automatically.",
  },
  {
    question: "Does it work on Apple Silicon (M1, M2, M3, M4)?",
    answer:
      "Yes. WailBrew is a universal app that runs natively on both Apple Silicon and Intel Macs.",
  },
  {
    question: "Which macOS versions are supported?",
    answer: "WailBrew runs on macOS 12 (Monterey) and later.",
  },
  {
    question: "How is WailBrew different from Cakebrew?",
    answer:
      "WailBrew is an actively maintained, modern alternative to Cakebrew. It adds full cask and Homebrew services management, brew doctor and cleanup, a localized UI in 12 languages, and light and dark mode.",
  },
  {
    question: "Is it safe to manage packages with WailBrew?",
    answer:
      "WailBrew doesn't reinvent anything – it runs the official brew command line tool for every action. Session logging shows exactly which commands were executed, and the app is signed and notarized by Apple.",
  },
  {
    question: "How do I uninstall WailBrew?",
    answer:
      "Run brew uninstall --cask wailbrew in your terminal, or drag WailBrew from your Applications folder to the Trash if you installed it from the direct download.",
  },
];
