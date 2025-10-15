import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Homebrew } from "@/components/Homebrew";
import { Download } from "@/components/Download";
import { Screenshots } from "@/components/Screenshots";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Homebrew />
        <Download />
        <Screenshots />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
