import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/admin.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.css']
})
export class AdminContainerComponent implements OnInit {

  public user: User;

  constructor(private loginService: LoginService) {
    this.user = this.loginService.activeUser;
  }

  

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
  }

}
