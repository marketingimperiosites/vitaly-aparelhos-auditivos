import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/shared/WhatsAppFloatingButton";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { GA_ID, GTM_ID } from "@/lib/analytics";
import { gerarJsonLdLocalBusiness } from "@/lib/seo";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const DESCRICAO_SITE =
  "Clínica de aparelhos auditivos em Goiânia. Avaliação auditiva, adaptação e acompanhamento contínuo com fonoaudióloga especializada há mais de 10 anos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Avaliação e adaptação de aparelhos auditivos em Goiânia`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRICAO_SITE,
  keywords: [
    "aparelho auditivo",
    "fonoaudióloga",
    "perda auditiva",
    "avaliação auditiva",
    "zumbido",
    "Goiânia",
    "Setor Bueno",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} | Avaliação e adaptação de aparelhos auditivos em Goiânia`,
    description: DESCRICAO_SITE,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Avaliação e adaptação de aparelhos auditivos em Goiânia`,
    description: DESCRICAO_SITE,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = gerarJsonLdLocalBusiness();

  return (
    <html lang="pt-BR" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <GoogleTagManager gtmId={GTM_ID} />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
        <GoogleAnalytics gaId={GA_ID} />
      </body>
    </html>
  );
}
