import type { ComponentType } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const pages: Record<string, ComponentType> = {
  "/": Index,
  "/about": About,
  "/privacy": Privacy,
};

export const prerenderRoutes = Object.keys(pages);

export const normalizePath = (path: string) =>
  path.length > 1 ? path.replace(/\/+$/, "").replace(/\.html$/, "") : path;

const App = ({ path }: { path: string }) => {
  const Page = pages[normalizePath(path)] ?? NotFound;
  return <Page />;
};

export default App;
