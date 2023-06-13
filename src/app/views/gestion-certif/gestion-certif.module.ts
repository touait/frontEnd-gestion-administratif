import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCertifRoutingModule } from './gestion-certif-routing.module';
import { GestionCertifComponent } from './gestion-certif/gestion-certif.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GestionCertifComponent
  ],
  imports: [
    CommonModule,
    GestionCertifRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class GestionCertifModule { }
