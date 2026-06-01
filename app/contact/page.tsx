"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2 } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Siège Social",
    content: "Cité Akosso, Port-Gentil\nB.P. 2902, Gabon",
  },
  {
    icon: Phone,
    title: "Standard Téléphonique",
    content: "+241 74 80 29 12",
    href: "tel:+24174802912",
  },
  {
    icon: Mail,
    title: "Secrétariat & Commercial",
    content: "contact@sogar-gabon.com",
    href: "mailto:contact@sogar-gabon.com",
  },
  {
    icon: Clock,
    title: "Horaires de Bureau",
    content: "Lun - Ven: 08h00 - 17h00\nSam: Permanence Opérationnelle",
  },
]

const serviceOptions = [
  { value: "catering-pétrolier", label: "Catering sur Bases-vies / Camps" },
  { value: "offshore", label: "Prestations à bord des navires / plateformes" },
  { value: "collective", label: "Restauration Collective (Collectivités)" },
  { value: "management", label: "Gestion de camps, hôtels & motels" },
  { value: "personnel", label: "Mise à disposition de personnel / Location de matériel" },
  { value: "traiteur", label: "Service Traiteur & Logistique" },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    location: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="relative py-20 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FACC15' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-yellow-400 text-xs uppercase tracking-[0.3em] font-bold mb-4">
              Disponibilité & Réactivité
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Contactez la <span className="text-yellow-400">SOGAR</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-xl mx-auto italic">
              « L&apos;expérience fait la différence, c&apos;est pourquoi nos services sont demandés et redemandés !!! »
            </p>
          </div>
        </section>

        {/* Formulaire et Coordonnées */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Infos d'Implantation locale */}
              <div className="lg:col-span-1 space-y-6">
                <h2 className="text-xl font-bold text-slate-950">Espaces Clients</h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center border border-yellow-400/20">
                        <item.icon className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-950 text-sm">{item.title}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-slate-600 hover:text-yellow-600 transition-colors text-sm whitespace-pre-line">{item.content}</a>
                        ) : (
                          <p className="text-slate-600 text-sm whitespace-pre-line">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Carte centrée sur Port-Gentil */}
                <div className="mt-8 aspect-video sm:aspect-square bg-slate-100 rounded-xl overflow-hidden shadow-sm border border-slate-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.034789547563!2d8.7845!3d-0.7225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1078b668d2f1f555%3A0x6735db!2sPort-Gentil%2C%20Gabon!5e0!3m2!1sfr!2sga!4v1700000000000!5m2!1sfr!2sga"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Localisation SOGAR Port-Gentil"
                  />
                </div>
              </div>

              {/* Formulaire d'Engagement Technique */}
              <div className="lg:col-span-2">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-slate-950 mb-2">Message envoyé avec succès</h3>
                      <p className="text-slate-600 text-sm max-w-md mx-auto">
                        Merci de votre intérêt. Les équipes d&apos;exploitation de la SOGAR prendront contact avec vous dans les plus brefs délais.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <h3 className="text-lg font-bold text-slate-950">Soumettre un besoin ou une demande de cotation</h3>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="name" className="text-xs font-semibold text-slate-700">Nom du demandeur *</Label>
                          <Input id="name" name="name" value={formState.name} onChange={handleChange} placeholder="Votre nom" required className="bg-white" />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="email" className="text-xs font-semibold text-slate-700">Email de contact *</Label>
                          <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} placeholder="nom@domaine.com" required className="bg-white" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="phone" className="text-xs font-semibold text-slate-700">Numéro de Téléphone *</Label>
                          <Input id="phone" name="phone" type="tel" value={formState.phone} onChange={handleChange} placeholder="+241 XX XX XX XX" required className="bg-white" />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="company" className="text-xs font-semibold text-slate-700">Raison Sociale / Société</Label>
                          <Input id="company" name="company" value={formState.company} onChange={handleChange} placeholder="Nom de l'entreprise" className="bg-white" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="service" className="text-xs font-semibold text-slate-700">Nature de la demande *</Label>
                          <select id="service" name="service" value={formState.service} onChange={handleChange} required className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-950 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
                            <option value="">Sélectionnez un service...</option>
                            {serviceOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="location" className="text-xs font-semibold text-slate-700">Zone ou Site concerné (ex: Port-Gentil, Base-vie Onshore, Navire...)</Label>
                          <Input id="location" name="location" value={formState.location} onChange={handleChange} placeholder="Localisation du projet" className="bg-white" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="message" className="text-xs font-semibold text-slate-700">Détails de votre cahier des charges *</Label>
                        <Textarea id="message" name="message" value={formState.message} onChange={handleChange} placeholder="Décrivez précisément votre besoin (volume de repas, hébergement, mise à disposition de personnels...)" rows={4} required className="bg-white" />
                      </div>

                      <Button type="submit" size="lg" className="w-full sm:w-auto bg-slate-950 text-white hover:bg-slate-900 font-bold" disabled={isLoading}>
                        {isLoading ? (
                          <><Loader2 className="mr-2 h-4 w-4 animate-spin text-yellow-400" /> Envoi en cours...</>
                        ) : (
                          <><Send className="mr-2 h-4 w-4 text-yellow-400" /> Transmettre ma demande</>
                        )}
                      </Button>
                    </form>
                  )}
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
