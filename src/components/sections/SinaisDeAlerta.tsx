import { BellOff, EarOff, Repeat2, Tv, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MENSAGEM_WHATSAPP_SINAIS } from "@/data/contato";
import { gerarLinkWhatsApp } from "@/lib/whatsapp";

const SINAIS = [
  { icon: Repeat2, texto: "Pedir para as pessoas repetirem o que disseram" },
  { icon: Tv, texto: "Aumentar o volume da TV" },
  {
    icon: Users,
    texto:
      "Dificuldade para entender em ambientes com mais de uma pessoa conversando ou em locais ruidosos",
  },
  { icon: EarOff, texto: "Sensação de ouvido tampado" },
  { icon: BellOff, texto: "Não ouvir sons do dia a dia, como telefone ou campainha" },
];

export function SinaisDeAlerta() {
  return (
    <section
      id="sinais-de-alerta"
      className="bg-gradient-to-br from-brand-blue to-brand-blue-dark py-16 sm:py-20 lg:py-24"
    >
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          light
          eyebrow="Atenção aos sinais"
          title="Sinais que podem indicar perda auditiva"
          subtitle="Você se identifica com algum desses sinais? Eles podem ser o primeiro indício de que é hora de cuidar da sua audição."
        />

        <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SINAIS.map(({ icon: Icon, texto }) => (
            <div
              key={texto}
              className="flex flex-col items-center gap-4 rounded-2xl bg-white/10 p-6 text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-pink">
                <Icon size={26} />
              </span>
              <p className="text-sm font-medium text-white">{texto}</p>
            </div>
          ))}
        </div>

        <Button
          variant="white"
          href={gerarLinkWhatsApp(MENSAGEM_WHATSAPP_SINAIS)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agende sua avaliação auditiva
        </Button>
      </Container>
    </section>
  );
}
