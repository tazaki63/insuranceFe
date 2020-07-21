import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCeoComponent } from './create-ceo.component';

describe('CreateCeoComponent', () => {
  let component: CreateCeoComponent;
  let fixture: ComponentFixture<CreateCeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
