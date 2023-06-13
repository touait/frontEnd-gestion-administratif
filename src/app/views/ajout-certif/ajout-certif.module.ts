import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjoutCertifRoutingModule } from './ajout-certif-routing.module';
import { AjoutCertifComponent } from './ajout-certif/ajout-certif.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AjoutCertifComponent
  ],
  imports: [
    CommonModule,
    AjoutCertifRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AjoutCertifModule { }
