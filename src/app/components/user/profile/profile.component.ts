import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  user: User;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    return this.userService.findUserById(this.userId).subscribe(
      (user: User) => {
        this.user = user;
      }
    );
  }

  update() {
    return this.userService.updateUser(this.user._id, this.user).subscribe(
      (user: User) => {
        this.user = user;
        this.router.navigate(['/login']);
      }
    );
  }

  delete() {
    return this.userService.deleteUser(this.user._id).subscribe(
      () => this.router.navigate(['/login'])
    );
  }

  logout() {
    return this.userService.logout().subscribe(
      () => {
        this.router.navigate(['/login']);
      }
    );
  }

}
