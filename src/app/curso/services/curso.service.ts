import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursoService {

  emitirCursoCriado = new EventEmitter<string>();

  public cursos: string[] = [
    'teste1',
    'teste2',
    'teste3'
  ];
  constructor() { }

  getCursos() {
    return this.cursos;
  }
  
  postCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }
}
