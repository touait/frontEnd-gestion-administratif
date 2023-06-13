import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionCertifComponent } from './gestion-certif/gestion-certif.component';

const routes: Routes = [
  {path:"" ,component: GestionCertifComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCertifRoutingModule { }
