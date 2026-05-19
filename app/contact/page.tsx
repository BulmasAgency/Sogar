"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "Boulevard Triomphal Omar Bongo\nLibreville, Gabon",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+241 01 23 45 67",
    href: "tel:+24101234567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@sogar.ga",
    href: "mailto:contact@sogar.ga",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun - Ven: 8h - 18h\nSam: 9h - 14h",
  },
]

const serviceOptions = [
  "Restauration Événementielle",
  "Restauration Collective",
  "Cocktails & Réceptions",
  "Service Traiteur",
  "Autre",
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    guests: "",
    date: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
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
        {/* Hero */}
        <section className="relative py-24 bg-secondary overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A962' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-accent text-sm uppercase tracking-[0.3em] font-medium mb-6">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Parlons de
              <br />
              <span className="text-accent">votre projet</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              {`Notre équipe est à votre écoute pour transformer vos idées en réalité culinaire.`}
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-foreground mb-8">Nos coordonnées</h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-muted-foreground hover:text-accent transition-colors whitespace-pre-line"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-8 aspect-square bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127542.31892037366!2d9.3799258!3d0.4013749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b8a5438f3ed%3A0x7d0367d4f4c7a8e8!2sLibreville%2C%20Gabon!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation SOGAR"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                        <CheckCircle className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-4">
                        Message envoyé !
                      </h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        {`Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais, généralement sous 24 heures.`}
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
                            guests: "",
                            date: "",
                            message: "",
                          })
                        }}
                        className="mt-8"
                      >
                        Envoyer un autre message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-card-foreground mb-2">
                        Demande de devis
                      </h2>
                      <p className="text-muted-foreground mb-8">
                        {`Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.`}
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Nom complet *</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              placeholder="Jean Dupont"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleChange}
                              placeholder="jimmy@exemple.com"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Téléphone</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formState.phone}
                              onChange={handleChange}
                              placeholder="+241 XX XX XX XX"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">Entreprise / Organisation</Label>
                            <Input
                              id="company"
                              name="company"
                              value={formState.company}
                              onChange={handleChange}
                              placeholder="Nom de l'entreprise"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="service">Type de service *</Label>
                            <select
                              id="service"
                              name="service"
                              value={formState.service}
                              onChange={handleChange}
                              required
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              <option value="">Sélectionnez...</option>
                              {serviceOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="guests">Nombre de convives</Label>
                            <Input
                              id="guests"
                              name="guests"
                              type="number"
                              value={formState.guests}
                              onChange={handleChange}
                              placeholder="50"
                              min="1"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="date">{`Date de l'événement`}</Label>
                            <Input
                              id="date"
                              name="date"
                              type="date"
                              value={formState.date}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Votre message *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="Décrivez votre projet, vos besoins particuliers, vos préférences..."
                            rows={5}
                            required
                          />
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <span className="animate-spin mr-2">⏳</span>
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Envoyer ma demande
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
