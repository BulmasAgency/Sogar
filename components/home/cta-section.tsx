import Link from "next/link"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-accent px-6 py-16 sm:px-16 sm:py-24 lg:flex lg:items-center lg:gap-x-16 lg:px-24">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          <div className="relative flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-accent-foreground">
              Prêt à créer un
              <br />
              événement inoubliable ?
            </h2>
            <p className="mt-6 text-lg text-accent-foreground/80 max-w-xl">
              Contactez-nous dès maintenant pour discuter de votre projet. Notre équipe est à votre écoute pour réaliser vos envies culinaires.
            </p>
          </div>

          <div className="relative mt-10 lg:mt-0 flex flex-col sm:flex-row lg:flex-col gap-4">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
              <a href="tel:+24101234567">
                <Phone className="mr-2 h-5 w-5" />
                +241 01 23 45 67
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
