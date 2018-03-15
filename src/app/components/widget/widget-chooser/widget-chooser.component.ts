import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WidgetService } from '../../../services/widget.service.client';
import { Widget } from '../../../models/widget.model.client';
import { UserService } from '../../../services/user.service.client';
import { WebsiteService } from '../../../services/website.service.client';
import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import { Website } from '../../../models/website.model.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;

  constructor(
    private widgetService: WidgetService, 
    private userService: UserService,
    private websiteService: WebsiteService,
    private pageService: PageService,
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
                    this.websiteId = params.wid;
                    this.pageId = params.pid;
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

  createWidget(widgetType: String) {
    let newWidget: Widget = {
      _id: "", widgetType: widgetType, name: 'name', pageId: "", size: "1", text: "", url: "", width: "100%",
      height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
    }
    this.widgetService.createWidget(this.pageId, newWidget).subscribe(
      (widget: Widget) => {
        let url: any = "/user/" + this.userId + "/website/" + this.websiteId + "/page/" + this.pageId + "/widget/" + widget._id;
        this.router.navigate([url]); 
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
