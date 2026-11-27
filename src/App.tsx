import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import { SITE_URL, getPageMeta } from "./lib/seo";

export const prerenderRoutes = ["/", "/about", "/privacy"];

const RouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description } = getPageMeta(pathname);
    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  }, [pathname]);

  return null;
};

export const AppRoutes = () => (
  <>
    <RouteMeta />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<Privacy />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
