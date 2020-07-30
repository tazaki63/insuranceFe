import { Component, OnInit } from '@angular/core';
import { CprService } from '../service/cpr.service';
import { CPR } from '../cpr';

@Component({
  selector: 'app-view-cpr',
  templateUrl: './view-cpr.component.html',
  styleUrls: ['./view-cpr.component.css']
})
export class ViewCprComponent implements OnInit {

  editField:string;
  cprs:CPR[];
  constructor(private service:CprService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(response=>this.cprSuccessResponse(response));

  }

  clickMethod() {
    if(confirm("Are you sure to save changes?")) {
      console.log("Implement functionality here");
    }
  }

  cprSuccessResponse(response){
    this.cprs=response;
  }

  deleteCPR(cpr:CPR):void{
    this.service.delete(cpr).subscribe(data=>{
      this.cprs=this.cprs.filter(x=>x!==cpr);
    })
  }
  updateList(id: number, property: string, event: any, cpr:CPR) {
    const editField = event.target.textContent;
    this.cprs[id][property] = editField;
    this.update(cpr);
    this.clickMethod();
    window.location.reload();
  }

  update(cpr:CPR){
    this.service.update(cpr).subscribe(response=>this.cprSuccessResponse(response));
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}
