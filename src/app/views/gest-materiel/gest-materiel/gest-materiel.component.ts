import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterielService } from 'src/app/services/materiel.service';


@Component({
  selector: 'app-gest-materiel',
  templateUrl: './gest-materiel.component.html',
  styleUrls: ['./gest-materiel.component.scss']
})
export class GestMaterielComponent implements OnInit {
  materiels:any;
  materiel!:String;


   //pagnation
 page: number = 1;
 count: number = 0;
 tableSize: number = 5;
 tableSizes: any = [3, 6, 9, 12];

  constructor(
    private router:Router, private matservice :MaterielService
  ) { }

  ngOnInit(): void {

  this.getall();
  }

  getall(){
    this.matservice.getAll().subscribe(
      res=>{
        this.materiels=res;
      },
      err=>{
        console.log(err);
      }
    )
  }

  delete(id:any, i:number){
    this.matservice.deletemateriel(id).subscribe(response=>{
      console.log(response);
      this.materiels.splice(i,1)
    })
  }
  

  updatemateriel(){

  }

//serach
  search(){
    if(this.materiel !=""){
      this.materiels=this.materiels.filter((res: { destination: string; })=>{
        return res.destination.toLocaleLowerCase().match(this.materiel.toLocaleLowerCase());
          });
    }else if(this.materiel==""){
      this.ngOnInit();
  
    }
    
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
}
