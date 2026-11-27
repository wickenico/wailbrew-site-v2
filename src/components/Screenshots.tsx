import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import screenshotMain from "@/assets/Screenshot.webp";
import screenshotLight from "@/assets/screenshot-light.webp";
import screenshotCasks from "@/assets/screenshot-casks.webp";
import screenshotServices from "@/assets/screenshot-services.webp";
import screenshotDoctor from "@/assets/screenshot-doctor.webp";

const screenshots = [
  {
    src: screenshotMain,
    alt: "WailBrew showing installed Homebrew formulae with versions, sizes and package details",
    caption: "All installed formulae at a glance, with sizes, dependencies and download stats.",
  },
  {
    src: screenshotCasks,
    alt: "WailBrew casks view for managing Mac apps installed with Homebrew",
    caption: "Manage Mac apps installed as casks, and pin them to block unwanted updates.",
  },
  {
    src: screenshotServices,
    alt: "WailBrew services view for starting and stopping Homebrew services",
    caption: "Start, stop and restart Homebrew services without launchctl or the terminal.",
  },
  {
    src: screenshotDoctor,
    alt: "WailBrew running brew doctor to diagnose Homebrew issues",
    caption: "Run brew doctor and fix problems before they break your setup.",
  },
  {
    src: screenshotLight,
    alt: "WailBrew Homebrew GUI in light mode",
    caption: "Light or dark: WailBrew follows your macOS appearance.",
  },
];

export const Screenshots = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
    const atStart = track.scrollLeft <= 0;
    if (direction === 1 && atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction === -1 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
    } else {
      track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
    }
  };

  return (
    <section id="screenshots" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See it in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Formulae, casks, services and diagnostics, all in one native macOS app.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div
            ref={trackRef}
            role="region"
            aria-label="WailBrew screenshots"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") scroll(1);
              if (event.key === "ArrowLeft") scroll(-1);
            }}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none"
          >
            {screenshots.map((screenshot) => (
              <figure key={screenshot.alt} className="w-full shrink-0 snap-center">
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  loading="lazy"
                  decoding="async"
                  width={3200}
                  height={2000}
                  className="w-full h-auto rounded-xl border border-border"
                />
                <figcaption className="mt-5 text-center text-base text-muted-foreground">
                  {screenshot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous screenshot"
            onClick={() => scroll(-1)}
            className="absolute top-[40%] -translate-y-1/2 left-3 lg:-left-12 h-8 w-8 rounded-full"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Next screenshot"
            onClick={() => scroll(1)}
            className="absolute top-[40%] -translate-y-1/2 right-3 lg:-right-12 h-8 w-8 rounded-full"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
