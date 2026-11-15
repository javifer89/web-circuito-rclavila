import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WorksNotice } from "@/components/layout/works-notice";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/content/site";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Circuito de radiocontrol en Villajoyosa`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "circuito radiocontrol",
    "radiocontrol Villajoyosa",
    "RC Alicante",
    "circuito RC",
    "buggy 1/8",
    "truggy",
    "short course",
    "club radiocontrol",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · Circuito de radiocontrol en Villajoyosa`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Circuito de radiocontrol en Villajoyosa`,
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: site.legalName,
  alternateName: site.name,
  description: site.description,
  url: site.url,
  email: site.contact.email,
  telephone: site.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.town,
    addressRegion: site.address.region,
    addressCountry: "ES",
  },
  areaServed: site.address.province,
  sameAs: [site.contact.instagram, site.contact.facebook].filter(Boolean),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${barlow.variable} ${inter.variable}`}>
      <body className="flex min-h-dvh flex-col bg-asphalt text-dust">
        <JsonLd data={organisationSchema} />
        <SiteHeader />
        <WorksNotice />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsappFloat />
      </body>
    </html>
  );
}
