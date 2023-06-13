import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  constructor(private http:HttpClient) { }

  private url='http://localhost:3000/formation/';
 // inscrition utilisateur
  register(formation : any){
    return this.http.post(this.url + 'ajout', formation);
  }


  getAll(){
    return this.http.get(this.url + 'getall');
  }


  deleteformation(id:any){
    return this.http.delete(this.url + 'delete/' +id);
  }
   

  getbyid(id:number){
    return this.http.get<Formation>(this.url + 'getbyid/' + id);
  }

  updatemateriel(formation : Formation){
    return this.http.put(this.url + 'update/'+formation._id,formation);
  }
}
