import { TELEFONE_WHATSAPP } from "@/data/contato";
import type { RespostaUsuario } from "@/types/quiz";

export function gerarLinkWhatsApp(mensagem: string): string {
  return `https://wa.me/${TELEFONE_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}

export function montarResumoRespostasQuiz(respostas: RespostaUsuario[]): string {
  const linhas = respostas
    .map((r, i) => `${i + 1}. ${r.perguntaTexto} — ${r.opcaoEscolhida.texto}`)
    .join("\n");

  return `Olá! Fiz o teste rápido de audição no site da Vitaly e gostaria de agendar uma avaliação.\n\nMinhas respostas:\n${linhas}`;
}
