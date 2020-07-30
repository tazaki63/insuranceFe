import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private roles:string[];
  showManagerBoard=false;
  showAgentBoard=false;
  showCEOBoard=false;
  showCustomerBoard=false;
  id:number;
  username:string;

  constructor(public service:TokenStorageService) { }

  ngOnInit(): void {

    if(this.service.isUserLoggedIn()){
      const user=this.service.getUser();

      this.roles=user.roles;
      this.showAgentBoard=this.roles.includes('ROLE_AGENT');
      this.showCEOBoard=this.roles.includes('ROLE_CEO');
      this.showCustomerBoard=this.roles.includes('ROLE_CUSTOMER');
      this.showManagerBoard=this.roles.includes('ROLE_MANAGER');

      this.username=user.username;
      this.id=user.id;
    }

  }

}
