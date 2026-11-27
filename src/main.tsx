import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App, { loadPage } from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

loadPage(window.location.pathname).then((page) => {
  const app = (
    <>
      <App page={page} />
      <Analytics />
      <SpeedInsights />
    </>
  );

  if (root.hasChildNodes()) {
    hydrateRoot(root, app);
  } else {
    createRoot(root).render(app);
  }
});
