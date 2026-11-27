import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

        <Carousel opts={{ loop: true }} className="mx-auto max-w-4xl">
          <CarouselContent>
            {screenshots.map((screenshot) => (
              <CarouselItem key={screenshot.alt}>
                <figure>
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    loading="lazy"
                    decoding="async"
                    width={3200}
                    height={2000}
                    className="w-full h-auto rounded-xl border border-border shadow-2xl"
                  />
                  <figcaption className="mt-5 text-center text-base text-muted-foreground">
                    {screenshot.caption}
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="top-[40%] left-3 lg:-left-12" />
          <CarouselNext className="top-[40%] right-3 lg:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};
