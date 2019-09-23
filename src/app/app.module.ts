import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoModule } from './curso/curso.module';

import { CursosModule } from './cursos/cursos.module';
import { CursohttpComponent } from './http/cursohttp.component';


@NgModule({
  declarations: [
    AppComponent,
    CursohttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursoModule,
    CursosModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
