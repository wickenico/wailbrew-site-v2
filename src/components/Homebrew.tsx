import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { guidePath } from "@/content/guides";
import { scrollToSection } from "@/lib/scroll";

export const Homebrew = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-border bg-card">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">New to Homebrew?</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Homebrew is the most popular package manager for macOS. It installs thousands of developer tools,
              libraries and Mac apps that would otherwise need manual downloads or compiling.
            </p>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              The catch: Homebrew lives in the terminal. WailBrew gives it a friendly face, so you can browse, install
              and update everything with a few clicks. Install Homebrew once from{" "}
              <a
                href="https://brew.sh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                brew.sh
              </a>
              , then let WailBrew take it from there.
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Want to understand what's going on under the hood? Our{" "}
              <a href="/guides" className="text-primary hover:underline font-medium">
                Homebrew guides
              </a>{" "}
              explain{" "}
              <a href={guidePath("homebrew-formula-vs-cask")} className="text-primary hover:underline">
                formulae vs. casks
              </a>
              ,{" "}
              <a href={guidePath("update-homebrew-packages")} className="text-primary hover:underline">
                updating packages
              </a>{" "}
              and{" "}
              <a href={guidePath("homebrew-cleanup")} className="text-primary hover:underline">
                freeing up disk space
              </a>
              .
            </p>
            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-white border-0"
                onClick={() => scrollToSection("download")}
              >
                Get WailBrew – it's free
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
