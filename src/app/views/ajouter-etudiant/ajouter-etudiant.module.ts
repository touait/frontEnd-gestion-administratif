import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterEtudiantRoutingModule } from './ajouter-etudiant-routing.module';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AjouterEtudiantComponent
  ],
  imports: [
    CommonModule,
    AjouterEtudiantRoutingModule,
    FormsModule,
     HttpClientModule
  ]
})
export class AjouterEtudiantModule { }
