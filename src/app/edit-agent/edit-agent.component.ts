import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent';

@Component({
  selector: 'app-edit-agent',
  templateUrl: './edit-agent.component.html',
  styleUrls: ['./edit-agent.component.css']
})
export class EditAgentComponent implements OnInit {

  agent:Agent=new Agent(null,null,null,null,null,null,null,null,null,null,null,);

  constructor() { }

  ngOnInit(): void {
  }

  editAgent(agent:Agent){
    
  }
}
