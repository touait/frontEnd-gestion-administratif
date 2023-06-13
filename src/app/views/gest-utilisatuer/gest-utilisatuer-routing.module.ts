import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestUtilisateurComponent } from './gest-utilisateur/gest-utilisateur.component';

const routes: Routes = [
  { path:'',component:GestUtilisateurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestUtilisatuerRoutingModule { }
