import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/shared/model/tarefa';
import { TarefaCriarComponent } from '../criar/tarefa-criar.component';

@Component({
  selector: 'app-tarefa-listar',
  templateUrl: './tarefa-listar.component.html',
})
export class TarefaListarComponent implements OnInit {

  titulo: string = "Lista Tarefas";
  listarTarefas: Tarefa[] =  [];

  constructor() { }

  ngOnInit(): void {
    this.obterTarefa();
  }


  obterTarefa() {
    this.listarTarefas.push(new Tarefa(1, "Codar", new Date(2013, 4, 8), new Date(2013, 4, 8),10,1 ))
    this.listarTarefas.push(new Tarefa(2, "Cortar cabelo", new Date(2013, 4, 8), new Date(2013, 4, 8),10,0 ))

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

}
