import { Component, OnInit } from '@angular/core';
import { CPR } from '../cpr';
import { CprService } from '../service/cpr.service';
import { Agent } from '../agent';
import { Policy } from '../policy';
import { AgentService } from '../service/agent.service';
import { PolicyService } from '../service/policy.service';
import { Customer } from '../customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-create-cpr',
  templateUrl: './create-cpr.component.html',
  styleUrls: ['./create-cpr.component.css']
})
export class CreateCprComponent implements OnInit {

  agents:Agent[];
  policies:Policy[]
  customers:Customer[]
  cpr:CPR=new CPR(null,null,null,null,null,null,null,null,null,null,null);
  constructor(private service:CprService, private agentService:AgentService,
    private customerService:CustomerService, private policyService:PolicyService) { }

  ngOnInit(): void {
    this.agentService.getAllAgents().subscribe(response=>this.agentSuccessResponse(response));
    this.policyService.getAll().subscribe(response=>this.policySuccessResponse(response));
    this.customerService.getAll().subscribe(response=>this.customerSuccessResponse(response));
  }

  createCPR():void{
    this.service.create(this.cpr).subscribe(data=>console.log('cpr created'));
  }

  
  customerSuccessResponse(response){
    this.customers=response;
  }


  agentSuccessResponse(response){
    this.agents=response;
  }

  policySuccessResponse(response){
    this.policies=response;
  }

}
