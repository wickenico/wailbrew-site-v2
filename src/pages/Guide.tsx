import { DownloadCta } from "@/components/DownloadCta";
import { PageLayout } from "@/components/PageLayout";
import { guideArticles } from "@/content/guide-articles";
import { guidePath, guides } from "@/content/guides";

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

const Guide = ({ slug }: { slug: string }) => {
  const guide = guides.find((entry) => entry.slug === slug)!;
  const otherGuides = guides.filter((entry) => entry.slug !== slug);

  return (
    <PageLayout
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: guide.title }]}
    >
      <article>
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{guide.title}</h1>
          <p className="text-sm text-muted-foreground">
            Updated <time dateTime={guide.updated}>{formatDate(guide.updated)}</time> · by Nico Wickersheim
          </p>
        </header>
        <div className="article">{guideArticles[slug]}</div>
      </article>

      <DownloadCta />

      <section className="mt-14">
        <h2 className="text-xl font-semibold mb-4">More Homebrew guides</h2>
        <ul className="space-y-3">
          {otherGuides.map((entry) => (
            <li key={entry.slug}>
              <a href={guidePath(entry.slug)} className="text-primary hover:underline">
                {entry.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </PageLayout>
  );
};

export default Guide;
