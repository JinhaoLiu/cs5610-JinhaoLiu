import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {NgForm} from '@angular/forms';

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
  websites: {};
  website = {
    _id: '',
    name: '',
    developerId: '',
    description: ''
  };


  constructor(private router: Router, private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );
    this.websiteService.findWebsitesByUser(this.userId)
      .subscribe((websites: any) => {
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
            this.router.navigate(['/user', this.userId, 'website']);
          }
        });
    }
  }

}
