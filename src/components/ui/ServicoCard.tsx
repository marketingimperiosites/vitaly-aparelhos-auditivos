import type { Servico } from "@/types/servico";

type ServicoCardProps = Servico & {
  variante?: "pink" | "blue";
};

const GRADIENTES = {
  pink: "bg-gradient-to-br from-brand-pink to-brand-pink-dark",
  blue: "bg-gradient-to-br from-brand-blue to-brand-blue-dark",
};

export function ServicoCard({ icon: Icon, titulo, descricao, variante = "pink" }: ServicoCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <span
        className={`flex h-[60px] w-[60px] items-center justify-center rounded-2xl text-white shadow-md ${GRADIENTES[variante]}`}
      >
        <Icon size={30} strokeWidth={2.25} />
      </span>
      <h3 className="text-lg font-semibold text-brand-blue">{titulo}</h3>
      <p className="text-sm text-gray-600">{descricao}</p>
    </div>
  );
}
