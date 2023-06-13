import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterMaterielRoutingModule } from './ajouter-materiel-routing.module';
import { AjouterMaterielComponent } from './ajouter-materiel/ajouter-materiel.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AjouterMaterielComponent
  ],
  imports: [
    CommonModule,
    AjouterMaterielRoutingModule,
    FormsModule,
     HttpClientModule
  ]
})
export class AjouterMaterielModule { }
