import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaireGeneralComponent } from './secretaire-general.component';

describe('SecretaireGeneralComponent', () => {
  let component: SecretaireGeneralComponent;
  let fixture: ComponentFixture<SecretaireGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaireGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaireGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
