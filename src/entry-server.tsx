import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppRoutes } from "./App";

export { prerenderRoutes } from "./App";
export { SITE_URL, OG_IMAGE, getPageMeta } from "./lib/seo";
export { faqs } from "./content/faq";

export const render = (url: string) =>
  renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  );
