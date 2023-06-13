import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestUtilisatuerRoutingModule } from './gest-utilisatuer-routing.module';
import { GestUtilisateurComponent } from './gest-utilisateur/gest-utilisateur.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    GestUtilisateurComponent
  ],
  imports: [
    CommonModule,
    GestUtilisatuerRoutingModule,
    FormsModule,
     HttpClientModule,
     NgxPaginationModule 
    
  ]
})
export class GestUtilisatuerModule { }
