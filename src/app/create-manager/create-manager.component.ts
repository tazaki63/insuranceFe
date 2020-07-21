import { Component, OnInit } from '@angular/core';
import { BranchManager } from '../branchmanager';
import { BranchManagerService } from '../service/branchmanager.service';

@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrls: ['./create-manager.component.css']
})
export class CreateManagerComponent implements OnInit {

  branchManager:BranchManager=new BranchManager(null,null,null,null,null,null,null,null,null,null,null,null);
  constructor(private service:BranchManagerService) { }

  ngOnInit(): void {
  }

  createBranchManager():void{
    this.service.createBranchManager(this.branchManager).subscribe(data=>console.log('manager created'));
  
  }

}
