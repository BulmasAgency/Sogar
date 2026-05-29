import { Quote } from "lucide-react"

const testimonials = [
  {
    content: "Sur nos plateformes offshore, la logistique de restauration est un défi quotidien. SOGAR assure un service irréprochable, maintenant un niveau de qualité constant pour nos équipes, dans le respect total de nos exigences HSE.",
    author: "Responsable Logistique & Base-vie",
    role: "Secteur Offshore – Opérations Perenco",
  },
  {
    content: "Un partenaire de confiance depuis plusieurs années pour la gestion de nos camps onshore. Leur réactivité opérationnelle et leur rigueur dans l'approvisionnement des sites isolés font toute la différence sur le terrain.",
    author: "Directeur des Opérations Site",
    role: "Production Onshore – Environnement Assala",
  },
  {
    content: "La gestion de la restauration collective pour nos équipes nécessite une organisation sans faille. SOGAR combine parfaitement savoir-faire culinaire et rigueur industrielle. Nos collaborateurs sont pleinement satisfaits.",
    author: "Superviseur Services Généraux",
    role: "Infrastructures & Collectivités – Maurel & Prom",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-yellow-600 text-sm uppercase tracking-[0.2em] font-semibold mb-4">
            Témoignages & Références
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            La confiance des leaders
            <br />
            <span className="text-yellow-500">de l'énergie au Gabon</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-lg p-8 border border-slate-100 shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Icône de citation aux couleurs du logo SOGAR */}
                <Quote className="h-10 w-10 text-yellow-400/40 mb-4" />
                <p className="text-slate-700 italic leading-relaxed mb-6">
                  {`"${testimonial.content}"`}
                </p>
              </div>
              
              <div className="border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-900">{testimonial.author}</p>
                <p className="text-sm font-medium text-yellow-600 mt-0.5">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
