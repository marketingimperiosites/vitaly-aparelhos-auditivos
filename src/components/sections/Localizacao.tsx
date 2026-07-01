import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EMAIL, ENDERECO, MENSAGEM_WHATSAPP_PADRAO, TELEFONE_EXIBICAO } from "@/data/contato";
import { gerarLinkWhatsApp } from "@/lib/whatsapp";

const QUERY_MAPA = encodeURIComponent(
  `${ENDERECO.linha1} - ${ENDERECO.linha2}, ${ENDERECO.cidade} - ${ENDERECO.uf}`,
);
const MAPA_EMBED_SRC = `https://www.google.com/maps?q=${QUERY_MAPA}&output=embed`;
const MAPA_LINK_EXTERNO = `https://www.google.com/maps/search/?api=1&query=${QUERY_MAPA}`;

export function Localizacao() {
  return (
    <section id="localizacao" className="py-16 sm:py-20 lg:py-24">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading eyebrow="Onde estamos" title="Venha nos visitar" />

        <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-center gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-3">
              <span className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white shadow-md">
                <MapPin size={30} strokeWidth={2.25} />
              </span>
              <p className="text-base text-gray-700">{ENDERECO.completo}</p>
              <a
                href={MAPA_LINK_EXTERNO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-pink"
              >
                Abrir no Google Maps
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 text-sm text-gray-700">
              <a
                href={gerarLinkWhatsApp(MENSAGEM_WHATSAPP_PADRAO)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-brand-pink"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-pink to-brand-pink-dark text-white shadow-sm">
                  <Phone size={20} strokeWidth={2.25} />
                </span>
                {TELEFONE_EXIBICAO}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 hover:text-brand-pink"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-pink to-brand-pink-dark text-white shadow-sm">
                  <Mail size={20} strokeWidth={2.25} />
                </span>
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="min-h-80 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <iframe
              src={MAPA_EMBED_SRC}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Vitaly Aparelhos Auditivos no mapa"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
