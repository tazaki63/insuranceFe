import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  customer:Customer;
  constructor(private service:CustomerService) {
    
   }
   ngOnInit(): void {
    this.service.getById(1).subscribe(response=>this.customerSuccessResponse(response));
    
    
  }

  customerSuccessResponse(response){
    this.customer=response;   

  }
}
