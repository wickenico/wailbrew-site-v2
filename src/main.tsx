import { createRoot, hydrateRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import "./index.css";
import {SpeedInsights} from "@vercel/speed-insights/react";

const root = document.getElementById("root")!;
const app = (
  <>
    <App />
    <Analytics />
      <SpeedInsights />
  </>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
