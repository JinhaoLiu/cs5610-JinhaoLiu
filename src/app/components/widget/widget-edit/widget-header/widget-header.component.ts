import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  errorFlag: boolean;
  errorMsg = 'Invalid heading name or text or size';
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget: Widget;

  constructor(private router: Router, private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
        });
    this.widgetService.findWidgetById(this.userId, this.websiteId, this.pageId, this.widgetId)
      .subscribe((widget: Widget) => {
        if (widget) {
          this.widget = widget;
        }
      });
  }

  onSubmit() {
    if (!this.editForm.valid) {
      this.errorFlag = true;
    } else {
      this.widgetService.updateWidget(this.userId, this.websiteId, this.pageId, this.widgetId, this.widget)
        .subscribe((widget: Widget) => {
          if (widget) {
            this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget']);
          }
        });
    }
  }

  onDelete() {
    this.widgetService.deleteWidget(this.userId, this.websiteId, this.pageId, this.widgetId)
      .subscribe(() => {
          this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }

}
