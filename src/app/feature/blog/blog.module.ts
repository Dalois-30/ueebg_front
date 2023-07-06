import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PageBlogDetailComponent } from 'src/app/feature/blog/page-blog-detail/page-blog-detail.component';
import { PageBlogListSidebarComponent } from 'src/app/feature/blog/page-blog-list-sidebar/page-blog-list-sidebar.component';
import { PageContactDetailComponent } from 'src/app/feature/blog/page-contact-detail/page-contact-detail.component';
import { SwitcherComponent } from 'src/app/shared/switcher/switcher.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndexPersonalComponent } from './index-personal/index-personal.component';
import { PageAboutusComponent } from './page-aboutus/page-aboutus.component';

@NgModule({
  declarations: [      
    IndexPersonalComponent,
    PageBlogDetailComponent,
    PageBlogListSidebarComponent,
    PageContactDetailComponent,
    PageAboutusComponent,
    SwitcherComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule, 
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class BlogModule { }
