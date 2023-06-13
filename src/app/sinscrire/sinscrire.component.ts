import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sinscrire',
  templateUrl: './sinscrire.component.html',
  styleUrls: ['./sinscrire.component.scss']
})
export class SinscrireComponent implements OnInit {
  inscrire={
    nomU:'',
    prenom :'',
    email :'',
    telephone :'',
    role:'',
    password :'',
  }

  image:any;
  select(e:any){
    this.image= e.target.files[0];
  }

  constructor(private userservice:AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }


  register() {
    let fd= new FormData();
    fd.append('nomU', this.inscrire.nomU)
    fd.append('prenom', this.inscrire.prenom)
    fd.append('email', this.inscrire.email)
    fd.append('telephone', this.inscrire.telephone)
    fd.append('role', this.inscrire.role)
    fd.append('password', this.inscrire.password)
    fd.append('image' ,this.image)

    this.userservice.register(fd)
       .subscribe(
        res=>{
          this.router.navigate(['/login']);
        }
       );

  }

}
