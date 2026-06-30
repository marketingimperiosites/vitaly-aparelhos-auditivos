import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicoCard } from "@/components/ui/ServicoCard";
import { SERVICOS } from "@/data/servicos";

export function Servicos() {
  return (
    <section id="servicos" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow="Nossos serviços"
          title="Cuidado completo, do diagnóstico ao acompanhamento"
          subtitle="Tudo o que você precisa para recuperar sua audição e qualidade de vida, em um só lugar."
        />
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICOS.map((servico) => (
            <ServicoCard key={servico.titulo} {...servico} />
          ))}
        </div>
      </Container>
    </section>
  );
}
