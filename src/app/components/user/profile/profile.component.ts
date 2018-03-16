import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  user = {};
  username: string;
  email: string;
  first: string;
  last: string;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        });
    this.userService.findUserById(this.userId)
      .subscribe((user: any) => {
        if (user) {
          this.user = user;
          this.username = this.user['username'];
          this.email = this.user['email'];
          this.first = this.user['firstName'];
          this.last = this.user['lastName'];
        }
      });
  }

}
