import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Utensils, Ship, Building2, HardHat } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Ship,
    title: "Catering Offshore & Onshore",
    description: "Opérations de restauration adaptées aux contraintes des plateformes pétrolières, navires et bases-vies en milieux isolés.",
    image: "/images/catering-offshore.jpg",
    href: "/services#offshore"
  },
  {
    icon: Building2,
    title: "Restauration Collective",
    description: "Gestion des cuisines et préparation de repas équilibrés pour les collectivités publiques, privées et sites industriels.",
    image: "/images/corporate.jpg",
    href: "/services#collective"
  },
  {
    icon: Utensils,
    title: "Gestion de Camps & Bases-vies",
    description: "Prise en charge globale : services hôteliers, motels, intendance domestique et maintenance pour garantir le confort des équipes.",
    image: "/images/camp-management.jpg",
    href: "/services#camps"
  },
  {
    icon: HardHat,
    title: "Logistique & Personnel Spécialisé",
    description: "Mise à disposition de personnel qualifié, solutions logistiques intégrées et location de matériels et équipements.",
    image: "/images/logistics.jpg",
    href: "/services#logistique"
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-yellow-600 text-sm uppercase tracking-[0.2em] font-semibold mb-4">
            Nos Domaines d'Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Des solutions logistiques pour
            <br />
            <span className="text-yellow-500">les environnements exigeants</span>
          </h2>
          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            De la restauration collective en milieu industriel à la gestion complète de bases-vies, SOGAR déploie une rigueur opérationnelle totale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title}
              className="group overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </div>
              
              <div className="px-6 pb-6 pt-2">
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-sm text-yellow-600 font-semibold hover:text-yellow-700 hover:underline underline-offset-4"
                >
                  En savoir plus
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link 
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-slate-950 font-bold rounded-lg hover:bg-yellow-500 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Découvrir l'ensemble de nos prestations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
