import { TELEFONE_WHATSAPP } from "@/data/contato";

export function gerarLinkWhatsApp(mensagem: string): string {
  return `https://wa.me/${TELEFONE_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}
