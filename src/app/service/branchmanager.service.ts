import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BranchManager} from '../branchmanager';

@Injectable({
  providedIn: 'root'
})
export class BranchManagerService {

  constructor(private http:HttpClient) { }

  public getAllManagers(){
    return this.http.get<BranchManager[]>('http://localhost:8080/api/branchManagers/allBranchManagers');
  }

  public createBranchManager(branchManager){
    return this.http.post<BranchManager>('http://localhost:8080/api/branchManagers/createBranchManager', branchManager);
  }

  public deleteBranchManager(branchManager){
    return this.http.delete<BranchManager>('http://localhost:8080/api/branchManagers/'+branchManager.managerId);
  }

  public getBranchManager(branchManager){
    return this.http.get<BranchManager>('http://localhost:8080/api/branchManagers/'+branchManager.managerId);
  }

  public getById(managerId:number){
    return this.http.get<BranchManager>('http://localhost:8080/api/branchManagers/'+managerId);
  }

  public updateAgent(branchManager){
    return this.http.put<BranchManager>('http://localhost:8080/api/branchManagers/update/'+branchManager.managerId, branchManager);
  }

}