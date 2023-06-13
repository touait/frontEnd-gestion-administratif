import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';
import { InscriptionService } from 'src/app/services/inscription.service';
import { Inscription } from './../../../models/inscription';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.scss']
})
export class AjouterEtudiantComponent implements OnInit {
  inscription=new Inscription;
  title!: String ;
  //getformation
  formations:any;

  // image:any;
  // select(e:any){
  //   this.image=e.target.files[0];
  // }


  constructor(
    private router: Router,
    private inscriptionservice:InscriptionService,
    private currentRoute: ActivatedRoute,
    private formationservice :FormationService
  ) { }

  ngOnInit(): void {
    let id= this.currentRoute.snapshot.params['id'];
    console.log(id);
    if(id==null){
      //add a new Product
    this.inscription= new Inscription();
    this.title='Ajouter inscription'}
    else{
      //update
      this.title='Modifier inscription avec id: ' +id;
      this.inscriptionservice.getbyid(id).subscribe(
        (data)=>this.inscription=data
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
    this.router.navigate(['secretairegeneral/gestetudiant'])
  }


  
  register(){

    if(this.inscription._id==null){
     this.inscriptionservice.register(this.inscription).subscribe(
       ()=>this.router.navigate(['/secretairegeneral/gestetudiant'])
     )
    }
    else{
     this.inscriptionservice.updateinscription(this.inscription).subscribe(
       ()=>this.router.navigate(['/secretairegeneral/gestetudiant'])
     )
    }
     }
  
  

}
