import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { ITarefaService } from 'src/app/shared/ITarefaService';
import { Tarefa } from 'src/app/shared/model/tarefa';

@Component({
  selector: 'app-tarefa-criar',
  templateUrl: './tarefa-criar.component.html',
})
export class TarefaCriarComponent implements OnInit {

  tituloDaPagina: string = "Cadastro de tarefa";
  cadastroForm: FormGroup;
  tarefa: Tarefa;

  constructor(private router: Router, @Inject('ITarefaServiceToken') private servico: ITarefaService) { }
  

  adicionarTarefa() {
    this.tarefa = Object.assign({}, this.tarefa, this.cadastroForm.value);
    this.servico.adicionarTarefa(this.tarefa)

    this.router.navigate(['tarefa/listar']);
  }

  cancelar() {
    this.router.navigate(['tarefa/listar']);
  }
    // console.log(this.cadastroForm.value);

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      id: new FormControl(''),
      titulo: new FormControl(''),
      dataCriacao: new FormControl(''),
      dataConclusao: new FormControl(''),
      percentual: new FormControl(''),
      prioridade: new FormControl('')
    })
  }

}


