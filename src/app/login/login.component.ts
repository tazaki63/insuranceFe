import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from 'src/app/service/authentication.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthenticationService,
     private token: TokenStorageService) {
  }
roles:string[];
errorMessage='';
isLoggedIn=false;
isLoginFailed=false;

  username: string;
  password: string;

  ngOnInit(): void {
    if(this.token.isUserLoggedIn()){
      
      this.roles=this.token.getUser().roles;
    }
  }

  login(): void {
    this.authService.authenticate(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.token.saveUser(data);
        this.isLoginFailed=false;
        
        this.roles=this.token.getUser().roles;
        this.router.navigate(['home']);
      }
    );
  }

}
