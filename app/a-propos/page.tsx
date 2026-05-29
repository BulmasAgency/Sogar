import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Activity, Users, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "Notre Histoire & Engagements | SOGAR",
  description: "Découvrez le parcours de SOGAR, leader de la restauration collective et du catering industriel au Gabon. Plus de 20 ans d'excellence et de rigueur logistique.",
}

const values = [
  {
    icon: ShieldCheck,
    title: "Sécurité & HSE",
    description: "Le strict respect des normes HACCP et de vos exigences HSE est le socle de chacune de nos interventions sur site.",
  },
  {
    icon: Activity,
    title: "Continuité de Service",
    description: "Une réactivité à toute épreuve pour garantir la subsistance de vos équipes, même dans les conditions d'accès les plus complexes.",
  },
  {
    icon: Users,
    title: "Capital Humain",
    description: "Des équipes locales qualifiées, formées en continu aux exigences des secteurs onshore, offshore et tertiaire.",
  },
  {
    icon: Truck,
    title: "Ancrage Local",
    description: "Valorisation des circuits courts gabonais et gestion éco-responsable des flux d'approvisionnement.",
  },
]

const milestones = [
  { year: "2002", title: "Fondation", description: "Création de SOGAR et déploiement des premiers services de restauration collective." },
  { year: "2009", title: "Ancrage Industriel", description: "Implantation stratégique à Port-Gentil pour répondre aux exigences logistiques du secteur pétrolier." },
  { year: "2016", title: "Mise aux normes", description: "Alignement total de la supply chain sur les standards internationaux d'hygiène et de traçabilité." },
  { year: "2021", title: "Capacité Remote Sites", description: "Extension des compétences à la gestion globale de bases-vies et camps en zones isolées." },
  { year: "2026", title: "Aujourd'hui", description: "Partenaire de référence pour la gestion de la subsistance et du support logistique au Gabon." },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        
        {/* Hero Section - Thème Sombre Professionnel */}
        <section className="relative py-24 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FACC15' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-yellow-400 text-xs uppercase tracking-[0.3em] font-bold mb-6">
              Qui sommes-nous
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Une expertise logistique
              <br />
              <span className="text-yellow-400">éprouvée sur le terrain</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Depuis plus de 20 ans, nous accompagnons la performance des entreprises et des industries du Gabon en garantissant le confort et la subsistance de leurs collaborateurs.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden rounded-xl shadow-xl border border-slate-100">
                  <Image
                    src="/images/team.jpg"
                    alt="Opérations et logistique SOGAR"
                    fill
                    className="object-cover"
                    sizes="(max-w-1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-slate-950 p-6 rounded-xl shadow-lg border-4 border-white text-center min-w-[140px]">
                  <p className="text-4xl font-extbbold font-bold">20+</p>
                  <p className="text-xs uppercase tracking-wider font-semibold">Ans d&apos;expérience</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
                  Le partenaire de vos
                  <br />
                  <span className="text-yellow-600">opérations critiques</span>
                </h2>
                <div className="mt-6 space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                  <p>
                    Fondée en 2002, la Société Gabonaise de Restauration s&apos;est construite autour d&apos;une ambition claire : structurer une offre de restauration collective et de catering industriel capable de répondre aux exigences des plus grands donneurs d&apos;ordres du pays.
                  </p>
                  <p>
                    En installant notre base opérationnelle principale à Port-Gentil, nous nous sommes positionnés au plus près des défis logistiques majeurs, développant un savoir-faire unique dans l&apos;approvisionnement et la gestion des bases-vies terrestres (onshore) et des structures maritimes (offshore).
                  </p>
                  <p>
                    Aujourd&apos;hui, SOGAR combine infrastructures de stockage frigorifique de pointe, maîtrise de la supply chain et gestion rigoureuse des ressources humaines pour assurer une continuité opérationnelle parfaite, 365 jours par an.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-yellow-600 text-xs uppercase tracking-[0.2em] font-bold mb-4">
                Nos Piliers
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Ce qui dicte nos engagements
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div 
                  key={value.title}
                  className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm text-center transition-shadow hover:shadow-md"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-yellow-400/10 rounded-full mb-4">
                    <value.icon className="h-7 w-7 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-yellow-600 text-xs uppercase tracking-[0.2em] font-bold mb-4">
                Notre Parcours
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Deux décennies de croissance
              </h2>
            </div>

            <div className="relative">
              {/* Ligne centrale de la frise */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden lg:block" />
              
              <div className="space-y-12 lg:space-y-0">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year}
                    className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                      index !== milestones.length - 1 ? 'lg:pb-12' : ''
                    }`}
                  >
                    <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm inline-block max-w-md text-left">
                        <span className="text-2xl font-bold text-yellow-600">{milestone.year}</span>
                        <h3 className="text-base font-bold text-slate-950 mt-1">{milestone.title}</h3>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                    {/* Point sur la frise */}
                    <div className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 bg-yellow-400 border-4 border-white rounded-full shadow hidden lg:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Metrics & RH CTA */}
        <section className="py-24 bg-slate-900 text-slate-300 border-t border-slate-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Collaborons à la performance
                  <br />
                  <span className="text-yellow-400">de vos sites</span>
                </h2>
                <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
                  Qu&apos;il s&apos;agisse de renforcer vos infrastructures de support existantes ou de concevoir un plan complet d&apos;approvisionnement pour un nouveau site d&apos;exploration, SOGAR déploie l&apos;ingénierie et les équipes nécessaires.
                </p>
                <div className="mt-8">
                  <Button asChild size="lg" className="bg-yellow-400 text-slate-950 hover:bg-yellow-500 font-bold transition-colors">
                    <Link href="/contact">
                      Contacter notre direction commerciale
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Bloc de métriques industrielles B2B */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 border border-slate-800 p-6 rounded-xl text-center">
                  <p className="text-4xl font-bold text-yellow-400">50+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-semibold">Experts Métiers</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-800 p-6 rounded-xl text-center">
                  <p className="text-4xl font-bold text-yellow-400">20+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-semibold">Contrats Majeurs</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-800 p-6 rounded-xl text-center">
                  <p className="text-4xl font-bold text-yellow-400">1000+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-semibold">Couverts / Jour</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-800 p-6 rounded-xl text-center">
                  <p className="text-4xl font-bold text-yellow-400">100%</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-semibold">Conformité HSE</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
