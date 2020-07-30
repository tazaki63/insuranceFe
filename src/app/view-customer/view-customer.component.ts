import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../service/customer.service';
import { FormGroup } from '@angular/forms';
import { Agent } from '../agent';
import { AgentService } from '../service/agent.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  editField:string;
  customers:Customer[];
  agents:Agent[];
  


  constructor(private service:CustomerService, private agentService:AgentService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(response=>this.customerSuccessResponse(response));
    
    
  }

  customerSuccessResponse(response){
    this.customers=response;   

  }

  clickMethod() {
    if(confirm("Are you sure to save changes?")) {
      console.log("Implement functionality here");
    }
  }



  deleteCustomer(customer:Customer):void{
    this.service.delete(customer).subscribe(data=>{
      this.customers=this.customers.filter(x=>x!==customer);
    })
  }

  updateList(id: number, property: string, event: any, customer:Customer) {
    const editField = event.target.textContent;
    this.customers[id][property] = editField;
    this.update(customer);
    this.clickMethod();
    window.location.reload();
  }

  update(customer:Customer){
    this.service.update(customer).subscribe(response=>this.customerSuccessResponse(response));
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

 

}
