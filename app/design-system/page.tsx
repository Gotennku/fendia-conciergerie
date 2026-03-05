import { Button } from "@/components/ui/button"
import { Container } from "@/components/atoms"
import { Phone, Mail, ArrowRight, Download } from "lucide-react"

export default function DesignSystemPage() {
  return (
    <div className="pt-24 pb-16">
      <Container>
        <h1 className="text-4xl font-semibold mb-2">Design System</h1>
        <p className="text-gray-500 mb-12">Composants UI - Fendia Conciergerie</p>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Buttons</h2>

          {/* Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Phone /></Button>
            </div>
          </div>

          {/* With Icons */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">With Icons</h3>
            <div className="flex flex-wrap gap-4">
              <Button><Phone /> Appeler</Button>
              <Button>Continuer <ArrowRight /></Button>
              <Button variant="outline"><Mail /> Contact</Button>
              <Button variant="ghost"><Download /> Télécharger</Button>
            </div>
          </div>

          {/* States */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">States</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>

          {/* Full Width */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Full Width</h3>
            <div className="max-w-md space-y-4">
              <Button fullWidth>Full Width Default</Button>
              <Button variant="outline" fullWidth>Full Width Outline</Button>
            </div>
          </div>

          {/* Outline Sizes */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Outline + Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline" size="sm">Small</Button>
              <Button variant="outline" size="default">Default</Button>
              <Button variant="outline" size="lg">Large</Button>
            </div>
          </div>
        </section>

        {/* Color Reference */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Couleurs</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <div className="h-20 bg-[#FFFFFF] border border-gray-200 mb-2"></div>
              <p className="text-sm font-medium">White</p>
              <p className="text-xs text-gray-500">#FFFFFF</p>
            </div>
            <div>
              <div className="h-20 bg-[#FAFAFA] border border-gray-200 mb-2"></div>
              <p className="text-sm font-medium">Gray 50</p>
              <p className="text-xs text-gray-500">#FAFAFA</p>
            </div>
            <div>
              <div className="h-20 bg-[#E5E5E5] mb-2"></div>
              <p className="text-sm font-medium">Gray 200</p>
              <p className="text-xs text-gray-500">#E5E5E5</p>
            </div>
            <div>
              <div className="h-20 bg-[#737373] mb-2"></div>
              <p className="text-sm font-medium">Gray 500</p>
              <p className="text-xs text-gray-500">#737373</p>
            </div>
            <div>
              <div className="h-20 bg-[#1A1A1A] mb-2"></div>
              <p className="text-sm font-medium">Noir élégant</p>
              <p className="text-xs text-gray-500">#1A1A1A</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Typographie</h2>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Display - 60px</p>
              <p className="text-6xl font-semibold">Fendia Conciergerie</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">H1 - 48px</p>
              <p className="text-5xl font-semibold">Titre Principal</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">H2 - 36px</p>
              <p className="text-4xl font-semibold">Titre de Section</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">H3 - 24px</p>
              <p className="text-2xl font-semibold">Titre de Carte</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Body - 16px</p>
              <p className="text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Small - 14px</p>
              <p className="text-sm text-gray-500">Texte secondaire ou caption</p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
