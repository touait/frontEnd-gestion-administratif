import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestFormationComponent } from './gest-formation/gest-formation.component';

const routes: Routes = [
  {path: '', component:GestFormationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 
exports: [RouterModule]
})
export class GestFormationRoutingModule { }
