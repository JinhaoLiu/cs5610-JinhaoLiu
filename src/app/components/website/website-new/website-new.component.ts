import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WebsiteService } from '../../../services/website.service.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  errorFlag: boolean;
  errorMsg = '';
  userId: String;
  websites: any[];
  newWebsite: any = {};

  constructor(private websiteService: WebsiteService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params.uid;
        this.websiteService.findWebsitesByUser(this.userId).subscribe(
          (websites: any[]) => {
            this.websites = websites;
          }
        );
      }
    );
  }

  createWebsite(website) {
    this.errorFlag = false;
    this.errorMsg = '';
    if (website.name == null || website.name.trim() == "") {
      this.errorMsg = "Website Name cannot be empty";
      this.errorFlag = true;
      return
    }
    if (!this.errorFlag) {
      this.websiteService.createWebsite(this.userId, website).subscribe(
        (website: any) => {
          const url: any = '/user/' + this.userId + '/website';
          this.router.navigate([url]);
        },
        (error: any) => {
          // Place an error message here
        }
      );
    }
  }
}
