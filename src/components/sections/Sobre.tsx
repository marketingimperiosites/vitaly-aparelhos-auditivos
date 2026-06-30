import { Heart, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const DESTAQUES = [
  {
    icon: Sparkles,
    titulo: "+10 anos de experiência",
    descricao: "Atuação dedicada à adaptação de aparelhos auditivos.",
  },
  {
    icon: Heart,
    titulo: "Atendimento humanizado",
    descricao: "Cada paciente é único, com necessidades e histórias diferentes.",
  },
  {
    icon: Users,
    titulo: "Acompanhamento contínuo",
    descricao: "Cuidado que vai além da entrega do aparelho auditivo.",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow="Sobre a Vitaly"
          title="Uma fonoaudióloga que devolve mais do que audição"
        />

        <div className="flex max-w-3xl flex-col gap-4 text-center text-base text-gray-600 sm:text-lg">
          <p>
            A Vitaly nasceu do sonho da fonoaudióloga Lauana Lima da Cruz, que
            iniciou seu trabalho na adaptação de aparelhos auditivos há mais
            de 10 anos. Ao longo dessa trajetória, ela desenvolveu um olhar
            único e humano, voltado para a real necessidade de cada paciente
            — reconhecendo que cada pessoa enfrenta suas dificuldades de um
            jeito diferente.
          </p>
          <p>
            A missão da Vitaly nasceu do desejo de devolver algo que muita
            gente perde aos poucos, sem perceber: a conexão com quem ama. Ao
            longo dos anos, a equipe acompanhou histórias de pacientes que
            voltaram a sorrir, abraçar e conviver plenamente com a família.
          </p>
          <p>
            Para a Vitaly, ouvir vai muito além de sons — é criar momentos,
            fortalecer memórias e relacionamentos. É com esse propósito que a
            equipe trabalha todos os dias, com dedicação, acolhimento e
            carinho, ajudando cada pessoa a redescobrir os sons que tornam a
            vida mais completa.
          </p>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-3">
          {DESTAQUES.map(({ icon: Icon, titulo, descricao }) => (
            <div
              key={titulo}
              className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-light text-brand-blue">
                <Icon size={24} />
              </span>
              <h3 className="font-semibold text-brand-blue">{titulo}</h3>
              <p className="text-sm text-gray-600">{descricao}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
