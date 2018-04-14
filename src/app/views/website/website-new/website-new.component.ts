import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') webForm: NgForm;
  userId: String;
  websites: Website[] = [];
  webname: String;
  description: String;

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router,
              private sharedService: SharedService) { }

  createWeb() {
    const new_website = new Website(undefined, this.webname, this.userId, this.description);

    console.log('new website: ' + new_website);
    this.websiteService.createWebsite(this.userId, new_website).subscribe(
      (website: Website) => {
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }

  ngOnInit() {
    this.getUser();

    this.websiteService.findAllWebsitesForUser(this.userId).subscribe(
      (websites: Website[]) => {
        this.websites = websites;
        });
  }

  getUser() {
    // this.user = JSON.parse(localStorage.getItem("user"));
    this.userId = this.sharedService.user['_id'];
  }

}
