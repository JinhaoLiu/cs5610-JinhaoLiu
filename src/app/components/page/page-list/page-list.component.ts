import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import { UserService } from '../../../services/user.service.client';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  userId: String;
  websiteId: String;
  pages: Page[];

  constructor(
    private pageService: PageService,
    private userService: UserService,
    private websiteService: WebsiteService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.websiteService.findWebsiteById(params.wid).subscribe(
          (website: Website) => {
            if (website.developerId === params.uid) {
              this.websiteId = params.wid;
              this.userId = params.uid;
              this.pageService.findPageByWebsiteId(this.websiteId).subscribe(
                (pages: Page[]) => {
                  this.pages = pages;
                },
                (error: any) => {
                  console.log(error);
                }
              );
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
}
