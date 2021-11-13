
import { Tarefa } from "./model/tarefa";


export interface ITarefaService {

   adicionarTarefa(tarefa: Tarefa): void;

   obterTarefa(tarefaId: number): Tarefa;

   atualizarTarefa(tarefa: Tarefa): void;

   obterTarefas(): Tarefa[];

   excluirTarefa(tarefaId: number): void;
}