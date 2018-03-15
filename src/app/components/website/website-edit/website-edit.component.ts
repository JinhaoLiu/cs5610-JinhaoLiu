import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  // properties
  websiteId: String;
  websites: Website[];
  updatedWebsite: Website = {_id:"", name:"", developerId:"", description:""};
  name: String;
  developerId: String;
  description: String;

  constructor(private websiteService: WebsiteService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
       this.websiteService.findWebsiteById(params.wid).subscribe(
          (website: Website) => {
            this.websiteId = website._id;
            this.developerId = website.developerId;
            this.updatedWebsite = website;
            console.log(this.updatedWebsite.name);
          },
          (error: any) => {
            // this is the place to put an error message
          }
        );
       this.websiteService.findWebsitesByUser(params.uid).subscribe(
          (websites: Website[]) => {
            this.websites = websites;
          },
          (error: any) => {
            // this is the place to put an error message
          }
        );
      }
    );
  }

  updateWebsite(website) {
    if (website.name.trim() != "" && website.description.trim() != "") {
      this.websiteService.updateWebsite(this.websiteId, website).subscribe(
        (website: Website) => {
          this.updatedWebsite = website;
          let url: any = '/user/' + this.developerId + '/website';
          this.router.navigate([url]);
        },
        (error: any) => {
          // This is the place to put an error message
        }
      );
    }
  }

  deleteWebsite() {
    if (this.websiteId.trim() != "") {
      this.websiteService.deleteWebsite(this.websiteId).subscribe(
        (website: Website) => {
          let url: any = '/user/' + this.developerId + '/website';
          this.router.navigate([url]);
        },
        (error: any) => {
          // Place error message;
        }
      );
    }
  }
}
