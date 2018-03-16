import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') webForm: NgForm;
  userId: String;
  websites: Website[] = [];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  createWeb() {
    const new_website = new Website(undefined, this.webForm.value.webname, this.userId, this.webForm.value.description);
    this.websiteService.createWebsite(this.userId, new_website).subscribe(
      (website: Website) => {
        console.log(website);
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params: any) => {
        console.log(params['_id']);
        this.userId = params['_id'];
        this.websiteService.findAllWebsitesForUser(this.userId).subscribe(
          (websites: Website[]) => {
            this.websites = websites;
          });
      }
    );
  }

}
