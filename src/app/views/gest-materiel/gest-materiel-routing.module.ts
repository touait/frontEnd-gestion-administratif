import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestMaterielComponent } from './gest-materiel/gest-materiel.component';

const routes: Routes = [
  {path :'', component : GestMaterielComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 
exports: [RouterModule]
})
export class GestMaterielRoutingModule { }
