import { Hero } from "@/components/organisms"
import { Container, H2, Paragraph } from "@/components/atoms"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

const services = [
  {
    title: "Formule Tout Compris",
    description:
      "On s'occupe de tout : création d'annonce, photos, tarification, accueil voyageurs, ménage, linge, maintenance.",
    features: [
      "Création et optimisation des annonces",
      "Gestion des réservations 24/7",
      "Accueil et remise des clés",
      "Ménage professionnel",
      "Linge de maison fourni",
      "Maintenance et petites réparations",
    ],
  },
  {
    title: "Formule À la Carte",
    description:
      "Choisissez uniquement les services dont vous avez besoin. Flexibilité totale.",
    features: [
      "Ménage à la demande",
      "Accueil voyageurs ponctuel",
      "Gestion des annonces",
      "Photographie professionnelle",
      "Conseil en décoration",
      "Assistance administrative",
    ],
  },
]

const testimonials = [
  {
    name: "Marie L.",
    location: "Épinay-sur-Seine",
    text: "Grâce à Fendia, mon appartement est loué 90% du temps. Je n'ai plus à me soucier de rien !",
    rating: 5,
  },
  {
    name: "Thomas D.",
    location: "Saint-Denis",
    text: "Service impeccable, équipe réactive et professionnelle. Je recommande à 100%.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    location: "Argenteuil",
    text: "Mes revenus locatifs ont augmenté de 40% depuis que je travaille avec Fendia.",
    rating: 5,
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <Container>
          <div className="text-center mb-16">
            <H2 className="mb-4">Deux formules adaptées à vos besoins</H2>
            <Paragraph className="max-w-2xl mx-auto text-lg">
              Que vous souhaitiez déléguer entièrement ou garder le contrôle,
              nous avons la solution.
            </Paragraph>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 md:p-10 border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#1A1A1A]">{service.title}</h3>
                <p className="text-gray-500 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="text-[#1A1A1A] mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" fullWidth>
                  En savoir plus
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <H2 className="mb-4">Comment ça marche ?</H2>
            <Paragraph className="max-w-2xl mx-auto text-lg">
              Un processus simple et transparent pour commencer à générer des revenus.
            </Paragraph>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Prise de contact",
                description:
                  "Échangeons sur votre bien et vos objectifs. Estimation gratuite de vos revenus potentiels.",
              },
              {
                step: "02",
                title: "Mise en place",
                description:
                  "Photos professionnelles, création des annonces optimisées, préparation du logement.",
              },
              {
                step: "03",
                title: "Gestion & Revenus",
                description:
                  "Nous gérons tout au quotidien. Vous recevez vos revenus chaque mois.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <span className="inline-block text-5xl font-semibold text-gray-200 mb-4">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold mb-3 text-[#1A1A1A]">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#FAFAFA]">
        <Container>
          <div className="text-center mb-16">
            <H2 className="mb-4">Ce que disent nos clients</H2>
            <Paragraph className="max-w-2xl mx-auto text-lg">
              Des propriétaires satisfaits qui nous font confiance.
            </Paragraph>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-gray-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#1A1A1A]">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-[#1A1A1A]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <Container size="md">
          <div className="text-center">
            <H2 className="mb-4">Prêt à maximiser vos revenus ?</H2>
            <Paragraph className="max-w-xl mx-auto text-lg mb-8">
              Contactez-nous pour une estimation gratuite et sans engagement
              de vos revenus locatifs potentiels.
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">Estimer mes revenus</Button>
              <Button variant="secondary" size="lg" leftIcon={<Phone />} asChild>
                <a href="tel:+33745105564">07 45 10 55 64</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
