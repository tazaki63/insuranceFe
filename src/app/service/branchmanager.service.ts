import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BranchManager } from 'src/app/branchmanager';

@Injectable({
  providedIn: 'root'
})
export class BranchManagerService {

  constructor(private http:HttpClient) { }

  public getAllManagers(){
    return this.http.get<BranchManager[]>('http://localhost:8080/branchManagers/allBranchManagers');
  }

  public createBranchManager(branchManager){
    return this.http.post<BranchManager>('http://localhost:8080/branchManagers/createBranchManager', branchManager);
  }

  public deleteBranchManager(branchManager){
    return this.http.delete<BranchManager>('http://localhost:8080/branchManagers/'+branchManager.managerId);
  }

  public getBranchManager(branchManager){
    return this.http.get<BranchManager>('http://localhost:8080/branchManagers/'+branchManager.managerId);
  }

  public updateAgent(branchManager){
    return this.http.put<BranchManager>('http://localhost:8080/branchManagers/update/'+branchManager.managerId, branchManager);
  }

}