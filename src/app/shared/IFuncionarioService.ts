import { Funcionario } from "./model/Funcionario";


export interface IFuncionarioService {

   adicionarFuncionario(funcionario: Funcionario): void;

   obterFuncionario(funcionarioId: number): Funcionario;

   atualizarFuncionario(funcionario: Funcionario): void;

   obterFuncionarios(): Funcionario[];

   excluirFuncionario(funcionarioId: number): void;
}