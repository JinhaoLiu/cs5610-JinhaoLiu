import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user.service.client';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  // properties
  errorFlag: boolean;
  errorMsg = '';

  constructor(
    private userService: UserService, 
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit() { }

  login(username: String, password: String) {
    this.errorMsg = '';
    this.errorFlag = false;
    if (username == null || username.trim() == "") {
      this.errorMsg += 'Username cannot be empty \n';
      this.errorFlag = true;
    }
    if (password == null || password.trim() == "") {
      this.errorMsg += 'Password cannot be empty \n';
      this.errorFlag = true;
    }
    if (this.errorFlag) {
      return;
    }
    if (!this.errorFlag) {
      this.userService.login(username, password)
        .subscribe(
          (data: any) => {
            this.sharedService.user = data;
            this.errorFlag = false;
            this.router.navigate(['/user', data._id]);
          },
          (error: any) => {
            this.errorFlag = true;
            this.errorMsg = error;
          }
        );
    }
  }
}
