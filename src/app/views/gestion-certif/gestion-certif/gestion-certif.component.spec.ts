import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCertifComponent } from './gestion-certif.component';

describe('GestionCertifComponent', () => {
  let component: GestionCertifComponent;
  let fixture: ComponentFixture<GestionCertifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCertifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
