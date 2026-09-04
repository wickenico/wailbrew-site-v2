import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Screenshots } from "@/components/Screenshots";
import { Homebrew } from "@/components/Homebrew";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Homebrew />
        <Download />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
