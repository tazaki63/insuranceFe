import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer:Customer=new Customer(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
  }

  createCustomer():void{
    this.service.create(this.customer).subscribe(data=>console.log('customer created'));
  }

}
