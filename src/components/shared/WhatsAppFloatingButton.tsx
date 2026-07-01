import { Phone } from "lucide-react";
import { MENSAGEM_WHATSAPP_PADRAO } from "@/data/contato";
import { gerarLinkWhatsApp } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={gerarLinkWhatsApp(MENSAGEM_WHATSAPP_PADRAO)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <Phone size={26} strokeWidth={2.25} className="fill-white" />
    </a>
  );
}
