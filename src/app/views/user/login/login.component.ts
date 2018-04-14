import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
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
  username: String;
  passname: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';
  baseUrl = environment.baseUrl;

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }
  login() {
    this.userService.login(this.username, this.passname)
      .subscribe((user: any) => {
          this.sharedService.user = user;
          this.errorFlag = false;
          this.router.navigate(['/profile']); },
        (error: any) => {
          this.errorFlag = true;
        });
  }
  register() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
  }


}
