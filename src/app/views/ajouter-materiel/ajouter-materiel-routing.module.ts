import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterMaterielComponent } from './ajouter-materiel/ajouter-materiel.component';

const routes: Routes = [
  {path:'', component: AjouterMaterielComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class AjouterMaterielRoutingModule { }
