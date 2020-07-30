import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service:TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    this.service.signOut();
    this.router.navigate(['login']);
  }

}
