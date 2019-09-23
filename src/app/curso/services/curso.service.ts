import { Injectable, EventEmitter } from '@angular/core';
import { Curso } from '../model/curso';
import { Observable, of } from 'rxjs';

@Injectable()
export class CursoService {
  subiscribe(arg0: (result: any) => void) {
    throw new Error("Method not implemented.");
  }

  emitirCursoCriado = new EventEmitter<Curso>();

  public cursos: Curso[] = [
    
    {
      id: "1",
      nome: "Angular",
      descricao: "Curso Angular",
      ordem: 1
    },
    {
      id: "2",
      nome: "Java",
      descricao: "Curso Java",
      ordem: 2
    },
    {
      id: "3",
      nome: "React",
      descricao: "Curso React",
      ordem: 3
    },
  ];

  constructor() { }

  getCursos(): Observable<Curso[]>{
    return of (this.cursos);
  }
  
  postCurso(curso: Curso) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }
}
