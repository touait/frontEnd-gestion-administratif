import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailPayementRoutingModule } from './detail-payement-routing.module';
import { DetailPayementComponent } from './detail-payement/detail-payement.component';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    DetailPayementComponent
  ],
  imports: [
    CommonModule,
    DetailPayementRoutingModule,
    NgxPrintModule

  ]
})
export class DetailPayementModule { }
