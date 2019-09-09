import { Component, OnInit, ViewChild } from '@angular/core';

import { CursoService } from './../services/curso.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  public cursos: string[] = [];
  public novidades: string[] = [];


  constructor(private cursoService: CursoService) {
    this.cursos = this.cursoService.getCursos();
  }

  ngOnInit() {
    this.cursoService.emitirCursoCriado.subscribe(x =>
      this.novidades.push(x)
    );
  }

  onAddCurso(curso: string) {
    this.cursoService.postCurso(curso);
  }

}
