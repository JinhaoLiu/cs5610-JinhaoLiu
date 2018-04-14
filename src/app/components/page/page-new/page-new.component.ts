import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PageService } from '../../../services/page.service.client';
import { WebsiteService } from '../../../services/website.service.client';
import { UserService } from '../../../services/user.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  errorMsg = '';
  errorFlag: boolean;
  userId: String;
  websiteId: String;
  newPage: any = {};

  constructor(
    private pageService: PageService,
    private websiteService: WebsiteService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.websiteService.findWebsiteById(params.wid).subscribe(
          (website: any) => {
            if (website._user === params.uid) {
              this.websiteId = params.wid;
              this.userId = params.uid;
            } else {
              console.log("User ID does not match.");
            }
          },
          (error: any) => {
            console.log(error);
          }
        )
      }
    );
  }

  createPage(page) {
    this.errorMsg = '';
    this.errorFlag = false;
    if (page.name == null || page.name.trim() == "") {
      this.errorFlag = true;
      this.errorMsg += "Page Name cannot be empty <br />";
    }
    if (page.title == null || page.title.trim() == "") {
      this.errorFlag = true;
      this.errorMsg += "Page Title cannot be empty <br />";
    }
    if (this.errorFlag) {
      return;
    }
    this.pageService.createPage(this.websiteId, page).subscribe(
      (page: any) => {
        let url: any = "/user/" + this.userId + "/website/" + this.websiteId + "/page";
        this.router.navigate([url]);
      }
    );
  }

}
