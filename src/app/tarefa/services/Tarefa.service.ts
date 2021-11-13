import { Injectable } from '@angular/core';
import { ITarefaService } from 'src/app/shared/ITarefaService';
import { Tarefa } from 'src/app/shared/model/tarefa';


@Injectable({
  providedIn: 'root'
})
export class TarefaService implements ITarefaService {

  constructor() { }

  adicionarTarefa(tarefa: Tarefa): void {
    throw new Error('Method not implemented.');
  }
  obterTarefa(tarefaId: number): Tarefa {
    throw new Error('Method not implemented.');
  }
  atualizarTarefa(tarefa: Tarefa): void {
    throw new Error('Method not implemented.');
  }
  obterTarefas(): Tarefa[] {
    throw new Error('Method not implemented.');
  }
  excluirTarefa(tarefaId: number): void {
    throw new Error('Method not implemented.');
  }
}
