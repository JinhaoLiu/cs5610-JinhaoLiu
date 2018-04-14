import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';


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

  constructor(private userService: UserService, private router: Router) { }
  login() {
    this.userService.findUserByCredential(this.username, this.passname)
      .subscribe((user: User) => {
          this.errorFlag = false;
          this.router.navigate(['/user', user._id]); },
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
