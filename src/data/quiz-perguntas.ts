import type { Opcao, Pergunta } from "@/types/quiz";

const OPCOES_FREQUENCIA: Opcao[] = [
  { id: "nunca", texto: "Nunca", peso: 0 },
  { id: "as-vezes", texto: "Às vezes", peso: 1 },
  { id: "frequentemente", texto: "Frequentemente", peso: 2 },
  { id: "sempre", texto: "Sempre", peso: 3 },
];

export const PERGUNTAS_QUIZ: Pergunta[] = [
  {
    id: "repetir",
    texto: "Você pede para as pessoas repetirem o que disseram?",
    opcoes: OPCOES_FREQUENCIA,
  },
  {
    id: "volume-tv",
    texto: "Você precisa aumentar o volume da TV ou do rádio além do habitual?",
    opcoes: OPCOES_FREQUENCIA,
  },
  {
    id: "ambientes-ruidosos",
    texto:
      "Você tem dificuldade para entender conversas em ambientes ruidosos ou com várias pessoas falando ao mesmo tempo?",
    opcoes: OPCOES_FREQUENCIA,
  },
  {
    id: "ouvido-tampado",
    texto: "Você sente uma sensação de ouvido tampado ou abafado?",
    opcoes: OPCOES_FREQUENCIA,
  },
  {
    id: "sons-dia-a-dia",
    texto: "Você deixa de perceber sons do dia a dia, como toque de telefone ou campainha?",
    opcoes: OPCOES_FREQUENCIA,
  },
  {
    id: "escuta-sem-entender",
    texto: "Você sente que escuta, mas tem dificuldade para entender as palavras com clareza?",
    opcoes: OPCOES_FREQUENCIA,
  },
];
