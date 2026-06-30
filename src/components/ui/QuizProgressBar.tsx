type QuizProgressBarProps = {
  atual: number;
  total: number;
};

export function QuizProgressBar({ atual, total }: QuizProgressBarProps) {
  const porcentagem = Math.round((atual / total) * 100);

  return (
    <div className="flex flex-col gap-2">
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-brand-pink transition-all duration-300"
          style={{ width: `${porcentagem}%` }}
        />
      </div>
      <span className="text-xs font-medium text-gray-500">
        Pergunta {atual} de {total}
      </span>
    </div>
  );
}
