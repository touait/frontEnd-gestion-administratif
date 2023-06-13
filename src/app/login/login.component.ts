import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   user={
    email:'',
    password:'',
    role: ''
   }


  
  constructor(
    private userservice:AuthService,
    private router:Router, 
  ) {
   
  }

  ngOnInit(): void {
  }
  token:any;
  
  login(){
    this.userservice.login(this.user)
    .subscribe(
      res=>{
        // this.token=res;
        localStorage.setItem('token', JSON.stringify(res))
        if(res.role=='admin'){
          this.router.navigate(['/admin/gestutilisateur'])  
        }  else if(res.role=='technicien'){
          this.router.navigate(['/technicien/gestmateriel'])  
        } else{
          this.router.navigate(['/secretairegeneral/gestetudiant'])  
        }    
      },
      err=>{
        alert('login ou password incorect');
      }
    )
  }



}
