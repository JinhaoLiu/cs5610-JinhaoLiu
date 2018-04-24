import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service';
import {environment} from '../../../../environments/environment';

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

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = 'Invalid username or password !';
  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    console.log(this.username);
    console.log(this.password);
    this.userService.login(this.username, this.password)
      .subscribe((user: any) => {
          this.sharedService.user = user;
          this.errorFlag = false;
          this.router.navigate(['/profile']); },
        (error: any) => {
          this.errorFlag = true;
        });
  }

}
