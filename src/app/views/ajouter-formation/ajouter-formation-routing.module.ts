import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterFormationComponent } from './ajouter-formation/ajouter-formation.component';

const routes: Routes = [
  { path:'',component:AjouterFormationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class AjouterFormationRoutingModule { }
