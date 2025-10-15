import { Sparkles, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Beautiful & Intuitive",
      description:
        "A clean, modern interface that makes package management a pleasure. No more memorizing complex commands or dealing with terminal syntax.",
    },
    {
      icon: Zap,
      title: "Powerful Features",
      description:
        "Install, update, and uninstall packages with ease. Search through thousands of formulae and casks with real-time filtering and detailed information.",
    },
    {
      icon: Shield,
      title: "Safe & Reliable",
      description:
        "Built on top of Homebrew's proven foundation. All operations are performed safely with comprehensive error handling and validation.",
    },
  ];

  return (
    <section id="features" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Designed To Be Awesome
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            WailBrew brings the power of Homebrew to your fingertips with an
            intuitive and beautiful interface that makes package management
            effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
