import { Injectable } from '@angular/core';
import { IFuncionarioService } from 'src/app/shared/IFuncionarioService';
import { Funcionario } from 'src/app/shared/model/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService implements IFuncionarioService {

  constructor() { }

  public adicionarFuncionario(funcionario: Funcionario) {
    console.log(funcionario);
  }

  public obterFuncionario(funcionarioId: number): Funcionario {
    var funcionario = new Funcionario(1, 'Ramon', '88755544487', new Date('2013/5/9'), 0);
    return funcionario;
  }

  public atualizarFuncionario(funcionario: Funcionario) {
    console.log(funcionario);
  }

  public obterFuncionarios(): Funcionario[] {

    var listaFuncionarios: Funcionario[] = [];

    listaFuncionarios.push(new Funcionario(1, 'Ramon', '88755544487', new Date(2013, 5, 9), 0))
    listaFuncionarios.push(new Funcionario(1, 'Alexandre', '55547799965', new Date(2013, 4, 8), 1))
    listaFuncionarios.push(new Funcionario(1, 'Marcia', '22144877796', new Date(2013, 7, 10), 2))
    listaFuncionarios.push(new Funcionario(1, 'Maria', '33325544478', new Date(2013, 8, 29), 1))
    listaFuncionarios.push(new Funcionario(1, 'João', '999044400045', new Date(2013, 1, 19), 1))

    return listaFuncionarios;
  }

  excluirFuncionario(funcionarioId: number): void {
    throw new Error('Method not implemented.');
  }
}
