import { ChevronDown } from "lucide-react";

type AccordionItemProps = {
  id: string;
  pergunta: string;
  resposta: string;
  isOpen: boolean;
  onToggle: () => void;
};

export function AccordionItem({ id, pergunta, resposta, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-painel-${id}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <h3 className="font-semibold text-brand-blue">{pergunta}</h3>
        <ChevronDown
          size={20}
          className={`shrink-0 text-brand-pink transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={`faq-painel-${id}`}
        role="region"
        className={`grid overflow-hidden transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-sm text-gray-600">{resposta}</p>
      </div>
    </div>
  );
}
