import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tarefa } from 'src/app/shared/model/tarefa';

@Component({
  selector: 'app-tarefa-editar',
  templateUrl: './tarefa-editar.component.html',
})
export class TarefaEditarComponent implements OnInit {

  titulo: string = "Editar Tarefa";
  cadastroForm : FormGroup;
  tarefa: Tarefa;
  id: any;

  constructor(private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.obterTarefa();

    this.cadastroForm = new FormGroup({
      id: new FormControl(this.tarefa.id),
      titulo: new FormControl(this.tarefa.titulo),
      dataCriacao: new FormControl(this.tarefa.dataCriacao.toISOString().substring(0,10)),
      dataConclusao: new FormControl(this.tarefa.dataConclusao.toISOString().substring(0,10)),
      percentual: new FormControl(this.tarefa.percentual),
      prioridade: new FormControl(this.tarefa.prioridade)
    })
  }

  editarTarefa() {
    console.log(this.cadastroForm.value);
  }

  obterTarefa() {
    this.tarefa = new Tarefa(1, "Codar", new Date(2013, 4, 8), new Date(2013, 4, 8),10,1 );

  }

}
