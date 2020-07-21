import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Agent} from '../agent';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http:HttpClient) { }

  public getAllAgents(){
    return this.http.get<Agent[]>('http://localhost:8080/agents/allAgents');
  }

  public createAgent(agent){
    return this.http.post<Agent>('http://localhost:8080/agents/createAgent', agent);
  }

  public deleteAgent(agent){
    return this.http.delete<Agent>('http://localhost:8080/agents/'+agent.agentId);
  }

  public getAgent(agent){
    return this.http.get<Agent>('http://localhost:8080/agents/'+agent.agentId);
  }

  public updateAgent(agent){
    return this.http.put<Agent>('http://localhost:8080/agents/update/'+agent.agentId, agent);
  }

}