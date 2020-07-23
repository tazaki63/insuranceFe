import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent';
import { AgentService } from '../service/agent.service';

@Component({
  selector: 'app-view-agent',
  templateUrl: './view-agent.component.html',
  styleUrls: ['./view-agent.component.css']
})
export class ViewAgentComponent implements OnInit {

  editField:string;
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

  updateList(id: number, property: string, event: any, agent:Agent) {
    const editField = event.target.textContent;
    this.agents[id][property] = editField;
    this.update(agent);
  }

  update(agent:Agent){
    this.service.updateAgent(agent).subscribe(response=>this.agentSuccessResponse(response));
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
