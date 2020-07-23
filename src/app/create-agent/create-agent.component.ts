import { Component, OnInit } from '@angular/core';
import {AgentService} from '../service/agent.service';
import { Agent } from '../agent';
import { BranchManagerService } from '../service/branchmanager.service';
import { BranchManager } from '../branchmanager';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.css']
})
export class CreateAgentComponent implements OnInit {

  
  managers:BranchManager[];
  agent:Agent=new Agent(null,null,null,null,null,null,null,null,null,null,null, null, null);

  constructor(private service:AgentService,private managerService:BranchManagerService) { }

  ngOnInit(): void {
    
   
    this.managerService.getAllManagers().subscribe(response=>this.managerSuccessResponse(response));
  }

  

  createAgent():void{
    this.service.createAgent(this.agent).subscribe(data=>console.log('agent created'));
  }

  getManager(managerId:number){
    this.managerService.getById(managerId).subscribe(data=>console.log('manager added to agent'));
  }

  update(agent:Agent){
    this.service.updateAgent(agent).subscribe(data=>console.log("updated"));
  }

  managerSuccessResponse(response){
    this.managers=response;
  }

  
  
 
}