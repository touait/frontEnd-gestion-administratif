import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestAbscenceComponent } from './gest-abscence.component';

describe('GestAbscenceComponent', () => {
  let component: GestAbscenceComponent;
  let fixture: ComponentFixture<GestAbscenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestAbscenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestAbscenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
