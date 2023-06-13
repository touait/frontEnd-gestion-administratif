import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfchcertificatComponent } from './afchcertificat/afchcertificat.component';

const routes: Routes = [
  {path:"" ,component: AfchcertificatComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfchcertificatRoutingModule { }
