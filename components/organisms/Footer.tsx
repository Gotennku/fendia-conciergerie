import Link from 'next/link'
import Image from 'next/image'
import { Container, Small } from '@/components/atoms'

const navigation = {
  services: [
    { name: 'Formule Tout Compris', href: '/services#tout-compris' },
    { name: 'Formule À la Carte', href: '/services#a-la-carte' },
    { name: 'Zones couvertes', href: '/zones' },
  ],
  company: [
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/confidentialite' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-gray-200">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo & Info */}
            <div className="md:col-span-1">
              <Image
                src="/logo.jpg"
                alt="Fendia Conciergerie"
                width={120}
                height={50}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Votre partenaire de confiance pour la gestion de vos locations Airbnb en région parisienne.
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>57 Boulevard Foch</p>
                <p>93800 Épinay-sur-Seine</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-500 hover:text-foreground text-sm transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Entreprise */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Entreprise</h4>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-500 hover:text-foreground text-sm transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>
                  <a href="tel:+33745105564" className="hover:text-foreground transition-colors">
                    07 45 10 55 64
                  </a>
                </li>
                <li>
                  <a href="mailto:larochelle.fendia@gmail.com" className="hover:text-foreground transition-colors">
                    larochelle.fendia@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/33745105564"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <Small>© {new Date().getFullYear()} Fendia Conciergerie. Tous droits réservés.</Small>
          <div className="flex gap-6">
            {navigation.legal.map((item) => (
              <Link key={item.name} href={item.href}>
                <Small className="hover:text-foreground transition-colors">{item.name}</Small>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
