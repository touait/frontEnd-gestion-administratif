import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.scss']
})
export class AjouterUtilisateurComponent implements OnInit {
 utilisateur:any={
  nomU:'',
  prenom:'',
  email:'',
  telephone:'',
  role:'',
  password:'',
 
 };
  
  title!: String ;
  // utilisateur= new Utilisateur;


  image:any;
  select(e:any){
    this.utilisateur.image= e.target.files[0];
  
  }

  constructor(private userservice:AuthService,
    private router: Router,
    private currentRoute: ActivatedRoute,
   
    ) { }

  ngOnInit(): void {

    let id= this.currentRoute.snapshot.params['id'];
    console.log(id);
    if(id==null){
      //add a new Product
   
    this.title='Ajouter utilisateur'}
    else{
      //update
      this.title='Modifier utilisateur avec id: ' +id;
      this.userservice.getbyid(id).subscribe(
        (data)=>this.utilisateur=data
      )
    }


  }

  cancel():void{
    this.router.navigate(['admin/gestutilisateur'])
  }



  register(){
    
    if(this.utilisateur._id==null){ 
      let fd=new FormData();
  
      fd.append('nomU',this.utilisateur.nomU)
      fd.append('prenom',this.utilisateur.prenom)
      fd.append('email',this.utilisateur.email)
      fd.append('telephone',this.utilisateur.telephone)
      fd.append('role',this.utilisateur.role)
      fd.append('image',this.utilisateur.image)
      fd.append('password',this.utilisateur.password)
     this.userservice.register(fd)
     .subscribe(
       ()=>this.router.navigate(['/admin/gestutilisateur'])
     )
    }else{
     this.userservice.updateutilisateur(this.utilisateur)
     .subscribe(
       ()=>this.router.navigate(['/admin/gestutilisateur'])
     )
    }

 }
  



 


}
