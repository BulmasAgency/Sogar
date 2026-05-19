"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "À Propos", href: "/a-propos" },
  { name: "Galerie", href: "/galerie" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    // On garde le header fixed SANS backdrop-blur ici pour ne pas piéger le menu mobile
    <header className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center">
      {/* 
        ASTUCE CSS : C'est cette div ci-dessous qui prend le flou et le fond. 
        Le header parent reste neutre, ce qui libère les éléments 'fixed' du menu mobile.
      */}
      <div className="absolute inset-0 -z-10 bg-background/95 backdrop-blur-sm border-b border-border" />

      <nav className="w-full mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Navigation principale">
        {/* LOGO */}
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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* LIENS NAV (DESKTOP) */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-semibold text-foreground/80 hover:text-accent transition-colors duration-200 uppercase tracking-widest"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA (DESKTOP) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
            <Link href="/contact" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Nous Contacter
            </Link>
          </Button>
        </div>
      </nav>

      {/* -------------------------------------------------------- */}
      {/* INTERFACE DU MENU MOBILE (PROPRE, EXTENSIBLE ET AXÉE UX) */}
      {/* -------------------------------------------------------- */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          {/* Écran de fond (Backdrop) - Prend désormais bien tout l'écran */}
          <div 
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fade-in" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          
          {/* Panneau latéral (Drawer) - Propulsé à 100% de la hauteur du téléphone (100dvh) */}
          <div className="fixed inset-y-0 right-0 z-50 w-full h-[100dvh] overflow-y-auto bg-background px-6 py-6 sm:max-w-sm border-l border-border flex flex-col justify-between shadow-2xl">
            
            {/* Partie Haute : Logo + Bouton Fermer */}
            <div>
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/images/logo.png"
                    alt="SOGAR"
                    width={140}
                    height={46}
                    className="h-20 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-foreground hover:bg-secondary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Fermer le menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Liens de Navigation Mobile (Aérés et faciles à cliquer avec le pouce) */}
              <div className="mt-10 flex flex-col gap-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-foreground/90 hover:bg-secondary hover:text-accent transition-all uppercase tracking-wider text-left"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Partie Basse : CTA bloqué en bas de l'écran, ultra accessible */}
            <div className="pt-6 border-t border-border mt-auto">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                Besoin d'un traiteur ?
              </p>
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-base font-medium shadow-lg shadow-accent/10">
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