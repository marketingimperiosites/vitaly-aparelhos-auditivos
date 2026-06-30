import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { FacebookIcon } from "@/components/shared/FacebookIcon";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { Container } from "@/components/ui/Container";
import { ITENS_NAVEGACAO } from "@/data/navegacao";
import {
  EMAIL,
  ENDERECO,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  MENSAGEM_WHATSAPP_PADRAO,
  TELEFONE_EXIBICAO,
} from "@/data/contato";
import { gerarLinkWhatsApp } from "@/lib/whatsapp";

export function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-brand-blue text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Logo variant="full" light />
          <p className="text-sm text-white/80">
            Cuidado e tecnologia para você reconectar com quem ama.
          </p>
          <div className="flex gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Vitaly"
              className="text-white/80 transition-colors hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Vitaly"
              className="text-white/80 transition-colors hover:text-white"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-pink-light">
            Navegação
          </h3>
          <ul className="flex flex-col gap-2">
            {ITENS_NAVEGACAO.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-white/80 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-pink-light">
            Contato
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <Phone size={18} className="mt-0.5 shrink-0" />
              <a
                href={gerarLinkWhatsApp(MENSAGEM_WHATSAPP_PADRAO)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {TELEFONE_EXIBICAO}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={18} className="mt-0.5 shrink-0" />
              <a href={`mailto:${EMAIL}`} className="hover:text-white">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-pink-light">
            Endereço
          </h3>
          <p className="flex items-start gap-2 text-sm text-white/80">
            <MapPin size={18} className="mt-0.5 shrink-0" />
            <span>{ENDERECO.completo}</span>
          </p>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="text-center text-xs text-white/60">
            © {anoAtual} Vitaly Aparelhos Auditivos. Todos os direitos reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}
