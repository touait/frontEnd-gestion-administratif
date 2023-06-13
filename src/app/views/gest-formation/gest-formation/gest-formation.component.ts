import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-gest-formation',
  templateUrl: './gest-formation.component.html',
  styleUrls: ['./gest-formation.component.scss']
})
export class GestFormationComponent implements OnInit {

  //pagnation
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  tableSizes: any = [3, 6, 9, 12];


  formation!:String;
  formations:any;

  constructor(
    private router: Router, private formservice : FormationService
  ) { }

  ngOnInit(): void {
   
this.getall();
  }

  getall(): void {
    this.formservice.getAll()
    .subscribe(
      res=>{
        this.formations=res;
      },
      err=>{
        console.log(err);
      }
    )
    }




  delete(id:any, i:number){
    this.formservice.deleteformation(id).subscribe(response=>{
      console.log(response);
      this.formations.splice(i,1)
    })
  }
  

  updateformation(){

  }



  search(){
    if(this.formation !=""){
      this.formations=this.formations.filter((res: { nomformation: string; })=>{
        return res.nomformation.toLocaleLowerCase().match(this.formation.toLocaleLowerCase());
          });
    }else if(this.formation==""){
      this.ngOnInit();
  
    }
    
  }



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
