import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestAbscenceComponent } from './gest-abscence/gest-abscence.component';

const routes: Routes = [
  {path: '', component:GestAbscenceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class GestAbscenceRoutingModule { }
