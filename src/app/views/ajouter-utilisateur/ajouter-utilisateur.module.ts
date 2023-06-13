import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterUtilisateurRoutingModule } from './ajouter-utilisateur-routing.module';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AjouterUtilisateurComponent
  ],
  imports: [
    CommonModule,
    AjouterUtilisateurRoutingModule,
    FormsModule,
     HttpClientModule,
     ReactiveFormsModule
  ]
})
export class AjouterUtilisateurModule { }
