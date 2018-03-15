import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { WidgetService } from '../../../services/widget.service.client';
import { Widget } from '../../../models/widget.model.client';
import { PageService } from '../../../services/page.service.client';
import { WebsiteService } from '../../../services/website.service.client';
import { UserService } from '../../../services/user.service.client';
import { Page } from '../../../models/page.model.client';
import { Website } from '../../../models/website.model.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widgets: Widget[];

  constructor(
    private widgetService: WidgetService, 
    private pageService: PageService,
    private websiteService: WebsiteService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
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
                    this.websiteId = params.wid;
                    this.pageId = params.pid;
                    this.widgetService.findWidgetsByPageId(this.pageId).subscribe(
                      (widgets: Widget[]) => {
                        this.widgets = widgets;
                      },
                      (error: any) => {
                        console.log(error);
                      }
                    );
                  } else {
                    console.log("User ID does not match.");
                  }
                }
              );
            } else {
              console.log("Website ID does not match.");
            }
          }
        );
      }
    );
  }

  photoURL(url) {
    var embedUrl = url.replace("youtu.be", "youtube.com/embed");
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  // receiving the emitted event
  reorderWidgets(indexes) {
    // call widget service function to update widget as per index
    this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
      .subscribe(
        (data) => console.log(data)
      );
  }
}
