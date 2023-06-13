import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPayementComponent } from './detail-payement/detail-payement.component';

const routes: Routes = [
  {path: '', component:DetailPayementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class DetailPayementRoutingModule { }
