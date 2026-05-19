import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Heart, Users, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "À Propos | SOGAR",
  description: "Découvrez l'histoire de SOGAR, Société Gabonaise de Restauration. Plus de 20 ans d'excellence culinaire au service du Gabon.",
}

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Nous visons la perfection dans chaque plat, chaque service, chaque détail.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "La cuisine est notre art, votre satisfaction notre plus belle récompense.",
  },
  {
    icon: Users,
    title: "Équipe",
    description: "Une famille de professionnels unis par l'amour du métier bien fait.",
  },
  {
    icon: Leaf,
    title: "Durabilité",
    description: "Engagement envers les produits locaux et les pratiques responsables.",
  },
]

const milestones = [
  { year: "2002", title: "Création", description: "Fondation de SOGAR à Libreville" },
  { year: "2008", title: "Expansion", description: "Ouverture de notre centre de production" },
  { year: "2015", title: "Reconnaissance", description: "Prix d'excellence en restauration collective" },
  { year: "2020", title: "Innovation", description: "Lancement de notre service traiteur premium" },
  { year: "2024", title: "Aujourd'hui", description: "Leader de la restauration au Gabon" },
]

export default function AboutPage() {
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
              À Propos
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Notre histoire,
              <br />
              <span className="text-accent">notre passion</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              {`Depuis 2002, SOGAR écrit l'histoire de l'excellence culinaire gabonaise, une assiette à la fois.`}
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src="/images/team.jpg"
                    alt="L'équipe SOGAR"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-xl">
                  <p className="text-4xl font-bold">20+</p>
                  <p className="text-sm uppercase tracking-wider">{`Années d'expertise`}</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  Une aventure culinaire
                  <br />
                  <span className="text-accent">née de la passion</span>
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {`Fondée en 2002 à Libreville, la Société Gabonaise de Restauration est née de la vision d'entrepreneurs passionnés par la gastronomie et désireux de porter haut les couleurs de la cuisine africaine.`}
                  </p>
                  <p>
                    {`Au fil des années, SOGAR s'est imposée comme le partenaire incontournable des entreprises, institutions et particuliers pour tous leurs besoins en restauration. Notre secret ? Une équipe de chefs talentueux, des ingrédients de première qualité et un service irréprochable.`}
                  </p>
                  <p>
                    {`Aujourd'hui, avec plus de 50 employés et une capacité de servir des centaines de convives par jour, nous continuons d'innover tout en restant fidèles à nos valeurs fondatrices : excellence, passion et respect du client.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-4">
                Nos Valeurs
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Ce qui nous guide
                <br />
                <span className="text-accent">au quotidien</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div 
                  key={value.title}
                  className="bg-card p-8 rounded-lg border border-border shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                    <value.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-4">
                Notre Parcours
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Les étapes clés
                <br />
                <span className="text-accent">de notre histoire</span>
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />
              
              <div className="space-y-12 lg:space-y-0">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year}
                    className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                      index !== milestones.length - 1 ? 'lg:pb-12' : ''
                    }`}
                  >
                    <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                      <div className="bg-card p-6 rounded-lg border border-border shadow-sm inline-block">
                        <span className="text-3xl font-bold text-accent">{milestone.year}</span>
                        <h3 className="text-lg font-semibold text-card-foreground mt-1">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                      </div>
                    </div>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 bg-accent rounded-full hidden lg:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team CTA */}
        <section className="py-24 bg-secondary border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  Rejoignez l'aventure
                  <br />
                  <span className="text-accent">SOGAR</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {`Nous sommes toujours à la recherche de talents passionnés pour rejoindre notre équipe. Si vous partagez nos valeurs et souhaitez contribuer à l'excellence culinaire gabonaise, contactez-nous.`}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact">
                      Nous contacter
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-accent">50+</p>
                  <p className="text-sm text-muted-foreground mt-1">Employés</p>
                </div>
                <div className="bg-card border border-border p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-accent">500+</p>
                  <p className="text-sm text-muted-foreground mt-1">Événements/an</p>
                </div>
                <div className="bg-card border border-border p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-accent">1000+</p>
                  <p className="text-sm text-muted-foreground mt-1">Repas/jour</p>
                </div>
                <div className="bg-card border border-border p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-accent">98%</p>
                  <p className="text-sm text-muted-foreground mt-1">Satisfaction</p>
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
