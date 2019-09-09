import { Component, OnInit, Input, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

 @Input() public valor: number = 0;
 @Output() mudouValor = new EventEmitter();

 @ViewChild('campoImput',  {static: false}) campoImput: HTMLElement;

  constructor() { }

  ngOnInit() {
  }

  incrementa() {
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    console.log(this.campoImput);
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }

}
