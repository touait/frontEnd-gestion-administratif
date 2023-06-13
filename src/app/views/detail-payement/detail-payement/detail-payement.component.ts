import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-detail-payement',
  templateUrl: './detail-payement.component.html',
  styleUrls: ['./detail-payement.component.scss']
})
export class DetailPayementComponent implements OnInit {
  id:any;
  payements:any;


  constructor(
    private activateRoute:ActivatedRoute,
    private inscripservice:InscriptionService,
  ) { }

  ngOnInit(): void {

    this.id=this.activateRoute.snapshot.paramMap.get('id');
     this.inscripservice.getbyid(this.id)
     .subscribe(
      res=>{
        this.payements=res;
      }
     )

  }

}
