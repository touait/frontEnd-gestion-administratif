import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestEtudiantRoutingModule } from './gest-etudiant-routing.module';
import { GestEtudiantComponent } from './gest-etudiant/gest-etudiant.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    GestEtudiantComponent
  ],
  imports: [
    CommonModule,
    GestEtudiantRoutingModule,
    FormsModule,
     HttpClientModule,
     NgxPaginationModule 
  ]
})
export class GestEtudiantModule { }
