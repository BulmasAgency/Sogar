import { Quote } from "lucide-react"

const testimonials = [
  {
    content: "SOGAR a transformé notre mariage en une expérience gastronomique exceptionnelle. Chaque plat était une œuvre d'art, et le service impeccable.",
    author: "Marie & Jean Ndong",
    role: "Mariage - Libreville",
  },
  {
    content: "Depuis 5 ans, SOGAR gère la restauration de notre entreprise. La qualité est constante, les équipes professionnelles. Un partenaire de confiance.",
    author: "Pierre Obame",
    role: "Directeur Général - TOTAL Gabon",
  },
  {
    content: "Pour notre gala annuel de 300 personnes, SOGAR a su allier élégance et efficacité. Les retours de nos invités ont été unanimement positifs.",
    author: "Sylvie Mba",
    role: "Organisatrice d'événements",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-4">
            Témoignages
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Ce que disent
            <br />
            <span className="text-accent">nos clients</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-lg p-8 border border-border"
            >
              <Quote className="h-10 w-10 text-accent/40 mb-4" />
              <p className="text-foreground/90 leading-relaxed mb-6">
                {`"${testimonial.content}"`}
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
