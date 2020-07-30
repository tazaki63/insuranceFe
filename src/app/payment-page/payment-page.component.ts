import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  customers:Customer[];
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(response=>this.customerSuccessResponse(response));

  }

  customerSuccessResponse(response){
    this.customers=response;
  }
}
