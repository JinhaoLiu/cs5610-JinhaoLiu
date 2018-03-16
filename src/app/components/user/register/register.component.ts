import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  errorFlag: boolean;
  errorMsg: string;
  user = {
    _id: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  };


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = 'Invalid username or password';
  }

  onSubmit() {
    if (this.registerForm.value.password !== this.registerForm.value.verifyPassword) {
      this.errorFlag = true;
    } else {
      this.user.username = this.registerForm.value.username;
      this.user.password = this.registerForm.value.password;
      this.user.firstName = this.registerForm.value.firstName;
      this.user.lastName = this.registerForm.value.lastName;
      this.userService.createUser(this.user)
        .subscribe((user: any) => {
          if (user) {
            this.router.navigate(['/user/', user._id]);
          }
        });
    }
  }

  login() {
    this.router.navigate(['/login']);
  }

}
