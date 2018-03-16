import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  userId: string;
  websiteId: string;
  pageId: string;
  widgets: {};

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        });
    this.widgetService.findWidgetsByPageId(this.userId, this.websiteId, this.pageId)
      .subscribe((widgets: any) => {
        if (widgets) {
          this.widgets = widgets;
        }
      });
  }

  sortWidget(indexes) {
    this.widgetService.reSortWidget(this.userId, this.websiteId, this.pageId, indexes.startIndex, indexes.endIndex).subscribe();
  }

}
