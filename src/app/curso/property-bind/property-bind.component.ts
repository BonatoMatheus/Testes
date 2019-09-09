import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-property-bind",
  templateUrl: "./property-bind.component.html",
  styleUrls: ["./property-bind.component.css"]
})
export class PropertyBindComponent implements OnInit {
  public urlImagem: string = "http://lorempixel.com/400/200/sports/";
  public url: string = "http:/matheus/bonato";
  public cursoAngular: boolean = true;

  constructor() {}

  ngOnInit() {}

  getValor() {
    return 1;
  }
  getCurtirCurso() {
    return true;
  }

  btnClick() {
    alert("Botão clicado!");
  }

  onKeyUp(event: KeyboardEvent) {
    console.log((<HTMLInputElement>event.target).value);
  }
}
