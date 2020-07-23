import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy } from 'src/app/policy';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http:HttpClient) { }

  public getAll(){
    return this.http.get<Policy[]>('http://localhost:8080/api/policies/allPolicies');
  }

  public create(policy){
    return this.http.post<Policy>('http://localhost:8080/api/policies/createPolicy', policy);
  }

  public delete(policy){
    return this.http.delete<Policy>('http://localhost:8080/api/policies/'+policy.policyId);
  }

  public get(policy){
    return this.http.get<Policy>('http://localhost:8080/api/policies/'+policy.policyId);
  }

  public update(policy){
    return this.http.put<Policy>('http://localhost:8080/api/policies/update/'+policy.policyId, policy);
  }
}
