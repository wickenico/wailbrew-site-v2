import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DownloadCta = ({ title = "Prefer clicking over typing?" }: { title?: string }) => (
  <section className="mt-14 rounded-2xl border border-border bg-card p-6 md:p-8 text-center">
    <h2 className="text-2xl font-bold mb-3">{title}</h2>
    <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
      WailBrew is a free, open-source Homebrew GUI for macOS. It runs the same brew commands for
      you, behind a fast native interface.
    </p>
    <Button
      size="lg"
      className="bg-gradient-primary hover:opacity-90 transition-opacity text-white border-0 gap-2"
      asChild
    >
      <a href="/#download">
        <Download className="w-5 h-5" />
        Download WailBrew
      </a>
    </Button>
    <p className="mt-4 text-sm text-muted-foreground">
      or <code className="font-mono text-accent">brew install --cask wailbrew</code>
    </p>
  </section>
);
