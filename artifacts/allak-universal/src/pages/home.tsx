import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Differentiators } from "@/components/Differentiators";
import { About } from "@/components/About";
import { GovernmentTenders } from "@/components/GovernmentTenders";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Differentiators />
        <About />
        <GovernmentTenders />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
