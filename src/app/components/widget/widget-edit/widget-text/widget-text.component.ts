import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  userId: String;
  websiteId: String;
  pageId: String;
  wgid: String;
  widget: Widget;
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private route: Router) { }

  delete() {
    this.widgetService.deleteWidget(this.userId, this.websiteId, this.pageId, this.wgid).subscribe(
      () => this.route.navigate(['../'], {relativeTo: this.activatedRoute})
    );
  }

  update() {
    if (this.editForm.valid && this.wgid === undefined) {
      this.widgetService.createWidget(this.userId, this.websiteId, this.pageId, this.widget).subscribe(
        (widget: Widget) => {
          this.widget = widget;
          this.route.navigate(['../'], {relativeTo: this.activatedRoute});
        }
      );
    } else if (this.editForm.valid) {
      this.widgetService.updateWidget(this.userId, this.websiteId, this.pageId, this.wgid, this.widget).subscribe(
        (widget: Widget) => {
          this.widget = widget;
          this.route.navigate(['../'], {relativeTo: this.activatedRoute});
        }
      );
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
        this.wgid = params['wgid'];
        if (this.wgid === undefined) {
          this.widget = new Widget(undefined, 'TEXT', this.pageId, '', '', '', '');
        } else {
          this.widgetService.findWidgetById(this.userId, this.websiteId, this.pageId, this.wgid).subscribe(
            (widget: Widget) => {
              this.widget = widget;
            });
        }
      });
  }

}
