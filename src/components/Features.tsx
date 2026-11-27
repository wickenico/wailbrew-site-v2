import {
  RefreshCw,
  BellDot,
  Package,
  Server,
  Stethoscope,
  FileDown,
  Command,
  Cpu,
  Languages,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: RefreshCw,
      title: "Update everything in one click",
      description:
        "See what's outdated at a glance and upgrade a single package, a selection, or everything at once.",
    },
    {
      icon: BellDot,
      title: "Update badge in your Dock",
      description:
        "Background checks tell you when updates are available, so you never have to run brew outdated again.",
    },
    {
      icon: Package,
      title: "Formulae & casks",
      description:
        "Search, install and remove CLI tools and Mac apps. Check dependencies and dependents before you uninstall anything.",
    },
    {
      icon: Server,
      title: "Homebrew services",
      description:
        "Start, stop and restart background services like PostgreSQL, Redis or nginx from a single view.",
    },
    {
      icon: Stethoscope,
      title: "Doctor & cleanup",
      description:
        "Run brew doctor, spot deprecated formulae, and preview a cleanup before freeing disk space from old versions.",
    },
    {
      icon: FileDown,
      title: "Taps & Brewfile export",
      description:
        "Tap and untap repositories, and export your setup as a Brewfile to recreate it on your next Mac.",
    },
    {
      icon: Command,
      title: "Command palette",
      description:
        "Jump anywhere with keyboard shortcuts. Built for people who like the speed of the terminal.",
    },
    {
      icon: Cpu,
      title: "Native & universal",
      description:
        "A real macOS app built with Go and Wails, not a browser wrapper. Light and dark mode follow your system.",
    },
    {
      icon: Languages,
      title: "Speaks your language",
      description:
        "Fully translated into 12 languages, including English, German, French, Spanish, Chinese and Korean.",
    },
  ];

  return (
    <section id="features" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to manage Homebrew
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            WailBrew runs the same brew commands you already know, behind a fast,
            native interface. Nothing is hidden or reinvented, and session logs show
            every command it executes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-lg leading-snug">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
