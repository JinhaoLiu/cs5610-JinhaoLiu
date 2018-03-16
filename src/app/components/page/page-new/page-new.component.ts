import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') newForm: NgForm;
  errorFlag: boolean;
  errorMsg: string;
  userId: string;
  websiteId: string;
  page = {
    _id: '',
    name: '',
    websiteId: '',
    title: ''
  };

  constructor(private router: Router, private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
        });
    this.errorFlag = false;
    this.errorMsg = 'Invalid name or title';
  }

  onClick() {
    if (this.newForm.valid) {
      this.page.name = this.newForm.value.name;
      this.page.title = this.newForm.value.title;
      this.pageService.createPage(this.userId, this.websiteId, this.page)
        .subscribe((page: any) => {
          if (page) {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
          }
        });
    } else {
      this.errorFlag = true;
    }
  }

}
