import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterAbscenceComponent } from './ajouter-abscence/ajouter-abscence.component';

const routes: Routes = [
  {path: '', component:AjouterAbscenceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 
exports: [RouterModule]
})
export class AjouterAbscenceRoutingModule { }
