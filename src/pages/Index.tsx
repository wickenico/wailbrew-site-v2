import { Comparison } from "@/components/Comparison";
import { Download } from "@/components/Download";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Homebrew } from "@/components/Homebrew";
import { Screenshots } from "@/components/Screenshots";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Comparison />
        <Homebrew />
        <Download />
        <Faq />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
