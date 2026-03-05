import Image from "next/image"
import { Container, H1, H2, Paragraph } from "@/components/atoms"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

const values = [
  {
    title: "Proximité",
    description: "Basés en région parisienne, nous intervenons rapidement et connaissons parfaitement le marché local.",
  },
  {
    title: "Transparence",
    description: "Pas de frais cachés, une commission claire et un reporting mensuel détaillé de vos revenus.",
  },
  {
    title: "Professionnalisme",
    description: "Une équipe formée et expérimentée pour garantir la satisfaction de vos voyageurs.",
  },
  {
    title: "Réactivité",
    description: "Disponibles 24/7 pour répondre aux urgences et assurer la continuité de vos locations.",
  },
]

const zones = [
  "Épinay-sur-Seine",
  "Saint-Denis",
  "Argenteuil",
  "Villetaneuse",
  "Stains",
  "Pierrefitte-sur-Seine",
  "Et communes limitrophes",
]

export default function AProposPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <H1 className="mb-6">À propos de Fendia</H1>
              <Paragraph className="text-lg mb-6">
                Fendia Conciergerie est née d&apos;une passion pour l&apos;hospitalité et d&apos;une
                expertise locale en région parisienne. Nous accompagnons les propriétaires
                dans la gestion de leurs locations courte durée depuis notre création.
              </Paragraph>
              <Paragraph className="text-lg">
                Notre mission : vous permettre de profiter de revenus locatifs optimisés
                sans les contraintes de la gestion quotidienne.
              </Paragraph>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/hero-2.webp"
                alt="Appartement géré par Fendia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Notre histoire */}
      <section className="py-24 bg-white">
        <Container size="md">
          <div className="text-center mb-12">
            <H2 className="mb-4">Notre histoire</H2>
          </div>
          <div className="prose max-w-none text-gray-600 space-y-6">
            <p>
              Fondée par Fendia Larochelle, notre conciergerie est le fruit d&apos;une
              expérience personnelle : celle d&apos;un propriétaire qui a voulu simplifier
              la gestion de ses propres biens en location courte durée.
            </p>
            <p>
              Face aux défis quotidiens — coordination des ménages, accueil des voyageurs
              à toute heure, gestion des imprévus — l&apos;idée de créer une structure
              professionnelle capable d&apos;accompagner d&apos;autres propriétaires s&apos;est
              naturellement imposée.
            </p>
            <p>
              Aujourd&apos;hui, Fendia Conciergerie gère plusieurs biens en région parisienne
              avec une approche personnalisée et une attention particulière à la qualité
              de service, tant pour les propriétaires que pour les voyageurs.
            </p>
          </div>
        </Container>
      </section>

      {/* Nos valeurs */}
      <section className="py-24 bg-[#FAFAFA]">
        <Container>
          <div className="text-center mb-16">
            <H2 className="mb-4">Nos valeurs</H2>
            <Paragraph className="max-w-2xl mx-auto text-lg">
              Ce qui guide notre action au quotidien.
            </Paragraph>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-[#1A1A1A]">
                  {value.title}
                </h3>
                <p className="text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Zones d'intervention */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <H2 className="mb-6">Zones d&apos;intervention</H2>
              <Paragraph className="text-lg mb-8">
                Nous intervenons principalement dans le nord de la région parisienne,
                dans des communes que nous connaissons parfaitement.
              </Paragraph>
              <ul className="space-y-3">
                {zones.map((zone, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600">
                    <span className="text-[#1A1A1A]">•</span>
                    {zone}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/hero-3.webp"
                alt="Zone d'intervention Fendia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Informations légales */}
      <section className="py-24 bg-[#FAFAFA]">
        <Container size="md">
          <div className="text-center">
            <H2 className="mb-8">Informations légales</H2>
            <div className="bg-white p-8 border border-gray-200 text-left">
              <dl className="space-y-4 text-gray-600">
                <div>
                  <dt className="font-semibold text-[#1A1A1A]">Raison sociale</dt>
                  <dd>Fendia Conciergerie</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#1A1A1A]">Dirigeant</dt>
                  <dd>Fendia Larochelle</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#1A1A1A]">SIREN</dt>
                  <dd>947 798 237</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#1A1A1A]">Siège social</dt>
                  <dd>57 Boulevard Foch, 93800 Épinay-sur-Seine</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <Container size="md">
          <div className="text-center">
            <H2 className="mb-4">Envie d&apos;en savoir plus ?</H2>
            <Paragraph className="max-w-xl mx-auto text-lg mb-8">
              Contactez-nous pour discuter de votre projet et obtenir une estimation gratuite.
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">Nous contacter</Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+33745105564"><Phone /> 07 45 10 55 64</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
