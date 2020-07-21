import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent';
import { AgentService } from '../service/agent.service';

@Component({
  selector: 'app-view-agent',
  templateUrl: './view-agent.component.html',
  styleUrls: ['./view-agent.component.css']
})
export class ViewAgentComponent implements OnInit {

  agents:Agent[];
  constructor(private service:AgentService) { }

  ngOnInit(): void {
    this.service.getAllAgents().subscribe(response=>this.agentSuccessResponse(response));
  }

  agentSuccessResponse(response){
    this.agents=response;
  }

  deleteAgent(agent:Agent):void{
    this.service.deleteAgent(agent).subscribe(data=>{
      this.agents=this.agents.filter(x=>x!==agent);
    })
  }

}
