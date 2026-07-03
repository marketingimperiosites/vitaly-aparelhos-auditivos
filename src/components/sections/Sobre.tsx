import Image from "next/image";
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
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-8">
          <SectionHeading
            align="left"
            eyebrow="Sobre a Vitaly"
            title="Cuidado que vai além da audição"
          />

          <div className="flex flex-col gap-4 text-sm text-gray-600">
            <p>
              A Vitaly nasceu do sonho da fonoaudióloga Lauana Lima da Cruz,
              que iniciou seu trabalho na adaptação de aparelhos auditivos há
              mais de 10 anos. Ao longo dessa trajetória, ela desenvolveu um
              olhar único e humano, voltado para a real necessidade de cada
              paciente — reconhecendo que cada pessoa enfrenta suas
              dificuldades de um jeito diferente.
            </p>
            <p>
              A missão da Vitaly nasceu do desejo de devolver algo que muita
              gente perde aos poucos, sem perceber: a conexão com quem ama. Ao
              longo dos anos, a equipe acompanhou histórias de pacientes que
              voltaram a sorrir, abraçar e conviver plenamente com a família.
            </p>
            <p>
              Para a Vitaly, ouvir vai muito além de sons — é criar momentos,
              fortalecer memórias e relacionamentos. É com esse propósito que
              a equipe trabalha todos os dias, com dedicação, acolhimento e
              carinho, ajudando cada pessoa a redescobrir os sons que tornam a
              vida mais completa.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {DESTAQUES.map(({ icon: Icon, titulo, descricao }, index) => (
              <div key={titulo} className="flex items-start gap-4">
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-md ${
                    index % 2 === 0
                      ? "bg-gradient-to-br from-brand-blue to-brand-blue-dark"
                      : "bg-gradient-to-br from-brand-pink to-brand-pink-dark"
                  }`}
                >
                  <Icon size={26} strokeWidth={2.25} />
                </span>
                <div>
                  <h3 className="font-semibold text-brand-blue">{titulo}</h3>
                  <p className="text-sm text-gray-600">{descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="flex w-full max-w-md flex-col items-center gap-4">
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
              <Image
                src="/sobre/lauana.jpg"
                alt="Lauana Lima da Cruz, fonoaudióloga responsável pela Vitaly"
                fill
                sizes="(min-width: 1024px) 448px, 100vw"
                className="object-cover"
              />
            </div>
            <p className="text-center text-sm text-gray-500">
              Lauana Lima da Cruz — Fonoaudióloga responsável
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
