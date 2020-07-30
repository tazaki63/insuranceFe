import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Policy } from '../policy';

@Component({
  selector: 'app-policy-details-cust',
  templateUrl: './policy-details-cust.component.html',
  styleUrls: ['./policy-details-cust.component.css']
})
export class PolicyDetailsCustComponent implements OnInit {

  policy:Policy;
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.service.getPolicy(1).subscribe(response=>this.policySuccessResponse(response))
  }

  policySuccessResponse(response){
    this.policy=response;
  }
}
