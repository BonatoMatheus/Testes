import { CursoService } from './services/curso.service';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso/curso.component';
import { PropertyBindComponent } from './property-bind/property-bind.component';
import { TwoWayDataBindComponent } from './two-way-data-bind/two-way-data-bind.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { NgModule } from '@angular/core';
import { CicloComponent } from './ciclo/ciclo.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';



@NgModule({
  declarations: [
    CursoComponent,
    PropertyBindComponent,
    TwoWayDataBindComponent,
    FormularioComponent,
    InputComponent,
    OutputPropertyComponent,
    CicloComponent,
    CriarCursoComponent
  ],
  exports: [
    CursoComponent,
    PropertyBindComponent,
    TwoWayDataBindComponent,
    FormularioComponent,
    InputComponent,
    CicloComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    CursoService
  ]
})
export class CursoModule { }
