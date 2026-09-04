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
  { src: screenshotMain, alt: "WailBrew formulae view" },
  { src: screenshotLight, alt: "WailBrew light mode" },
  { src: screenshotCasks, alt: "WailBrew casks view" },
  { src: screenshotServices, alt: "WailBrew services view" },
  { src: screenshotDoctor, alt: "WailBrew doctor diagnostics view" },
];

export const Screenshots = () => {
  return (
    <section id="screenshots" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A closer look at WailBrew's formulae, casks, services, and doctor
            views, in both light and dark mode.
          </p>
        </div>

        <Carousel opts={{ loop: true }} className="mx-auto max-w-4xl">
          <CarouselContent>
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={index}>
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  loading="lazy"
                  decoding="async"
                  width={3200}
                  height={2000}
                  className="w-full h-auto rounded-xl border border-border shadow-2xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
