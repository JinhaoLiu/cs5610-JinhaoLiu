import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  // properties
  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password!';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  login(username: String, password: String) {
    if (username.trim() == "") {
      this.errorMsg = 'Username cannot be empty';
      this.errorFlag = true;
    }
    if (password.trim() == "") {
      this.errorMsg = 'Password cannot be empty';
      this.errorFlag = true;
    }
    if (!this.errorFlag) {
      this.userService.findUserByCredentials(username, password)
        .subscribe(
          (user: User) => {
            this.errorFlag = false;
            this.router.navigate(['/user', user._id]);
          },
          (error: any) => {
            this.errorFlag = true;
            this.errorMsg = error;
          }
        );
    }
  }

}
