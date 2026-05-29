import Link from "next/link"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Container principal converti au Jaune SOGAR avec texte sombre pour le contraste */}
        <div className="relative overflow-hidden rounded-2xl bg-yellow-400 px-6 py-16 sm:px-16 sm:py-24 lg:flex lg:items-center lg:gap-x-16 lg:px-24 shadow-lg">
          {/* Background pattern discret */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          {/* Contenu textuel réorienté vers les exigences industrielles */}
          <div className="relative flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
              Optimisez la gestion
              <br />
              de vos bases-vies et camps
            </h2>
            <p className="mt-6 text-lg text-slate-900 max-w-xl leading-relaxed">
              Confiez votre logistique de restauration et vos services de support à un partenaire local rigoureux, respectueux des standards HSE les plus stricts au Gabon.
            </p>
          </div>

          {/* Boutons d'action avec les vraies coordonnées de l'entreprise */}
          <div className="relative mt-10 lg:mt-0 flex flex-col sm:flex-row lg:flex-col gap-4 min-w-[260px]">
            <Button 
              asChild 
              size="lg" 
              className="bg-slate-950 text-white hover:bg-slate-900 font-semibold shadow-md transition-colors w-full"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5 text-yellow-400" />
                Demander une étude
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-slate-950 text-slate-950 bg-transparent hover:bg-slate-950 hover:text-white font-bold transition-all w-full"
            >
              <a href="tel:+24174802912">
                <Phone className="mr-2 h-5 w-5" />
                +241 74 80 29 12
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
