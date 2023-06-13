import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestEtudiantComponent } from './gest-etudiant.component';

describe('GestEtudiantComponent', () => {
  let component: GestEtudiantComponent;
  let fixture: ComponentFixture<GestEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
