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
      className="relative overflow-hidden bg-gradient-to-b from-brand-blue-light/60 via-white to-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-pink/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand-blue/20 blur-3xl" />
        <svg
          className="absolute inset-x-0 bottom-0 h-32 w-full text-brand-blue/10 sm:h-40"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 120 C 120 40, 240 40, 360 120 C 480 200, 600 200, 720 120 C 840 40, 960 40, 1080 120 C 1200 200, 1320 200, 1440 120"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
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
          <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
            <svg
              className="absolute inset-0 h-full w-full text-brand-pink/15"
              viewBox="0 0 400 400"
              fill="none"
            >
              <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-brand-pink/20 to-brand-blue/20 blur-2xl" />
            <div className="relative flex h-full w-full items-center justify-center rounded-full bg-white shadow-xl shadow-brand-blue/10 ring-1 ring-brand-blue/5">
              <Logo priority className="h-48 w-48 sm:h-60 sm:w-60" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
