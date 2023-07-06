import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthRePasswordComponent } from './auth/auth-re-password/auth-re-password.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';

import { ChangelogComponent } from './core/components/changelog/changelog.component';
import { ComponentsComponent } from './core/components/components/components.component';
import { IndexBlogComponent } from './core/components/index-blog/index-blog.component';
import { IndexBusinessComponent } from './core/components/index-business/index-business.component';
import { IndexComponent } from './core/components/index/index.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { PageBlogDetailComponent } from './core/components/page-blog-detail/page-blog-detail.component';
import { PageBlogListSidebarComponent } from './core/components/page-blog-list-sidebar/page-blog-list-sidebar.component';
import { PageComingsoonComponent } from './core/components/page-comingsoon/page-comingsoon.component';
import { PageContactDetailComponent } from './core/components/page-contact-detail/page-contact-detail.component';
import { PageErrorComponent } from './core/components/page-error/page-error.component';
import { PageThankyouComponent } from './core/components/page-thankyou/page-thankyou.component';
import { PageMaintenanceComponent } from './core/components/page-maintenance/page-maintenance.component';
import { WidgetComponent } from './core/components/widget/widget.component';
import { PageAboutusComponent } from './core/components/page-aboutus/page-aboutus.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'changelog', component: ChangelogComponent },
      { path: 'components', component: ComponentsComponent },
      { path: 'index', component: IndexComponent },
      { path: 'index-blog', component: IndexBlogComponent },
      { path: 'index-business', component: IndexBusinessComponent },
      { path: 'page-blog-detail', component: PageBlogDetailComponent },
      { path: 'page-blog-list-sidebar', component: PageBlogListSidebarComponent },
      { path: 'page-contact-detail', component: PageContactDetailComponent },
      { path: 'widget', component: WidgetComponent },
      { path: 'about', component: PageAboutusComponent },
      // { path: '#', component: SwitcherComponent },
    ]
  },

  { path: 'auth-login', component: AuthLoginComponent },
  { path: 'auth-re-password', component: AuthRePasswordComponent },
  { path: 'auth-signup', component: AuthSignupComponent },
  { path: 'page-comingsoon', component: PageComingsoonComponent },
  { path: 'page-error', component: PageErrorComponent },
  { path: 'page-thankyou', component: PageThankyouComponent },
  { path: 'page-maintenance', component: PageMaintenanceComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled",
  scrollOffset: [0, 0],
  // Enable scrolling to anchors
  anchorScrolling: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
