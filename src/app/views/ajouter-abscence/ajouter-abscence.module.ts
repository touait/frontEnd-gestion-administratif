import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterAbscenceRoutingModule } from './ajouter-abscence-routing.module';
import { AjouterAbscenceComponent } from './ajouter-abscence/ajouter-abscence.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AjouterAbscenceComponent
  ],
  imports: [
    CommonModule,
    AjouterAbscenceRoutingModule,
    FormsModule,
     HttpClientModule
  ]
})
export class AjouterAbscenceModule { }
