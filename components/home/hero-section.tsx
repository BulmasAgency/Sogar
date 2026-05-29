import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image avec un overlay sombre pour la lisibilité */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-kitchen.jpg"
          alt="Gestion de base-vie et catering par SOGAR"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Tag de l'entreprise */}
          <p className="text-yellow-400 text-sm uppercase tracking-[0.3em] font-semibold mb-6">
            Société Gabonaise de Restauration
          </p>
          
          {/* Titre principal axé B2B / Catering Industriel */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Le partenaire catering & logistique
            <br />
            des leaders de <span className="text-yellow-400">l'énergie au Gabon</span>
          </h1>

          {/* Slogan officiel intégré avec la correction orthographique */}
          <p className="mt-4 text-sm sm:text-base italic text-yellow-400/90 font-medium tracking-wide">
            « L'expérience fait la différence, c'est pourquoi nos services sont demandés et redemandés ! »
          </p>
          
          {/* Descriptif corporate axé sur l'expertise réelle de SOGAR */}
          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
            Depuis plus de 10 ans, SOGAR déploie son expertise dans la restauration collective, 
            la gestion de bases-vies et le catering offshore pour les environnements industriels 
            les plus exigeants du Gabon.
          </p>

          {/* Boutons d'action */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-yellow-400 text-slate-950 font-semibold hover:bg-yellow-500 transition-colors"
            >
              <Link href="/services">
                Découvrir nos solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-yellow-400 transition-colors"
            >
              <Link href="/contact">
                Demander un devis
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
