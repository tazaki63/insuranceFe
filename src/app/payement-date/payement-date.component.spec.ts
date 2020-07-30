import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementDateComponent } from './payement-date.component';

describe('PayementDateComponent', () => {
  let component: PayementDateComponent;
  let fixture: ComponentFixture<PayementDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayementDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayementDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
