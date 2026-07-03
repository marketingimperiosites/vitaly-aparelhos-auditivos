import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EstrelasAvaliacao } from "@/components/ui/EstrelasAvaliacao";
import { AvaliacaoCard } from "@/components/ui/AvaliacaoCard";
import { GoogleIcon } from "@/components/shared/GoogleIcon";
import {
  AVALIACOES,
  LINK_AVALIACOES_GOOGLE,
  NOTA_MEDIA_GOOGLE,
  TOTAL_AVALIACOES_GOOGLE,
} from "@/data/avaliacoes";

export function Avaliacoes() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow="Avaliações"
          title="Quem já passou pela Vitaly, recomenda"
          subtitle="Depoimentos reais de pacientes, direto do nosso perfil no Google."
        />

        <div className="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white px-6 py-4 shadow-sm sm:flex-row sm:gap-4">
          <span className="flex items-center gap-2 text-brand-blue">
            <GoogleIcon className="h-6 w-6" />
            <span className="text-2xl font-bold">{NOTA_MEDIA_GOOGLE.toFixed(1).replace(".", ",")}</span>
          </span>
          <EstrelasAvaliacao nota={5} size={20} />
          <span className="text-sm text-gray-500">
            {TOTAL_AVALIACOES_GOOGLE} avaliações no Google
          </span>
          <a
            href={LINK_AVALIACOES_GOOGLE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-pink sm:ml-2"
          >
            Ver todas
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AVALIACOES.map((avaliacao) => (
            <AvaliacaoCard key={avaliacao.nome} {...avaliacao} />
          ))}
        </div>
      </Container>
    </section>
  );
}
