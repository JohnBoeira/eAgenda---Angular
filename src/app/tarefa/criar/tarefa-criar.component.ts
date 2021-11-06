import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-tarefa-criar',
  templateUrl: './tarefa-criar.component.html',
})
export class TarefaCriarComponent implements OnInit {

  tituloDaPagina: string = "Cadastro de tarefa";
  cadastroForm: FormGroup;

  constructor() { }

  adicionarTarefa() {
    console.log(this.cadastroForm.value);
  }


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
