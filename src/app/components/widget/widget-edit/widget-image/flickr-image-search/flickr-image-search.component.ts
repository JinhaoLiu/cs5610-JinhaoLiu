import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../../models/widget.model.client';
import {FlickrService} from '../../../../../services/flickr.service.client';
import {SharedService} from '../../../../../services/shared.service';

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
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = this.sharedService.user['_id'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
        this.widgetId = params['wgid'];
        if (this.widgetId === 'image') {
          this.widget = new Widget(undefined, 'IMAGE', this.pageId);
        } else {
          this.widgetService.findWidgetById(this.userId, this.websiteId, this.pageId, this.widgetId).subscribe(
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
      this.widgetService.createWidget(this.userId, this.websiteId, this.pageId, this.widget).subscribe(
        (widget: Widget) => {
          this.widget = widget;
          this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      );
    } else {
      this.widgetService
        .updateWidget(this.userId, this.websiteId, this.pageId, this.widgetId, this.widget)
        .subscribe(
          (data: any) => {
            const result = data;
            if (result) {
              this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget']);
            } else {
              this.error = 'failed!';
            }
          }
        );
    }
  }

}
