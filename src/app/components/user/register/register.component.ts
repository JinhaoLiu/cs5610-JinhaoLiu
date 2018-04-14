import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  errorFlag: boolean;
  errorMsg: string;
  // user = {
  //   _id: '',
  //   username: '',
  //   password: '',
  //   firstName: '',
  //   lastName: '',
  //   email: ''
  // };
  user: User;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = 'Invalid username or password';
    this.user = this.userService.dumpUser();
  }

  onSubmit() {
    if (this.registerForm.value.password !== this.registerForm.value.verifyPassword) {
      this.errorFlag = true;
    } else {
      this.user.username = this.registerForm.value.username;
      this.user.password = this.registerForm.value.password;
      this.user.firstName = this.registerForm.value.firstName;
      this.user.lastName = this.registerForm.value.lastName;
      this.userService.register(this.user.username, this.user.password)
        .subscribe(
          (data: any) => {
            this.router.navigate(['/profile']);
          }
        );
    }
  }

  login() {
    this.router.navigate(['/login']);
  }

}
