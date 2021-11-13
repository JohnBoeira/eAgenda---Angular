export class Funcionario {
   id: number;
   nome: string;
   cpf: string;
   dataAdmissao: Date;
   cargo: number;

   constructor(id: number, nome: string, cpf: string, dataAdmissao: Date, cargo: number) {
       this.id = id;
       this.nome = nome;
       this.cpf = cpf;
       this.dataAdmissao = dataAdmissao;
       this.cargo = cargo;
   }
}