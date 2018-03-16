import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  errorFlag: boolean;
  errorMsg: string;
  userId: string;
  websiteId: string;
  websites: any;
  currWebsite: any;

  constructor(private router: Router, private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
        }
      );
    this.websiteService.findWebsitesByUser(this.userId)
      .subscribe((websites: any) => {
        if (websites) {
          this.websites = websites;
        }
      });

    this.websiteService.findWebsiteById(this.userId, this.websiteId)
      .subscribe((website: any) => {
        if (website) {
          this.currWebsite = website;
        }
      });
    this.errorFlag = false;
    this.errorMsg = 'Invalid website name or description';
  }

  onSubmit() {
    if (this.editForm.valid) {
    this.websiteService.updateWebsite(this.userId, this.websiteId, this.currWebsite)
      .subscribe((website: any) => {
        if (website) {
          this.router.navigate(['/user', this.userId, 'website']);
        }
      });
    } else {
      this.errorFlag = true;
    }
  }

  onDelete() {
    this.websiteService.deleteWebsite(this.userId, this.websiteId)
      .subscribe((website: any) => {
        if (website) {
          this.router.navigate(['/user', this.userId, 'website']);
        }
      });
  }

}
