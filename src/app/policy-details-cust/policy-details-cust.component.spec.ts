import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDetailsCustComponent } from './policy-details-cust.component';

describe('PolicyDetailsCustComponent', () => {
  let component: PolicyDetailsCustComponent;
  let fixture: ComponentFixture<PolicyDetailsCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyDetailsCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyDetailsCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
