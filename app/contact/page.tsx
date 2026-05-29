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
    title: "Direction Générale",
    content: "Boulevard Triomphal Omar Bongo\nLibreville, Gabon",
  },
  {
    icon: Phone,
    title: "Secrétariat Opérations",
    content: "+241 01 23 45 67",
    href: "tel:+24101234567",
  },
  {
    icon: Mail,
    title: "Pôle Commercial & AO",
    content: "contact@sogar.ga",
    href: "mailto:contact@sogar.ga",
  },
  {
    icon: Clock,
    title: "Disponibilité Bureaux",
    content: "Lun - Ven: 8h00 - 18h00\nSam: Permanence Opérationnelle",
  },
]

const serviceOptions = [
  { value: "offshore", label: "Catering Offshore & Onshore" },
  { value: "collective", label: "Restauration Collective d'Entreprise" },
  { value: "bases-vies", label: "Gestion Globale de Base-vie / Camp" },
  { value: "logistique", label: "Logistique Subsistance & Approvisionnements" },
  { value: "autre", label: "Autre consultation technique" },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    siteType: "",
    startDate: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulation d'envoi API
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="relative py-24 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FACC15' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-yellow-400 text-xs uppercase tracking-[0.3em] font-bold mb-6">
              Ingénierie Commerciale
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Planifions vos futures
              <br />
              <span className="text-yellow-400">solutions sur site</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Nos équipes d&apos;exploitation sont à votre disposition pour analyser vos appels d&apos;offres et cahiers des charges techniques.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
              
              {/* Informations de coordonnées */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-slate-950 mb-8">Coordonnées Corporate</h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center border border-yellow-400/20">
                        <item.icon className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-950 text-sm sm:text-base">{item.title}</h3>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-slate-600 hover:text-yellow-600 transition-colors text-sm sm:text-base whitespace-pre-line"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-slate-600 text-sm sm:text-base whitespace-pre-line">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bloc Carte de géolocalisation */}
                <div className="mt-8 aspect-square bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center overflow-hidden shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127542.31892037366!2d9.3799258!3d0.4013749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b8a5438f3ed%3A0x7d0367d4f4c7a8e8!2sLibreville%2C%20Gabon!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Siège SOGAR Libreville"
                  />
                </div>
              </div>

              {/* Formulaire Technique d'Appel d'Offres */}
              <div className="lg:col-span-2">
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 sm:p-8 shadow-sm">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/10 rounded-full mb-6">
                        <CheckCircle className="h-8 w-8 text-yellow-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-950 mb-4">
                        Demande enregistrée
                      </h3>
                      <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
                        Merci pour votre démarche. Notre pôle Ingénierie & Exploitation étudie vos éléments et reviendra vers vous sous 48h pour organiser une réunion technique.
                      </p>
                      <Button 
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormState({
                            name: "",
                            email: "",
                            phone: "",
                            company: "",
                            service: "",
                            siteType: "",
                            startDate: "",
                            message: "",
                          })
                        }}
                        className="mt-8 bg-slate-950 text-white hover:bg-slate-900"
                      >
                        Soumettre un autre dossier
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-slate-950 mb-2">
                        Soumission de Cahier des Charges
                      </h2>
                      <p className="text-slate-600 mb-8 text-sm sm:text-base">
                        Renseignez les spécifications initiales de votre projet pour être mis en relation avec l&apos;un de nos chargés d&apos;affaires.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-slate-950 font-medium">Nom complet du référent *</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              placeholder="ex: Marc Mba"
                              required
                              className="bg-white border-slate-200 focus-visible:ring-yellow-400"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-950 font-medium">Adresse Email Professionnelle *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleChange}
                              placeholder="m.mba@entreprise.ga"
                              required
                              className="bg-white border-slate-200 focus-visible:ring-yellow-400"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-slate-950 font-medium">Téléphone de contact</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formState.phone}
                              onChange={handleChange}
                              placeholder="+241 07 XX XX XX"
                              className="bg-white border-slate-200 focus-visible:ring-yellow-400"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-slate-950 font-medium">Raison Sociale / Entreprise *</Label>
                            <Input
                              id="company"
                              name="company"
                              value={formState.company}
                              onChange={handleChange}
                              placeholder="ex: Société d'Exploitation Pétrolière"
                              required
                              className="bg-white border-slate-200 focus-visible:ring-yellow-400"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                          <div className="space-y-2 sm:col-span-1">
                            <Label htmlFor="service" className="text-slate-950 font-medium">Secteur d&apos;Activité *</Label>
                            <select
                              id="service"
                              name="service"
                              value={formState.service}
                              onChange={handleChange}
                              required
                              className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-slate-950"
                            >
                              <option value="">Sélectionnez...</option>
                              {serviceOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                              ))}
                            </select>
                          </div>
                          <div className="space-y-2 sm:col-span-1">
                            <Label htmlFor="siteType" className="text-slate-950 font-medium">Typologie du Site</Label>
                            <Input
                              id="siteType"
                              name="siteType"
                              value={formState.siteType}
                              onChange={handleChange}
                              placeholder="ex: Onshore Isolé, Plateforme, Bureaux"
                              className="bg-white border-slate-200 focus-visible:ring-yellow-400"
                            />
                          </div>
                          <div className="space-y-2 sm:col-span-1">
                            <Label htmlFor="startDate" className="text-slate-950 font-medium">Déploiement Souhaité</Label>
                            <Input
                              id="startDate"
                              name="startDate"
                              type="date"
                              value={formState.startDate}
                              onChange={handleChange}
                              className="bg-white border-slate-200 focus-visible:ring-yellow-400 text-slate-950"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-slate-950 font-medium">Description du périmètre contractuel *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="Précisez le nombre estimé de collaborateurs, la localisation géographique du site, le type de rotation et vos contraintes HSE spécifiques..."
                            rows={5}
                            required
                            className="bg-white border-slate-200 focus-visible:ring-yellow-400"
                          />
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full sm:w-auto bg-slate-950 text-white hover:bg-slate-900 font-semibold"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin text-yellow-400" />
                              Analyse du dossier en cours...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4 text-yellow-400" />
                              Transmettre au pôle Opérations
                            </>
                          )}
                        </Button>
                      </form>
                    </>
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
