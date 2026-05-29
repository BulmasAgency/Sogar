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
    image: "https://www.google.com/imgres?q=Catering%20Offshore%20%26%20Onshore&imgurl=https%3A%2F%2Fpsdoilandgas.com%2Fassets%2Fimages%2Fpages%2Fonshore%2Fportfolio-slide-big-1.jpg&imgrefurl=https%3A%2F%2Fpsdoilandgas.com%2FOnshore-Offshore-Catering-services&docid=W1_IUpWKnISbAM&tbnid=63WYlJ4jSSSl5M&vet=12ahUKEwiDu-Pu8d6UAxWRhf0HHXHRO5YQnPAOegQIHRAB..i&w=969&h=589&hcb=2&ved=2ahUKEwiDu-Pu8d6UAxWRhf0HHXHRO5YQnPAOegQIHRAB", // Pense à adapter l'image dans ton dossier public
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
