import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const navigation = {
  main: [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Catering Offshore & Onshore", href: "/services#offshore" },
    { name: "Restauration Collective", href: "/services#collective" },
    { name: "Gestion de Bases-vies", href: "/services#camps" },
    { name: "Logistique & Personnel", href: "/services#logistique" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Slogan corrigé */}
          <div className="lg:col-span-1">
            {/* Utilisation stricte de logo.png */}
            <Image
              src="/images/logo.png"
              alt="SOGAR - Société Gabonaise de Restauration"
              width={160}
              height={53}
              className="h-24 w-auto brightness-110"
            />
            <p className="mt-4 text-sm text-slate-400 italic leading-relaxed">
              « L'expérience fait la différence, c'est pourquoi nos services sont demandés et redemandés ! »
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-yellow-500">Navigation</h4>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-yellow-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services B2B réalignés */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-yellow-500">Nos Solutions</h4>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-yellow-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Localisation officielle */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-yellow-500">Contact</h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-yellow-500" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  Quartier Mosquée, Port-Gentil<br />
                  B.P. 2902, Gabon
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-yellow-500" />
                <a 
                  href="tel:+24174802912" 
                  className="text-sm text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  +241 74 80 29 12
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-yellow-500" />
                <a 
                  href="mailto:contact@sogar.ga" 
                  className="text-sm text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  contact@sogar.ga
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mentions & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} SOGAR. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="text-xs text-slate-500 hover:text-yellow-400 transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-xs text-slate-500 hover:text-yellow-400 transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
