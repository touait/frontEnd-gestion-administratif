import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { tap } from 'rxjs/internal/operators/tap';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 
  }

  private url='http://localhost:3000/utilisateur/';
 // inscrition utilisateur
  register(utilisateur : any){
    return this.http.post(this.url + 'ajout', utilisateur);
  }


  getAll(){
    return this.http.get(this.url + 'getall');
  }


  deleteutilisateur(id:any){
    return this.http.delete(this.url + 'delete/' +id);
  }

  getbyid(id:number){
    return this.http.get<Utilisateur>(this.url + 'getbyid/' + id);
  }

  updateutilisateur(utilisateur : Utilisateur){
    return this.http.put(this.url + 'update/'+utilisateur._id,utilisateur);
  }


  // login(utilisateur : any){
  //   return this.http.post(this.url + 'login', utilisateur)
  // }

  login(utilisateur : any){
    return this.http.post(this.url + 'login', utilisateur).pipe(
      tap((response : any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('token', response.role);
      })
    )
  }


  private getUser(token : string):Utilisateur{
    return JSON.parse(atob(token.split('.')[1])) as Utilisateur
       
  }

isLoggedIn(){
  let token=localStorage.getItem('token');
  if(token){
    return true;
  }else{
    return false;
  }
}

}
