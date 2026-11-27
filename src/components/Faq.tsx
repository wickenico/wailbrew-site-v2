import { ChevronDown } from "lucide-react";
import { faqs } from "@/content/faq";

export const Faq = () => {
  return (
    <section id="faq" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Something else on your mind? Ask on{" "}
            <a
              href="https://www.reddit.com/r/WailBrew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              r/WailBrew
            </a>{" "}
            or{" "}
            <a
              href="https://github.com/wickenico/WailBrew/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              open an issue
            </a>
            .
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card divide-y divide-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium [&::-webkit-details-marker]:hidden">
                <h3 className="text-base md:text-lg">{faq.question}</h3>
                <ChevronDown className="w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-muted-foreground leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
