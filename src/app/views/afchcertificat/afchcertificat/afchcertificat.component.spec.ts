import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfchcertificatComponent } from './afchcertificat.component';

describe('AfchcertificatComponent', () => {
  let component: AfchcertificatComponent;
  let fixture: ComponentFixture<AfchcertificatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfchcertificatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfchcertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
