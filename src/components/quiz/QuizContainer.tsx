"use client";

import { useState } from "react";
import { QuizStartScreen } from "@/components/quiz/QuizStartScreen";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizResult } from "@/components/quiz/QuizResult";
import { PERGUNTAS_QUIZ } from "@/data/quiz-perguntas";
import type { Opcao, RespostaUsuario } from "@/types/quiz";

type Fase = "inicio" | "perguntas" | "resultado";

const PONTUACAO_MAXIMA = PERGUNTAS_QUIZ.reduce(
  (soma, pergunta) => soma + Math.max(...pergunta.opcoes.map((o) => o.peso)),
  0,
);

export function QuizContainer() {
  const [fase, setFase] = useState<Fase>("inicio");
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [respostas, setRespostas] = useState<RespostaUsuario[]>([]);

  function responderPergunta(opcao: Opcao) {
    const pergunta = PERGUNTAS_QUIZ[indiceAtual];
    const novasRespostas = [
      ...respostas,
      { perguntaId: pergunta.id, perguntaTexto: pergunta.texto, opcaoEscolhida: opcao },
    ];
    setRespostas(novasRespostas);

    if (indiceAtual + 1 < PERGUNTAS_QUIZ.length) {
      setIndiceAtual(indiceAtual + 1);
    } else {
      setFase("resultado");
    }
  }

  function reiniciar() {
    setFase("inicio");
    setIndiceAtual(0);
    setRespostas([]);
  }

  if (fase === "inicio") {
    return (
      <QuizStartScreen
        totalPerguntas={PERGUNTAS_QUIZ.length}
        onIniciar={() => setFase("perguntas")}
      />
    );
  }

  if (fase === "perguntas") {
    return (
      <QuizQuestion
        pergunta={PERGUNTAS_QUIZ[indiceAtual]}
        indiceAtual={indiceAtual + 1}
        total={PERGUNTAS_QUIZ.length}
        onResponder={responderPergunta}
      />
    );
  }

  return (
    <QuizResult
      respostas={respostas}
      pontuacaoMaxima={PONTUACAO_MAXIMA}
      onReiniciar={reiniciar}
    />
  );
}
