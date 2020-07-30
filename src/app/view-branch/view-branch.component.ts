import { Component, OnInit } from '@angular/core';
import { BranchService } from '../service/branch.service';
import { Branch } from '../branch';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-view-branch',
  templateUrl: './view-branch.component.html',
  styleUrls: ['./view-branch.component.css']
})
export class ViewBranchComponent implements OnInit {

  editField:string;
  branches:Branch[];
  constructor(private service:BranchService,public loginService:TokenStorageService) { }

  ngOnInit(): void {
    this.service.getAllBranches().subscribe(response=>this.branchSuccessResponse(response));

  }

  branchSuccessResponse(response){
    this.branches=response;
  }

  deleteBranch(branch:Branch):void{
    this.service.deleteBranch(branch).subscribe(data=>{
      this.branches=this.branches.filter(x=>x!==branch);
    })
  }

  clickMethod() {
    if(confirm("Are you sure to save changes?")) {
      console.log("Implement functionality here");
    }
  }

  updateList(id: number, property: string, event: any, branch:Branch) {
    const editField = event.target.textContent;
    this.branches[id][property] = editField;
    this.update(branch);
    this.clickMethod();
    window.location.reload();
  }

  

  update(branch:Branch){
    this.service.updateBranch(branch).subscribe(response=>this.branchSuccessResponse(response));
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}
