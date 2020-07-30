import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent';
import { AgentService } from '../service/agent.service';

@Component({
  selector: 'app-agent-commission',
  templateUrl: './agent-commission.component.html',
  styleUrls: ['./agent-commission.component.css']
})
export class AgentCommissionComponent implements OnInit {

  agents:Agent[];
  constructor(private agentService:AgentService) { }



  ngOnInit(): void {
    this.agentService.getAllAgents().subscribe(response=>this.agentSuccessResponse(response));
  }

  agentSuccessResponse(response){
    this.agents=response;
  }

}
