import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CPR} from 'src/app/cpr';
@Injectable({
  providedIn: 'root'
})
export class CprService {

  constructor(private http:HttpClient) { }

  public getAll(){
    return this.http.get<CPR[]>('http://localhost:8080/cprs/allCprs');
  }

  public create(cpr){
    return this.http.post<CPR>('http://localhost:8080/cprs/createCpr', cpr);
  }

  public delete(cpr){
    return this.http.delete<CPR>('http://localhost:8080/cprs/'+cpr.cprId);
  }

  public get(cpr){
    return this.http.get<CPR>('http://localhost:8080/cprs/'+cpr.cpr.Id);
  }

  public update(cpr){
    return this.http.put<CPR>('http://localhost:8080/cprs/update/'+cpr.cprId, cpr);
  }
}
