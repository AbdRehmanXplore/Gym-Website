import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Programs from "@/components/Programs";
import Schedule from "@/components/Schedule";
import Pricing from "@/components/Pricing";
import Trainers from "@/components/Trainers";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Programs />
      <Schedule />
      <Pricing />
      <Trainers />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
