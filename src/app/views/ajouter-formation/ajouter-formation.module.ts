import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterFormationRoutingModule } from './ajouter-formation-routing.module';
import { AjouterFormationComponent } from './ajouter-formation/ajouter-formation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AjouterFormationComponent
  ],
  imports: [
    CommonModule,
    AjouterFormationRoutingModule,
    FormsModule,
     HttpClientModule
  ]
})
export class AjouterFormationModule { }
