import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  editField:string;
  customers:Customer[];
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(response=>this.customerSuccessResponse(response));
  }

  customerSuccessResponse(response){
    this.customers=response;
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
  }

  update(customer:Customer){
    this.service.update(customer).subscribe(response=>this.customerSuccessResponse(response));
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}
