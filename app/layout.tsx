import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Header, Footer } from "@/components/organisms"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Fendia Conciergerie | Gestion Airbnb Paris & Val d'Oise",
    template: "%s | Fendia Conciergerie",
  },
  description:
    "Confiez la gestion de votre Airbnb à des experts. Conciergerie complète : annonces, accueil voyageurs, ménage. Paris & banlieue nord.",
  keywords: [
    "conciergerie airbnb",
    "gestion airbnb paris",
    "conciergerie val d'oise",
    "location courte durée",
    "gestion locative airbnb",
  ],
  authors: [{ name: "Fendia Conciergerie" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://fendiaconciergerie.com",
    siteName: "Fendia Conciergerie",
    title: "Fendia Conciergerie | Gestion Airbnb Paris & Val d'Oise",
    description:
      "Confiez la gestion de votre Airbnb à des experts. Conciergerie complète : annonces, accueil voyageurs, ménage.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
