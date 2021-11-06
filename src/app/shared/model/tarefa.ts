
export class Tarefa{

   id: number;
   titulo: string;
   dataCriacao: Date;
   dataConclusao: Date;
   percentual: number;
   prioridade: number;

   constructor(id: number, titulo: string, dataCriacao: Date, dataConclusao: Date, prioridade: number, percentual: number){
      this.id = id;
      this.titulo = titulo;
      this.dataCriacao = dataCriacao;
      this.dataConclusao = dataConclusao;
      this.prioridade = prioridade;
      this.percentual = percentual;
   }
}