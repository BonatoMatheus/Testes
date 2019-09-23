import { Component, OnInit, ViewChild } from '@angular/core';

import { CursoService } from './../services/curso.service';
import { from } from 'rxjs';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {


  public novidades: Curso[] = [];


  constructor(private cursoService: CursoService) {
    //this.cursos = this.cursoService.getCursos();
  }

  ngOnInit() {
    /*from(this.cursoService.emitirCursoCriado)
    .subscribe(x => {
      this.novidades.push(x);
    }
    );*/
    this.cursoService.emitirCursoCriado.subscribe(x =>
      this.novidades.push(x)
    );
  }
}
