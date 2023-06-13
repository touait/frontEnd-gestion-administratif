import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionPayementComponent } from './gestion-payement/gestion-payement.component';

const routes: Routes = [
  {path: '', component:GestionPayementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 
exports: [RouterModule]
})
export class GestionPayementRoutingModule { }
