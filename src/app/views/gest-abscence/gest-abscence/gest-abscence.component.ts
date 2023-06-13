import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbscenceService } from 'src/app/services/abscence.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-gest-abscence',
  templateUrl: './gest-abscence.component.html',
  styleUrls: ['./gest-abscence.component.scss']
})
export class GestAbscenceComponent implements OnInit {
  abscence!: string;
  abscences:any;


   //pagnation
 page: number = 1;
 count: number = 0;
 tableSize: number = 5;
 tableSizes: any = [3, 6, 9, 12];

  constructor(
    private router:Router, 
    private abscenceservice : AbscenceService
  ) { }

  ngOnInit(): void {
    this.getallAbs();
 
  }

  getallAbs(): void {
    this.abscenceservice.getAll()
    .subscribe(
      res=>{
        this.abscences=res;
      },
      err=>{
        console.log(err);
      }
    )
    }




  delete(id:any, i:number){
    this.abscenceservice.deleteabscence(id).subscribe(response=>{
      console.log(response);
      this.abscences.splice(i,1)
    })
  }
  





//search
search(){
  if(this.abscence !=""){
    this.abscences=this.abscences.filter((res: { formation: string; })=>{
      return res.formation.toLocaleLowerCase().match(this.abscence.toLocaleLowerCase());
        });
  }else if(this.abscence==""){
    this.ngOnInit();
  } 
}



downloedPdf(){
  var doc= new jsPDF();
  autoTable(doc,{html:"#test"});
  doc.save("testpdf");
}

//pagination
onTableDataChange(event: any) {
  this.page = event;
  this.getallAbs();
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.getallAbs();
}

}
