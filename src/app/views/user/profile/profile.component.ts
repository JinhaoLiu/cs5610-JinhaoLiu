import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  updateUser(changed_user) {
      return this.userService.updateUser(changed_user).subscribe(
        (user: User) => {
          this.user = user;
          this.router.navigate(['/login']);
        }
      );
  }
  deleteUser(delete_user) {
    return this.userService.deleteUser(delete_user._id).subscribe(
      () => this.router.navigate(['/login'])
    );
  }
  logout() {
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      return this.userService.findUserById(params['_id']).subscribe(
        (user: User) => {
          this.user = user;
        }
      );
    });
  }

}
