import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  pages: Page[] = [];
  websiteID: String
  constructor(private pageService: PageService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: any) => {
        console.log(params['wid']);
        this.websiteID = params['wid'];
        this.pageService.findAllPagesForWebsite(this.websiteID).subscribe(
          (pages: Page[]) => {
            this.pages = pages;
          }
        );
    });
  }

}
