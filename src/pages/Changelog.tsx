import { DownloadCta } from "@/components/DownloadCta";
import { PageLayout } from "@/components/PageLayout";
import { releases } from "@/content/releases";

const RELEASES_URL = "https://github.com/wickenico/WailBrew/releases";

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

const Changelog = () => (
  <PageLayout breadcrumbs={[{ label: "Home", href: "/" }, { label: "Changelog" }]}>
    <h1 className="text-3xl md:text-4xl font-bold mb-4">WailBrew changelog</h1>
    <p className="text-lg text-muted-foreground mb-12">
      New features, improvements and fixes in every release of WailBrew. Already installed? Run{" "}
      <code className="font-mono text-accent text-base">brew upgrade --cask wailbrew</code> to get the latest version.
    </p>

    {releases.length === 0 ? (
      <p className="text-muted-foreground">
        The release notes are available on{" "}
        <a
          href={RELEASES_URL}
          className="text-primary underline underline-offset-2 decoration-primary/50 hover:decoration-primary"
        >
          GitHub
        </a>
        .
      </p>
    ) : (
      <ol className="space-y-12">
        {releases.map((release, index) => (
          <li key={release.version} id={`v${release.version}`} className="scroll-mt-24">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4 pb-3 border-b border-border">
              <h2 className="text-2xl font-bold">
                <a href={`#v${release.version}`} className="hover:text-primary transition-colors">
                  v{release.version}
                </a>
              </h2>
              {index === 0 && (
                <span className="rounded-full bg-primary/15 border border-primary/30 px-2.5 py-0.5 text-xs font-medium">
                  Latest
                </span>
              )}
              <time dateTime={release.date} className="text-sm text-muted-foreground">
                {formatDate(release.date)}
              </time>
              <a
                href={release.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Downloads on GitHub
              </a>
            </div>
            <div
              className="article article-compact"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: release notes are GitHub-sanitized HTML fetched at build time
              dangerouslySetInnerHTML={{ __html: release.html }}
            />
          </li>
        ))}
      </ol>
    )}

    {releases.length > 0 && (
      <p className="mt-12 text-sm text-muted-foreground">
        Looking for older versions? See all releases on{" "}
        <a
          href={RELEASES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 decoration-primary/50 hover:decoration-primary"
        >
          GitHub
        </a>
        .
      </p>
    )}

    <DownloadCta title="Try the latest version" />
  </PageLayout>
);

export default Changelog;
