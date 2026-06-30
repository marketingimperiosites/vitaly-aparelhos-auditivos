import { Award, Ear, Headphones, HeartHandshake, Home, Stethoscope } from "lucide-react";
import type { Servico } from "@/types/servico";

export const SERVICOS: Servico[] = [
  {
    icon: Home,
    titulo: "Atendimento domiciliar",
    descricao:
      "Adaptação realizada no conforto do lar do paciente, otimizando tempo, reduzindo dificuldades de locomoção e considerando o ambiente real de convívio.",
  },
  {
    icon: Stethoscope,
    titulo: "Exame auditivo",
    descricao: "Avaliação completa da audição realizada por profissional especializado.",
  },
  {
    icon: Headphones,
    titulo: "Seleção e adaptação do aparelho",
    descricao:
      "Processo conduzido por fonoaudióloga, focado na real necessidade do paciente e em seu estilo de vida.",
  },
  {
    icon: HeartHandshake,
    titulo: "Acompanhamento vitalício",
    descricao:
      "Acompanhamento contínuo, não apenas na seleção do aparelho, mas durante toda a jornada de adaptação do paciente.",
  },
  {
    icon: Award,
    titulo: "Próteses auditivas",
    descricao:
      "Trabalho com as melhores marcas do mercado — aparelhos discretos, modernos e tecnológicos para diferentes necessidades.",
  },
  {
    icon: Ear,
    titulo: "Zumbido",
    descricao: "Protocolo exclusivo de acompanhamento próximo para tratamento do zumbido.",
  },
];
