import { Check, X, Minus } from "lucide-react";

type Support = "yes" | "no" | "partial";

const rows: { feature: string; wailbrew: Support; cakebrew: Support }[] = [
  { feature: "Manage formulae", wailbrew: "yes", cakebrew: "yes" },
  { feature: "Manage casks (Mac apps)", wailbrew: "yes", cakebrew: "partial" },
  { feature: "Homebrew services", wailbrew: "yes", cakebrew: "no" },
  { feature: "brew doctor & cleanup", wailbrew: "yes", cakebrew: "partial" },
  { feature: "Apple Silicon native", wailbrew: "yes", cakebrew: "yes" },
  { feature: "Light & dark mode", wailbrew: "yes", cakebrew: "partial" },
  { feature: "Localized UI (12 languages)", wailbrew: "yes", cakebrew: "no" },
  { feature: "Actively maintained", wailbrew: "yes", cakebrew: "no" },
  { feature: "Free & open source", wailbrew: "yes", cakebrew: "yes" },
];

const SupportIcon = ({ value }: { value: Support }) => {
  if (value === "yes") {
    return <Check className="w-5 h-5 text-green-400 mx-auto" aria-label="Yes" />;
  }
  if (value === "partial") {
    return <Minus className="w-5 h-5 text-yellow-400 mx-auto" aria-label="Partial" />;
  }
  return <X className="w-5 h-5 text-muted-foreground mx-auto" aria-label="No" />;
};

export const Comparison = () => {
  return (
    <section id="compare" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The modern Cakebrew alternative
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cakebrew made Homebrew approachable, but it's no longer maintained.
            WailBrew picks up where it left off, with casks, services and regular releases.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="text-left font-medium text-muted-foreground px-4 md:px-6 py-4">
                  Feature
                </th>
                <th scope="col" className="px-4 md:px-6 py-4 font-semibold text-primary">
                  WailBrew
                </th>
                <th scope="col" className="px-4 md:px-6 py-4 font-medium text-muted-foreground">
                  Cakebrew
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-border last:border-0">
                  <th scope="row" className="text-left font-normal px-4 md:px-6 py-3">
                    {row.feature}
                  </th>
                  <td className="px-4 md:px-6 py-3 bg-primary/5">
                    <SupportIcon value={row.wailbrew} />
                  </td>
                  <td className="px-4 md:px-6 py-3">
                    <SupportIcon value={row.cakebrew} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
