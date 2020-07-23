import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCprComponent } from './view-cpr.component';

describe('ViewCprComponent', () => {
  let component: ViewCprComponent;
  let fixture: ComponentFixture<ViewCprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
