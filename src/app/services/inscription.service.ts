import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inscription } from './../models/inscription';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http:HttpClient) { }

  private url='http://localhost:3000/inscription/';
  // inscrition utilisateur
   register(inscription : any){
     return this.http.post(this.url + 'ajout', inscription);
   }


   getAll(){
    return this.http.get(this.url + 'getall');
  }

  getbyid(id:number){
    return this.http.get<Inscription>(this.url + 'getbyid/' + id);
  }

  getbyformation(formation:String){
    return this.http.get<Inscription>(this.url + 'getbyformation/' + formation);
  }


  deleteinscription(id:any){
    return this.http.delete(this.url + 'delete/' +id);
  }
   

  updateinscription (inscription : Inscription){
    return this.http.put(this.url + 'update/'+inscription._id,inscription);
  }

}
