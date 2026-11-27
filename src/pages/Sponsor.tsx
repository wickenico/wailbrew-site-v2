import { BadgeCheck, Bug, Coffee, CreditCard, Heart, Languages, Star, Wrench } from "lucide-react";
import type { ReactNode } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

const REPO_URL = "https://github.com/wickenico/WailBrew";

const linkClass = "text-primary underline underline-offset-2 decoration-primary/50 hover:decoration-primary";

const costs = [
  {
    icon: BadgeCheck,
    title: "Signing & notarization",
    text: "The Apple Developer Program costs $99 a year. It's what lets macOS open WailBrew without security warnings.",
  },
  {
    icon: Wrench,
    title: "Time for new features",
    text: "Brewfile import, native notifications and faster large package lists are next on the roadmap.",
  },
  {
    icon: Languages,
    title: "Keeping up with Homebrew",
    text: "Homebrew changes often. Fixes, translations and support requests all happen in spare time.",
  },
];

const options: { icon: typeof Heart; title: string; text: string; cta: string; href: string; primary?: boolean }[] = [
  {
    icon: Heart,
    title: "GitHub Sponsors",
    text: "Monthly or one-time. GitHub charges no fees on sponsorships from personal accounts.",
    cta: "Sponsor on GitHub",
    href: "https://github.com/sponsors/wickenico",
    primary: true,
  },
  {
    icon: Coffee,
    title: "Ko-fi",
    text: "A one-time tip, no account needed. The easiest way to say thanks.",
    cta: "Buy me a coffee",
    href: "https://ko-fi.com/wickenico",
  },
  {
    icon: CreditCard,
    title: "PayPal",
    text: "A one-time donation with PayPal, in any amount you like.",
    cta: "Donate with PayPal",
    href: "https://paypal.me/nicowickersheim",
  },
];

const FreeWay = ({ icon: Icon, children }: { icon: typeof Heart; children: ReactNode }) => (
  <li className="flex items-start gap-3">
    <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
    <span>{children}</span>
  </li>
);

const Sponsor = () => (
  <PageLayout breadcrumbs={[{ label: "Home", href: "/" }, { label: "Support WailBrew" }]}>
    <h1 className="text-3xl md:text-4xl font-bold mb-4">Support WailBrew</h1>
    <p className="text-lg text-muted-foreground mb-4">
      WailBrew is free and open source, with no ads, no tracking and no paid version. It has been downloaded more than
      700,000 times and is built and maintained by one developer in his spare time.
    </p>
    <p className="text-lg text-muted-foreground mb-12">
      If WailBrew saves you time, a sponsorship is the best way to keep it signed, up to date and growing.
    </p>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-5">Where your support goes</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {costs.map(({ icon: Icon, title, text }) => (
          <div key={title} className="p-4 rounded-lg bg-card border border-border">
            <Icon className="w-5 h-5 text-primary mb-2" aria-hidden="true" />
            <h3 className="font-medium mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-5">Ways to sponsor</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {options.map(({ icon: Icon, title, text, cta, href, primary }) => (
          <div
            key={title}
            className={`flex flex-col p-5 rounded-lg bg-card border ${primary ? "border-primary/50" : "border-border"}`}
          >
            <Icon className="w-6 h-6 text-primary mb-3" aria-hidden="true" />
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{text}</p>
            <Button
              className={primary ? "w-full bg-gradient-primary hover:opacity-90 text-white border-0" : "w-full"}
              variant={primary ? "default" : "outline"}
              asChild
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                {cta}
              </a>
            </Button>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm text-muted-foreground">
        GitHub sponsors are listed with their avatar in the{" "}
        <a href={`${REPO_URL}#sponsors`} target="_blank" rel="noopener noreferrer" className={linkClass}>
          WailBrew README
        </a>
        . Does your team rely on WailBrew? A company sponsorship makes a big difference.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-5">Free ways to help</h2>
      <ul className="space-y-3 text-foreground/85">
        <FreeWay icon={Star}>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Star WailBrew on GitHub
          </a>{" "}
          and recommend it to friends and colleagues who use Homebrew.
        </FreeWay>
        <FreeWay icon={Bug}>
          <a href={`${REPO_URL}/issues/new/choose`} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Report a bug or suggest a feature
          </a>
          . Good reports make WailBrew better for everyone.
        </FreeWay>
        <FreeWay icon={Languages}>
          <a
            href={`${REPO_URL}/blob/main/CONTRIBUTING.md`}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Translate WailBrew or contribute code
          </a>
          . WailBrew is available in 12 languages thanks to contributors.
        </FreeWay>
      </ul>
    </section>
  </PageLayout>
);

export default Sponsor;
