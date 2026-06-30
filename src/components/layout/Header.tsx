"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoIcon } from "@/components/shared/Logo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ITENS_NAVEGACAO } from "@/data/navegacao";
import { MENSAGEM_WHATSAPP_AGENDAR } from "@/data/contato";
import { gerarLinkWhatsApp } from "@/lib/whatsapp";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a href="#inicio" className="flex shrink-0 items-center gap-2">
          <LogoIcon priority className="h-9 sm:h-11" />
          <span className="text-xl font-bold text-brand-pink sm:text-2xl">Vitaly</span>
        </a>

        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          {ITENS_NAVEGACAO.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-brand-pink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href={gerarLinkWhatsApp(MENSAGEM_WHATSAPP_AGENDAR)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm"
          >
            Agende sua avaliação
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((aberto) => !aberto)}
          className="flex h-11 w-11 items-center justify-center text-brand-blue lg:hidden"
        >
          {menuAberto ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {menuAberto && <MobileMenu onNavigate={() => setMenuAberto(false)} />}
    </header>
  );
}
