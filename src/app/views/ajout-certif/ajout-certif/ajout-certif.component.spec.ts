import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCertifComponent } from './ajout-certif.component';

describe('AjoutCertifComponent', () => {
  let component: AjoutCertifComponent;
  let fixture: ComponentFixture<AjoutCertifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCertifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
