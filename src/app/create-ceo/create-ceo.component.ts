import { Component, OnInit } from '@angular/core';
import { CEO } from '../ceo';
import { CeoService } from '../service/ceo.service';

@Component({
  selector: 'app-create-ceo',
  templateUrl: './create-ceo.component.html',
  styleUrls: ['./create-ceo.component.css']
})
export class CreateCeoComponent implements OnInit {

  ceo:CEO=new CEO(null,'',null,',','','','');
  constructor(private service:CeoService) { }

  ngOnInit(): void {
  }

  createCEO():void{
    this.service.create(this.ceo).subscribe(data=>console.log('ceo created'));
  }

}
