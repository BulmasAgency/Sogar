import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const navigation = {
  main: [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Galerie", href: "/galerie" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Restauration Événementielle", href: "/services#evenementiel" },
    { name: "Restauration Collective", href: "/services#collective" },
    { name: "Cocktails & Réceptions", href: "/services#cocktails" },
    { name: "Traiteur", href: "/services#traiteur" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="SOGAR - Société Gabonaise de Restauration"
              width={160}
              height={53}
              className="h-32 w-auto"
            />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {`L'expérience fais la différence, c'est pourquoi nos services sont demandés et redemandés !!!`}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Navigation</h4>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Nos Services</h4>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-muted-foreground">
                  Port-Gentil, Gabon<br />
                  Mosquée
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a href="tel:+241074802912" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  +241 74 80 29 12
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <a href="mailto:contact@sogar.ga" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  contact@sogar.ga
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} SOGAR. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="text-xs text-muted-foreground hover:text-accent transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-xs text-muted-foreground hover:text-accent transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
