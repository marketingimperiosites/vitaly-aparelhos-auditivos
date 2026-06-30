import { ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/Button";

type QuizStartScreenProps = {
  onIniciar: () => void;
  totalPerguntas: number;
};

export function QuizStartScreen({ onIniciar, totalPerguntas }: QuizStartScreenProps) {
  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm sm:p-10">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-pink-light text-brand-pink">
        <ClipboardList size={28} />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-brand-blue">
          {totalPerguntas} perguntas rápidas sobre o seu dia a dia
        </h3>
        <p className="max-w-md text-sm text-gray-600">
          Leva menos de um minuto. No final, você recebe uma orientação e pode
          falar direto com a Vitaly pelo WhatsApp.
        </p>
      </div>
      <Button onClick={onIniciar}>Começar o teste</Button>
    </div>
  );
}
