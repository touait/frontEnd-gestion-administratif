import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestFormationComponent } from './gest-formation.component';

describe('GestFormationComponent', () => {
  let component: GestFormationComponent;
  let fixture: ComponentFixture<GestFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
