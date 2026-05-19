import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Utensils, Users, Wine, Building2, Truck, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Nos Services | SOGAR",
  description: "Découvrez les services de restauration SOGAR : événementiel, restauration collective, cocktails, traiteur. Excellence culinaire pour tous vos besoins.",
}

const services = [
  {
    id: "evenementiel",
    icon: Utensils,
    title: "Restauration Événementielle",
    subtitle: "Mariages, anniversaires, cérémonies",
    description: "Transformez vos moments spéciaux en souvenirs inoubliables grâce à notre expertise culinaire. De la conception du menu à la mise en scène, nous créons des expériences gastronomiques sur mesure.",
    image: "/images/catering-event.jpg",
    features: [
      "Menus personnalisés selon vos goûts",
      "Service à table ou buffet",
      "Décoration et mise en place",
      "Personnel qualifié et élégant",
      "Gestion complète de l'événement",
    ],
  },
  {
    id: "collective",
    icon: Building2,
    title: "Restauration Collective",
    subtitle: "Entreprises, institutions, collectivités",
    description: "Des solutions de restauration adaptées aux besoins des organisations. Menus équilibrés, service régulier et qualité constante pour le bien-être de vos équipes.",
    image: "/images/corporate.jpg",
    features: [
      "Menus variés et équilibrés",
      "Respect des normes d'hygiène strictes",
      "Flexibilité des volumes",
      "Livraison quotidienne",
      "Tarifs compétitifs",
    ],
  },
  {
    id: "cocktails",
    icon: Wine,
    title: "Cocktails & Réceptions",
    subtitle: "Soirées prestige et networking",
    description: "Impressionnez vos invités avec des cocktails raffinés et des amuse-bouches créatifs. L'alliance parfaite entre élégance et saveurs pour vos réceptions.",
    image: "/images/dish-2.jpg",
    features: [
      "Cocktails créatifs et classiques",
      "Canapés et amuse-bouches",
      "Stations de dégustation",
      "Service de barman professionnel",
      "Ambiance sonore sur demande",
    ],
  },
  {
    id: "traiteur",
    icon: Truck,
    title: "Service Traiteur",
    subtitle: "Livraison et mise en place",
    description: "Un service traiteur complet pour vos événements privés ou professionnels. De la préparation à la livraison, nous gérons tout pour vous.",
    image: "/images/dish-1.jpg",
    features: [
      "Large choix de plats",
      "Livraison à domicile ou sur site",
      "Options végétariennes et régimes spéciaux",
      "Matériel de service inclus",
      "Service de récupération",
    ],
  },
]

const additionalServices = [
  {
    icon: Users,
    title: "Location de personnel",
    description: "Serveurs, cuisiniers, maîtres d'hôtel qualifiés pour renforcer vos équipes.",
  },
  {
    icon: Clock,
    title: "Service 24h/24",
    description: "Disponibles à toute heure pour vos événements nocturnes ou de dernière minute.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 bg-secondary overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A962' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-6">
              Nos Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Une expertise culinaire
              <br />
              <span className="text-accent">à votre service</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              {`Découvrez notre gamme complète de services de restauration, conçus pour répondre à tous vos besoins avec excellence et passion.`}
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-32">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 bg-accent p-4 lg:p-6 rounded-lg shadow-xl">
                      <service.icon className="h-10 w-10 lg:h-12 lg:w-12 text-accent-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-2">
                      {service.subtitle}
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="mt-8 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-accent shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                      <Link href="/contact">
                        Demander un devis
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Services complémentaires
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                {`Des prestations additionnelles pour une expérience complète.`}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {additionalServices.map((service) => (
                <div 
                  key={service.title}
                  className="bg-card p-8 rounded-lg border border-border shadow-sm"
                >
                  <service.icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-card-foreground">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-accent">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-accent-foreground">
              Prêt à nous confier votre événement ?
            </h2>
            <p className="mt-4 text-lg text-accent-foreground/80 max-w-xl mx-auto">
              {`Contactez-nous pour un devis personnalisé et gratuit. Notre équipe vous répondra dans les 24 heures.`}
            </p>
            <Button asChild size="lg" className="mt-8 bg-background text-foreground hover:bg-background/90">
              <Link href="/contact">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
