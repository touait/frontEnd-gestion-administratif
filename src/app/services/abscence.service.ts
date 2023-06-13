import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Abscence } from '../models/abscence';

@Injectable({
  providedIn: 'root'
})
export class AbscenceService {

  constructor(
    private http:HttpClient
  ) { }


  private url='http://localhost:3000/abscence/';
  // inscrition utilisateur
   register(abscence : any){
     return this.http.post(this.url + 'ajout', abscence);
   }

   getAll(){
    return this.http.get(this.url + 'getall');
  }

  deleteabscence(id:any){
    return this.http.delete(this.url + 'delete/' +id);
  }

  getbyid(id:number){
    return this.http.get<Abscence>(this.url + 'getbyid/' + id);
  }

  getbyformation(keyword:string){
    return this.http.get<Abscence>(this.url + 'getbyformation/' + keyword);
  }

  updateabscence(abscence : Abscence){
    return this.http.put(this.url + 'update/'+abscence._id,abscence);
  }
}

