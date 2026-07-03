import { EMAIL, ENDERECO, FACEBOOK_URL, INSTAGRAM_URL, TELEFONE_EXIBICAO } from "@/data/contato";
import { NOTA_MEDIA_GOOGLE, TOTAL_AVALIACOES_GOOGLE } from "@/data/avaliacoes";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export function gerarJsonLdLocalBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_NAME,
    description:
      "Clínica de aparelhos auditivos em Goiânia. Avaliação auditiva, adaptação e acompanhamento com fonoaudióloga especializada.",
    url: SITE_URL,
    telephone: TELEFONE_EXIBICAO,
    email: EMAIL,
    image: `${SITE_URL}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${ENDERECO.linha1}, ${ENDERECO.linha2}`,
      addressLocality: ENDERECO.cidade,
      addressRegion: ENDERECO.uf,
      addressCountry: "BR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: NOTA_MEDIA_GOOGLE,
      reviewCount: TOTAL_AVALIACOES_GOOGLE,
    },
    sameAs: [INSTAGRAM_URL, FACEBOOK_URL].filter(Boolean),
  };
}
