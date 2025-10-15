import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Homebrew = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-border bg-card">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              But.. What's Homebrew?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Homebrew is the missing package manager for macOS (and Linux).
            </p>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              With Homebrew you can install thousands of command-line
              applications and libraries that would require manual compilation,
              which is not always very straightforward.
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              WailBrew brings this to a whole new level of simplicity. Install
              command-line tools from a beautiful app with just a few clicks.
              Could it be easier?
            </p>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Ready to get started?
              </p>
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-white border-0"
                onClick={() => {
                  const element = document.getElementById("download");
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                  }
                }}
              >
                Get WailBrew
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
