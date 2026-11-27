import { renderToString } from "react-dom/server";
import App from "./App";

export { prerenderRoutes } from "./App";
export { SITE_URL, OG_IMAGE, getPageMeta } from "./lib/seo";
export { faqs } from "./content/faq";

export const render = (path: string) => renderToString(<App path={path} />);
