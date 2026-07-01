import { RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { gerarLinkWhatsApp, montarResumoRespostasQuiz } from "@/lib/whatsapp";
import type { RespostaUsuario } from "@/types/quiz";

type QuizResultProps = {
  respostas: RespostaUsuario[];
  pontuacaoMaxima: number;
  onReiniciar: () => void;
};

function obterMensagemResultado(percentual: number) {
  if (percentual < 0.3) {
    return "Seus resultados não indicam sinais relevantes de perda auditiva no momento. Mesmo assim, fique atento e procure uma avaliação caso perceba mudanças.";
  }

  if (percentual < 0.6) {
    return "Seus resultados sugerem alguns sinais de atenção. Uma avaliação auditiva pode esclarecer melhor a sua situação.";
  }

  return "Seus resultados indicam vários sinais que merecem atenção. Recomendamos agendar uma avaliação auditiva o quanto antes.";
}

export function QuizResult({ respostas, pontuacaoMaxima, onReiniciar }: QuizResultProps) {
  const pontuacao = respostas.reduce((soma, r) => soma + r.opcaoEscolhida.peso, 0);
  const percentual = pontuacaoMaxima > 0 ? pontuacao / pontuacaoMaxima : 0;
  const mensagemResultado = obterMensagemResultado(percentual);

  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm sm:p-10">
      <span className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-gradient-to-br from-brand-pink to-brand-pink-dark text-white shadow-md">
        <Sparkles size={30} strokeWidth={2.25} />
      </span>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-brand-blue">Teste concluído!</h3>
        <p className="max-w-md text-sm text-gray-600">{mensagemResultado}</p>
        <p className="max-w-md text-xs text-gray-400">
          Este teste não substitui uma avaliação profissional. O diagnóstico só pode
          ser feito por uma fonoaudióloga.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          href={gerarLinkWhatsApp(montarResumoRespostasQuiz(respostas))}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar avaliação pelo WhatsApp
        </Button>
        <Button variant="outline" onClick={onReiniciar}>
          <RotateCcw size={18} />
          Refazer o teste
        </Button>
      </div>
    </div>
  );
}
