import { Component, OnInit } from '@angular/core';
import { BranchManagerService } from '../service/branchmanager.service';
import { BranchManager } from '../branchmanager';

@Component({
  selector: 'app-view-manager',
  templateUrl: './view-manager.component.html',
  styleUrls: ['./view-manager.component.css']
})
export class ViewManagerComponent implements OnInit {

  editField:string;
  managers:BranchManager[];
  constructor(private service:BranchManagerService) { }

  ngOnInit(): void {
    this.service.getAllManagers().subscribe(response=>this.managerSuccessResponse(response));

  }


  managerSuccessResponse(response){
    this.managers=response;
  }

  deleteManager(manager:BranchManager):void{
    this.service.deleteBranchManager(manager).subscribe(data=>{
      this.managers=this.managers.filter(x=>x!==manager);
    })
  }

  updateList(id: number, property: string, event: any, manager:BranchManager) {
    const editField = event.target.textContent;
    this.managers[id][property] = editField;
    this.update(manager);
  }

  update(manager:BranchManager){
    this.service.updateAgent(manager).subscribe(response=>this.managerSuccessResponse(response));
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}
