import { Component, OnInit } from '@angular/core';
import {FlickrService} from '../../../../../services/flickr.service.client';
import {WidgetService} from '../../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../../models/widget.model.client';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  websiteId: string;
  pageId: string;
  userId: string;
  widgetId: string;
  photos: [any];
  error: string;
  searchText: string;
  widget: Widget;

  constructor(private flickrService: FlickrService,
              private widgetService: WidgetService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
        this.widgetId = params['wgid'];
        console.log('wgid ' + this.widgetId);
        if (this.widgetId === 'image') {
          this.widget = new Widget(undefined, 'IMAGE', this.pageId);
        } else {
          this.widgetService.findWidgetById(this.widgetId).subscribe(
            (widget: Widget) => {
              this.widget = widget;
            });
        }
      });
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          console.log('this is searchPhotos');
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          this.photos = val.photos;
        }
      );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';

    this.widget.url = url;
    console.log(url);
    if (this.widgetId === 'image') {
      this.widgetService.createWidget(this.pageId, this.widget).subscribe(
        (widget: Widget) => {
          this.widget = widget;
          this.router.navigate(['../..'], {relativeTo: this.activatedRoute});
        }
      );
    } else {
      this.widgetService
        .updateWidget(this.widgetId, this.widget)
        .subscribe(
          (data: any) => {
            console.log('this is 123');
            const result = data;
            if (result) {
              this.router.navigate(['../..', {relativeTo: this.activatedRoute}]);
            } else {
              this.error = 'failed!';
            }
          }
        );
    }
  }

}
