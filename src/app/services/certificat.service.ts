import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Certificat } from '../models/certificat';

@Injectable({
  providedIn: 'root'
})
export class CertificatService {

  constructor(
    private http:HttpClient
  ) { }

  private url='http://localhost:3000/certificat/';
  // inscrition utilisateur
   register(certif : any){
     return this.http.post(this.url + 'ajout', certif);
   }

   getAll(){
    return this.http.get(this.url + 'getall');
  }

  deletecertif(id:any){
    return this.http.delete(this.url + 'delete/' +id);
  }

  getbyid(id:number){
    return this.http.get<Certificat>(this.url + 'getbyid/' + id);
  }

  updatecertif(Certificat : Certificat){
    return this.http.put(this.url + 'update/'+Certificat._id,Certificat);
  }
}
