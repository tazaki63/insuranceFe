import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Branch} from 'src/app/branch';
import { TokenStorageService } from './token-storage.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http:HttpClient, token:TokenStorageService) { }

  
  
  public getAllBranches(){
    return this.http.get<Branch[]>('http://localhost:8080/api/branches/allBranches');
  }

  public createBranch(branch){
    return this.http.post<Branch>('http://localhost:8080/api/branches/createBranch', branch);
  }

  public deleteBranch(branch){
    return this.http.delete<Branch>('http://localhost:8080/api/branches/'+branch.branchId);
  }

  public getBranch(branch){
    return this.http.get<Branch>('http://localhost:8080/api/branches/'+branch.branchId);
  }

  public updateBranch(branch){
    return this.http.put<Branch>('http://localhost:8080/api/branches/update/'+branch.branchId, branch);
  }

}
