import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCprComponent } from './create-cpr.component';

describe('CreateCprComponent', () => {
  let component: CreateCprComponent;
  let fixture: ComponentFixture<CreateCprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
