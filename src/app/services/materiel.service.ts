import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Materiel } from '../models/materiel';


@Injectable({
  providedIn: 'root'
})
export class MaterielService {

  constructor(private http:HttpClient) { }

  private url='http://localhost:3000/materiel/';
 
   register(materiel : any){
     return this.http.post(this.url + 'ajout', materiel);
   }


   getAll(){
    return this.http.get(this.url + 'getall');
  }


  getbyid(id:number){
    return this.http.get<Materiel>(this.url + 'getbyid/' + id);
  }





  deletemateriel(id:any){
    return this.http.delete(this.url + 'delete/' +id);
  }



  updatemateriel(materiel : Materiel){
    return this.http.put(this.url + 'update/'+materiel._id,materiel);
  }
}
