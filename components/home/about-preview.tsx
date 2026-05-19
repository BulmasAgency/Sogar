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
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <Image
                src="/images/team.jpg"
                alt="Équipe SOGAR"
                fill
                className="object-cover"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-accent text-accent-foreground p-6 rounded-lg shadow-xl">
              <p className="text-4xl font-bold">20+</p>
              <p className="text-sm uppercase tracking-wider mt-1">{`Années d'excellence`}</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-4">
              À propos de nous
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Une passion pour
              <br />
              <span className="text-accent">la gastronomie</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              {`SOGAR, Société Gabonaise de Restauration, incarne l'excellence culinaire depuis sa création. Notre équipe de chefs passionnés marie avec talent les saveurs traditionnelles africaines aux techniques de la cuisine internationale.`}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {`Chaque plat que nous créons raconte une histoire, celle d'un Gabon riche de ses traditions et ouvert sur le monde. Notre engagement : vous offrir une expérience gastronomique inoubliable.`}
            </p>
            
            <div className="mt-8 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-accent">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Événements par an</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Employés qualifiés</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">98%</p>
                <p className="text-sm text-muted-foreground mt-1">Clients satisfaits</p>
              </div>
            </div>

            <Link 
              href="/a-propos" 
              className="inline-flex items-center mt-8 text-accent font-medium hover:underline underline-offset-4"
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
