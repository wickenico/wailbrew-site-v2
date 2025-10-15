import { useState } from "react";
import { Download, Github, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.png";

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const installCommand = "brew tap wickenico/wailbrew\nbrew install --cask wailbrew";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToDownload = () => {
    const element = document.getElementById("download");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 pb-20 bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="flex justify-center mb-6 animate-fade-in">
          <img src={logo} alt="WailBrew" className="w-24 h-24 md:w-32 md:h-32" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-primary bg-clip-text text-transparent pb-2">
          WailBrew
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          A minimalistic and beautiful GUI for Homebrew package management on macOS. 
          Experience the power of command-line tools through an intuitive, modern interface.
        </p>

        <div className="bg-card border border-code-border rounded-lg p-6 max-w-2xl mx-auto mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground">Quick Install</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="h-8 gap-2"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex gap-1.5 pt-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <pre className="flex-1 text-left overflow-x-auto">
              <code className="text-sm text-accent font-mono">
                {installCommand}
              </code>
            </pre>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 animate-fade-in">
          <a
            href="https://github.com/wickenico"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
          >
            <Badge variant="secondary" className="gap-2">
              <Github className="w-3 h-3" />
              Follow @wickenico
              <span className="text-muted-foreground">39</span>
            </Badge>
          </a>
          <a
            href="https://github.com/wickenico/WailBrew/fork"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
          >
            <Badge variant="secondary" className="gap-2">
              Fork
              <span className="text-muted-foreground">38</span>
            </Badge>
          </a>
          <a
            href="https://github.com/wickenico/WailBrew"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
          >
            <Badge variant="secondary" className="gap-2">
              ⭐ Star
              <span className="text-muted-foreground">738</span>
            </Badge>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <Button
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-white border-0 gap-2 min-w-[200px]"
            onClick={scrollToDownload}
          >
            <Download className="w-5 h-5" />
            Download Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 min-w-[200px]"
            asChild
          >
            <a
              href="https://github.com/wickenico/WailBrew"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </Button>
        </div>

        <div className="mt-20 animate-fade-in">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-foreground/30 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
