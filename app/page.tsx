import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GoldDivider from "@/components/ui/GoldDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-white">
      <Navbar />
      <Hero />
      <About />
      <GoldDivider />
      <Services />
      <GoldDivider />
      <Testimonials />
      <GoldDivider />
      <Contact />
      <Footer />
    </main>
  );
}
