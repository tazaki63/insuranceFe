import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent';
import { AgentService } from '../service/agent.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commission-details',
  templateUrl: './commission-details.component.html',
  styleUrls: ['./commission-details.component.css']
})
export class CommissionDetailsComponent implements OnInit {
  agent:Agent;
  constructor(private service:AgentService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadAgent();
  }


  loadAgent():void{
    const agentId = this.activatedRoute.snapshot.params.agentId;
    this.service.getById(agentId).subscribe(
      data=>{
        this.agent=data;
      },
      err=>{
        console.log(err);
      }
    );
  }

}
