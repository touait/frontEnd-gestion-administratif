import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestUtilisateurComponent } from './gest-utilisateur.component';

describe('GestUtilisateurComponent', () => {
  let component: GestUtilisateurComponent;
  let fixture: ComponentFixture<GestUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
