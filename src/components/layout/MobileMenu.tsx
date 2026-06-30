import { Button } from "@/components/ui/Button";
import { ITENS_NAVEGACAO } from "@/data/navegacao";
import { MENSAGEM_WHATSAPP_PADRAO } from "@/data/contato";
import { gerarLinkWhatsApp } from "@/lib/whatsapp";

type MobileMenuProps = {
  onNavigate: () => void;
};

export function MobileMenu({ onNavigate }: MobileMenuProps) {
  return (
    <nav className="border-t border-gray-100 bg-white px-4 pb-6 pt-2 lg:hidden">
      <ul className="flex flex-col">
        {ITENS_NAVEGACAO.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={onNavigate}
              className="block py-3 text-base font-medium text-gray-700 hover:text-brand-pink"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <Button
        href={gerarLinkWhatsApp(MENSAGEM_WHATSAPP_PADRAO)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 w-full"
        onClick={onNavigate}
      >
        Agende sua avaliação
      </Button>
    </nav>
  );
}
