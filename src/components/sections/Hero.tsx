import { HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/shared/Logo";
import { MENSAGEM_WHATSAPP_AGENDAR } from "@/data/contato";
import { gerarLinkWhatsApp } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-b from-brand-blue-light/60 via-white to-white"
    >
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-pink-light px-4 py-1.5 text-sm font-semibold text-brand-pink-dark">
            <HeartHandshake size={16} />
            +10 anos cuidando da audição com carinho
          </span>

          <h1 className="text-4xl font-bold leading-tight text-brand-blue sm:text-5xl">
            Reconecte-se com quem você ama
          </h1>

          <p className="max-w-xl text-lg text-gray-600">
            Avaliação auditiva, seleção e acompanhamento contínuo com uma
            fonoaudióloga especializada. Cuidado humano para você voltar a
            ouvir os sons que tornam a vida mais completa.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              href={gerarLinkWhatsApp(MENSAGEM_WHATSAPP_AGENDAR)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agende sua avaliação
            </Button>
            <Button variant="outline" href="#teste-audicao">
              Fazer teste rápido de audição
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex h-64 w-64 items-center justify-center rounded-full bg-white shadow-xl shadow-brand-blue/10 sm:h-80 sm:w-80">
            <Logo priority className="h-48 w-48 sm:h-60 sm:w-60" />
          </div>
        </div>
      </Container>
    </section>
  );
}
