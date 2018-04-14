import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  userId: String;
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService) { }

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
    return this.userService.logout().subscribe(
      () => {
        console.log('this is logout');
        this.router.navigate(['/login']);
      }
    );
  }
  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
      return this.userService.findUserById(this.userId).subscribe(
        (user: User) => {
          this.user = user;
        }
      );
  }

}
