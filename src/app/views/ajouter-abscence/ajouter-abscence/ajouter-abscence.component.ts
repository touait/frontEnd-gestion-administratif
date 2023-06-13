import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbscenceService } from 'src/app/services/abscence.service';
import { FormationService } from 'src/app/services/formation.service';
import { InscriptionService } from 'src/app/services/inscription.service';
import { Abscence } from './../../../models/abscence';

@Component({
  selector: 'app-ajouter-abscence',
  templateUrl: './ajouter-abscence.component.html',
  styleUrls: ['./ajouter-abscence.component.scss']
})
export class AjouterAbscenceComponent implements OnInit {
  title!: String ;
  abscence= new Abscence;
  
  formations:any; 

  constructor(
    private router:Router,
    private formationservice :FormationService,
    private abscenceservice: AbscenceService,
    private currentRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {


    let id= this.currentRoute.snapshot.params['id'];
    console.log(id);
    if(id==null){
      //add a new Product
    this.abscence= new Abscence();
    this.title='Faire abscence'}
    else{
      //update
      this.title='Modifier abscence avec id: ' +id;
      this.abscenceservice.getbyid(id).subscribe(
        (data)=>this.abscence=data
      )
    }

 this.getallformation();
  }



getallformation(){
  // get all formation in liste select
  this.formationservice.getAll()
  .subscribe(
    res=>{
      this.formations=res;
    },
    err=>{
      console.log(err);
    }
  )
}



  cancel():void{
    this.router.navigate(['secretairegeneral/gestabscence'])
  }


  register(){
    if(this.abscence._id==null){
     this.abscenceservice.register(this.abscence).subscribe(
       ()=>this.router.navigate(['secretairegeneral/gestabscence'])
     )
    }else{
     this.abscenceservice.updateabscence(this.abscence).subscribe(
       ()=>this.router.navigate(['secretairegeneral/gestabscence'])
     )
    }
   }





}
