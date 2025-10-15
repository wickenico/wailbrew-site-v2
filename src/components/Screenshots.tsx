export const Screenshots = () => {
  const screenshots = [
    {
      src: "https://www.wailbrew.app/_next/image?url=%2Fscreenshots%2FCasks.png&w=1920&q=75",
      alt: "WailBrew Casks View - Browse and manage Homebrew casks",
    },
    {
      src: "https://www.wailbrew.app/_next/image?url=%2Fscreenshots%2Fa.png&w=1920&q=75",
      alt: "WailBrew Main Interface - Package management interface",
    },
    {
      src: "https://www.wailbrew.app/_next/image?url=%2Fscreenshots%2Finfo.png&w=1920&q=75",
      alt: "WailBrew Package Info - Detailed package information view",
    },
  ];

  return (
    <section id="screenshots" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See WailBrew in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the beautiful interface and powerful features that make
            package management effortless.
          </p>
        </div>

        <div className="space-y-8">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-border bg-card shadow-2xl hover:shadow-primary/20 transition-shadow duration-300"
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
