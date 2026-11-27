import type { ReactNode } from "react";
import logo from "@/assets/logo.webp";

export const Cmd = ({ children }: { children: string }) => (
  <pre>
    <code>{children}</code>
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
