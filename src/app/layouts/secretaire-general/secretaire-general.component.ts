import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretaire-general',
  templateUrl: './secretaire-general.component.html',
  styleUrls: ['./secretaire-general.component.scss']
})
export class SecretaireGeneralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
