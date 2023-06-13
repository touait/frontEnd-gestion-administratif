import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestAbscenceRoutingModule } from './gest-abscence-routing.module';
import { GestAbscenceComponent } from './gest-abscence/gest-abscence.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    GestAbscenceComponent
  ],
  imports: [
    CommonModule,
    GestAbscenceRoutingModule,
    FormsModule,
     HttpClientModule,
     NgxPaginationModule,
   
  ]
})
export class GestAbscenceModule { }
