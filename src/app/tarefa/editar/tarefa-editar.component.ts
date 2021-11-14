import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITarefaService } from 'src/app/shared/ITarefaService';
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

  constructor(private _Activatedroute: ActivatedRoute,@Inject('ITarefaServiceToken') private servico: ITarefaService, private router: Router) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
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
    this.tarefa = Object.assign({}, this.tarefa, this.cadastroForm.value);
    this.servico.atualizarTarefa(this.tarefa);

    this.router.navigate(['funcionario/listar']);
  }

  obterTarefa() {
    this.tarefa = this.servico.obterTarefa(this.id);

  }

  cancelar() {
    this.router.navigate(['funcionario/listar']);
  }

}
