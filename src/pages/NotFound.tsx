import { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 pt-32 pb-24">
        <div className="text-center">
          <p className="mb-2 text-sm font-medium text-primary">404</p>
          <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
          <p className="mb-8 text-lg text-muted-foreground">This page doesn't exist, but WailBrew does.</p>
          <Button className="bg-gradient-primary hover:opacity-90 text-white border-0" asChild>
            <a href="/">Back to WailBrew</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
