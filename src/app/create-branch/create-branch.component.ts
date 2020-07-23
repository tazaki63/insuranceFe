import { Component, OnInit } from '@angular/core';
import { Branch } from '../branch';
import { BranchService } from '../service/branch.service';
import { BranchManager } from '../branchmanager';
import { BranchManagerService } from '../service/branchmanager.service';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.css']
})
export class CreateBranchComponent implements OnInit {


  branch:Branch=new Branch(null,null,null,null,null,null,null,null,null,);
  managers:BranchManager[];
  constructor(private service:BranchService, private managerService:BranchManagerService) { }

  ngOnInit(): void {
    this.managerService.getAllManagers().subscribe(response=>this.managerSuccessResponse(response));
  }

  
  createBranch():void{
    this.service.createBranch(this.branch).subscribe(data=>console.log('branch created'));
  }
  managerSuccessResponse(response){
    this.managers=response;
  }

}
