import { useState, useEffect } from "react";
import { Download, Copy, Check, Star } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { scrollToSection } from "@/lib/scroll";
import logo from "@/assets/logo.webp";
import demoMp4 from "@/assets/demo.mp4";
import demoWebm from "@/assets/demo.webm";
import demoPoster from "@/assets/demo-poster.jpg";

const FALLBACK_STARS = "2.8k+";

const featuredIn = [
  { name: "How-To Geek", href: "https://www.howtogeek.com/best-free-mac-utilities-that-actually-make-a-difference/" },
  { name: "Mac Power Users", href: "https://talk.macpowerusers.com/t/wailbrew-new-homebrew-gui-manager" },
  { name: "iFun", href: "https://www.ifun.de/wailbrew-einfache-grafische-oberflaeche-fuer-homebrew-266778/" },
  { name: "Sir Apfelot", href: "https://www.sir-apfelot.de/5-app-empfehlungen-im-november-2025-67869/" },
  { name: "AlternativeTo", href: "https://alternativeto.net/software/wailbrew/about/" },
];

const formatStars = (stars: number) =>
  stars >= 1000 ? `${(stars / 1000).toFixed(1).replace(/\.0$/, "")}k` : String(stars);

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [stars, setStars] = useState<string | null>(null);
  const [version, setVersion] = useState<string | null>(null);
  const installCommand = "brew install --cask wailbrew";

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const [repoResponse, releaseResponse] = await Promise.all([
          fetch("https://api.github.com/repos/wickenico/WailBrew"),
          fetch("https://api.github.com/repos/wickenico/WailBrew/releases/latest"),
        ]);
        if (repoResponse.ok) {
          const repoData = await repoResponse.json();
          if (repoData.stargazers_count) setStars(formatStars(repoData.stargazers_count));
        }
        if (releaseResponse.ok) {
          const releaseData = await releaseResponse.json();
          if (releaseData.tag_name) setVersion(releaseData.tag_name);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      }
    };

    fetchGitHubStats();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative flex items-center justify-center px-4 pt-28 md:pt-32 pb-20 bg-gradient-hero overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(151, 103, 228, 0.3), transparent 100%)'
        }}
      />

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <a
          href="https://github.com/wickenico/WailBrew/releases/latest"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-8 hover:opacity-80 transition-opacity animate-fade-in"
        >
          <Badge variant="secondary" className="gap-2 bg-primary/15 border-primary/30 px-3 py-1 text-xs md:text-sm">
            Free &amp; open source
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{version ?? "Latest release"}</span>
          </Badge>
        </a>

        <div className="flex justify-center mb-6 animate-fade-in">
          <img src={logo} alt="" width={96} height={96} className="w-16 h-16 md:w-20 md:h-20" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
          <span className="sr-only">WailBrew – </span>
          The <span className="bg-gradient-primary bg-clip-text text-transparent">Homebrew GUI</span>
          <br className="hidden sm:block" /> for your Mac
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          WailBrew lets you install, update and clean up formulae, casks and services
          without memorizing a single <code className="font-mono text-accent">brew</code> command.
          Native on Apple Silicon and Intel.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto mb-8 animate-fade-in">
          <Button
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-white border-0 gap-2 w-full sm:w-auto sm:min-w-[220px]"
            onClick={() => scrollToSection("download")}
          >
            <Download className="w-5 h-5" />
            Download for macOS
          </Button>
          <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto sm:min-w-[220px]" asChild>
            <a
              href="https://github.com/wickenico/WailBrew"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-5 h-5" />
              Star on GitHub
              <span className="flex items-center gap-1 text-muted-foreground">
                <Star className="w-4 h-4 fill-current" />
                {stars ?? FALLBACK_STARS}
              </span>
            </a>
          </Button>
        </div>

        <div className="inline-block max-w-full mx-auto mb-4 animate-fade-in">
          <div className="flex items-center gap-2 sm:gap-3 bg-terminal-bg border border-border/50 rounded-xl pl-3 sm:pl-4 md:pl-5 pr-2 py-2 shadow-2xl">
            <span className="text-xs sm:text-sm md:text-base text-muted-foreground font-mono select-none">$</span>
            <code className="text-xs sm:text-sm md:text-base text-accent font-mono whitespace-nowrap overflow-x-auto">
              {installCommand}
            </code>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              aria-label="Copy install command"
              className={`h-8 gap-2 hover:bg-white/10 transition-all duration-200 ${
                copied ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline text-xs font-medium">{copied ? "Copied!" : "Copy"}</span>
            </Button>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-14 animate-fade-in">
          macOS 12+ · Apple Silicon &amp; Intel · Signed &amp; notarized · 12 languages
        </p>

        <div className="mb-14 animate-fade-in">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={demoPoster}
            width={720}
            height={450}
            aria-label="WailBrew demo: browsing, installing and upgrading Homebrew packages"
            className="max-w-3xl mx-auto w-full h-auto rounded-xl shadow-2xl border border-border"
          >
            <source src={demoWebm} type="video/webm" />
            <source src={demoMp4} type="video/mp4" />
          </video>
        </div>

        <div className="animate-fade-in">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Featured in
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {featuredIn.map((outlet) => (
              <li key={outlet.name}>
                <a
                  href={outlet.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg font-semibold text-foreground/60 hover:text-foreground transition-colors"
                >
                  {outlet.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
