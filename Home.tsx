import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { OffersBanner } from "@/components/OffersBanner";
import { StorySection } from "@/components/StorySection";
import { ProductsSection } from "@/components/ProductsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { DirectionsSection } from "@/components/DirectionsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OffersBanner />
      <StorySection />
      <ProductsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <DirectionsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
