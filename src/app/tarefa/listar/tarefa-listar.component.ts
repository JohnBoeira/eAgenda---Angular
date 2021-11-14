import { Component, Inject, OnInit } from '@angular/core';
import { ITarefaService } from 'src/app/shared/ITarefaService';
import { Tarefa } from 'src/app/shared/model/tarefa';
import { TarefaCriarComponent } from '../criar/tarefa-criar.component';

@Component({
  selector: 'app-tarefa-listar',
  templateUrl: './tarefa-listar.component.html',
})
export class TarefaListarComponent implements OnInit {

  titulo: string = "Lista Tarefas";
  listarTarefas: Tarefa[] =  [];

  constructor( @Inject('ITarefaServiceToken') private servico: ITarefaService) { }

  ngOnInit(): void {
    this.obterTarefa();
  }


  obterTarefa() {
    this.listarTarefas = this.servico.obterTarefas();

  }

  converterPrioridade(tipo: number): string {
    if (tipo == 0)
      return "Baixa";

    if (tipo === 1)
      return "Normal";

    if (tipo == 2)
      return "Alta"

    return "Indefinido"
  }

  formatarData(data: Date): string {
    return new Date(data).toLocaleDateString();
  }

}
