import { Component, OnInit } from '@angular/core';
import { Policy } from '../policy';
import { PolicyService } from '../service/policy.service';

@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrls: ['./view-policy.component.css']
})
export class ViewPolicyComponent implements OnInit {

  

  editField:string;
  policies:Policy[];
  constructor(private service:PolicyService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(response=>this.policySuccessResponse(response));
  }

  policySuccessResponse(response){
    this.policies=response;
  }

  deletePolicy(policy:Policy):void{
    this.service.delete(policy).subscribe(data=>{
      this.policies=this.policies.filter(x=>x!==policy);
    })
  }

  updateList(id: number, property: string, event: any, policy:Policy) {
    const editField = event.target.textContent;
    this.policies[id][property] = editField;
    this.update(policy);
  }

  update(policy:Policy){
    this.service.update(policy).subscribe(response=>this.policySuccessResponse(response));
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}
