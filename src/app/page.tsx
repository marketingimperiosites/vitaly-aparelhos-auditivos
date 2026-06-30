import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gerarLinkWhatsApp } from "@/lib/whatsapp";
import { MENSAGEM_WHATSAPP_PADRAO } from "@/data/contato";

export default function Home() {
  return (
    <main className="flex flex-1 items-center py-24">
      <Container>
        <SectionHeading
          eyebrow="Vitaly Aparelhos Auditivos"
          title="Base do projeto configurada"
          subtitle="Cores, fonte e componentes utilitários prontos. As seções completas da página entram no próximo passo."
        />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={gerarLinkWhatsApp(MENSAGEM_WHATSAPP_PADRAO)} target="_blank" rel="noopener noreferrer">
            Botão primário
          </Button>
          <Button variant="outline" href="#">
            Botão outline
          </Button>
        </div>
      </Container>
    </main>
  );
}
