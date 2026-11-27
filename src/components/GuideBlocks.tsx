import { Check, Copy } from "lucide-react";
import { type ReactNode, useState } from "react";
import logo from "@/assets/logo.webp";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : `Copy command: ${text}`}
      className={`shrink-0 rounded p-1 transition-colors ${
        copied ? "text-green-400 bg-green-500/15" : "text-muted-foreground hover:text-foreground hover:bg-white/10"
      }`}
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
};

export const Cmd = ({ children, copyable = true }: { children: string; copyable?: boolean }) => (
  <pre>
    <code>
      {copyable
        ? children.split("\n").map((line) => (
            <span key={line} className="flex items-center justify-between gap-4">
              <span>{line}</span>
              <CopyButton text={line} />
            </span>
          ))
        : children}
    </code>
  </pre>
);

export const InWailBrew = ({ children }: { children: ReactNode }) => (
  <aside className="my-10 rounded-xl border border-primary/30 bg-primary/10 p-5 md:p-6">
    <div className="flex items-center gap-3 mb-3">
      <img src={logo} alt="" width={28} height={28} className="w-7 h-7" />
      <p className="mb-0 font-semibold text-foreground">Doing this in WailBrew</p>
    </div>
    <div className="[&>p:last-child]:mb-0">{children}</div>
  </aside>
);
