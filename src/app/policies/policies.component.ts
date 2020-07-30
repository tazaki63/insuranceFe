import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../service/policy.service';
import { Policy } from '../policy';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  policies:Policy[];
  constructor(private service:PolicyService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(response=>this.policySuccessResponse(response));
  }

  policySuccessResponse(response){
    this.policies=response;
  }

}
