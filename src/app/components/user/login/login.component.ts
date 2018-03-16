import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = 'Invalid username or password !';
  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService.findUserByCredentials(this.username, this.password)
      .subscribe((user: any) => {
        if (user) {
          this.router.navigate(['/user/', user._id ]);
        } else {
          this.errorFlag = true;
        }
      });
  }

}
