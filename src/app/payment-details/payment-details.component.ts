import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  customer:Customer;
  constructor(private service:CustomerService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCustomer();
  }


  loadCustomer():void{
    const customerId = this.activatedRoute.snapshot.params.customerId;
    this.service.getById(customerId).subscribe(
      data=>{
        this.customer=data;
      },
      err=>{
        console.log(err);
      }
    );
  }

}
