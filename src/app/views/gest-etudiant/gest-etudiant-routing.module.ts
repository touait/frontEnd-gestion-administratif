import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestEtudiantComponent } from './gest-etudiant/gest-etudiant.component';

const routes: Routes = [
  {path: '', component:GestEtudiantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class GestEtudiantRoutingModule { }
