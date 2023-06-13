import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAbscenceComponent } from './ajouter-abscence.component';

describe('AjouterAbscenceComponent', () => {
  let component: AjouterAbscenceComponent;
  let fixture: ComponentFixture<AjouterAbscenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAbscenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAbscenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
