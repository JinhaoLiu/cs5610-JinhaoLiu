import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {NgForm} from '@angular/forms';
import {environment} from '../../../../../environments/environment';
import {Widget} from '../../../../models/widget.model.client';
import {SharedService} from '../../../../services/shared.service';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  errorFlag: boolean;
  errorMsg = 'Invalid image name or text or url or width';
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget: Widget;
  baseUrl: String = environment.baseUrl;

  constructor(private router: Router, private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = this.sharedService.user['_id'];
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

  onSearch() {
        this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId, 'flickr']);
  }
}
