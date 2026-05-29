import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShieldCheck, Anchor, Building, Briefcase } from "lucide-react"

const coreActivities = [
  {
    icon: ShieldCheck,
    title: "Catering & Restauration Collective",
    content: "Opérations de restauration auprès des sociétés pétrolières et divers, sur les camps et bases-vies, ainsi que la cuisine pour collectivités publiques et privées.",
  },
  {
    icon: Anchor,
    title: "Services Maritimes & Offshore",
    content: "Prestations de services domestiques spécialisés à bord des navires et des plateformes pétrolières.",
  },
  {
    icon: Building,
    title: "Gestion de Camps & Hôtellerie",
    content: "Prise en charge globale et management de camps de travailleurs, bases-vies, hôtels et motels.",
  },
  {
    icon: Briefcase,
    title: "Mise à Disposition & Logistique",
    content: "Mise à disposition de personnel spécialisé, location de matériels professionnels, logistique et services traiteur.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        
        {/* Hero Section - Identique à la page Contact */}
        <section className="relative py-20 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FACC15' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-yellow-400 text-xs uppercase tracking-[0.3em] font-bold mb-4">
              Notre Histoire
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Société Gabonaise de <span className="text-yellow-400">Restauration</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-xl mx-auto italic">
              « L&apos;expérience fait la différence, c&apos;est pourquoi nos services sont demandés et redemandés !!! »
            </p>
          </div>
        </section>

        {/* Content Section - Même layout en grille à colonnes asymétriques que Contact */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
              
              {/* Colonne Gauche : Identité Légale (Équivalent de la colonne coordonnées) */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-slate-950 mb-8">Repères Légaux</h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-yellow-400 pl-4">
                    <h3 className="font-bold text-slate-950 text-sm uppercase tracking-wider">Dénomination</h3>
                    <p className="text-slate-600 text-sm mt-1">SOCIETE GABONAISE DE RESTAURATION (SOGAR)</p>
                  </div>
                  <div className="border-l-2 border-yellow-400 pl-4">
                    <h3 className="font-bold text-slate-950 text-sm uppercase tracking-wider">Forme Juridique</h3>
                    <p className="text-slate-600 text-sm mt-1">SARL (Droit Gabonais)</p>
                  </div>
                  <div className="border-l-2 border-yellow-400 pl-4">
                    <h3 className="font-bold text-slate-950 text-sm uppercase tracking-wider">Immatriculation Officielle</h3>
                    <p className="text-slate-600 text-sm mt-1">Dossier n°: 001-10247GU8<br />Enregistré le : 23 / 02 / 2015</p>
                  </div>
                  <div className="border-l-2 border-yellow-400 pl-4">
                    <h3 className="font-bold text-slate-950 text-sm uppercase tracking-wider">Ancrage Territorial</h3>
                    <p className="text-slate-600 text-sm mt-1">Quartier Mosquée<br />Port-Gentil, Gabon</p>
                  </div>
                </div>
              </div>

              {/* Colonne Droite : Activités Principales (Équivalent du bloc formulaire) */}
              <div className="lg:col-span-2">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-950 mb-2">
                    Notre Objet Social & Métiers
                  </h2>
                  <p className="text-slate-600 mb-8 text-sm sm:text-base">
                    La SOGAR déploie une offre multiservice sur-mesure pour toute personne physique ou morale, ainsi que pour les collectivités publiques et privées.
                  </p>

                  {/* Liste des activités reprenant le style de liste épuré */}
                  <div className="space-y-8">
                    {coreActivities.map((activity) => (
                      <div key={activity.title} className="flex gap-4 items-start pb-6 border-b border-slate-200 last:border-0 last:pb-0">
                        <div className="shrink-0 w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center border border-yellow-400/20">
                          <activity.icon className="h-4 w-4 text-yellow-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-950 text-base mb-1">{activity.title}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">{activity.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>

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
