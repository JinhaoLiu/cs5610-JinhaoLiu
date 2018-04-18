import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  userId: String;
  websiteId: String;
  wgid: String;
  pageId: String;
  widget: Widget;

  editorContent: String;
  public editorOptions = {
    placeholder: 'insert content...'
  };

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private route: Router) { }

  onContentChanged({ quill, html, text }) {
    // console.log('quill content is changed!', quill, html, text);
    this.widget.text = html;
  }

  delete() {
    if (this.wgid === undefined) {
      return;
    }
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
          this.widget = new Widget(undefined, 'HTML', this.pageId, '', '', '', '');
        } else {
          this.widgetService.findWidgetById(this.userId, this.websiteId, this.pageId, this.wgid).subscribe(
            (widget: Widget) => {
              this.widget = widget;
              this.editorContent = this.widget.text;
              console.log(this.editorContent);
            });
        }
      });
  }


}
