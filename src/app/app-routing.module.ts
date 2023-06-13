import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SinscrireComponent } from './sinscrire/sinscrire.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { TechnicienComponent } from './layouts/technicien/technicien.component';
import { SecretaireGeneralComponent } from './layouts/secretaire-general/secretaire-general.component';
import { AjouterMaterielComponent } from './views/ajouter-materiel/ajouter-materiel/ajouter-materiel.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'sinscrire', component:SinscrireComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },


{path: 'admin',canActivate:[AuthGuardGuard],component:AdminComponent,
children:[
  
  {path:'gestutilisateur',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/gest-utilisatuer/gest-utilisatuer.module').then(m=>m.GestUtilisatuerModule)},
  {path:'gestformation',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/gest-formation/gest-formation.module').then(m=>m.GestFormationModule)},
  {path:'ajouterformation',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/ajouter-formation/ajouter-formation.module').then(m=>m.AjouterFormationModule)},
  {path:'update/:id',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/ajouter-formation/ajouter-formation.module').then(m=>m.AjouterFormationModule)},
  {path:'ajouterutilisateur',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/ajouter-utilisateur/ajouter-utilisateur.module').then(m=>m.AjouterUtilisateurModule)},
  {path:'updateUser/:id',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/ajouter-utilisateur/ajouter-utilisateur.module').then(m=>m.AjouterUtilisateurModule)},
  
]
},
{path: 'technicien',canActivate:[AuthGuardGuard],component:TechnicienComponent,
children:[
  {path:'gestmateriel',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/gest-materiel/gest-materiel.module').then(m=>m.GestMaterielModule)},
  {path:'ajoutermateriel',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/ajouter-materiel/ajouter-materiel.module').then(m=>m.AjouterMaterielModule)},
  {path:'update/:id',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/ajouter-materiel/ajouter-materiel.module').then(m=>m.AjouterMaterielModule)},

]
},
{path: 'secretairegeneral',canActivate:[AuthGuardGuard],component:SecretaireGeneralComponent,
children:[
  {path:'gestetudiant',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/gest-etudiant/gest-etudiant.module').then(m=>m.GestEtudiantModule)},
  {path:'ajouteretudiant',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/ajouter-etudiant/ajouter-etudiant.module').then(m=>m.AjouterEtudiantModule)},
  {path:'updateEtud/:id',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/ajouter-etudiant/ajouter-etudiant.module').then(m=>m.AjouterEtudiantModule)},
  
  {path:'gestabscence',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/gest-abscence/gest-abscence.module').then(m=>m.GestAbscenceModule)},
  {path:'ajouterabscence',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/ajouter-abscence/ajouter-abscence.module').then(m=>m.AjouterAbscenceModule)},
  {path:'updateabsc/:id',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/ajouter-abscence/ajouter-abscence.module').then(m=>m.AjouterAbscenceModule)},
  
  {path:'gestpayement',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/gestion-payement/gestion-payement.module').then(m=>m.GestionPayementModule)},
  {path:'detailpaiment/:id',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/detail-payement/detail-payement.module').then(m=>m.DetailPayementModule)},

  {path:'certificat/:id',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/afchcertificat/afchcertificat.module').then(m=>m.AfchcertificatModule)},
  {path:'ajoutcertif',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/ajout-certif/ajout-certif.module').then(m=>m.AjoutCertifModule)},
  {path:'updatecertif/:id',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/ajout-certif/ajout-certif.module').then(m=>m.AjoutCertifModule)},
  {path:'gestcertif',canActivate:[AuthGuardGuard],loadChildren:()=>import('./views/gestion-certif/gestion-certif.module').then(m=>m.GestionCertifModule)},
]


},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
