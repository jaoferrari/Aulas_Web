type Tarefa = {
  descricao: string;
  prioridade: number;
  concluida: boolean;
};

const tarefas: Tarefa[] = [
  { descricao: "Fazer relatório", prioridade: 2, concluida: false },
  { descricao: "Enviar e-mail", prioridade: 3, concluida: false },
  { descricao: "Reunião com equipe", prioridade: 1, concluida: false }
];

function imprimirTarefa(descricao: string, indice: number, totalTarefas: number): void {
  console.log(`Tarefa concluída: ${descricao}`);
  console.log(`Progresso: ${indice + 1}/${totalTarefas}`);
}

function executarTarefas(
  tarefas: Tarefa[],
  callback: (descricao: string, indice: number, total: number) => void,
  intervalo: number = 1000
): void {
  const ordenadas = [...tarefas].sort((a, b) => a.prioridade - b.prioridade);
  const total = ordenadas.length;
  let indice = 0;

  const executarProxima = (): void => {
    if (indice >= total) return;

    const tarefaAtual = ordenadas[indice];
    if (!tarefaAtual) return;

    if (tarefaAtual.descricao === "Cancelar") {
      console.log("Execução interrompida: tarefa Cancelar encontrada.");
      return;
    }

    tarefaAtual.concluida = true;
    callback(tarefaAtual.descricao, indice, total);
    indice++;

    if (indice < total) {
      setTimeout(executarProxima, intervalo);
    }
  };

  setTimeout(executarProxima, intervalo);
}

executarTarefas(tarefas, imprimirTarefa, 1500);