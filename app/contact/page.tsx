'use client'

import { useState } from 'react'
import { Container, H1, H2, Paragraph } from "@/components/atoms"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
    alert('Message envoyé ! Nous vous recontacterons rapidement.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <H1 className="mb-6">Contactez-nous</H1>
            <Paragraph className="text-lg">
              Une question ? Un projet ? Nous sommes à votre écoute pour vous accompagner
              dans la gestion de votre bien.
            </Paragraph>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <H2 className="mb-6">Envoyez-nous un message</H2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#1A1A1A] outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#1A1A1A] outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#1A1A1A] outline-none transition-colors"
                      placeholder="06 00 00 00 00"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#1A1A1A] outline-none transition-colors bg-white"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="estimation">Demande d&apos;estimation</option>
                      <option value="devis">Demande de devis</option>
                      <option value="info">Demande d&apos;informations</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#1A1A1A] outline-none transition-colors resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <Button type="submit" size="lg">
                  <Send /> Envoyer le message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <H2 className="mb-6">Nos coordonnées</H2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="size-12 bg-[#FAFAFA] flex items-center justify-center shrink-0">
                    <Phone className="size-5 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1">Téléphone</h3>
                    <a href="tel:+33745105564" className="text-gray-600 hover:text-[#1A1A1A]">
                      07 45 10 55 64
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Disponible 7j/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-12 bg-[#FAFAFA] flex items-center justify-center shrink-0">
                    <Mail className="size-5 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1">Email</h3>
                    <a href="mailto:larochelle.fendia@gmail.com" className="text-gray-600 hover:text-[#1A1A1A]">
                      larochelle.fendia@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-12 bg-[#FAFAFA] flex items-center justify-center shrink-0">
                    <MapPin className="size-5 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      57 Boulevard Foch<br />
                      93800 Épinay-sur-Seine
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-12 p-8 bg-[#FAFAFA] border border-gray-200">
                <h3 className="font-semibold text-[#1A1A1A] mb-2">Préférez WhatsApp ?</h3>
                <p className="text-gray-600 mb-4">
                  Contactez-nous directement sur WhatsApp pour une réponse rapide.
                </p>
                <Button variant="outline" asChild>
                  <a
                    href="https://wa.me/33745105564"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ouvrir WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <Container size="md">
          <div className="text-center mb-16">
            <H2 className="mb-4">Questions fréquentes</H2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Quels types de biens gérez-vous ?",
                answer: "Nous gérons principalement des appartements et studios destinés à la location courte durée (Airbnb, Booking, etc.) en région parisienne.",
              },
              {
                question: "Comment est calculée votre commission ?",
                answer: "Notre commission de 20% est calculée sur le montant des réservations, hors frais de ménage. Pas de frais cachés.",
              },
              {
                question: "Puis-je utiliser mon logement quand je le souhaite ?",
                answer: "Absolument ! Vous gardez le contrôle total de votre calendrier et pouvez bloquer des dates à tout moment.",
              },
              {
                question: "Combien de temps pour mettre mon bien en location ?",
                answer: "Comptez environ une semaine entre notre premier échange et la mise en ligne de votre annonce optimisée.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200">
                <h3 className="font-semibold text-[#1A1A1A] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
