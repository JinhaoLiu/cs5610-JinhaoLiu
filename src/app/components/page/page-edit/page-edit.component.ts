import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {NgForm} from '@angular/forms';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  errorFlag: boolean;
  errorMsg = 'Invalid name or title';
  userId: string;
  websiteId: string;
  pageId: string;
  page: Page;


  constructor(private router: Router, private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        });
    this.pageService.findPageById(this.userId, this.websiteId, this.pageId)
      .subscribe((page: Page) => {
        if (page) {
          this.page = page;
        }
      });
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.pageService.updatePage(this.userId, this.websiteId, this.pageId, this.page)
        .subscribe((page: Page) => {
          if (page) {
            this.router.navigate(['/user', 'website', this.websiteId, 'page']);
          }
        });
    } else {
      this.errorFlag = true;
    }
  }

  onDelete() {
    this.pageService.deletePage(this.userId, this.websiteId, this.pageId)
      .subscribe(() => {
          this.router.navigate(['/user', 'website', this.websiteId, 'page']);
      });
  }
}
