import { Container, H1, H2, Paragraph } from "@/components/atoms"
import { Button } from "@/components/ui/button"
import { Check, Phone } from "lucide-react"

const formules = [
  {
    name: "Formule Tout Compris",
    description: "Déléguez entièrement la gestion de votre bien. Nous nous occupons de tout, de A à Z.",
    commission: "20%",
    features: [
      "Création et optimisation des annonces",
      "Photos professionnelles",
      "Tarification dynamique",
      "Gestion des réservations 24/7",
      "Communication avec les voyageurs",
      "Accueil et remise des clés",
      "Ménage professionnel après chaque séjour",
      "Linge de maison fourni et géré",
      "Maintenance et petites réparations",
      "Rapport mensuel détaillé",
    ],
    highlighted: true,
  },
  {
    name: "Formule À la Carte",
    description: "Choisissez uniquement les services dont vous avez besoin. Flexibilité totale.",
    commission: "Sur devis",
    features: [
      "Ménage à la demande",
      "Accueil voyageurs ponctuel",
      "Gestion des annonces",
      "Photographie professionnelle",
      "Conseil en décoration",
      "Assistance administrative",
    ],
    highlighted: false,
  },
]

const services = [
  {
    title: "Création d'annonce",
    description: "Rédaction optimisée, photos professionnelles, mise en valeur de votre bien pour maximiser les réservations.",
  },
  {
    title: "Gestion des réservations",
    description: "Communication avec les voyageurs, validation des réservations, gestion des calendriers multi-plateformes.",
  },
  {
    title: "Accueil des voyageurs",
    description: "Check-in et check-out personnalisés, remise des clés, présentation du logement et des équipements.",
  },
  {
    title: "Ménage professionnel",
    description: "Nettoyage complet entre chaque séjour, vérification de l'état du logement, réassort des consommables.",
  },
  {
    title: "Gestion du linge",
    description: "Fourniture, lavage et remplacement du linge de maison : draps, serviettes, torchons.",
  },
  {
    title: "Maintenance",
    description: "Interventions rapides pour les petites réparations, coordination avec les artisans si nécessaire.",
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <H1 className="mb-6">Nos Services</H1>
            <Paragraph className="text-lg">
              Une gestion complète et sur-mesure de votre location courte durée.
              Nous nous adaptons à vos besoins pour maximiser vos revenus.
            </Paragraph>
          </div>
        </Container>
      </section>

      {/* Formules Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <H2 className="mb-4">Nos Formules</H2>
            <Paragraph className="max-w-2xl mx-auto text-lg">
              Deux offres adaptées à vos besoins et à votre niveau d&apos;implication souhaité.
            </Paragraph>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {formules.map((formule, index) => (
              <div
                key={index}
                className={`p-8 md:p-10 border-2 ${
                  formule.highlighted
                    ? "border-[#1A1A1A] bg-white"
                    : "border-gray-200 bg-white"
                }`}
              >
                {formule.highlighted && (
                  <span className="inline-block bg-[#1A1A1A] text-white text-xs px-3 py-1 mb-4">
                    Recommandé
                  </span>
                )}
                <h3 className="text-2xl font-semibold mb-2 text-[#1A1A1A]">
                  {formule.name}
                </h3>
                <p className="text-gray-500 mb-4">{formule.description}</p>
                <p className="text-3xl font-semibold text-[#1A1A1A] mb-6">
                  {formule.commission}
                  {formule.commission !== "Sur devis" && (
                    <span className="text-base font-normal text-gray-500"> de commission</span>
                  )}
                </p>
                <ul className="space-y-3 mb-8">
                  {formule.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <Check className="size-5 text-[#1A1A1A] mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={formule.highlighted ? "default" : "outline"}
                  fullWidth
                >
                  Choisir cette formule
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services détaillés */}
      <section className="py-24 bg-[#FAFAFA]">
        <Container>
          <div className="text-center mb-16">
            <H2 className="mb-4">Tous nos services</H2>
            <Paragraph className="max-w-2xl mx-auto text-lg">
              Un accompagnement complet pour une gestion sans souci.
            </Paragraph>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3 text-[#1A1A1A]">
                  {service.title}
                </h3>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <Container size="md">
          <div className="text-center">
            <H2 className="mb-4">Prêt à nous confier votre bien ?</H2>
            <Paragraph className="max-w-xl mx-auto text-lg mb-8">
              Contactez-nous pour une estimation gratuite et sans engagement.
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">Demander un devis</Button>
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
