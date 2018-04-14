import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;

  user: any = {};
  errorFlag: boolean;
  errorMsg: String;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  register(username: String, password: String, verifyPassword: String) {
    this.errorFlag = false;
    this.errorMsg = '';
    if (username == null || username.trim() == "") {
      this.errorMsg += 'Username cannot be empty <br />';
      this.errorFlag = true;
    }
    if (password == null || password.trim() == "") {
      this.errorMsg += 'Password cannot be empty <br />';
      this.errorFlag = true;
    }
    if (verifyPassword == null || verifyPassword.trim() == "") {
      this.errorMsg += 'Verify Password cannot be empty <br />';
      this.errorFlag = true;
    }
    if (password != verifyPassword) {
      this.errorMsg += 'Password and Verify Password do not match <br />';
      this.errorFlag = true;
    }
    if (this.errorFlag) {
      return;
    }
    if (!this.errorFlag) {
      this.userService.register(username, password).subscribe(
        (user: any) => {
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
