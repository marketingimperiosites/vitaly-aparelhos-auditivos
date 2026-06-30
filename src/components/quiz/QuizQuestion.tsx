import { QuizProgressBar } from "@/components/ui/QuizProgressBar";
import type { Opcao, Pergunta } from "@/types/quiz";

type QuizQuestionProps = {
  pergunta: Pergunta;
  indiceAtual: number;
  total: number;
  onResponder: (opcao: Opcao) => void;
};

export function QuizQuestion({ pergunta, indiceAtual, total, onResponder }: QuizQuestionProps) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
      <QuizProgressBar atual={indiceAtual} total={total} />

      <fieldset className="flex flex-col gap-5">
        <legend className="text-xl font-semibold text-brand-blue">{pergunta.texto}</legend>

        <div role="radiogroup" aria-label={pergunta.texto} className="grid gap-3 sm:grid-cols-2">
          {pergunta.opcoes.map((opcao) => (
            <button
              key={opcao.id}
              type="button"
              role="radio"
              aria-checked={false}
              onClick={() => onResponder(opcao)}
              className="rounded-xl border-2 border-gray-200 px-5 py-3 text-left text-sm font-medium text-gray-700 transition-colors hover:border-brand-pink hover:bg-brand-pink-light hover:text-brand-pink-dark"
            >
              {opcao.texto}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
