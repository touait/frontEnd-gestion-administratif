import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfchcertificatRoutingModule } from './afchcertificat-routing.module';
import { AfchcertificatComponent } from './afchcertificat/afchcertificat.component';
import {NgxPrintModule} from 'ngx-print';
@NgModule({
  declarations: [
    AfchcertificatComponent
  ],
  imports: [
  
  CommonModule,
    AfchcertificatRoutingModule,
    NgxPrintModule
  ]
})
export class AfchcertificatModule { }
