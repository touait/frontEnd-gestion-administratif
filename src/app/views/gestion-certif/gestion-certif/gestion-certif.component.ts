import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CertificatService } from 'src/app/services/certificat.service';

@Component({
  selector: 'app-gestion-certif',
  templateUrl: './gestion-certif.component.html',
  styleUrls: ['./gestion-certif.component.scss']
})
export class GestionCertifComponent implements OnInit {
  certificats:any;
  certificat!:String;

   //pagnation
 page: number = 1;
 count: number = 0;
 tableSize: number = 3;
 tableSizes: any = [3, 6, 9, 12];


  constructor(
    private router:Router,
    private certifservice:CertificatService
  ) { }

  ngOnInit(): void {
    this.getall();
  }

  getall(){
    this.certifservice.getAll().subscribe(
      res=>{
        this.certificats=res;
      },
      err=>{
        console.log(err);
      }
    )
  }



  delete(id:any, i:number){
    this.certifservice.deletecertif(id).subscribe(response=>{
      console.log(response);
      this.certificats.splice(i,1)
    })
  }
  

  updatemateriel(){

  }



  //pagination
onTableDataChange(event: any) {
  this.page = event;
  // this.getall();
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  // this.getall();
}


//serach
search(){
  if(this.certificat !=""){
    this.certificats=this.certificats.filter((res: { prenom: string; })=>{
      return res.prenom.toLocaleLowerCase().match(this.certificat.toLocaleLowerCase());
        });
  }else if(this.certificat==""){
    this.ngOnInit();

  }
  
}

}
