import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../service/customer.service';
import { AgentService } from '../service/agent.service';
import { PolicyService } from '../service/policy.service';
import { BranchService } from '../service/branch.service';
import { Agent } from '../agent';
import { Policy } from '../policy';
import { Branch } from '../branch';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer:Customer=new Customer(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
  agents:Agent[];
  policies:Policy[];
  branches:Branch[];
  constructor(private service:CustomerService, private agentService:AgentService,
              private policyService:PolicyService, private branchService:BranchService
    ) { }

  ngOnInit(): void {
    this.agentService.getAllAgents().subscribe(response=>this.agentSuccessResponse(response));
    this.policyService.getAll().subscribe(response=>this.policySuccessResponse(response));
    this.branchService.getAllBranches().subscribe(response=>this.branchSuccessResponse(response));
  }

  createCustomer():void{
    this.service.create(this.customer).subscribe(data=>console.log('customer created'));
  }

  agentSuccessResponse(response){
    this.agents=response;
  }

  policySuccessResponse(response){
    this.policies=response;
  }
  branchSuccessResponse(response){
    this.branches=response;
  }

}
