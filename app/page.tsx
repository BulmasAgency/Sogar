import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AboutPreview } from "@/components/home/about-preview"
import { ServicesSection } from "@/components/home/services-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutPreview />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
