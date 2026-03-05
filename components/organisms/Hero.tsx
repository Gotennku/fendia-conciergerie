import Image from 'next/image'
import { Container, H1, Lead } from '@/components/atoms'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-1.webp"
          alt="Appartement moderne"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <H1 className="mb-6">
            Nous gérons votre Airbnb,<br />
            <span className="text-gray-500">vous profitez de vos revenus.</span>
          </H1>

          <Lead className="mb-8 max-w-xl">
            Confiez la gestion complète de votre location courte durée à des experts.
            De la création d&apos;annonce à l&apos;accueil des voyageurs, on s&apos;occupe de tout.
          </Lead>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg">
              Estimer mes revenus
            </Button>
            <Button variant="secondary" size="lg">
              Découvrir nos services
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            <div className="flex flex-wrap gap-8 text-sm text-gray-600">
              <div>
                <span className="block text-2xl font-semibold text-[#1A1A1A]">20%</span>
                de commission uniquement
              </div>
              <div>
                <span className="block text-2xl font-semibold text-[#1A1A1A]">5+</span>
                communes couvertes
              </div>
              <div>
                <span className="block text-2xl font-semibold text-[#1A1A1A]">24/7</span>
                support client
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
