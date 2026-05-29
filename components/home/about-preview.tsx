import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-slate-100">
              <Image
                src="/images/team.jpg"
                alt="Équipe logistique et catering SOGAR"
                fill
                className="object-cover"
              />
            </div>
            {/* Stats overlay corrigé avec la bonne ancienneté et la couleur jaune */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-yellow-400 text-slate-950 p-6 rounded-lg shadow-xl font-semibold">
              <p className="text-4xl font-extrabold">10+</p>
              <p className="text-xs uppercase tracking-wider mt-1">Ans d'expertise logistique</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-yellow-600 text-sm uppercase tracking-[0.2em] font-semibold mb-4">
              À propos de nous
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Une expertise globale en
              <br />
              <span className="text-yellow-500">catering & logistique</span>
            </h2>
            
            <div className="mt-6 text-muted-foreground leading-relaxed text-lg space-y-4">
              <p>
                SOGAR assure des prestations de restauration et de gestion logistique 
                destinées aux sociétés pétrolières, minières, industrielles ainsi 
                qu’aux organismes publics et privés.
              </p>
              <p>
                L’entreprise intervient de manière globale dans la restauration collective (catering), 
                l’exploitation et la gestion des camps et bases-vie, la cuisine pour 
                collectivités publiques et privées, ainsi que les services traiteur.
              </p>
              <p>
                Grâce à un savoir-faire rigoureux, SOGAR fournit également des prestations de services 
                domestiques à bord des navires et plates-formes pétrolières, la gestion 
                d’hôtels et motels, la mise à disposition de personnel qualifié et 
                spécialisé, ainsi que la location de matériels et équipements.
              </p>
            </div>
            
            <p className="mt-4 text-muted-foreground leading-relaxed">
              L’entreprise propose en outre des solutions logistiques intégrées et divers services d’assistance adaptés aux exigences de sa clientèle.
            </p>
            
            {/* Statistiques adaptées au secteur B2B / Pétrolier */}
            <div className="mt-8 grid grid-cols-3 gap-8 border-t border-slate-100 pt-8">
              <div>
                <p className="text-3xl font-bold text-yellow-500">HSE</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-medium">Standards stricts</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-500">100%</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-medium">Disponibilité 24/7</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-500">Gabonaise</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-medium">Main d'œuvre locale</p>
              </div>
            </div>

            <Link 
              href="/a-propos" 
              className="inline-flex items-center mt-8 text-yellow-600 font-semibold hover:text-yellow-700 hover:underline underline-offset-4 transition-colors"
            >
              En savoir plus sur notre histoire
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
