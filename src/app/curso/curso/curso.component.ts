
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  
  public curso: string;
  public cursos: string[] = [];
  public valor: number = 5;
  //deletarCiclo: boolean = false;
  

  constructor(private CursoService: CursoService) {
    this.curso = 'Curso Angular';
    this.cursos = this.CursoService.getCursos();
  }

  ngOnInit() {}

  mudarValor() {
    this.valor++;
  }

  onMudouValor(event) {
    console.log(event.novoValor);
  }

  destruirCiclo() {
   // this.deletarCiclo = true;
  }
}
