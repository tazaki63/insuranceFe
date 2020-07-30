import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-pay',
  templateUrl: './customer-pay.component.html',
  styleUrls: ['./customer-pay.component.css']
})
export class CustomerPayComponent implements OnInit {

  customers:Customer;
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.service.getById(1).subscribe(response=>this.customerSuccessResponse(response));

  }

  customerSuccessResponse(response){
    this.customers=response;
  }
}
