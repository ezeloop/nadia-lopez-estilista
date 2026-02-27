import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { BookingSection } from "@/components/BookingSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
