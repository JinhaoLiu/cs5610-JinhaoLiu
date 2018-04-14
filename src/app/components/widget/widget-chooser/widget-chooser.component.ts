import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WidgetService } from '../../../services/widget.service.client';
import { UserService } from '../../../services/user.service.client';
import { WebsiteService } from '../../../services/website.service.client';
import { PageService } from '../../../services/page.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widgets: any[];

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
          (page: any) => {
            if (page._website === params.wid) {
              this.websiteService.findWebsiteById(page._website).subscribe(
                (website: any) => {
                  if (website._user === params.uid) {
                    this.userId = params.uid;
                    this.websiteId = params.wid;
                    this.pageId = params.pid;
                    this.widgetService.findWidgetsByPageId(this.pageId).subscribe(
                      (widgets: any[]) => {
                        this.widgets = widgets;
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

  createWidget(widgetType: String) {
    let newWidget: any = {
      type: widgetType, name: 'name', size: 1, width: "30%",
      height: "30%", rows: 0, deletable: false, formatted: false, placeholder: '',
      position: this.widgets.length
    }
    this.widgetService.createWidget(this.pageId, newWidget).subscribe(
      (widget: any) => {
        let url: any = "/user/" + this.userId + "/website/" + this.websiteId + "/page/" + this.pageId + "/widget/" + widget._id;
        this.router.navigate([url]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
