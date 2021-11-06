import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaCriarComponent } from './tarefa/criar/tarefa-criar.component';

const routes: Routes = [

  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'tarefa/criar', component: TarefaCriarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
