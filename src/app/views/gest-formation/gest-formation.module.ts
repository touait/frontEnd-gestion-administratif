import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestFormationRoutingModule } from './gest-formation-routing.module';
import { GestFormationComponent } from './gest-formation/gest-formation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    GestFormationComponent
  ],
  imports: [
    CommonModule,
    GestFormationRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule 
  ]
})
export class GestFormationModule { }
