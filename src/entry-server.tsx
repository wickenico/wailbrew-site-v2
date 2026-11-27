import { renderToString } from "react-dom/server";
import App, { loadPage } from "./App";

export { prerenderRoutes } from "./App";
export { SITE_URL, OG_IMAGE, getPageMeta } from "./lib/seo";
export { faqs } from "./content/faq";
export { guides, guidePath } from "./content/guides";
export { releases } from "./content/releases";

export const render = async (path: string) => renderToString(<App page={await loadPage(path)} />);
