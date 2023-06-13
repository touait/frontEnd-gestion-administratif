import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-gest-etudiant',
  templateUrl: './gest-etudiant.component.html',
  styleUrls: ['./gest-etudiant.component.scss']
})
export class GestEtudiantComponent implements OnInit {
  inscriptions:any;

  inscription!:String;

   //pagnation
 page: number = 1;
 count: number = 0;
 tableSize: number = 3;
 tableSizes: any = [3, 6, 9, 12];

  constructor(
    private router:Router, private inscripservice:InscriptionService
  ) { }

  ngOnInit(): void {
   this.getall();
  }
  getall(){
    this.inscripservice.getAll()
    .subscribe(
      res=>{
        this.inscriptions=res;
      },
      err=>{
        console.log(err);
      }
    )
  }


  delete(id:any, i:number){
    this.inscripservice.deleteinscription(id).subscribe(response=>{
      console.log(response);
      this.inscriptions.splice(i,1)
    })
  }

 
//pagination
onTableDataChange(event: any) {
  this.page = event;
  this.getall();
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.getall();
}


//serach
search(){
  if(this.inscription !=""){
    this.inscriptions=this.inscriptions.filter((res: { prenom: string; })=>{
      return res.prenom.toLocaleLowerCase().match(this.inscription.toLocaleLowerCase());
        });
  }else if(this.inscription==""){
    this.ngOnInit();

  }
  
}

}
