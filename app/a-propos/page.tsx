import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShieldCheck, Anchor, Users, Briefcase, Building, Layers } from "lucide-react"

const coreActivities = [
  {
    icon: ShieldCheck,
    title: "Catering & Restauration Collective",
    description: "Opérations de restauration auprès des sociétés pétrolières et divers, sur les camps et bases-vies, ainsi que la cuisine pour collectivités publiques et privées.",
  },
  {
    icon: Anchor,
    title: "Services Maritimes & Offshore",
    description: "Prestations de services domestiques spécialisés à bord des navires et des plateformes pétrolières.",
  },
  {
    icon: Building,
    title: "Gestion de Camps & Hôtellerie",
    description: "Prise en charge globale et management de camps de travailleurs, bases-vies, hôtels et motels.",
  },
  {
    icon: Briefcase,
    title: "Mise à Disposition & Logistique",
    description: "Mise à disposition de personnel spécialisé, location de matériels professionnels, logistique et services traiteur.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-white">
        
        {/* Section Identité & Histoire */}
        <section className="py-20 lg:py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-yellow-600 font-bold text-xs uppercase tracking-widest mb-3">SOGAR SARL</p>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-6">
                  Société Gabonaise de Restauration
                </h1>
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Fondée en février 2015 (Dossier n° 001-10247GU8), la <strong>SOGAR (Société Gabonaise de Restauration)</strong> est une SARL de droit gabonais spécialisée dans l&apos;ingénierie des services de subsistance et du catering industriel.
                  </p>
                  <p>
                    Ancrée historiquement au cœur de l&apos;activité économique nationale, la SOGAR s&apos;est construite autour d&apos;une promesse forte et d&apos;un savoir-faire éprouvé auprès des acteurs les plus exigeants des secteurs pétrolier, maritime et institutionnel.
                  </p>
                  <blockquote className="border-l-4 border-yellow-400 pl-4 my-6 italic text-slate-900 font-medium bg-yellow-400/5 py-2 pr-2 rounded-r-md">
                    « L&apos;expérience fait la différence, c&apos;est pourquoi nos services sont demandés et redemandés !!! »
                  </blockquote>
                </div>
              </div>

              {/* Encadré d'expertise légale */}
              <div className="relative bg-slate-950 rounded-2xl p-8 sm:p-10 text-white shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
                  <Layers className="h-5 w-5" /> Notre Périmètre d&apos;Action
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Qu&apos;il s&apos;agisse de gérer le quotidien des équipes sur des bases-vies isolées ou d&apos;assurer le confort domestique à bord d&apos;infrastructures offshore en haute mer, la SOGAR déploie des solutions adaptées aux contraintes techniques et logistiques du Gabon.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
                  <div>
                    <span className="block font-bold text-white">Forme Juridique</span>
                    SARL (Droit Gabonais)
                  </div>
                  <div>
                    <span className="block font-bold text-white">Date de Création</span>
                    23 Février 2015
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Compétences Métiers */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                Nos Domaines d&apos;Activité Principale
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base">
                Une offre multiservice intégrée pour répondre aux besoins des personnes physiques, morales et des collectivités publiques ou privées.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {coreActivities.map((activity) => (
                <div key={activity.title} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                  <div className="w-12 h-12 bg-slate-950 text-yellow-400 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <activity.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 mb-2">{activity.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
