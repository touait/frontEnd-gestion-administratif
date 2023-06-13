import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CertificatService } from 'src/app/services/certificat.service';



@Component({
  selector: 'app-afchcertificat',
  templateUrl: './afchcertificat.component.html',
  styleUrls: ['./afchcertificat.component.scss']
})
export class AfchcertificatComponent implements OnInit {
id:any;
certificats:any;


  constructor(
    private activateRoute:ActivatedRoute,
    private certifservice:CertificatService
  ) { }

  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.paramMap.get('id');
     this.certifservice.getbyid(this.id)
     .subscribe(
      res=>{
        this.certificats=res;
      }
     )
  }



}
