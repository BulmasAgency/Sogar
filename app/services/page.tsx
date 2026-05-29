import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Ship, Building2, Tent, ShieldCheck, Truck, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Nos Solutions de Catering & Logistique | SOGAR",
  description: "Découvrez l'excellence opérationnelle de SOGAR au Gabon : catering offshore et onshore, restauration collective, gestion complète de bases-vies et logistique de pointe.",
}

const services = [
  {
    id: "offshore",
    icon: Ship,
    title: "Catering Offshore & Onshore",
    subtitle: "Secteurs Pétrolier, Gazier et Maritime",
    description: "Une offre de restauration haut de gamme taillée pour les environnements extrêmes et isolés. Nous garantissons une continuité de service irréprochable et des menus équilibrés pour préserver le moral et la productivité de vos équipes sur les plateformes et sites de forage.",
    image: "data:image/jpeg;base64,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", // Pense à adapter l'image dans ton dossier public
    features: [
      "Menus adaptés aux exigences nutritionnelles des métiers de l'énergie",
      "Approvisionnements sécurisés par navires ou convois terrestres",
      "Maîtrise absolue de la chaîne du froid en milieu tropical",
      "Cuisiniers et boulangers formés aux standards internationaux",
      "Zéro compromis sur la sécurité et les protocoles d'embarquement",
    ],
  },
  {
    id: "collective",
    icon: Building2,
    title: "Restauration Collective",
    subtitle: "Entreprises, Sièges Sociaux et Administrations",
    description: "Des solutions de restauration sur site ou livrées adaptées au rythme de vos collaborateurs. Nous concevons des espaces de vie conviviaux et une cuisine saine, variée et locale pour le bien-être quotidien de vos équipes au Gabon.",
    image: "https://popmenucloud.com/cdn-cgi/image/width=1200,height=630,format=auto,fit=cover/wlnhojez/f7e82237-8ca6-4a60-acb4-f81927ea6183.jpg",
    features: [
      "Plans de menus diversifiés et renouvelés régulièrement",
      "Respect strict des normes d'hygiène et traçabilité des produits",
      "Capacité de production flexible (de 50 à plus de 1000 couverts)",
      "Gestion et animation des restaurants d'entreprise",
      "Optimisation des coûts de fonctionnement",
    ],
  },
  {
    id: "bases-vies",
    icon: Tent,
    title: "Gestion de Bases-vies & Camps",
    subtitle: "Solutions Multi-services 'Remote Sites'",
    description: "Au-delà de l'assiette, nous prenons en charge la gestion globale de vos infrastructures de vie. De l'hôtellerie au nettoyage industriel, SOGAR transforme vos camps de brousse ou bases côtières en environnements confortables et sécurisés.",
    image: "https://sotramo.com/servicelocation/base-de-vie-et-ses-equipements-normalises.html",
    features: [
      "Blanchisserie industrielle et entretien de la literie",
      "Nettoyage et désinfection des espaces communs et cabines",
      "Gestion des déchets et maintenance de premier niveau",
      "Intégration et respect rigoureux de vos plans HSE sur site",
      "Gestion des stocks et économat décentralisé",
    ],
  },
  {
    id: "logistique",
    icon: Truck,
    title: "Logistique Subsistance & Support",
    subtitle: "Supply Chain & Approvisionnements Critiques",
    description: "SOGAR déploie une chaîne logistique robuste pour acheminer vivres frais, secs et congelés là où les autres s'arrêtent. Grâce à nos infrastructures de stockage à Port-Gentil, nous sécurisons vos approvisionnements face aux aléas.",
    image: "https://www.mth-location.fr/vehicules/camions-frigorifiques",
    features: [
      "Flotte de véhicules frigorifiques normés et géo-localisés",
      "Entrepôts de stockage en froid positif et négatif",
      "Sourcing rigoureux auprès de fournisseurs agréés",
      "Capacité de déploiement d'urgence sur alerte",
      "Gestion documentaire et douanière pour le fret local",
    ],
  },
]

const additionalServices = [
  {
    icon: ShieldCheck,
    title: "Conformité HSE & Démarche HACCP",
    description: "Tous nos processus opérationnels intègrent les standards de sécurité les plus stricts de l'industrie minière et pétrolière.",
  },
  {
    icon: Users,
    title: "Mise à disposition de Personnel Spécialisé",
    description: "Boulangers, chefs de camp, stewards et agents de maintenance qualifiés et briefés aux exigences de vos sites.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        
        {/* Section Hero */}
        <section className="relative py-24 bg-slate-900 overflow-hidden">
          {/* Pattern en arrière-plan */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FACC15' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-yellow-400 text-xs uppercase tracking-[0.3em] font-bold mb-6">
              Expertise B2B & Industrielle
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Des solutions logistiques et de catering
              <br />
              <span className="text-yellow-400">sur mesure au Gabon</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              De l&apos;onshore à l&apos;offshore, nous gérons la subsistance et le support opérationnel de vos équipes avec la rigueur des plus hauts standards industriels.
            </p>
          </div>
        </section>

        {/* Liste des Services Principaux */}
        <section className="py-24 bg-white">
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
                  {/* Image & Icône flottante */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-[4/3] relative overflow-hidden rounded-xl shadow-xl border border-slate-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-w-1024px) 100vw, 50vw"
                      />
                    </div>
                    {/* Badge icône corporate jaune */}
                    <div className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 bg-yellow-400 p-4 lg:p-5 rounded-xl shadow-lg border-4 border-white">
                      <service.icon className="h-8 w-8 lg:h-10 lg:w-10 text-slate-950" />
                    </div>
                  </div>

                  {/* Contenu Textuel */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <p className="text-yellow-600 text-xs uppercase tracking-[0.2em] font-bold mb-2">
                      {service.subtitle}
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Liste des features */}
                    <ul className="mt-8 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                          <span className="text-slate-800 text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="mt-8 bg-slate-950 text-white hover:bg-slate-900 font-semibold" size="lg">
                      <Link href="/contact">
                        Demander une étude technique
                        <ArrowRight className="ml-2 h-4 w-4 text-yellow-400" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Prestations Complémentaires */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Engagements & Services Supports
              </h2>
              <p className="mt-4 text-slate-600 text-lg">
                Des prestations transversales intégrées pour garantir la conformité globale de vos opérations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {additionalServices.map((service) => (
                <div 
                  key={service.title}
                  className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm transition-shadow hover:shadow-md"
                >
                  <service.icon className="h-10 w-10 text-yellow-500 mb-4" />
                  <h3 className="text-lg font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section d'Appel à l'Action Final */}
        <section className="py-24 bg-yellow-400">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Un projet de déploiement ou une consultation ?
            </h2>
            <p className="mt-4 text-lg text-slate-900 max-w-2xl mx-auto leading-relaxed">
              Nos équipes d&apos;ingénierie commerciale étudient vos cahiers des charges et contraintes HSE pour vous proposer une offre de services rationalisée sous 48 heures.
            </p>
            <Button asChild size="lg" className="mt-8 bg-slate-950 text-white hover:bg-slate-900 font-semibold shadow-md">
              <Link href="/contact">
                Contacter notre pôle Opérations
                <ArrowRight className="ml-2 h-4 w-4 text-yellow-400" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
