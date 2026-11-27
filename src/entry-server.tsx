import { renderToString } from "react-dom/server";
import App, { loadPage } from "./App";

export { prerenderRoutes } from "./App";
export { faqs } from "./content/faq";
export { guidePath, guides } from "./content/guides";
export { releases } from "./content/releases";
export { getPageMeta, OG_IMAGE, SITE_URL } from "./lib/seo";

export const render = async (path: string) => renderToString(<App page={await loadPage(path)} />);
