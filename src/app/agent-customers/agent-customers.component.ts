import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-agent-customers',
  templateUrl: './agent-customers.component.html',
  styleUrls: ['./agent-customers.component.css']
})
export class AgentCustomersComponent implements OnInit {

  customers:Customer[];

  


  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.service.getByAgentId(2).subscribe(response=>this.customerSuccessResponse(response));
    
  }

  customerSuccessResponse(response){
    this.customers=response;
  }

}
