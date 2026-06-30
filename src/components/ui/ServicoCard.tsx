import type { Servico } from "@/types/servico";

export function ServicoCard({ icon: Icon, titulo, descricao }: Servico) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-pink-light text-brand-pink">
        <Icon size={24} />
      </span>
      <h3 className="text-lg font-semibold text-brand-blue">{titulo}</h3>
      <p className="text-sm text-gray-600">{descricao}</p>
    </div>
  );
}
