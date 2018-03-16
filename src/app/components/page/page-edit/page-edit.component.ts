import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {NgForm} from '@angular/forms';

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
          this.page._id = params['pid'];
        });
    this.pageService.findPageById(this.userId, this.websiteId, this.page._id)
      .subscribe((page: any) => {
        if (page) {
          this.page = page;
        }
      });
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.pageService.updatePage(this.userId, this.websiteId, this.page._id, this.page)
        .subscribe((page: any) => {
          if (page) {
            this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
          }
        });
    } else {
      this.errorFlag = true;
    }
  }

  onDelete() {
    this.pageService.deletePage(this.userId, this.websiteId, this.page._id)
      .subscribe((page: any) => {
        if (page) {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
        }
      });
  }
}
