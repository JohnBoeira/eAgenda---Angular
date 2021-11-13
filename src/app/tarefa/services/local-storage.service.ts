import { Injectable } from '@angular/core';
import { ITarefaService } from 'src/app/shared/ITarefaService';
import { Tarefa } from 'src/app/shared/model/tarefa';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements ITarefaService{

  private storage: Storage;
  private key: string = "listaTarefas";
  private listaTarefas: Tarefa[];

  constructor() { 

    this.storage = window.localStorage;
    this.obterTarefasLocalStorage();



  }

  private obterTarefasLocalStorage() {
    var localStorageTarefas = this.storage.getItem(this.key)

    if (localStorageTarefas) {
      this.listaTarefas = JSON.parse(localStorageTarefas);
    }
    else {
      this.listaTarefas = [];
    }
  }

  adicionarTarefa(tarefa: Tarefa): void {
    tarefa.id = this.obterId();
    this.listaTarefas.push(tarefa);
    this.storage.setItem(this.key, JSON.stringify(this.listaTarefas));
  }

  obterTarefa(tarefaId: number): Tarefa {
    var tarefa: any;

    this.listaTarefas.some(function (el) {
      if (el.id == tarefaId) {
        tarefa = el;
      }
    });

    return tarefa;
  }

  atualizarTarefa(tarefa: Tarefa): void {
     this.listaTarefas.some(function (el) {
      if (el.id == tarefa.id) {
        el.titulo = tarefa.titulo;
        el.dataCriacao = tarefa.dataCriacao;
        el.dataConclusao = tarefa.dataConclusao;
        el.percentual = tarefa.percentual;
      }
    });

    this.storage.setItem(this.key, JSON.stringify(this.listaTarefas));
  }
  
  obterTarefas(): Tarefa[] {
    return this.listaTarefas;
  }

  private obterId(): number {
    var tarefa = this.listaTarefas[this.listaTarefas.length - 1];

    if (tarefa === undefined)
      return 1;

    return tarefa.id + 1;
  }

  excluirTarefa(tarefaId: number): void {
    throw new Error('Method not implemented.');
  }
}
