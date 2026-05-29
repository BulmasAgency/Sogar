"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

// Tableau de navigation corrigé (sans la galerie pour le positionnement B2B)
const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "À Propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center">
      {/* Fond flouté du header */}
      <div className="absolute inset-0 -z-10 bg-white/95 backdrop-blur-sm border-b border-slate-100" />

      <nav className="w-full mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Navigation principale">
        {/* LOGO - Utilisation stricte de logo.png */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <Image
              src="/images/logo.png"
              alt="SOGAR - Société Gabonaise de Restauration"
              width={180}
              height={60}
              className="h-12 w-auto sm:h-14 object-contain"
              priority
            />
          </Link>
        </div>

        {/* BOUTON BURGER (MOBILE) */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-900"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* LIENS NAV (DESKTOP) - Changement de couleur au survol vers le jaune */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-bold text-slate-700 hover:text-yellow-600 transition-colors duration-200 uppercase tracking-widest"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA (DESKTOP) - Bouton Jaune SOGAR */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-bold shadow-sm transition-colors">
            <Link href="/contact" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Nous Contacter
            </Link>
          </Button>
        </div>
      </nav>

      {/* INTERFACE DU MENU MOBILE */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm animate-fade-in" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          
          {/* Drawer (Panneau latéral mobile) */}
          <div className="fixed inset-y-0 right-0 z-50 w-full h-[100dvh] overflow-y-auto bg-white px-6 py-6 sm:max-w-sm border-l border-slate-100 flex flex-col justify-between shadow-2xl">
            
            {/* Partie Haute : Logo + Bouton Fermer */}
            <div>
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/images/logo.png"
                    alt="SOGAR"
                    width={140}
                    height={46}
                    className="h-16 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-slate-900 hover:bg-slate-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Fermer le menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Liens Mobile - Remplacement hover:text-accent par hover:text-yellow-600 */}
              <div className="mt-10 flex flex-col gap-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-4 py-3 text-base font-bold text-slate-800 hover:bg-slate-50 hover:text-yellow-600 transition-all uppercase tracking-wider text-left"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Partie Basse : CTA réorienté vers les exigences industrielles */}
            <div className="pt-6 border-t border-slate-100 mt-auto">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Une exigence logistique ?
              </p>
              <Button asChild className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-950 py-6 text-base font-bold shadow-md transition-colors">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Nous Contacter
                </Link>
              </Button>
            </div>

          </div>
        </div>
      )}
    </header>
  )
}
