import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyControlComponent } from './policy-control.component';

describe('PolicyControlComponent', () => {
  let component: PolicyControlComponent;
  let fixture: ComponentFixture<PolicyControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
