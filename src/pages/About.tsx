import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Package, Shield, Zap } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import logo from "@/assets/logo.webp";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-8">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Hero */}
          <div className="flex items-center gap-4 mb-8">
            <img src={logo} alt="WailBrew Logo" width={64} height={64} className="w-16 h-16" />
            <div>
              <h1 className="text-4xl font-bold">About WailBrew</h1>
              <p className="text-muted-foreground mt-1">A beautiful GUI for Homebrew on macOS</p>
            </div>
          </div>

          {/* Project Description */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">The Project</h2>
            <p className="text-foreground/85 text-sm leading-7 mb-3">
              WailBrew is an open-source graphical user interface (GUI) for{" "}
              <a
                href="https://brew.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Homebrew
              </a>
              , the popular package manager for macOS. It was created to make package management
              accessible to users who prefer a visual interface over the command line — without
              sacrificing any of Homebrew's power or flexibility.
            </p>
            <p className="text-foreground/85 text-sm leading-7">
              Instead of memorizing commands like <code className="bg-card px-1.5 py-0.5 rounded text-xs">brew install</code>,{" "}
              <code className="bg-card px-1.5 py-0.5 rounded text-xs">brew upgrade</code>, or{" "}
              <code className="bg-card px-1.5 py-0.5 rounded text-xs">brew search</code>, WailBrew
              provides an intuitive, modern interface that lets you manage all your packages with a
              few clicks.
            </p>
          </section>

          {/* Key Values */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">What We Stand For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <Zap className="w-5 h-5 text-primary mb-2" />
                <h3 className="font-medium mb-1">Simplicity</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A clean interface that removes complexity without hiding functionality.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <Package className="w-5 h-5 text-primary mb-2" />
                <h3 className="font-medium mb-1">Open Source</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Fully open source under the MIT License. Transparent, auditable, and community-driven.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <Shield className="w-5 h-5 text-primary mb-2" />
                <h3 className="font-medium mb-1">Built on Homebrew</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Powered by Homebrew's proven foundation. All operations are safe and validated.
                </p>
              </div>
            </div>
          </section>

          {/* Technology */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">Technology</h2>
            <p className="text-foreground/85 text-sm leading-7 mb-4">
              WailBrew is built with modern, cross-platform technologies:
            </p>
            <ul className="space-y-2 text-sm text-foreground/85">
              <li className="flex items-start gap-2">
                <span className="text-primary font-medium w-24 shrink-0">Framework</span>
                <span>
                  <a
                    href="https://wails.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Wails
                  </a>{" "}
                  – Build desktop apps with Go and web technologies
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-medium w-24 shrink-0">Backend</span>
                <span>Go – fast, reliable, and low-overhead</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-medium w-24 shrink-0">Frontend</span>
                <span>React + TypeScript + Tailwind CSS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-medium w-24 shrink-0">License</span>
                <span>MIT – free to use, modify, and distribute</span>
              </li>
            </ul>
          </section>

          {/* Developer */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">The Developer</h2>
            <div className="p-5 rounded-lg bg-card border border-border flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <GithubIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-base">Nico Wickersheim</h3>
                <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                  <Heart className="w-3 h-3 text-red-500 fill-current" />
                  Made with love in Freiburg im Breisgau, Germany
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                  Software developer passionate about building tools that make developers' lives
                  easier. WailBrew started as a personal project to avoid the terminal for routine
                  package management and grew into a polished, open-source application.
                </p>
                <a
                  href="https://github.com/wickenico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <GithubIcon className="w-4 h-4" />
                  github.com/wickenico
                </a>
              </div>
            </div>
          </section>

          {/* Impressum */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">Impressum (Legal Notice)</h2>
            <p className="text-xs text-muted-foreground mb-4">
              Required by German law (§ 5 TMG / § 18 MStV)
            </p>
            <div className="p-4 rounded-lg bg-card border border-border text-sm space-y-1 text-foreground/85">
              <p className="font-medium">Nico Wickersheim</p>
              <p>Freiburg im Breisgau</p>
              <p>Baden-Württemberg, Germany</p>
              <p className="pt-2">
                <span className="text-muted-foreground">Contact: </span>
                <a
                  href="https://github.com/wickenico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  github.com/wickenico
                </a>
              </p>
              <p className="pt-1 text-xs text-muted-foreground">
                This website is a non-commercial, open-source project website.
                It does not constitute a commercial offering of services.
              </p>
            </div>
          </section>

          {/* Links */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Get Involved</h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/wickenico/WailBrew"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm hover:border-primary transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                View on GitHub
              </a>
              <a
                href="https://github.com/wickenico/WailBrew/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm hover:border-primary transition-colors"
              >
                Report an Issue
              </a>
              <a
                href="https://github.com/wickenico/WailBrew/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm hover:border-primary transition-colors"
              >
                Release Notes
              </a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
