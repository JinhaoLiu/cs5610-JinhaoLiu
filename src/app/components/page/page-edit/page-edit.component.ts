import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import { UserService } from '../../../services/user.service.client';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  // properties
  userId: String;
  pageId: String;
  updatedPage: Page = { _id: "", name: "", websiteId: "", title: "" };
  name: String;
  websiteId: String;
  description: String;

  constructor(
    private pageService: PageService,
    private userService: UserService,
    private websiteService: WebsiteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.pageService.findPageById(params.pid).subscribe(
          (page: Page) => {
            if (page.websiteId === params.wid) {
              this.websiteService.findWebsiteById(page.websiteId).subscribe(
                (website: Website) => {
                  if (website.developerId === params.uid) {
                    this.userId = params.uid;
                    this.pageId = params.pid;
                    this.websiteId = params.wid;
                    this.updatedPage = page;
                  } else {
                    // throw error message
                    console.log("User ID deos not match");
                  }
                }
              );
            } else {
              // throw error message
              console.log("Website ID does not match");
            }
          }
        );
      }
    );
  }

  updatePage(page) {
    if (page.name.trim() == "") {
      console.log("Name cannot be empty.");
      return;
    }
    if (page.title.trim() == "") {
      console.log("Title cannot be empty.");
      return;
    }
    this.pageService.updatePage(this.pageId, page).subscribe(
      (page: Page) => {
        this.updatedPage = page;
        let url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page';
        this.router.navigate([url]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deletePage() {
    this.pageService.deletePage(this.pageId).subscribe(
      (page: Page) => {
        let url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page';
        this.router.navigate([url]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
