import "@/app/globals.css";
import Navbar
  from "@/components/layout/navbar";

import Footer
  from "@/components/layout/footer";

import type { Viewport } from "next";

import { ThemeProvider } from "@/providers/theme-provider";
import GoogleAnalytics from "@/analytics/google-analytics";
import WhatsAppButton from "@/components/ui/button/WhatsAppButton"

import { baseMetadata } from "@/seo/metadata";
import { openGraphMetadata, twitterMetadata } from "@/seo/open-graph";
import { getSchemaScript } from "@/seo/schema";

export const metadata = {
  ...baseMetadata,
  openGraph: openGraphMetadata,
  twitter: twitterMetadata,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C8A96A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: getSchemaScript(),
          }}
        />
      </head>

      <body className="antialiased min-h-screen">
        <GoogleAnalytics />

        <ThemeProvider>
          <Navbar />

          {children}

          <Footer />
        </ThemeProvider>

        {/* Botón flotante de WhatsApp — fuera del ThemeProvider para máxima especificidad de z-index */}
        <WhatsAppButton
          phone="573001234567"
          message="Hola, me gustaría obtener más información."
        />
      </body>
    </html>
  );
}