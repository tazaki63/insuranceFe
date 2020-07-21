import { Component, OnInit } from '@angular/core';
import {AgentService} from '../service/agent.service';
import { Agent } from '../agent';



@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.css']
})
export class CreateAgentComponent implements OnInit {

  agent:Agent=new Agent(null,null,null,null,null,null,null,null,null,null,null,);

  constructor(private service:AgentService) { }

  ngOnInit(): void {
  }

  createAgent():void{
    this.service.createAgent(this.agent).subscribe(data=>console.log('agent created'));
  }

}