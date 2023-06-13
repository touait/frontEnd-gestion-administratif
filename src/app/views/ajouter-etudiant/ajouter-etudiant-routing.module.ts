import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';

const routes: Routes = [
  {path: '', component:AjouterEtudiantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 
exports: [RouterModule]
})
export class AjouterEtudiantRoutingModule { }
