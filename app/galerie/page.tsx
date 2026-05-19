"use client"

import { Metadata } from "next"
import Image from "next/image"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { X } from "lucide-react"

const categories = [
  { id: "all", name: "Tout" },
  { id: "events", name: "Événements" },
  { id: "dishes", name: "Nos Plats" },
  { id: "cocktails", name: "Cocktails" },
]

const images = [
  { id: 1, src: "/images/catering-event.jpg", category: "events", title: "Réception Corporate" },
  { id: 2, src: "/images/dish-1.jpg", category: "dishes", title: "Cuisine Africaine Raffinée" },
  { id: 3, src: "/images/gallery-1.jpg", category: "events", title: "Mariage Élégant" },
  { id: 4, src: "/images/gallery-2.jpg", category: "dishes", title: "Amuse-Bouches Créatifs" },
  { id: 5, src: "/images/gallery-3.jpg", category: "cocktails", title: "Bar à Cocktails" },
  { id: 6, src: "/images/dish-2.jpg", category: "dishes", title: "Plateau de Fruits de Mer" },
  { id: 7, src: "/images/gallery-4.jpg", category: "events", title: "Garden Party" },
  { id: 8, src: "/images/gallery-5.jpg", category: "dishes", title: "Brochettes Traditionnelles" },
  { id: 9, src: "/images/corporate.jpg", category: "events", title: "Restauration Collective" },
  { id: 10, src: "/images/gallery-6.jpg", category: "cocktails", title: "Station Desserts" },
  { id: 11, src: "/images/team.jpg", category: "events", title: "Notre Équipe" },
  { id: 12, src: "/images/hero-kitchen.jpg", category: "dishes", title: "En Cuisine" },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<typeof images[0] | null>(null)

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory)

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
              Notre Galerie
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Découvrez nos
              <br />
              <span className="text-accent">réalisations</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              {`Un aperçu de notre savoir-faire à travers les événements et créations culinaires qui font notre fierté.`}
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-card text-card-foreground hover:bg-card/80 border border-border'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setLightboxImage(image)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold">{image.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Fermer</span>
            </button>
            <div className="relative max-w-5xl w-full aspect-[16/10]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-xl font-semibold">{lightboxImage.title}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
