import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterielService } from 'src/app/services/materiel.service';
import { Materiel } from './../../../models/materiel';

@Component({
  selector: 'app-ajouter-materiel',
  templateUrl: './ajouter-materiel.component.html',
  styleUrls: ['./ajouter-materiel.component.scss']
})
export class AjouterMaterielComponent implements OnInit {

  materiel=new Materiel;
  title!: String ;
  

  constructor(
    private router:Router, 
    private materielsarvice: MaterielService,
    private currentRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    let id= this.currentRoute.snapshot.params['id'];
    console.log(id);
    if(id==null){
      //add a new Product
    this.materiel= new Materiel();
    this.title='Ajouter un nouveau Materiel'}
    else{
      //update
      this.title='Modifier le Materiel avec id: ' +id;
      this.materielsarvice.getbyid(id).subscribe(
        (data)=>this.materiel=data
      )
    }
  }

  cancel():void{
    this.router.navigate(['technicien/gestmateriel'])
  }


  register(){
    if(this.materiel._id==null){
     this.materielsarvice.register(this.materiel).subscribe(
       ()=>this.router.navigate(['technicien/gestmateriel'])
     )
    }else{
     this.materielsarvice.updatemateriel(this.materiel).subscribe(
       ()=>this.router.navigate(['technicien/gestmateriel'])
     )
    }
   }

}
