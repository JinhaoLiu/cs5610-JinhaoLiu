import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  wgid: String;
  pageID: String;
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
    this.widgetService.deleteWidget(this.wgid).subscribe(
      () => this.route.navigate(['../'], {relativeTo: this.activatedRoute})
    );
  }

  update() {
    if (this.wgid === undefined) {
      this.widgetService.createWidget(this.pageID, this.widget).subscribe(
        (widget: Widget) => {
          this.widget = widget;
          this.route.navigate(['../'], {relativeTo: this.activatedRoute});
        }
      );
    } else {
      this.widgetService.updateWidget(this.wgid, this.widget).subscribe(
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
        this.pageID = params['pid'];
        this.wgid = params['wgid'];
        if (this.wgid === undefined) {
          this.widget = new Widget(undefined, 'HTML', this.pageID, '', '', '', '');
        } else {
          this.widgetService.findWidgetById(this.wgid).subscribe(
            (widget: Widget) => {
              this.widget = widget;
              this.editorContent = this.widget.text;
              console.log(this.editorContent);
            });
        }
      });
  }

}
