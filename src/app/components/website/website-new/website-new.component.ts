import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {NgForm} from '@angular/forms';
import {Website} from '../../../models/website.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') newForm: NgForm;
  userId: string;
  errorFlag: boolean;
  errorMsg: string;
  websites: Website[] = [];
  website: Website;


  constructor(private router: Router, private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.website = new Website(undefined, undefined, this.userId, undefined);
    this.websiteService.findWebsitesByUser(this.userId)
      .subscribe((websites: Website[]) => {
        if (websites) {
          this.websites = websites;
        }
      });
    this.errorFlag = false;
    this.errorMsg = 'Invalid website name or description';
  }

  onSubmit() {
    if (!this.newForm.valid) {
      this.errorFlag = true;
    } else {
      this.website.name = this.newForm.value.name;
      this.website.description = this.newForm.value.description;
      this.websiteService.createWebsite(this.userId, this.website)
        .subscribe((websites: any) => {
          if (websites) {
            this.websites = websites;
            this.router.navigate(['/user', 'website']);
          }
        });
    }
  }

}
