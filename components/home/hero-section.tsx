import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-kitchen.jpg"
          alt="Chef SOGAR en cuisine"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-6">
            Société Gabonaise de Restauration
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            {`L'excellence`}
            <br />
            <span className="text-accent">culinaire</span>
            <br />
            gabonaise
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-white/80 leading-relaxed max-w-lg">
            Depuis plus de 20 ans, SOGAR sublime vos événements avec une cuisine raffinée alliant traditions africaines et techniques modernes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/services">
                Découvrir nos services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-accent">
              <Link href="/contact">
                Demander un devis
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
