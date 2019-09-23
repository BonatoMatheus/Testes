
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { CursoService } from '../services/curso.service';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  

 
  public cursos: Curso[] = [];
  public curso: Curso = {};
  public valor: number = 5;
  //deletarCiclo: boolean = false;

  constructor(private cursoService: CursoService) {
    this.cursoService.getCursos().subscribe(result => {
      this.cursos = result;
    });
  }

  ngOnInit() {
    
  }

  mudarValor() {
    this.valor++;
  }

  onMudouValor(event) {
    console.log(event.novoValor);
  }

  destruirCiclo() {
   // this.deletarCiclo = true;
  }

  onAddCurso(curso: Curso) {
    this.cursoService.postCurso(curso);
    this.curso  = { 
      nome: "",
      descricao: "",
      ordem: 0
    }
  }
}
