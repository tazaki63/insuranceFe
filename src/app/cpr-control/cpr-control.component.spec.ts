import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CprControlComponent } from './cpr-control.component';

describe('CprControlComponent', () => {
  let component: CprControlComponent;
  let fixture: ComponentFixture<CprControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CprControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CprControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
