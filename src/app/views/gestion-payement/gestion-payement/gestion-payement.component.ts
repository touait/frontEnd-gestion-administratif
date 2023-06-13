import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InscriptionService } from 'src/app/services/inscription.service';
import { FormationService } from 'src/app/services/formation.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-gestion-payement',
  templateUrl: './gestion-payement.component.html',
  styleUrls: ['./gestion-payement.component.scss']
})
export class GestionPayementComponent implements OnInit {
  inscriptions:any;
  inscription!:String;
 
 //pagnation
 page: number = 1;
 count: number = 0;
 tableSize: number = 5;
 tableSizes: any = [3, 6, 9, 12];

  constructor(
    private router:Router, 
    private inscripservice:InscriptionService,
    private formationservice :FormationService
  ) { }

  ngOnInit(): void {
  this.getallinscri();

  }
//afficher tout les etudiant
getallinscri(){
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
  this.getallinscri();
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.getallinscri();
}

  

//search
search(){
  if(this.inscription !=""){
    this.inscriptions=this.inscriptions.filter((res: { formation: string; })=>{
      return res.formation.toLocaleLowerCase().match(this.inscription.toLocaleLowerCase());
        });
  }else if(this.inscription==""){
    this.ngOnInit();
  } 
}

//print pdf
downloedPdf(){
  var doc= new jsPDF();
  autoTable(doc,{html:"#test"});
  doc.save("testpdf");
}




}



