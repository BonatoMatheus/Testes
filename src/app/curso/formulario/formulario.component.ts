import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  // two-way
  public nome: string;

  pessoa: any = {
    nome: '',
    idade: 20
  };

  constructor() {}

  ngOnInit() {}
}
