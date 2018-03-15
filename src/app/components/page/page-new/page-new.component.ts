import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import { WebsiteService } from '../../../services/website.service.client';
import { UserService } from '../../../services/user.service.client';
import { Website } from '../../../models/website.model.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: String;
  websiteId: String;
  newPage: Page = { _id: "", name: "", websiteId: "", title: "" };

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
          (website: Website) => {
            if (website.developerId === params.uid) {
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
    if (page.name.trim() == "") {
      console.log("Name cannot be empty.");
      return;
    }
    if (page.title.trim() == "") {
      console.log("Title cannot be empty.");
      return;
    }
    this.pageService.createPage(this.websiteId, page).subscribe(
      (page: Page) => {
        let url: any = "/user/" + this.userId + "/website/" + this.websiteId + "/page";
        this.router.navigate([url]);
      }
    );
  }

}
