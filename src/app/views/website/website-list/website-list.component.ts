import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  userId: String;
  websites: Website[] = [];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.getUser();
    this.websiteService.findAllWebsitesForUser(this.userId).subscribe(
          (websites: Website[]) => {
            this.websites = websites;
          });
    // this.activatedRoute.params.subscribe(
    //   (params: any) => {
    //     console.log(params['_id']);
    //     this.userId = params['_id'];
    //     this.websiteService.findAllWebsitesForUser(this.userId).subscribe(
    //       (websites: Website[]) => {
    //         this.websites = websites;
    //       });
    //   });
  }
  getUser() {
    // this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.sharedService.user);
    this.userId = this.sharedService.user['_id'];
    console.log(this.userId);
  }
}
