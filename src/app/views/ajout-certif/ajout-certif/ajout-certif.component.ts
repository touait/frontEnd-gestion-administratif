import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificat } from 'src/app/models/certificat';
import { CertificatService } from 'src/app/services/certificat.service';
import { FormationService } from 'src/app/services/formation.service';


@Component({
  selector: 'app-ajout-certif',
  templateUrl: './ajout-certif.component.html',
  styleUrls: ['./ajout-certif.component.scss']
})
export class AjoutCertifComponent implements OnInit {
  title!: String ;
  certificat=new Certificat

  //getformation
  formations:any;

  constructor(
    private router: Router,
    private currentRoute: ActivatedRoute,
    private formationservice :FormationService,
    private certifservice:CertificatService
  ) { }

  ngOnInit(): void {
    let id= this.currentRoute.snapshot.params['id'];
    console.log(id);
    if(id==null){
      //add a new Product
    this.certificat= new Certificat();
    this.title='Ajouter Attestation'}
    else{
      //update
      this.title='Modifier Attestation avec id: ' +id;
      this.certifservice.getbyid(id).subscribe(
        (data)=>this.certificat=data
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
  this.router.navigate(['secretairegeneral/gestcertif'])
}


register(){
  if(this.certificat._id==null){
   this.certifservice.register(this.certificat).subscribe(
     ()=>this.router.navigate(['/secretairegeneral/gestcertif'])
   )
  }else{
   this.certifservice.updatecertif(this.certificat).subscribe(
     ()=>this.router.navigate(['/secretairegeneral/gestcertif'])
   )
  }
 }

}
