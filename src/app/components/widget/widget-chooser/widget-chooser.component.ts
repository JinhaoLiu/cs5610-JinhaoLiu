import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  userId: string;
  websiteId: string;
  pageId: string;
  widget: Widget;

  constructor(private router: Router, private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        });
    this.widget = new Widget(undefined, undefined, this.pageId);
  }

  createHeader() {
    this.widget.type = 'HEADING';
    this.widgetService.createWidget(this.userId, this.websiteId, this.pageId, this.widget)
      .subscribe((widget: Widget) => {
        if (widget) {
          this.widget = widget;
          this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget', widget._id]);
        }
      });
  }

  createHTML() {
    this.widget.type = 'HTML';
    this.widgetService.createWidget(this.userId, this.websiteId, this.pageId, this.widget)
      .subscribe((widget: Widget) => {
        if (widget) {
          this.widget = widget;
          this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget', widget._id]);
        }
      });
  }

  createText() {
    this.widget.type = 'TEXT';
    this.widgetService.createWidget(this.userId, this.websiteId, this.pageId, this.widget)
      .subscribe((widget: Widget) => {
        if (widget) {
          this.widget = widget;
          this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget', widget._id]);
        }
      });
  }

  createImage() {
    this.widget.type = 'IMAGE';
    this.widgetService.createWidget(this.userId, this.websiteId, this.pageId, this.widget)
      .subscribe((widget: Widget) => {
        if (widget) {
          this.widget = widget;
          this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget', widget._id]);
        }
      });
  }

  createYoutube() {
    this.widget.type = 'YOUTUBE';
    this.widgetService.createWidget(this.userId, this.websiteId, this.pageId, this.widget)
      .subscribe((widget: Widget) => {
        if (widget) {
          this.widget = widget;
          this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget', widget._id]);
        }
      });
  }
}
