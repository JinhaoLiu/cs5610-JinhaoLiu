import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import { RegisterComponent } from './views/user/register/register.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service.client';
import { WebsiteNewComponent } from './views/website/website-new/website-new.component';
import { WebsiteEditComponent } from './views/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './views/website/website-list/website-list.component';
import { PageNewComponent } from './views/pages/page-new/page-new.component';
import { PageEditComponent } from './views/pages/page-edit/page-edit.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { WidgetChooserComponent } from './views/widget/widget-chooser/widget-chooser.component';
import { WidgetListComponent } from './views/widget/widget-list/widget-list.component';
import { WidgetEditComponent } from './views/widget/widget-edit/widget-edit.component';
import { WidgetHeaderComponent } from './views/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './views/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import {WebsiteService} from './services/website.service.client';
import {PageService} from './services/page.service.client';
import {WidgetService} from './services/widget.service.client';
import {FlickrService} from './services/flickr.service.client';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { SortableDirective } from '../../assignment/directives/sortable.directive';
import { WidgetHtmlComponent } from './views/widget/widget-edit/widget-html/widget-html.component';
import {QuillEditorModule} from 'ngx-quill-editor/quillEditor.module';
import { WidgetTextComponent } from './views/widget/widget-edit/widget-text/widget-text.component';
import { FlickrImageSearchComponent } from './views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    WidgetChooserComponent,
    WidgetListComponent,
    WidgetEditComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    SortableDirective,
    WidgetHtmlComponent,
    WidgetTextComponent,
    FlickrImageSearchComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    HttpModule,
    QuillEditorModule,
  ],
  providers: [UserService, WebsiteService, PageService, WidgetService, FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
