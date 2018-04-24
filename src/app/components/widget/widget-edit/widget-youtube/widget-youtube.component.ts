import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  errorFlag: boolean;
  errorMsg = 'Invalid image name or text or url or width';
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
        .subscribe((widget: any) => {
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
