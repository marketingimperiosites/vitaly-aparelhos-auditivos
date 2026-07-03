import { Quote } from "lucide-react";
import { EstrelasAvaliacao } from "@/components/ui/EstrelasAvaliacao";
import type { Avaliacao } from "@/types/avaliacao";

export function AvaliacaoCard({ nome, nota, texto }: Avaliacao) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <EstrelasAvaliacao nota={nota} />
        <Quote size={22} className="shrink-0 text-brand-pink-light" />
      </div>
      <p className="flex-1 text-sm text-gray-600">{texto}</p>
      <p className="font-semibold text-brand-blue">{nome}</p>
    </div>
  );
}
