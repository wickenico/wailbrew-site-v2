import { Download as DownloadIcon, Terminal, Github, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const Download = () => {
  return (
    <section id="download" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download WailBrew
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred installation method and start managing your
            Homebrew packages with style.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-border bg-card relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-primary text-white border-0">
                Recommended
              </Badge>
            </div>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <DownloadIcon className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Direct Download</CardTitle>
              <CardDescription className="text-base">
                Get the latest stable release with all features included.
                Perfect for most users who want a simple installation.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Version</span>
                  <span className="font-medium">Latest</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Size</span>
                  <span className="font-medium">~15 MB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">macOS</span>
                  <span className="font-medium">11.0+</span>
                </div>
              </div>
              <Button
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-white border-0"
                asChild
              >
                <a
                  href="https://github.com/wickenico/WailBrew/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download for macOS
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6 text-foreground" />
              </div>
              <CardTitle className="text-xl">Install via Homebrew</CardTitle>
              <CardDescription className="text-base">
                Use Homebrew to install WailBrew. Perfect for developers who
                prefer command-line package management.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-code-bg border border-code-border rounded-lg p-4">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="text-xs md:text-sm overflow-x-auto">
                  <code className="text-accent font-mono">
                    brew tap wickenico/wailbrew{"\n"}
                    brew install --cask wailbrew
                  </code>
                </pre>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-green-500">✓</span>
                  <span>Automatic updates</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-green-500">✓</span>
                  <span>Easy uninstallation</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-green-500">✓</span>
                  <span>Dependency management</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <Github className="w-6 h-6 text-foreground" />
              </div>
              <CardTitle className="text-xl">Build from Source</CardTitle>
              <CardDescription className="text-base">
                Clone the repository and build WailBrew yourself. Perfect for
                developers who want to contribute or customize.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Badge variant="outline" className="text-xs">
                  Open Source
                </Badge>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-muted-foreground">MIT License</span>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <a
                  href="https://github.com/wickenico/WailBrew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Alert className="max-w-3xl mx-auto border-primary/30 bg-primary/5">
          <Info className="h-4 w-4 text-primary" />
          <AlertDescription className="ml-2">
            <strong className="font-semibold">Before You Install</strong>
            <p className="mt-2">
              WailBrew requires Homebrew to be installed on your system. If you
              haven't installed Homebrew yet, visit{" "}
              <a
                href="https://brew.sh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                brew.sh
              </a>{" "}
              to get started. The installation is quick and straightforward.
            </p>
            <Button
              variant="link"
              className="p-0 h-auto mt-2 text-primary"
              asChild
            >
              <a
                href="https://brew.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install Homebrew First →
              </a>
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};
