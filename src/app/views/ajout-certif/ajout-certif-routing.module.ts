import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutCertifComponent } from './ajout-certif/ajout-certif.component';

const routes: Routes = [
  {path:"" ,component: AjoutCertifComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjoutCertifRoutingModule { }
