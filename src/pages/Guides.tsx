import { ArrowRight } from "lucide-react";
import { DownloadCta } from "@/components/DownloadCta";
import { PageLayout } from "@/components/PageLayout";
import { guidePath, guides } from "@/content/guides";

const Guides = () => (
  <PageLayout breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}>
    <h1 className="text-3xl md:text-4xl font-bold mb-4">Homebrew guides</h1>
    <p className="text-lg text-muted-foreground mb-10">
      Short, practical guides to everyday Homebrew tasks on macOS, with the terminal commands and how to do the same in
      WailBrew.
    </p>

    <ul className="grid gap-4">
      {guides.map((guide) => (
        <li key={guide.slug}>
          <a
            href={guidePath(guide.slug)}
            className="group block rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors"
          >
            <h2 className="text-lg font-semibold mb-2 flex items-start justify-between gap-4">
              {guide.title}
              <ArrowRight className="w-5 h-5 shrink-0 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors" />
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{guide.description}</p>
          </a>
        </li>
      ))}
    </ul>

    <DownloadCta />
  </PageLayout>
);

export default Guides;
