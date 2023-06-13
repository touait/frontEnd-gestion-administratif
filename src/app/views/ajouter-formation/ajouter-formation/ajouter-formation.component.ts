import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { FormationService } from './../../../services/formation.service';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.scss']
})
export class AjouterFormationComponent implements OnInit {
  formation= new Formation;
  title!: String ;
  
  
  constructor(
    private router:Router,
    private formationservice:FormationService,
    private currentRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {

    let id= this.currentRoute.snapshot.params['id'];
    console.log(id);
    if(id==null){
      //add a new Product
    this.formation= new Formation();
    this.title='Ajouter une nouvelle formation'}
    else{
      //update
      this.title='Modifier la formation avec id: ' +id;
      this.formationservice.getbyid(id).subscribe(
        (data)=>this.formation=data
      )
    }
  }

 
  cancel():void{
    this.router.navigate(['admin/gestformation'])
  }


  register(){
    if(this.formation._id==null){
     this.formationservice.register(this.formation).subscribe(
       ()=>this.router.navigate(['admin/gestformation'])
     )
    }else{
     this.formationservice.updatemateriel(this.formation).subscribe(
       ()=>this.router.navigate(['admin/gestformation'])
     )
    }
   }
}
