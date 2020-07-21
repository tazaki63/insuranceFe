import { Component, OnInit } from '@angular/core';
import { Branch } from '../branch';
import { BranchService } from '../service/branch.service';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.css']
})
export class CreateBranchComponent implements OnInit {

  branch:Branch=new Branch(null,null,null,null,null,null,null,null,null,);
  constructor(private service:BranchService) { }

  ngOnInit(): void {
  }

  
  createBranch():void{
    this.service.createBranch(this.branch).subscribe(data=>console.log('branch created'));
  }

}
