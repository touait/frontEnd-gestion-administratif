import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-gest-utilisateur',
  templateUrl: './gest-utilisateur.component.html',
  styleUrls: ['./gest-utilisateur.component.scss']
})
export class GestUtilisateurComponent implements OnInit {
 //pagnation
 page: number = 1;
 count: number = 0;
 tableSize: number = 3;
 tableSizes: any = [3, 6, 9, 12];

  prenom!:string;
  
utilisateurs:any;

  constructor(
    private router:Router, private data:AuthService
  ) { }

  ngOnInit(): void {
   this.getall();
   
  }

getall(){
  this.data.getAll()
  .subscribe(
    res=>{
      this.utilisateurs=res;
    },
    err=>{
      console.log(err);
    }
  )
}




delete(id:any, i:number){
  this.data.deleteutilisateur(id).subscribe(response=>{
    console.log(response);
    this.utilisateurs.splice(i,1)
  })
}


search(){
  if(this.prenom !=""){
    this.utilisateurs=this.utilisateurs.filter((res: { prenom: string; })=>{
      return res.prenom.toLocaleLowerCase().match(this.prenom.toLocaleLowerCase());
        });
  }else if(this.prenom==""){
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
