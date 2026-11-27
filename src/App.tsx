import type { ComponentType } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Guides from "./pages/Guides";
import NotFound from "./pages/NotFound";
import { guides, guidePath } from "./content/guides";

const eagerPages: Record<string, ComponentType> = {
  "/": Index,
  "/about": About,
  "/privacy": Privacy,
  "/guides": Guides,
};

const lazyPages: Record<string, () => Promise<ComponentType>> = {
  "/changelog": () => import("./pages/Changelog").then((module) => module.default),
  ...Object.fromEntries(
    guides.map(({ slug }) => [
      guidePath(slug),
      () => import("./pages/Guide").then(({ default: Guide }) => () => <Guide slug={slug} />),
    ]),
  ),
};

export const prerenderRoutes = [...Object.keys(eagerPages), ...Object.keys(lazyPages)];

export const normalizePath = (path: string) =>
  path.length > 1 ? path.replace(/\/+$/, "").replace(/\.html$/, "") : path;

export const loadPage = async (path: string): Promise<ComponentType> => {
  const route = normalizePath(path);
  return eagerPages[route] ?? (await lazyPages[route]?.()) ?? NotFound;
};

const App = ({ page: Page }: { page: ComponentType }) => <Page />;

export default App;
