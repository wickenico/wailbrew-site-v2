import { useState } from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.webp";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header-bg/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="WailBrew Logo" width={32} height={32} className="w-8 h-8" />
          <span className="text-xl font-bold">WailBrew</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("download")}
            className="text-sm text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
          >
            Download
          </button>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://github.com/wickenico/WailBrew"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-header-bg/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("features")}
              className="text-left text-sm text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="text-left text-sm text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
            >
              Download
            </button>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a
                href="https://github.com/wickenico/WailBrew"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
