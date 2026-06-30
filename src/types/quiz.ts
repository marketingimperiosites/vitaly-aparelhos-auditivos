export type Opcao = {
  id: string;
  texto: string;
  peso: number;
};

export type Pergunta = {
  id: string;
  texto: string;
  opcoes: Opcao[];
};

export type RespostaUsuario = {
  perguntaId: string;
  perguntaTexto: string;
  opcaoEscolhida: Opcao;
};
