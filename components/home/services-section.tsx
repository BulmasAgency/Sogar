import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Utensils, Users, Wine, Building2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Utensils,
    title: "Restauration Événementielle",
    description: "Mariages, anniversaires, cérémonies... Nous créons des moments gastronomiques uniques pour vos occasions spéciales.",
    image: "/images/catering-event.jpg",
    href: "/services#evenementiel"
  },
  {
    icon: Building2,
    title: "Restauration Collective",
    description: "Solutions de restauration pour entreprises, institutions et collectivités avec des menus équilibrés et savoureux.",
    image: "/images/corporate.jpg",
    href: "/services#collective"
  },
  {
    icon: Wine,
    title: "Cocktails & Réceptions",
    description: "Des cocktails raffinés et des réceptions élégantes pour impressionner vos invités et partenaires.",
    image: "/images/dish-2.jpg",
    href: "/services#cocktails"
  },
  {
    icon: Users,
    title: "Service Traiteur",
    description: "Un service traiteur complet avec livraison et mise en place pour tous types d'événements.",
    image: "/images/dish-1.jpg",
    href: "/services#traiteur"
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-4">
            Nos Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Une offre complète pour
            <br />
            <span className="text-accent">tous vos besoins</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            {`De la restauration collective aux événements les plus prestigieux, SOGAR vous accompagne avec expertise et passion.`}
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-sm text-accent font-medium hover:underline underline-offset-4"
                >
                  En savoir plus
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link 
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            Voir tous nos services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
