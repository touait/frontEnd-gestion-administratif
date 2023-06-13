import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestMaterielRoutingModule } from './gest-materiel-routing.module';
import { GestMaterielComponent } from './gest-materiel/gest-materiel.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GestMaterielComponent
  ],
  imports: [
    CommonModule,
    GestMaterielRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class GestMaterielModule { }
