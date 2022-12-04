import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

import { ScrollspyDirective } from './scrollspy.directive';
import { FeatherModule } from 'angular-feather';

import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import { BlogComponent } from './blog/blog.component';
import { MemberComponent } from './member/member.component';

@NgModule({
  declarations: [
    ScrollspyDirective,
    ServicesComponent,
    PricingComponent,
    FeaturesComponent,
    BlogComponent,
    MemberComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    FeatherModule,
    RouterModule
  ],
  exports: [
    ScrollspyDirective,
    ServicesComponent, 
    PricingComponent, 
    FeaturesComponent, 
    BlogComponent, 
    MemberComponent
  ]
})

export class SharedModule { }
