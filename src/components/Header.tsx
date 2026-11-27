import { type MouseEvent, useState } from "react";
import logo from "@/assets/logo.webp";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";

const navItems: { label: string; href: string; id?: string }[] = [
  { id: "features", label: "Features", href: "/#features" },
  { id: "compare", label: "vs. Cakebrew", href: "/#compare" },
  { label: "Guides", href: "/guides" },
  { id: "faq", label: "FAQ", href: "/#faq" },
  { id: "download", label: "Download", href: "/#download" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== "/") return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id?: string) => {
    if (!id || !document.getElementById(id)) return;
    event.preventDefault();
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header-bg/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2" onClick={handleLogoClick}>
          <img src={logo} alt="WailBrew Logo" width={32} height={32} className="w-8 h-8" />
          <span className="text-xl font-bold">WailBrew</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.id)}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/sponsors/wickenico"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            Sponsor
          </a>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://github.com/wickenico/WailBrew"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-header-bg/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.id)}
                className="text-left text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://github.com/sponsors/wickenico"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left text-sm text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sponsor
            </a>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a
                href="https://github.com/wickenico/WailBrew"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
