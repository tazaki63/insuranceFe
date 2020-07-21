import { Component, OnInit } from '@angular/core';
import { CPR } from '../cpr';
import { CprService } from '../service/cpr.service';

@Component({
  selector: 'app-create-cpr',
  templateUrl: './create-cpr.component.html',
  styleUrls: ['./create-cpr.component.css']
})
export class CreateCprComponent implements OnInit {

  cpr:CPR=new CPR(null,null,null,null,null,null,null,null,null,null);
  constructor(private service:CprService) { }

  ngOnInit(): void {
  }

  createCPR():void{
    this.service.create(this.cpr).subscribe(data=>console.log('cpr created'));
  }

}
