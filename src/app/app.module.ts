import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaCriarComponent } from './tarefa/criar/tarefa-criar.component';
import { TarefaListarComponent } from './tarefa/listar/tarefa-listar.component';
import { TarefaEditarComponent } from './tarefa/editar/tarefa-editar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from './tarefa/services/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    TarefaCriarComponent,
    TarefaListarComponent,
    TarefaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  
  providers: [{provide: 'ITarefaServiceToken', useClass: LocalStorageService}],
  bootstrap: [AppComponent]
})
export class AppModule { }

