import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentCustomersComponent } from './agent-customers.component';

describe('AgentCustomersComponent', () => {
  let component: AgentCustomersComponent;
  let fixture: ComponentFixture<AgentCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
