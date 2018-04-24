import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../models/page.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  @ViewChild('f') pageForm: NgForm;
  pageID: String;
  page: Page;
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  update() {
    const new_page = new Page(this.pageID, this.pageForm.value.pagename, this.page.websiteId, this.pageForm.value.title);
    this.pageService.updatePage(this.pageID, new_page).subscribe(
      (page: Page) => {
        this.page = page;
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      });
  }
  deletePage() {
    this.pageService.deletePage(this.pageID).subscribe(
      () => this.router.navigate(['../'], {relativeTo: this.activatedRoute})
    );
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('pid'));
      this.pageID = params.get('pid');
      this.pageService.findPagesById(this.pageID).subscribe((page: Page) => {
        this.page = page;
        }
      );
    });
  }

}
