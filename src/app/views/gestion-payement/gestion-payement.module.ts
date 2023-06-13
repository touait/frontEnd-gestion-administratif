import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionPayementRoutingModule } from './gestion-payement-routing.module';
import { GestionPayementComponent } from './gestion-payement/gestion-payement.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    GestionPayementComponent
  ],
  imports: [
    CommonModule,
    GestionPayementRoutingModule,
    FormsModule,
     HttpClientModule,
     NgxPaginationModule 
  ]
})
export class GestionPayementModule { }
