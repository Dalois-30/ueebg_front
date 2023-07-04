"use strict";
(self["webpackChunkDalois_angular"] = self["webpackChunkDalois_angular"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _auth_auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth-login/auth-login.component */ 46005);
/* harmony import */ var _auth_auth_re_password_auth_re_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth-re-password/auth-re-password.component */ 72369);
/* harmony import */ var _auth_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth-signup/auth-signup.component */ 8094);
/* harmony import */ var _core_components_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/changelog/changelog.component */ 88498);
/* harmony import */ var _core_components_components_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/components/components.component */ 73480);
/* harmony import */ var _core_components_index_blog_index_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/index-blog/index-blog.component */ 57021);
/* harmony import */ var _core_components_index_business_index_business_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/index-business/index-business.component */ 36450);
/* harmony import */ var _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/index/index.component */ 28002);
/* harmony import */ var _core_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/master-page/master-page.component */ 89959);
/* harmony import */ var _core_components_page_blog_detail_page_blog_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/page-blog-detail/page-blog-detail.component */ 73245);
/* harmony import */ var _core_components_page_blog_list_sidebar_page_blog_list_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/components/page-blog-list-sidebar/page-blog-list-sidebar.component */ 62774);
/* harmony import */ var _core_components_page_comingsoon_page_comingsoon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/components/page-comingsoon/page-comingsoon.component */ 55292);
/* harmony import */ var _core_components_page_contact_detail_page_contact_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/components/page-contact-detail/page-contact-detail.component */ 56619);
/* harmony import */ var _core_components_page_error_page_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/components/page-error/page-error.component */ 65491);
/* harmony import */ var _core_components_page_thankyou_page_thankyou_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/components/page-thankyou/page-thankyou.component */ 80267);
/* harmony import */ var _core_components_page_maintenance_page_maintenance_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/components/page-maintenance/page-maintenance.component */ 94577);
/* harmony import */ var _core_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/components/widget/widget.component */ 22219);
/* harmony import */ var _core_components_page_aboutus_page_aboutus_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/components/page-aboutus/page-aboutus.component */ 75296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);





















const routes = [
    {
        path: '',
        component: _core_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_8__.MasterPageComponent,
        children: [
            { path: '', component: _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_7__.IndexComponent },
            { path: 'changelog', component: _core_components_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_3__.ChangelogComponent },
            { path: 'components', component: _core_components_components_components_component__WEBPACK_IMPORTED_MODULE_4__.ComponentsComponent },
            { path: 'index', component: _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_7__.IndexComponent },
            { path: 'index-blog', component: _core_components_index_blog_index_blog_component__WEBPACK_IMPORTED_MODULE_5__.IndexBlogComponent },
            { path: 'index-business', component: _core_components_index_business_index_business_component__WEBPACK_IMPORTED_MODULE_6__.IndexBusinessComponent },
            { path: 'page-blog-detail', component: _core_components_page_blog_detail_page_blog_detail_component__WEBPACK_IMPORTED_MODULE_9__.PageBlogDetailComponent },
            { path: 'page-blog-list-sidebar', component: _core_components_page_blog_list_sidebar_page_blog_list_sidebar_component__WEBPACK_IMPORTED_MODULE_10__.PageBlogListSidebarComponent },
            { path: 'page-contact-detail', component: _core_components_page_contact_detail_page_contact_detail_component__WEBPACK_IMPORTED_MODULE_12__.PageContactDetailComponent },
            { path: 'widget', component: _core_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_16__.WidgetComponent },
            { path: 'about', component: _core_components_page_aboutus_page_aboutus_component__WEBPACK_IMPORTED_MODULE_17__.PageAboutusComponent },
            // { path: '#', component: SwitcherComponent },
        ]
    },
    { path: 'auth-login', component: _auth_auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_0__.AuthLoginComponent },
    { path: 'auth-re-password', component: _auth_auth_re_password_auth_re_password_component__WEBPACK_IMPORTED_MODULE_1__.AuthRePasswordComponent },
    { path: 'auth-signup', component: _auth_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_2__.AuthSignupComponent },
    { path: 'page-comingsoon', component: _core_components_page_comingsoon_page_comingsoon_component__WEBPACK_IMPORTED_MODULE_11__.PageComingsoonComponent },
    { path: 'page-error', component: _core_components_page_error_page_error_component__WEBPACK_IMPORTED_MODULE_13__.PageErrorComponent },
    { path: 'page-thankyou', component: _core_components_page_thankyou_page_thankyou_component__WEBPACK_IMPORTED_MODULE_14__.PageThankyouComponent },
    { path: 'page-maintenance', component: _core_components_page_maintenance_page_maintenance_component__WEBPACK_IMPORTED_MODULE_15__.PageMaintenanceComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled",
            scrollOffset: [0, 0],
            // Enable scrolling to anchors
            anchorScrolling: "enabled" }), _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'Dalois-angular';
        /**
         * Unicons icon refreshed on route change.
         */
        this.router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
                window['Unicons']['refresh']();
            }
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-switcher")(1, "router-outlet")(2, "modal-outlet")(3, "app-carousel");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lightbox */ 25015);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-owl-carousel-o */ 37297);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 37059);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-swiper-wrapper */ 70598);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-typed-js */ 28487);
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-youtube-player */ 91410);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! angularx-flatpickr */ 81988);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-count-to */ 97321);
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-masonry */ 19765);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 24169);
/* harmony import */ var _core_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/master-page/master-page.component */ 89959);
/* harmony import */ var _auth_auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth-login/auth-login.component */ 46005);
/* harmony import */ var _auth_auth_re_password_auth_re_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth-re-password/auth-re-password.component */ 72369);
/* harmony import */ var _auth_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth-signup/auth-signup.component */ 8094);
/* harmony import */ var _core_components_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/changelog/changelog.component */ 88498);
/* harmony import */ var _core_components_components_components_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/components/components/components.component */ 73480);
/* harmony import */ var _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/components/index/index.component */ 28002);
/* harmony import */ var _core_components_index_blog_index_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/components/index-blog/index-blog.component */ 57021);
/* harmony import */ var _core_components_index_business_index_business_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/components/index-business/index-business.component */ 36450);
/* harmony import */ var _core_components_page_blog_detail_page_blog_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/components/page-blog-detail/page-blog-detail.component */ 73245);
/* harmony import */ var _core_components_page_blog_list_sidebar_page_blog_list_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/components/page-blog-list-sidebar/page-blog-list-sidebar.component */ 62774);
/* harmony import */ var _core_components_page_comingsoon_page_comingsoon_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/components/page-comingsoon/page-comingsoon.component */ 55292);
/* harmony import */ var _core_components_page_contact_detail_page_contact_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/components/page-contact-detail/page-contact-detail.component */ 56619);
/* harmony import */ var _core_components_page_error_page_error_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/components/page-error/page-error.component */ 65491);
/* harmony import */ var _core_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/components/widget/widget.component */ 22219);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angular-feather */ 5601);
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! angular-feather/icons */ 6252);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/header/header.component */ 89470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/footer/footer.component */ 45227);
/* harmony import */ var _core_components_page_thankyou_page_thankyou_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/components/page-thankyou/page-thankyou.component */ 80267);
/* harmony import */ var _core_components_page_aboutus_page_aboutus_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/components/page-aboutus/page-aboutus.component */ 75296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 22560);







































// import { SwitcherComponent } from './shared/switcher/switcher.component';








const DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [
        {
            provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_25__.SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG
        },
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_29__.CarouselModule,
        angular_feather__WEBPACK_IMPORTED_MODULE_30__.FeatherModule.pick(angular_feather_icons__WEBPACK_IMPORTED_MODULE_31__.allIcons),
        _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_32__.ScrollToModule.forRoot(),
        _angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }),
        ngx_youtube_player__WEBPACK_IMPORTED_MODULE_33__.NgxYoutubePlayerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbDropdownModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_35__.CKEditorModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbNavModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_25__.SwiperModule,
        ngx_typed_js__WEBPACK_IMPORTED_MODULE_37__.NgxTypedJsModule,
        angularx_flatpickr__WEBPACK_IMPORTED_MODULE_38__.FlatpickrModule.forRoot(),
        angular_count_to__WEBPACK_IMPORTED_MODULE_3__.CountToModule,
        ngx_masonry__WEBPACK_IMPORTED_MODULE_39__.NgxMasonryModule,
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.LightboxModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, angular_feather__WEBPACK_IMPORTED_MODULE_30__.FeatherModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _shared_header_header_component__WEBPACK_IMPORTED_MODULE_20__.HeaderComponent,
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__.FooterComponent,
        _core_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_5__.MasterPageComponent,
        _auth_auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_6__.AuthLoginComponent,
        _auth_auth_re_password_auth_re_password_component__WEBPACK_IMPORTED_MODULE_7__.AuthRePasswordComponent,
        _auth_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_8__.AuthSignupComponent,
        _core_components_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_9__.ChangelogComponent,
        _core_components_components_components_component__WEBPACK_IMPORTED_MODULE_10__.ComponentsComponent,
        _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_11__.IndexComponent,
        _core_components_index_blog_index_blog_component__WEBPACK_IMPORTED_MODULE_12__.IndexBlogComponent,
        _core_components_index_business_index_business_component__WEBPACK_IMPORTED_MODULE_13__.IndexBusinessComponent,
        _core_components_page_blog_detail_page_blog_detail_component__WEBPACK_IMPORTED_MODULE_14__.PageBlogDetailComponent,
        _core_components_page_blog_list_sidebar_page_blog_list_sidebar_component__WEBPACK_IMPORTED_MODULE_15__.PageBlogListSidebarComponent,
        _core_components_page_comingsoon_page_comingsoon_component__WEBPACK_IMPORTED_MODULE_16__.PageComingsoonComponent,
        _core_components_page_contact_detail_page_contact_detail_component__WEBPACK_IMPORTED_MODULE_17__.PageContactDetailComponent,
        _core_components_page_error_page_error_component__WEBPACK_IMPORTED_MODULE_18__.PageErrorComponent,
        _core_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_19__.WidgetComponent,
        // SwitcherComponent,
        _core_components_page_thankyou_page_thankyou_component__WEBPACK_IMPORTED_MODULE_22__.PageThankyouComponent,
        _core_components_page_aboutus_page_aboutus_component__WEBPACK_IMPORTED_MODULE_23__.PageAboutusComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_29__.CarouselModule, angular_feather__WEBPACK_IMPORTED_MODULE_30__.FeatherModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_32__.ScrollToModule, _angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule, ngx_youtube_player__WEBPACK_IMPORTED_MODULE_33__.NgxYoutubePlayerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbDropdownModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_35__.CKEditorModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbNavModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_25__.SwiperModule,
        ngx_typed_js__WEBPACK_IMPORTED_MODULE_37__.NgxTypedJsModule, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_38__.FlatpickrModule, angular_count_to__WEBPACK_IMPORTED_MODULE_3__.CountToModule,
        ngx_masonry__WEBPACK_IMPORTED_MODULE_39__.NgxMasonryModule,
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.LightboxModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule], exports: [angular_feather__WEBPACK_IMPORTED_MODULE_30__.FeatherModule] }); })();


/***/ }),

/***/ 46005:
/*!*********************************************************!*\
  !*** ./src/app/auth/auth-login/auth-login.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLoginComponent": () => (/* binding */ AuthLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 5601);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




/**
 * Auth Login Component
 */
class AuthLoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthLoginComponent.ɵfac = function AuthLoginComponent_Factory(t) { return new (t || AuthLoginComponent)(); };
AuthLoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLoginComponent, selectors: [["app-auth-login"]], decls: 68, vars: 0, consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-soft-primary"], ["name", "home", 1, "icons"], [1, "bg-home", "d-flex", "align-items-center"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-md-6"], [1, "me-lg-5"], ["src", "assets/images/user/login.svg", "alt", "", 1, "img-fluid", "d-block", "mx-auto"], [1, "col-lg-5", "col-md-6"], [1, "card", "login-page", "bg-white", "shadow", "rounded", "border-0"], [1, "card-body"], [1, "card-title", "text-center"], [1, "login-form", "mt-4"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], ["name", "key", 1, "fea", "icon-sm", "icons"], ["type", "password", "placeholder", "Password", "required", "", 1, "form-control", "ps-5"], [1, "d-flex", "justify-content-between"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label"], [1, "forgot-pass", "mb-0"], ["routerLink", "/auth-re-password", 1, "text-dark", "fw-bold"], [1, "col-lg-12", "mb-0"], [1, "d-grid"], [1, "btn", "btn-primary"], [1, "col-lg-12", "mt-4", "text-center"], [1, "col-6", "mt-3"], ["href", "javascript:void(0)", 1, "btn", "btn-light"], [1, "mdi", "mdi-facebook", "text-primary"], [1, "mdi", "mdi-google", "text-danger"], [1, "col-12", "text-center"], [1, "mb-0", "mt-3"], [1, "text-dark", "me-2"], ["routerLink", "/auth-signup", 1, "text-dark", "fw-bold"]], template: function AuthLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Your Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i-feather", 20)(24, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15)(26, "div", 16)(27, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i-feather", 22)(33, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15)(35, "div", 24)(36, "div", 16)(37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 28)(42, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Forgot password ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30)(45, "div", 31)(46, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33)(49, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Or Login With");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14)(52, "div", 34)(53, "div", 31)(54, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 34)(58, "div", 31)(59, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 38)(63, "p", 39)(64, "small", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Don't have an account ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 72369:
/*!*********************************************************************!*\
  !*** ./src/app/auth/auth-re-password/auth-re-password.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRePasswordComponent": () => (/* binding */ AuthRePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 5601);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




/**
 * Auth RePassword Component
 */
class AuthRePasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthRePasswordComponent.ɵfac = function AuthRePasswordComponent_Factory(t) { return new (t || AuthRePasswordComponent)(); };
AuthRePasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthRePasswordComponent, selectors: [["app-auth-re-password"]], decls: 37, vars: 0, consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-soft-primary"], ["name", "home", 1, "icons"], [1, "bg-home", "d-flex", "align-items-center"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-md-6"], [1, "me-lg-5"], ["src", "assets/images/user/recovery.svg", "alt", "", 1, "img-fluid", "d-block", "mx-auto"], [1, "col-lg-5", "col-md-6"], [1, "card", "shadow", "rounded", "border-0"], [1, "card-body"], [1, "card-title", "text-center"], [1, "login-form", "mt-4"], [1, "row"], [1, "col-lg-12"], [1, "text-muted"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["type", "email", "placeholder", "Enter Your Email Address", "name", "email", "required", "", 1, "form-control", "ps-5"], [1, "d-grid"], [1, "btn", "btn-primary"], [1, "mx-auto"], [1, "mb-0", "mt-3"], [1, "text-dark", "me-2"], ["routerLink", "/auth-login", 1, "text-dark", "fw-bold"]], template: function AuthRePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Recover Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 13)(15, "div", 14)(16, "div", 15)(17, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Please enter your email address. You will receive a link to create a new password via email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17)(20, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i-feather", 21)(26, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15)(28, "div", 23)(29, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25)(32, "p", 26)(33, "small", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Remember your password ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXJlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8094:
/*!***********************************************************!*\
  !*** ./src/app/auth/auth-signup/auth-signup.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSignupComponent": () => (/* binding */ AuthSignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 5601);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




/**
 * Auth Signup Component
 */
class AuthSignupComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthSignupComponent.ɵfac = function AuthSignupComponent_Factory(t) { return new (t || AuthSignupComponent)(); };
AuthSignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthSignupComponent, selectors: [["app-auth-signup"]], decls: 84, vars: 0, consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-soft-primary"], ["name", "home", 1, "icons"], [1, "bg-auth-home", "d-table", "w-100"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-md-6"], [1, "me-lg-5"], ["src", "assets/images/user/signup.svg", "alt", "", 1, "img-fluid", "d-block", "mx-auto"], [1, "col-lg-5", "col-md-6"], [1, "card", "shadow", "rounded", "border-0"], [1, "card-body"], [1, "card-title", "text-center"], [1, "login-form", "mt-4"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["type", "text", "placeholder", "First Name", "name", "s", "required", "", 1, "form-control", "ps-5"], ["name", "user-check", 1, "fea", "icon-sm", "icons"], ["type", "text", "placeholder", "Last Name", "name", "s", "required", "", 1, "form-control", "ps-5"], [1, "col-md-12"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], ["name", "key", 1, "fea", "icon-sm", "icons"], ["type", "password", "placeholder", "Password", "required", "", 1, "form-control", "ps-5"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label"], ["routerLink", "/auth-signup", 1, "text-primary"], [1, "d-grid"], [1, "btn", "btn-primary"], [1, "col-lg-12", "mt-4", "text-center"], [1, "col-6", "mt-3"], ["href", "javascript:void(0)", 1, "btn", "btn-light"], [1, "mdi", "mdi-facebook", "text-primary"], [1, "mdi", "mdi-google", "text-danger"], [1, "mx-auto"], [1, "mb-0", "mt-3"], [1, "text-dark", "me-2"], ["routerLink", "/auth-login", 1, "text-dark", "fw-bold"]], template: function AuthSignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "First name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i-feather", 20)(24, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15)(26, "div", 16)(27, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Last name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i-feather", 22)(33, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24)(35, "div", 16)(36, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Your Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i-feather", 25)(42, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24)(44, "div", 16)(45, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i-feather", 27)(51, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24)(53, "div", 16)(54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "I Accept ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Terms And Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24)(61, "div", 33)(62, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 35)(65, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Or Signup With");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 14)(68, "div", 36)(69, "div", 33)(70, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 36)(74, "div", 33)(75, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 40)(79, "p", 41)(80, "small", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Already have an account ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXNpZ251cC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 88498:
/*!******************************************************************!*\
  !*** ./src/app/core/components/changelog/changelog.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangelogComponent": () => (/* binding */ ChangelogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 5601);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 37059);




/**
 * Changelog Component
 */
class ChangelogComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChangelogComponent.ɵfac = function ChangelogComponent_Factory(t) { return new (t || ChangelogComponent)(); };
ChangelogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangelogComponent, selectors: [["app-changelog"]], decls: 217, vars: 1, consts: [["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "col-lg-9"], [1, "p-4", "shadow", "rounded", "border"], [1, "text-success"], [1, "badge", "rounded-pill", "bg-danger", "ms-2"], [1, "list-unstyled"], [1, "text-muted", "my-2", "ms-3"], ["name", "arrow-right-circle", 1, "fea", "icon-sm", "me-2"], [1, "fw-bold"], ["routerLink", "/index-construction", "target", "_blank", 1, "h6", "text-danger"], ["routerLink", "/index-real-estate", "target", "_blank", 1, "h6", "text-danger"], ["routerLink", "/index-developer", "target", "_blank", 1, "h6", "text-danger"], ["routerLink", "/index-seo-agency", "target", "_blank", 1, "h6", "text-danger"], ["routerLink", "/index-hospital", "target", "_blank", 1, "h6", "text-danger"], ["routerLink", "/index-finance", "target", "_blank", 1, "h6", "text-danger"], ["routerLink", "/index-videocall", "target", "_blank", 1, "h6", "text-danger"], ["routerLink", "/index-it-solution-two", "target", "_blank", 1, "h6", "text-danger"], ["routerLink", "/index-freelancer", "target", "_blank", 1, "h6", "text-danger"], ["routerLink", "/index-blockchain", "target", "_blank", 1, "h6", "text-danger"], ["routerLink", "/index-crypto-two", "target", "_blank", 1, "h6", "text-danger"], ["routerLink", "/index-integration", "target", "_blank", 1, "h6", "text-danger"], ["routerLink", "/index-landing-four", "target", "_blank", 1, "h6", "text-danger"], ["name", "corner-down-right", 1, "fea", "icon-sm", "me-2"], [1, "mt-5"], [1, "mt-4"], ["href", "https://1.envato.market/4n73n", "target", "_blank", 1, "btn", "btn-primary"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"]], template: function ChangelogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Changelog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "nav", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9)(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Changelog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13)(19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 17)(23, "div", 1)(24, "div", 2)(25, "div", 18)(26, "div", 19)(27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Version ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "2.6.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " - 17th June 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Latest Updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 22)(35, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Update :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Update Latest Bootstrap v5.0.0 Beta 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Update :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Update Packages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Added :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Added Mega menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "New :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Construction Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Live Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "New :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Real Estate Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Live Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "New :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Developer Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Live Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "New :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " SEO Agency Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Live Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "New :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Hospital Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Live Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "New :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Finance Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Live Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "New :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Video Conference Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Live Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "New :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " IT Solution Two Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Live Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "New :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Freelance Two Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Live Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "New :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Blockchain Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Live Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "New :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Cryptocurrency Two Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Live Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "New :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Integration Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Live Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "New :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Landing Four Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Live Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "New :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Landing Four Landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Live Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "New Added ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Pages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "ul", 22)(155, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i-feather", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Product List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "New Added ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " Pages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "ul", 22)(165, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "i-feather", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Company Listing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "i-feather", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Candidate Listing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "New Added ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Special");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Pages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "ul", 22)(178, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i-feather", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Thank you ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Added :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " Added portfolio pages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Fixed :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Data render using JSON object ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Fixed :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " Make common component for Pricing, Testimonial, Services, Blog, Team, Features ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Fixed :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " Fixed Logo issues in Dark mode and Light mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h5", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Version ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "2.5.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " - 1st August 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "ul", 22)(207, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Fixed :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " Fixed some menu and responsive issues ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 41)(213, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Purchase Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "i-feather", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2Vsb2cuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 73480:
/*!********************************************************************!*\
  !*** ./src/app/core/components/components/components.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsComponent": () => (/* binding */ ComponentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 5601);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 37059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function ComponentsComponent_ng_template_950_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 447)(1, "h6", 448);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Accordion #1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function ComponentsComponent_ng_template_951_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 449);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentsComponent_ng_template_953_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 450)(1, "h6", 448);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Accordion #2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function ComponentsComponent_ng_template_954_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 449);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentsComponent_ng_template_956_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 451)(1, "h6", 448);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Accordion #3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function ComponentsComponent_ng_template_957_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 449);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentsComponent_ng_template_1300_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "You can combine all the Dalois templates into a single one, you can take a component from the Application theme and use it in the Website.");
} }
function ComponentsComponent_ng_template_1306_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "You can combine all the Dalois templates into a single one, you can take a component from the Application theme and use it in the Website.");
} }
function ComponentsComponent_ng_template_1312_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "You can combine all the Dalois templates into a single one, you can take a component from the Application theme and use it in the Website.");
} }
function ComponentsComponent_ng_template_1401_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 452)(1, "h5", 453);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modal title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 454);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsComponent_ng_template_1401_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const modal_r21 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r21.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 455)(5, "div", 456)(6, "p", 457);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables. This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 458)(9, "button", 459);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsComponent_ng_template_1401_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const modal_r21 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r21.close("Save click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function ComponentsComponent_ng_template_1403_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 460)(1, "div", 461)(2, "div", 462)(3, "div", 463)(4, "div", 464);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 465);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 466)(7, "form", 467)(8, "div", 18)(9, "div", 376)(10, "div", 300)(11, "label", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Your Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i-feather", 303)(17, "input", 468);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 376)(19, "div", 300)(20, "label", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i-feather", 469)(26, "input", 470);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 376)(28, "div", 471)(29, "div", 300)(30, "div", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 472);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 473);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Remember me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 474)(35, "a", 475);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Forgot password ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 476)(38, "div", 477)(39, "button", 478);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 479)(42, "p", 480)(43, "small", 481);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Don't have an account ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 482);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
} }
function ComponentsComponent_ng_template_1405_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 460)(1, "div", 483)(2, "button", 484);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsComponent_ng_template_1405_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const modal_r26 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r26.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 485);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 462)(5, "div", 463)(6, "div", 486)(7, "div", 487)(8, "h6", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Be the first to know daily updates");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Signup for daily updates");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 457);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Subscribe to the Dalois mailing list to receive updates on new arrivals, special offers and our promotions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 424)(15, "div", 18)(16, "div", 376)(17, "div", 488)(18, "div", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i-feather", 305)(20, "input", 489);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 376)(22, "div", 477);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 490);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 491)(25, "div", 492)(26, "p", 480)(27, "small", 481);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Already have an account ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 493);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()();
} }
function ComponentsComponent_ng_template_1407_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 460)(1, "div", 494)(2, "div", 492)(3, "div", 495)(4, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 496);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 424)(7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your wishlist is empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create your first wishlist request...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 424)(12, "a", 497);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "+ Create new wishlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
} }
function ComponentsComponent_ng_template_1409_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 460)(1, "div", 494)(2, "div", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 498);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 424)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Your cart is empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Looks like you haven't made your choice yet...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 424)(10, "a", 499);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Start Shopping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
} }
/**
 * Components Component
 */
class ComponentsComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    /***
     * Model open
     */
    open(content) {
        this.modalService.open(content, { centered: true });
    }
    openLogin(content) {
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-holder', centered: true });
    }
    Subscribeopen(content) {
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-holder', centered: true });
    }
    Wishlistopen(content) {
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-holder', centered: true });
    }
    Emptyopen(content) {
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-holder', centered: true });
    }
}
ComponentsComponent.ɵfac = function ComponentsComponent_Factory(t) { return new (t || ComponentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal)); };
ComponentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComponentsComponent, selectors: [["app-components"]], decls: 1545, vars: 29, consts: [["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "row"], [1, "col-lg-3", "col-md-4", "col-12", "d-none", "d-md-block"], [1, "sticky-bar", "component-wrapper", "bg-light", "rounded", "shadow", "p-4"], [1, "list-unstyled", "mb-0"], ["href", "javascript: void(0);", 1, "active", "mouse-down", "h6", "text-dark", 3, "ngxScrollTo"], ["href", "javascript: void(0);", 1, "mouse-down", "h6", "text-dark", 3, "ngxScrollTo"], [1, "col-lg-9", "col-md-8", "col-12", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], [1, "row", "row-cols-1", "ms-lg-2"], ["id", "typography", 1, "col"], [1, "component-wrapper", "rounded", "shadow"], [1, "p-4", "border-bottom"], [1, "title", "mb-0"], [1, "p-4"], [1, "text-muted", "mb-4", "pb-2"], [1, "text-danger"], [1, "mb-0"], ["id", "display", 1, "col", "mt-4", "pt-2"], [1, "display-1"], [1, "display-2"], [1, "display-3"], [1, "display-4", "mb-0"], ["id", "bg-colors", 1, "col", "mt-4", "pt-2"], [1, "text-muted", "mb-2", "pb-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-primary", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-primary", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-secondary", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-secondary", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-success", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-success", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-danger", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-danger", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-warning", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-warning", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-info", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-info", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-light", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-light", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-white", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-white", "border", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-dark", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-dark", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-muted", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-muted", "rounded", "mb-0"], [1, "col", "mt-4", "pt-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-soft-primary", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-soft-primary", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-soft-secondary", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-soft-secondary", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-soft-success", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-soft-success", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-soft-danger", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-soft-danger", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-soft-warning", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-soft-warning", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-soft-info", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-soft-info", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-soft-light", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-soft-light", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-soft-white", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-soft-white", "border", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-soft-dark", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-soft-dark", "rounded", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", ".bg-soft-muted", 1, "d-inline-block", "me-1", "mt-2"], [1, "avatar", "avatar-small", "bg-soft-muted", "rounded", "mb-0"], ["id", "text-colors", 1, "col", "mt-4", "pt-2"], [1, "text-primary"], [1, "text-secondary"], [1, "text-success"], [1, "text-warning"], [1, "text-info"], [1, "text-light", "bg-dark"], [1, "text-white", "bg-dark"], [1, "text-white-50", "bg-dark"], [1, "text-dark", "mb-0"], ["id", "buttons", 1, "col", "mt-4", "pt-2"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-secondary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-success", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-danger", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-info", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-warning", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-light", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-dark", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-primary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-secondary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-success", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-danger", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-info", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-warning", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-light", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-dark", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-soft-primary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-soft-secondary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-soft-success", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-soft-danger", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-soft-info", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-soft-warning", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-soft-light", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-soft-dark", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-soft-primary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-soft-secondary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-soft-success", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-soft-danger", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-soft-info", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-soft-warning", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-soft-light", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-soft-dark", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-secondary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-success", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-danger", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-info", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-warning", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-light", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-dark", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-outline-primary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-outline-secondary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-outline-success", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-outline-danger", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-outline-info", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-outline-warning", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-outline-light", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-pills", "btn-outline-dark", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-primary", "mt-2"], ["name", "facebook", 1, "icons"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-info", "mt-2", "ms-1"], ["name", "twitter", 1, "icons"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-danger", "mt-2", "ms-1"], ["name", "youtube", 1, "icons"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-success", "mt-2", "ms-1"], ["name", "gitlab", 1, "icons"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-secondary", "mt-2", "ms-1"], ["name", "linkedin", 1, "icons"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-warning", "mt-2", "ms-1"], ["name", "github", 1, "icons"], ["name", "star", 1, "icons"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-outline-primary", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-outline-info", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-outline-danger", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-outline-success", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-outline-secondary", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-outline-warning", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-pills", "btn-primary", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-pills", "btn-info", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-pills", "btn-danger", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-pills", "btn-success", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-pills", "btn-secondary", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-pills", "btn-warning", "mt-2", "ms-1"], ["name", "heart", 1, "icons"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-pills", "btn-outline-primary", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-pills", "btn-outline-info", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-pills", "btn-outline-danger", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-pills", "btn-outline-success", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-pills", "btn-outline-secondary", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-pills", "btn-outline-warning", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-primary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-pills", "btn-primary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-outline-primary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-pills", "btn-outline-primary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-sm", "btn-primary", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-sm", "btn-pills", "btn-primary", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-sm", "btn-outline-primary", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-sm", "btn-pills", "btn-outline-primary", "mt-2", "ms-1"], [1, "text-muted", "mb-2", "mt-4", "pb-2"], ["href", "javascript:void(0)", 1, "btn", "btn-lg", "btn-primary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-lg", "btn-pills", "btn-primary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-lg", "btn-outline-primary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-lg", "btn-pills", "btn-outline-primary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-lg", "btn-primary", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-lg", "btn-pills", "btn-primary", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-lg", "btn-outline-primary", "mt-2", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-lg", "btn-pills", "btn-outline-primary", "mt-2", "ms-1"], ["id", "dropdowns", 1, "col", "mt-4", "pt-2"], ["ngbDropdown", "", 1, "btn-group", "dropdown-primary", "me-2", "mt-2"], ["type", "button", "data-toggle", "dropdown", "ngbDropdownToggle", "", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "dropdown-divider"], ["ngbDropdown", "", 1, "btn-group", "dropdown-secondary", "me-2", "mt-2"], ["type", "button", "data-toggle", "dropdown", "ngbDropdownToggle", "", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["ngbDropdown", "", 1, "btn-group", "dropdown-success", "me-2", "mt-2"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-success", "dropdown-toggle"], ["ngbDropdown", "", 1, "btn-group", "dropdown-warning", "me-2", "mt-2"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-warning", "dropdown-toggle"], ["ngbDropdown", "", 1, "btn-group", "dropdown-info", "me-2", "mt-2"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-info", "dropdown-toggle"], ["ngbDropdown", "", 1, "btn-group", "dropdown-danger", "me-2", "mt-2"], ["type", "button", "ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-danger", "dropdown-toggle"], ["ngbDropdown", "", 1, "btn-group", "dropdown-dark", "me-2", "mt-2"], ["type", "button", "ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-dark", "dropdown-toggle"], ["id", "badges", 1, "col", "mt-4", "pt-2"], [1, "badge", "bg-primary", "me-2", "mt-2"], [1, "badge", "bg-secondary", "me-2", "mt-2"], [1, "badge", "bg-success", "me-2", "mt-2"], [1, "badge", "bg-danger", "me-2", "mt-2"], [1, "badge", "bg-warning", "me-2", "mt-2"], [1, "badge", "bg-info", "me-2", "mt-2"], [1, "badge", "bg-light", "me-2", "mt-2"], [1, "badge", "bg-dark", "me-2", "mt-2"], [1, "badge", "rounded-pill", "bg-primary", "me-2", "mt-2"], [1, "badge", "rounded-pill", "bg-secondary", "me-2", "mt-2"], [1, "badge", "rounded-pill", "bg-success", "me-2", "mt-2"], [1, "badge", "rounded-pill", "bg-danger", "me-2", "mt-2"], [1, "badge", "rounded-pill", "bg-warning", "me-2", "mt-2"], [1, "badge", "rounded-pill", "bg-info", "me-2", "mt-2"], [1, "badge", "rounded-pill", "bg-light", "me-2", "mt-2"], [1, "badge", "rounded-pill", "bg-dark", "me-2", "mt-2"], [1, "badge", "bg-soft-primary", "me-2", "mt-2"], [1, "badge", "bg-soft-secondary", "me-2", "mt-2"], [1, "badge", "bg-soft-success", "me-2", "mt-2"], [1, "badge", "bg-soft-danger", "me-2", "mt-2"], [1, "badge", "bg-soft-warning", "me-2", "mt-2"], [1, "badge", "bg-soft-info", "me-2", "mt-2"], [1, "badge", "bg-soft-light", "me-2", "mt-2"], [1, "badge", "bg-soft-dark", "me-2", "mt-2"], [1, "badge", "rounded-pill", "bg-soft-primary", "me-2", "mt-2"], [1, "badge", "rounded-pill", "bg-soft-secondary", "me-2", "mt-2"], [1, "badge", "rounded-pill", "bg-soft-success", "me-2", "mt-2"], [1, "badge", "rounded-pill", "bg-soft-danger", "me-2", "mt-2"], [1, "badge", "rounded-pill", "bg-soft-warning", "me-2", "mt-2"], [1, "badge", "rounded-pill", "bg-soft-info", "me-2", "mt-2"], [1, "badge", "rounded-pill", "bg-soft-light", "me-2", "mt-2"], [1, "badge", "rounded-pill", "bg-soft-dark", "me-2", "mt-2"], ["href", "javascript:void(0)", 1, "badge", "badge-link", "bg-primary", "me-2", "mt-2"], ["href", "javascript:void(0)", 1, "badge", "badge-link", "bg-secondary", "me-2", "mt-2"], ["href", "javascript:void(0)", 1, "badge", "badge-link", "bg-success", "me-2", "mt-2"], ["href", "javascript:void(0)", 1, "badge", "badge-link", "bg-danger", "me-2", "mt-2"], ["href", "javascript:void(0)", 1, "badge", "badge-link", "bg-warning", "me-2", "mt-2"], ["href", "javascript:void(0)", 1, "badge", "badge-link", "bg-info", "me-2", "mt-2"], ["href", "javascript:void(0)", 1, "badge", "badge-link", "bg-light", "me-2", "mt-2"], ["href", "javascript:void(0)", 1, "badge", "badge-link", "bg-dark", "me-2", "mt-2"], ["id", "alerts", 1, "col", "mt-4", "pt-2"], ["role", "alert", 1, "alert", "alert-primary"], ["role", "alert", 1, "alert", "alert-secondary"], ["role", "alert", 1, "alert", "alert-success"], ["role", "alert", 1, "alert", "alert-danger"], ["role", "alert", 1, "alert", "alert-warning"], ["role", "alert", 1, "alert", "alert-info"], ["role", "alert", 1, "alert", "alert-light"], ["role", "alert", 1, "alert", "alert-dark", "mb-0"], ["href", "javascript:void(0)", 1, "alert-link"], ["role", "alert", 1, "alert", "alert-success", "mb-0"], [1, "alert-heading"], [1, "mb-0", "border-top", "pt-3"], [1, "d-block"], ["role", "alert", 1, "alert", "alert-primary", "alert-pills"], [1, "badge", "rounded-pill", "bg-info", "me-1"], [1, "content"], [1, "uil", "uil-angle-right-b"], ["role", "alert", 1, "alert", "alert-danger", "alert-pills", "mb-0"], [1, "badge", "rounded-pill", "bg-success", "me-1"], ["role", "alert", 1, "alert", "alert-outline-primary", "alert-pills"], [1, "badge", "rounded-pill", "bg-primary", "me-1"], ["role", "alert", 1, "alert", "alert-outline-danger", "alert-pills", "mb-0"], [1, "badge", "rounded-pill", "bg-danger", "me-1"], ["id", "accordions", 1, "col", "mt-4", "pt-2"], [1, "faq-content"], ["activeIds", "ngb-panel-0", "closeOthers", "true"], ["acc", "ngbAccordion"], ["id", "ngb-panel-0", "cardClass", "border-0 rounded shadow mb-2"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], ["cardClass", "border-0 rounded shadow mb-2"], ["id", "cards", 1, "col", "mt-4", "pt-2"], [1, "text-muted", "pb-2"], [1, "col-lg-6", "col-12", "mt-4", "pt-2"], [1, "card", "shadow", "rounded", "border-0", "overflow-hidden"], ["src", "assets/images/blog/01.jpg", "alt", "", 1, "img-fluid"], [1, "card-body"], [1, "card-title"], [1, "text-muted"], ["href", "javascript:void(0)", 1, "text-primary"], [1, "uil", "uil-angle-right-b", "align-middle"], [1, "mt-4", "pt-4", "border-top"], [1, "col-lg-12", "mt-4", "pt-2"], [1, "row", "g-0"], [1, "col-md-5"], ["src", "assets/images/work/14.jpg", "alt", "...", 1, "img-fluid"], [1, "col-md-7"], [1, "card-text"], ["id", "forms", 1, "col", "mt-4", "pt-2"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["name", "name", "id", "name", "type", "text", "placeholder", "First Name :", 1, "form-control", "ps-5"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["name", "email", "id", "email", "type", "email", "placeholder", "Your email :", 1, "form-control", "ps-5"], [1, "col-md-12"], ["name", "book", 1, "fea", "icon-sm", "icons"], ["name", "subject", "id", "subject", "placeholder", "Your subject :", 1, "form-control", "ps-5"], ["name", "message-circle", 1, "fea", "icon-sm", "icons"], ["name", "comments", "id", "comments", "rows", "4", "placeholder", "Your Message :", 1, "form-control", "ps-5"], [1, "col-sm-12"], ["type", "submit", "id", "submit", "name", "send", "value", "Send Message", 1, "btn", "btn-primary"], ["id", "checkboxes", 1, "col", "mt-4", "pt-2"], [1, "form-check", "form-check-inline"], [1, "form-check"], ["type", "checkbox", "checked", "", "value", "", "id", "flexCheckDefault1", 1, "form-check-input"], ["for", "flexCheckDefault1", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckDefault2", 1, "form-check-input"], ["for", "flexCheckDefault2", 1, "form-check-label"], ["type", "checkbox", "disabled", "", "value", "", "id", "flexCheckDefault3", 1, "form-check-input"], ["for", "flexCheckDefault3", 1, "form-check-label"], ["id", "radio-buttons", 1, "col", "mt-4", "pt-2"], [1, "custom-control", "custom-radio", "custom-control-inline"], [1, "form-check", "mb-0"], ["checked", "", "type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["checked", "", "type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], ["checked", "", "type", "radio", "disabled", "", "name", "flexRadioDefault", "id", "flexRadioDefault3", 1, "form-check-input"], ["for", "flexRadioDefault3", 1, "form-check-label"], ["id", "switches", 1, "col", "mt-4", "pt-2"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "flexSwitchCheckDefault", 1, "form-check-input"], ["for", "flexSwitchCheckDefault", 1, "form-check-label"], ["type", "checkbox", "id", "flexSwitchCheckChecked", "checked", "", 1, "form-check-input"], ["for", "flexSwitchCheckChecked", 1, "form-check-label"], ["type", "checkbox", "id", "flexSwitchCheckDisabled", "disabled", "", 1, "form-check-input"], ["for", "flexSwitchCheckDisabled", 1, "form-check-label"], ["type", "checkbox", "id", "flexSwitchCheckCheckedDisabled", "checked", "", "disabled", "", 1, "form-check-input"], ["for", "flexSwitchCheckCheckedDisabled", 1, "form-check-label"], ["id", "select-box", 1, "col", "mt-4", "pt-2"], ["aria-label", "Default select example", 1, "form-select", "form-control"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["id", "subscribe-forms", 1, "col", "mt-4", "pt-2"], [1, "subcribe-form"], ["name", "email", "id", "email2", "type", "email", "placeholder", "Your email :", "required", "", 1, "form-control", "rounded-pill", "shadow"], ["type", "submit", 1, "btn", "btn-pills", "btn-primary"], ["id", "map", 1, "col", "mt-4", "pt-2"], [1, "map"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin", "allowfullscreen", "", 1, "rounded", 2, "border", "0"], ["id", "breadcrumbs", 1, "col", "mt-4", "pt-2"], ["href", "javascript:void(0)"], ["id", "pagination", 1, "col", "mt-4", "pt-2"], [1, "pagination", "mb-0"], [1, "page-item"], ["href", "javascript:void(0)", "aria-label", "Previous", 1, "page-link"], [1, "page-item", "active"], ["href", "javascript:void(0)", 1, "page-link"], ["href", "javascript:void(0)", "aria-label", "Next", 1, "page-link"], ["id", "avatar", 1, "col", "mt-4", "pt-2"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-ex-sm", "me-2", "rounded"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-md-sm", "me-2", "rounded"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-small", "me-2", "rounded"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-medium", "me-2", "rounded"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-large", "mt-3", "mt-sm-0", "me-2", "rounded"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-ex-sm", "me-2", "rounded-circle"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-md-sm", "me-2", "rounded-circle"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-small", "me-2", "rounded-circle"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-medium", "me-2", "rounded-circle"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-large", "mt-3", "mt-sm-0", "me-2", "rounded-circle"], ["id", "nav-tabs", 1, "col", "mt-4", "pt-2"], [1, "col-lg-12"], ["ngbNav", "", 1, "nav-pills", "nav-justified"], ["nav", "ngbNav"], ["ngbNavItem", ""], ["ngbNavLink", "", 1, "rounded"], [1, "text-center", "pt-1", "pb-1"], [1, "title", "fw-normal", "mb-0"], ["ngbNavContent", ""], [1, "pt-2", 3, "ngbNavOutlet"], ["id", "progressbar", 1, "col", "mt-4", "pt-2"], [1, "progress-box"], [1, "title", "text-muted"], [1, "progress"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "84%"], [1, "progress-value", "d-block", "text-muted", "h6"], [1, "progress-box", "mt-4"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "75%"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "79%"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "95%"], ["id", "tooltips", 1, "col", "mt-4", "pt-2"], ["href", "javascript:void", "ngbTooltip", "Top Tooltip", 1, "btn", "btn-primary", "me-2", "mt-2"], ["href", "javascript:void", "placement", "left", "ngbTooltip", "Left Tooltip", 1, "btn", "btn-primary", "me-2", "mt-2"], ["href", "javascript:void", "placement", "bottom", "ngbTooltip", "Bottom Tooltip", 1, "btn", "btn-primary", "me-2", "mt-2"], ["href", "javascript:void", "placement", "right", "ngbTooltip", "Right Tooltip", 1, "btn", "btn-primary", "me-2", "mt-2"], ["id", "modals", 1, "col", "mt-4", "pt-2"], ["href", "javascript:void(0)", "data-toggle", "modal", "data-target", "#LoginForm", 1, "btn", "btn-primary", 3, "click"], ["href", "javascript:void(0)", "data-bs-toggle", "modal", 1, "btn", "btn-primary", "m-1", 3, "click"], ["content", ""], ["Logincontent", ""], ["Subscribecontent", ""], ["Wishlistcontent", ""], ["Emptycontent", ""], ["id", "tables", 1, "col", "mt-4", "pt-2"], [1, "table-responsive", "bg-white", "shadow", "rounded"], [1, "table", "mb-0", "table-center"], ["scope", "col", 1, "border-bottom"], ["scope", "row"], ["id", "blockquotes", 1, "col", "mt-4", "pt-2"], [1, "blockquote", "p-3", "mb-0"], [1, "text-muted", "mb-0", "fst-italic"], ["id", "icons", 1, "col", "mt-4", "pt-2"], ["href", "https://feathericons.com/", "target", "_blank"], ["name", "user", 1, "fea", "icon-ex-md", "me-2"], ["name", "facebook", 1, "fea", "icon-ex-md", "me-2"], ["name", "map-pin", 1, "fea", "icon-ex-md", "me-2"], ["name", "linkedin", 1, "fea", "icon-ex-md", "me-2"], ["name", "camera", 1, "fea", "icon-ex-md", "me-2"], ["name", "mail", 1, "fea", "icon-ex-md", "me-2"], [1, "mt-4"], ["href", "https://materialdesignicons.com/", "target", "_blank"], [1, "mdi", "mdi-home", "h4", "me-2"], [1, "mdi", "mdi-facebook", "h4", "me-2"], [1, "mdi", "mdi-chevron-tight", "h4", "me-2"], [1, "mdi", "mdi-camera-image", "h4", "me-2"], [1, "mdi", "mdi-car-light-high", "h4", "me-2"], [1, "mdi", "mdi-silverware-fork-knife", "h4", "me-2"], ["href", "https://www.flaticon.com/packs/basic-icon", "target", "_blank"], ["src", "assets/images/icon/Email.svg", "height", "50", "alt", "", 1, "me-3"], ["src", "assets/images/icon/bitcoin.svg", "height", "50", "alt", "", 1, "me-3"], ["src", "assets/images/icon/calendar.svg", "height", "50", "alt", "", 1, "me-3"], ["src", "assets/images/icon/location.svg", "height", "50", "alt", "", 1, "me-3"], ["href", "https://iconscout.com/unicons", "target", "_blank"], [1, "h3", "text-primary", "me-2"], [1, "uil", "uil-0-plus"], [1, "uil", "uil-android"], [1, "uil", "uil-bitcoin"], [1, "uil", "uil-calendar-alt"], [1, "h3", "text-primary"], [1, "uil", "uil-chart-pie-alt"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], ["id", "headingone", 1, "border-0", "bg-light"], [1, "title", "mb-0", "text-dark"], [1, "text-muted", "mb-0", "faq-ans"], ["id", "headingtwo", 1, "border-0", "bg-light"], ["id", "headingthree", 1, "border-0", "bg-light"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "bg-white", "p-3", "rounded", "box-shadow"], [1, "text-muted", "mb-0"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [1, "modal-content", "rounded", "shadow", "border-0"], [1, "modal-body", "p-0"], [1, "container-fluid", "px-0"], [1, "row", "align-items-center", "g-0"], [1, "col-lg-6", "col-md-5"], ["src", "assets/images/course/online/ab02.jpg", "alt", "", 1, "img-fluid"], [1, "col-lg-6", "col-md-7"], [1, "login-form", "p-4"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], ["name", "key", 1, "fea", "icon-sm", "icons"], ["type", "password", "placeholder", "Password", "required", "", 1, "form-control", "ps-5"], [1, "d-flex", "justify-content-between"], ["type", "checkbox", "value", "", "id", "flexCheckDefault4", 1, "form-check-input"], ["for", "flexCheckDefault4", 1, "form-check-label"], [1, "forgot-pass", "mb-0"], ["routerLink", "/auth-re-password", 1, "text-dark", "fw-bold"], [1, "col-lg-12", "mb-0"], [1, "d-grid"], [1, "btn", "btn-primary"], [1, "col-12", "text-center"], [1, "mb-0", "mt-3"], [1, "text-dark", "me-2"], ["routerLink", "/auth-signup", 1, "text-dark", "fw-bold"], [1, "modal-body", "p-0", 2, "background", "url('assets/images/subscribe.png') no-repeat"], ["type", "button", "aria-label", "Close", 1, "btn-close", "float-end", "m-1", 3, "click"], [1, "clearfix"], [1, "col-lg-6", "offset-lg-6"], [1, "pb-5", "pt-4", "px-4"], [1, "foot-subscribe", "mb-3"], ["type", "email", "name", "email", "id", "daily-updates", "placeholder", "Your email : ", "required", "", 1, "form-control", "ps-5", "rounded"], ["type", "submit", "id", "submitsubscribe", "name", "send", "value", "Subscribe", 1, "btn", "btn-primary"], [1, "col-12"], [1, "text-center"], ["href", "javascript:void(0)", 1, "text-dark", "fw-bold"], [1, "modal-body", "py-5"], [1, "icon", "d-flex", "align-items-center", "justify-content-center", "bg-soft-danger", "rounded-circle", "mx-auto", 2, "height", "95px", "width", "95px"], [1, "uil", "uil-heart-break", "align-middle"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary"], ["src", "assets/images/shop/cart.png", "alt", "", 1, "avatar", "avatar-medium", "rounded-circle", "shadow"], ["href", "javascript:void(0)", 1, "btn", "btn-primary"]], template: function ComponentsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Components ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "nav", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9)(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13)(19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 17)(23, "div", 1)(24, "div", 18)(25, "div", 19)(26, "div", 20)(27, "ul", 21)(28, "li")(29, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Typography Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li")(32, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Display Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li")(35, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Background Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li")(38, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Text Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li")(41, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li")(44, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Dropdowns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li")(47, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li")(50, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li")(53, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Accordions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li")(56, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li")(59, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li")(62, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Checkboxes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li")(65, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Radio Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li")(68, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Switches Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li")(71, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Form Select Box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li")(74, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Subscribe Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li")(77, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Google Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li")(80, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Breadcrumbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li")(83, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li")(86, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li")(89, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Nav Tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li")(92, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Progressbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li")(95, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Tooltips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li")(98, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Modals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li")(101, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li")(104, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Blockquotes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li")(107, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 24)(110, "div", 25)(111, "div", 26)(112, "div", 27)(113, "div", 28)(114, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Typography Heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 30)(117, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "<h1> H1. Bootstrap heading </h1>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "H1. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "H2. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "H3. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "H4. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "H5. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h6", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "H6. Bootstrap heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 34)(134, "div", 27)(135, "div", 28)(136, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Display Heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 30)(139, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "<p class=\"display-1\"> Display 1 </p>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Display 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Display 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Display 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Display 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 39)(152, "div", 27)(153, "div", 28)(154, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Background Color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 30)(157, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "<div class=\"bg-primary\"> Dalois Saas & Software Template </div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 61)(182, "div", 27)(183, "div", 28)(184, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " Soft Background Color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 30)(187, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "<div class=\"bg-soft-primary\"> Dalois Saas & Software Template </div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "p", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "p", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "p", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 82)(212, "div", 27)(213, "div", 28)(214, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " Text Color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 30)(217, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "<div class=\"text-primary\"> Dalois Saas & Software Template </div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h6", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, ".text-primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "h6", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, ".text-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "h6", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, ".text-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "h6", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, ".text-danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "h6", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, ".text-warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "h6", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, ".text-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "h6", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, ".text-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "h6", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, ".text-white");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, ".text-white-50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "h6", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, ".text-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 92)(242, "div", 27)(243, "div", 28)(244, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 30)(247, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "<a href=\"#\" class=\"btn btn-primary\"> Primary </a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "a", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 61)(268, "div", 27)(269, "div", 28)(270, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Buttons Pill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 30)(273, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "<a href=\"#\" class=\"btn btn-pills btn-primary\"> Primary </a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "a", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 61)(294, "div", 27)(295, "div", 28)(296, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Buttons Soft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 30)(299, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "<a href=\"#\" class=\"btn btn-soft-primary\"> Primary </a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 61)(320, "div", 27)(321, "div", 28)(322, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Buttons Pill Soft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 30)(325, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "<a href=\"#\" class=\"btn btn-pills btn-soft-primary\"> Primary </a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "a", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "a", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "a", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "a", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 61)(346, "div", 27)(347, "div", 28)(348, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Buttons Outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 30)(351, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "<a href=\"#\" class=\"btn btn-outline-primary\"> Primary </a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "a", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "a", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "a", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "a", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "a", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 61)(372, "div", 27)(373, "div", 28)(374, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Buttons Pill Outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "div", 30)(377, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "<a href=\"#\" class=\"btn btn-outline-primary\"> Primary </a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "a", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "a", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "a", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "a", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "a", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "a", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "div", 61)(398, "div", 27)(399, "div", 28)(400, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Button Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 30)(403, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "<a href=\"#\" class=\"btn btn-icon btn-primary\"><i-feather name=\"facebook\" class=\"fea icon-sm\"></i></a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "a", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](408, "i-feather", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "a", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "i-feather", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "a", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](412, "i-feather", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "a", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "i-feather", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "a", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](416, "i-feather", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "a", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "i-feather", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "a", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](420, "i-feather", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "div", 61)(422, "div", 27)(423, "div", 28)(424, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Outline Button Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "div", 30)(427, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "<a href=\"#\" class=\"btn btn-icon btn-outline-primary\"><i-feather name=\"facebook\" class=\"fea icon-sm\"></i></a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "a", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](432, "i-feather", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "a", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](434, "i-feather", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "a", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](436, "i-feather", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "a", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](438, "i-feather", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "a", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "i-feather", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "a", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](442, "i-feather", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "div", 61)(444, "div", 27)(445, "div", 28)(446, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "Button Pill Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "div", 30)(449, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "<a href=\"#\" class=\"btn btn-icon btn-pills btn-primary\"><i-feather name=\"facebook\" class=\"fea icon-sm\"></i></a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "a", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](454, "i-feather", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "a", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](456, "i-feather", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "a", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](458, "i-feather", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "a", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](460, "i-feather", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "a", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](462, "i-feather", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "a", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](464, "i-feather", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "a", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](466, "i-feather", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "div", 61)(468, "div", 27)(469, "div", 28)(470, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "Outline Button Pill Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "div", 30)(473, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "<a href=\"#\" class=\"btn btn-icon btn-pills btn-outline-primary\"><i-feather name=\"facebook\" class=\"fea icon-sm\"></i></a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "a", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](478, "i-feather", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "a", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](480, "i-feather", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "a", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](482, "i-feather", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "a", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](484, "i-feather", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "a", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](486, "i-feather", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "a", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](488, "i-feather", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "div", 61)(490, "div", 27)(491, "div", 28)(492, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, "Button Sizing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "div", 30)(495, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "<a href=\"#\" class=\"btn btn-primary btn-sm\"> Primary </a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "a", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "a", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "a", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "a", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "a", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](508, "i-feather", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "a", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](510, "i-feather", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "a", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](512, "i-feather", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "a", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](514, "i-feather", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "h6", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "<a href=\"#\" class=\"btn btn-primary btn-lg\"> Primary </a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "a", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "a", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "a", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "a", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "a", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](528, "i-feather", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "a", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](530, "i-feather", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "a", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](532, "i-feather", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "a", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](534, "i-feather", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "div", 190)(536, "div", 27)(537, "div", 28)(538, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, " Dropdown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "div", 30)(541, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](543, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, " <div class=\"btn-group dropdown-primary\" ngbDropdown>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](546, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "\u00A0\u00A0 <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"false\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](548, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](549, "\u00A0\u00A0\u00A0\u00A0 Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](550, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, "\u00A0\u00A0 </button>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](552, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "\u00A0\u00A0 <div class=\"dropdown-menu\" ngbDropdownMenu>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](554, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, "\u00A0\u00A0\u00A0\u00A0 <a class=\"dropdown-item\" href=\"#\">Home</a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](556, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, "\u00A0\u00A0\u00A0\u00A0 <a class=\"dropdown-item\" href=\"#\">Services</a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](558, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, "\u00A0\u00A0\u00A0\u00A0 <a class=\"dropdown-item\" href=\"#\">About us</a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](560, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, "\u00A0\u00A0\u00A0\u00A0 <div class=\"dropdown-divider\"></div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](562, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, "\u00A0\u00A0\u00A0\u00A0 <a class=\"dropdown-item\" href=\"#\">Contact us</a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](564, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, "\u00A0\u00A0 </div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](566, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, " </div> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "div", 191)(569, "button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, " Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "div", 193)(572, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](578, "div", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](580, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "div", 196)(582, "button", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, " Secondary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "div", 193)(585, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](591, "div", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "div", 198)(595, "button", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](596, " Success ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "div", 193)(598, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](601, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](604, "div", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "div", 200)(608, "button", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](609, " Warning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "div", 193)(611, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](617, "div", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "div", 202)(621, "button", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, " Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "div", 193)(624, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](627, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](629, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](630, "div", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "div", 204)(634, "button", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](635, " Danger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "div", 193)(637, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](643, "div", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "div", 206)(647, "button", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, " Dark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "div", 193)(650, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](651, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](655, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](656, "div", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](658, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "div", 208)(660, "div", 27)(661, "div", 28)(662, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, " Badges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "div", 30)(665, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](666, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](668, "<span class=\"badge bg-primary\"> primary </span>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "span", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](670, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "span", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "span", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](674, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "span", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](676, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "span", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](678, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "span", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "span", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](682, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "span", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](684, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "div", 61)(686, "div", 27)(687, "div", 28)(688, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](689, " Pill Badges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "div", 30)(691, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](692, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](694, "<span class=\"badge rounded-pill bg-primary\"> primary </span>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "span", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](696, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "span", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](698, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "span", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "span", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "span", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](704, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "span", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](706, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "span", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](708, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "span", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](710, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "div", 61)(712, "div", 27)(713, "div", 28)(714, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](715, "Soft Badges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "div", 30)(717, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](718, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](720, "<span class=\"badge bg-soft-primary\"> primary </span>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "span", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "span", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "span", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "span", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](728, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "span", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "span", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](732, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](733, "span", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](734, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "span", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "div", 61)(738, "div", 27)(739, "div", 28)(740, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "Soft Pill Badges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "div", 30)(743, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](744, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](746, "<span class=\"badge rounded-pill bg-soft-primary\"> primary </span>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "span", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](748, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "span", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](750, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "span", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "span", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](754, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "span", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](756, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "span", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](758, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "span", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](760, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "span", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "div", 61)(764, "div", 27)(765, "div", 28)(766, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](767, " Link Badges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "div", 30)(769, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](770, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](772, "<a href=\"#\" class=\"badge bg-primary\"> primary </a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "a", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](774, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](775, "a", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](776, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "a", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](778, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "a", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](780, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "a", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](782, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "a", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](784, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "a", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](786, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "a", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](788, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "div", 249)(790, "div", 27)(791, "div", 28)(792, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](793, " Alert ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "div", 30)(795, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](796, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](798, "<div class=\"alert alert-primary\" role=\"alert\"> A simple primary alert\u2014check it out! </div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](799, "div", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](800, " A simple primary alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "div", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](802, " A simple secondary alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](803, "div", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](804, " A simple success alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](805, "div", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](806, " A simple danger alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "div", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](808, " A simple warning alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "div", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](810, " A simple info alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "div", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](812, " A simple light alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](813, "div", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](814, " A simple dark alert\u2014check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](815, "div", 61)(816, "div", 27)(817, "div", 28)(818, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](819, " Alert Links ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](820, "div", 30)(821, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](822, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](824, "<div class=\"alert alert-primary\" role=\"alert\"> A simple primary alert with <a href=\"#\" class=\"alert-link\"></a>. </div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "div", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](826, "A simple primary alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "a", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](828, "an link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "div", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](831, "A simple secondary alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "a", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](833, "an link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](834, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "div", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](836, "A simple success alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "a", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](838, "an link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](839, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "div", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, "A simple danger alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "a", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](843, "an link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](844, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "div", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](846, "A simple warning alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](847, "a", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](848, "an link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](849, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "div", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](851, "A simple info alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](852, "a", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](853, "an link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](854, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "div", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](856, "A simple light alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "a", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](858, "an link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](859, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "div", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](861, "A simple dark alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](862, "a", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](863, "an link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](864, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "div", 61)(866, "div", 27)(867, "div", 28)(868, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](869, " Additional Content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "div", 30)(871, "div", 259)(872, "h4", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](873, "Well done!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](874, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](875, "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](876, "p", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](877, "Whenever you need to, be sure to use margin utilities to keep things nice and tidy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "div", 61)(879, "div", 27)(880, "div", 28)(881, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](882, " Advanced Alert ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](883, "div", 30)(884, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](885, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](886, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](887, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](888, "<div class=\"alert alert-primary alert-pills\" role=\"alert\"> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](889, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](890, "\u00A0\u00A0 <span class=\"badge rounded-pill bg-danger\"> New </span> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](891, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](892, "\u00A0\u00A0 <span class=\"alert-content\"> A Modern primary alert\u2014check it out! </span> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](893, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](894, " </div> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](895, "div", 262)(896, "div", 263)(897, "span", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](898, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](899, "span", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](900, " A Modern primary alert\u2014check it out! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](901, "i", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](902, "div", 262)(903, "div", 267)(904, "span", 268);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](905, " New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](906, "span", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](907, " A Modern danger alert\u2014check it out! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](908, "i", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](909, "div", 61)(910, "div", 27)(911, "div", 28)(912, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](913, " Advanced Outline Alert ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](914, "div", 30)(915, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](916, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](917, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](918, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](919, " <div class=\"alert alert-outline-primary alert-pills\" role=\"alert\"> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](920, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](921, "\u00A0\u00A0 <span class=\"badge rounded-pill bg-danger\"> New </span> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](922, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](923, "\u00A0\u00A0 <span class=\"alert-content\"> A Modern primary alert\u2014check it out! </span> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](924, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](925, " </div> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "div", 262)(927, "div", 269)(928, "span", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](929, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](930, "span", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](931, " A Modern primary alert\u2014check it out! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](932, "i", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](933, "div", 262)(934, "div", 271)(935, "span", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](936, " New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](937, "span", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](938, " A Modern danger alert\u2014check it out! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](939, "i", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](940, "div", 273)(941, "div", 27)(942, "div", 28)(943, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](944, "Accordions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](945, "div", 30)(946, "div", 274)(947, "ngb-accordion", 275, 276)(949, "ngb-panel", 277);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](950, ComponentsComponent_ng_template_950_Template, 3, 0, "ng-template", 278);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](951, ComponentsComponent_ng_template_951_Template, 2, 0, "ng-template", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](952, "ngb-panel", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](953, ComponentsComponent_ng_template_953_Template, 3, 0, "ng-template", 278);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](954, ComponentsComponent_ng_template_954_Template, 2, 0, "ng-template", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](955, "ngb-panel", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](956, ComponentsComponent_ng_template_956_Template, 3, 0, "ng-template", 278);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](957, ComponentsComponent_ng_template_957_Template, 2, 0, "ng-template", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](958, "div", 281)(959, "div", 27)(960, "div", 28)(961, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](962, " Cards ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](963, "div", 30)(964, "h6", 282);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](965, "Vertical Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](966, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](967, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](968, " <div class=\"card shadow rounded border-0 overflow-hidden> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](969, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](970, "\u00A0\u00A0 <img src=\"assets/images/blog/01.jpg\" class=\"img-fluid\" alt=\"> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](971, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](972, "\u00A0\u00A0 <div class=\"card-body\"> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](973, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](974, "\u00A0\u00A0\u00A0\u00A0 <h5 class=\"card-title\">Saas & Software : Dalois</h5> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](975, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](976, "\u00A0\u00A0\u00A0\u00A0 <p class=\"text-muted mb-0\">Due to its widespread use as filler text for layouts, non-readability is of great importance</p> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](977, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](978, "\u00A0\u00A0 </div> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](979, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](980, " </div> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](981, "div", 18)(982, "div", 283)(983, "div", 284);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](984, "img", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](985, "div", 286)(986, "h5", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](987, "Saas & Software : Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](988, "p", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](989, "Due to its widespread use as filler text for layouts, non-readability is of great importance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](990, "a", 289);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](991, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](992, "i", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](993, "div", 283)(994, "div", 284)(995, "div", 286)(996, "h5", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](997, "Saas & Software : Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](998, "p", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](999, "Due to its widespread use as filler text for layouts, non-readability is of great importance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1000, "a", 289);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1001, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1002, "i", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1003, "img", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1004, "div", 291)(1005, "h6", 282);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1006, "Horizontal Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1007, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1008, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1009, " <div class=\"card shadow rounded border-0 overflow-hidden> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1010, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1011, "\u00A0\u00A0 <img src=\"assets/images/blog/01.jpg\" class=\"img-fluid\" alt=\"> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1012, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1013, "\u00A0\u00A0 <div class=\"card-body\"> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1014, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1015, "\u00A0\u00A0\u00A0\u00A0 <h5 class=\"card-title\">Saas & Software : Dalois</h5> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1016, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1017, "\u00A0\u00A0\u00A0\u00A0 <p class=\"text-muted mb-0\">Due to its widespread use as filler text for layouts, non-readability is of great importance</p> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1018, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1019, "\u00A0\u00A0 </div> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1020, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1021, " </div> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1022, "div", 18)(1023, "div", 292)(1024, "div", 284)(1025, "div", 293)(1026, "div", 294);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1027, "img", 295);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1028, "div", 296)(1029, "div", 286)(1030, "h5", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1031, "Saas & Software : Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1032, "p", 297);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1033, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1034, "p", 297)(1035, "small", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1036, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1037, "div", 298)(1038, "div", 27)(1039, "div", 28)(1040, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1041, " Forms ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1042, "div", 30)(1043, "form")(1044, "div", 18)(1045, "div", 299)(1046, "div", 300)(1047, "label", 301);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1048, "Your Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1049, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1050, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1051, "div", 302);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1052, "i-feather", 303)(1053, "input", 304);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1054, "div", 299)(1055, "div", 300)(1056, "label", 301);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1057, "Your Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1058, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1059, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1060, "div", 302);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1061, "i-feather", 305)(1062, "input", 306);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1063, "div", 307)(1064, "div", 300)(1065, "label", 301);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1066, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1067, "div", 302);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1068, "i-feather", 308)(1069, "input", 309);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1070, "div", 307)(1071, "div", 300)(1072, "label", 301);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1073, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1074, "div", 302);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1075, "i-feather", 310)(1076, "textarea", 311);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1077, "div", 18)(1078, "div", 312);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1079, "input", 313);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1080, "div", 314)(1081, "div", 27)(1082, "div", 28)(1083, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1084, " Checkboxes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1085, "div", 30)(1086, "div", 315)(1087, "div", 33)(1088, "div", 316);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1089, "input", 317);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1090, "label", 318);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1091, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1092, "div", 315)(1093, "div", 33)(1094, "div", 316);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1095, "input", 319);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1096, "label", 320);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1097, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1098, "div", 315)(1099, "div", 33)(1100, "div", 316);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1101, "input", 321);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1102, "label", 322);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1103, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1104, "div", 323)(1105, "div", 27)(1106, "div", 28)(1107, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1108, " Radio Buttons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1109, "div", 30)(1110, "div", 324)(1111, "div", 325);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1112, "input", 326);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1113, "label", 327);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1114, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1115, "div", 324)(1116, "div", 325);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1117, "input", 328);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1118, "label", 329);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1119, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1120, "div", 324)(1121, "div", 325);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1122, "input", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1123, "label", 331);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1124, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1125, "div", 332)(1126, "div", 27)(1127, "div", 28)(1128, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1129, " Switches Button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1130, "div", 30)(1131, "div", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1132, "input", 334);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1133, "label", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1134, "Default switch checkbox input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1135, "div", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1136, "input", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1137, "label", 337);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1138, "Checked switch checkbox input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1139, "div", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1140, "input", 338);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1141, "label", 339);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1142, "Disabled switch checkbox input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1143, "div", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1144, "input", 340);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1145, "label", 341);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1146, "Disabled checked switch checkbox input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1147, "div", 342)(1148, "div", 27)(1149, "div", 28)(1150, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1151, " Form Select Box ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1152, "div", 30)(1153, "div", 33)(1154, "select", 343)(1155, "option", 344);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1156, "Open this select menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1157, "option", 345);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1158, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1159, "option", 346);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1160, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1161, "option", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1162, "Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1163, "div", 348)(1164, "div", 27)(1165, "div", 28)(1166, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1167, " Subscribe Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1168, "div", 30)(1169, "div", 349)(1170, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1171, "input", 350);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1172, "button", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1173, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1174, "div", 352)(1175, "div", 27)(1176, "div", 28)(1177, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1178, " Google Map ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1179, "div", 30)(1180, "div", 353);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1181, "iframe", 354);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1182, "div", 355)(1183, "div", 27)(1184, "div", 28)(1185, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1186, " Breadcrumb ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1187, "div", 30)(1188, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1189, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1190, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1191, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1192, " <nav aria-label=\"breadcrumb\" class=\"d-inline-block\"> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1193, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1194, " \u00A0 <ul class=\"breadcrumb bg-white rounded shadow mb-0\"> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1195, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1196, " \u00A0 \u00A0 <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1197, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1198, " \u00A0 \u00A0 <li class=\"breadcrumb-item\"><a href=\"#\">Pages</a></lt> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1199, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1200, " \u00A0 \u00A0 <li class=\"breadcrumb-item active\" aria-current=\"page\">Components</li> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1201, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1202, " \u00A0 </ul> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1203, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1204, " </div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1205, "nav", 7)(1206, "ul", 8)(1207, "li", 9)(1208, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1209, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1210, "li", 9)(1211, "a", 356);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1212, "Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1213, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1214, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1215, "div", 357)(1216, "div", 27)(1217, "div", 28)(1218, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1219, " Pagination ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1220, "div", 30)(1221, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1222, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1223, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1224, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1225, " <ul class=\"pagination mb-0\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1226, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1227, "\u00A0\u00A0 <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\" aria-label=\"Previous\">Prev</a></li>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1228, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1229, "\u00A0\u00A0 <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1230, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1231, "\u00A0\u00A0 <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1232, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1233, "\u00A0\u00A0 <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1234, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1235, "\u00A0\u00A0 <li class=\"page-item\"><a class=\"page-link\" href=\"#\" aria-label=\"Next\">Next</a></li>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1236, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1237, " </ul>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1238, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1239, "ul", 358)(1240, "li", 359)(1241, "a", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1242, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1243, "li", 361)(1244, "a", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1245, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1246, "li", 359)(1247, "a", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1248, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1249, "li", 359)(1250, "a", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1251, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1252, "li", 359)(1253, "a", 363);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1254, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1255, "div", 364)(1256, "div", 27)(1257, "div", 28)(1258, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1259, " Default Avatars ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1260, "div", 30)(1261, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1262, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1263, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1264, "<img src=\"assets/images/home/01.jpg\" class=\"img-fluid avatar avatar-ex-sm rounded\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1265, "img", 365)(1266, "img", 366)(1267, "img", 367)(1268, "img", 368)(1269, "img", 369);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1270, "div", 61)(1271, "div", 27)(1272, "div", 28)(1273, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1274, " Circle Avatars ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1275, "div", 30)(1276, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1277, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1278, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1279, "<img src=\"assets/images/home/01.jpg\" class=\"img-fluid avatar avatar-ex-sm rounded-circle\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1280, "img", 370)(1281, "img", 371)(1282, "img", 372)(1283, "img", 373)(1284, "img", 374);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1285, "div", 375)(1286, "div", 27)(1287, "div", 28)(1288, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1289, " Nav Tabs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1290, "div", 30)(1291, "div", 18)(1292, "div", 376)(1293, "ul", 377, 378)(1295, "li", 379)(1296, "a", 380)(1297, "div", 381)(1298, "h6", 382);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1299, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1300, ComponentsComponent_ng_template_1300_Template, 1, 0, "ng-template", 383);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1301, "li", 379)(1302, "a", 380)(1303, "div", 381)(1304, "h6", 382);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1305, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1306, ComponentsComponent_ng_template_1306_Template, 1, 0, "ng-template", 383);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1307, "li", 379)(1308, "a", 380)(1309, "div", 381)(1310, "h6", 382);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1311, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1312, ComponentsComponent_ng_template_1312_Template, 1, 0, "ng-template", 383);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1313, "div", 384);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1314, "div", 385)(1315, "div", 27)(1316, "div", 28)(1317, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1318, " Progressbar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1319, "div", 30)(1320, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1321, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1322, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1323, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1324, " <div class=\"progress-box\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1325, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1326, "\u00A0\u00A0 <h6 class=\"title text-muted\"> Progress</h6>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1327, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1328, "\u00A0\u00A0 <div class=\"progress\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1329, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1330, "\u00A0\u00A0\u00A0\u00A0 <div class=\"progress-bar position-relative bg-primary\" style=\"width:84%;\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1331, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1332, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 <div class=\"progress-value d-block text-muted h6\">84%</div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1333, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1334, "\u00A0\u00A0\u00A0\u00A0 </div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1335, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1336, "\u00A0\u00A0 </div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1337, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1338, " </div> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1339, "div", 386)(1340, "h6", 387);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1341, "WordPress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1342, "div", 388)(1343, "div", 389)(1344, "div", 390);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1345, "84%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1346, "div", 391)(1347, "h6", 387);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1348, "PHP / MYSQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1349, "div", 388)(1350, "div", 392)(1351, "div", 390);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1352, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1353, "div", 391)(1354, "h6", 387);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1355, "Angular / JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1356, "div", 388)(1357, "div", 393)(1358, "div", 390);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1359, "79%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1360, "div", 391)(1361, "h6", 387);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1362, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1363, "div", 388)(1364, "div", 394)(1365, "div", 390);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1366, "95%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1367, "div", 395)(1368, "div", 27)(1369, "div", 28)(1370, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1371, " Tooltip ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1372, "div", 30)(1373, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1374, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1375, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1376, "<a href=\"#\"class=\"btn btn-primary me-2 mb-2\" placement=\"top\" ngbTooltip=\"Top Tooltip\" alt=\"\"> Top Tooltip </a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1377, "a", 396);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1378, "Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1379, "a", 397);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1380, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1381, "a", 398);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1382, "Bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1383, "a", 399);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1384, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1385, "div", 400)(1386, "div", 27)(1387, "div", 28)(1388, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1389, " Modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1390, "div", 30)(1391, "a", 401);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsComponent_Template_a_click_1391_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1402); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.open(_r11)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1392, " Click Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1393, "a", 402);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsComponent_Template_a_click_1393_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1404); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.openLogin(_r13)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1394, " Login Popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1395, "a", 402);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsComponent_Template_a_click_1395_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1406); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.Subscribeopen(_r15)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1396, "Subscribe Popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1397, "a", 402);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsComponent_Template_a_click_1397_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1408); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.Wishlistopen(_r17)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1398, "Wishlist Popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1399, "a", 402);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsComponent_Template_a_click_1399_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1410); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.Emptyopen(_r19)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1400, "Empty Cart Popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1401, ComponentsComponent_ng_template_1401_Template, 11, 0, "ng-template", null, 403, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1403, ComponentsComponent_ng_template_1403_Template, 47, 0, "ng-template", null, 404, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1405, ComponentsComponent_ng_template_1405_Template, 31, 0, "ng-template", null, 405, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1407, ComponentsComponent_ng_template_1407_Template, 14, 0, "ng-template", null, 406, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1409, ComponentsComponent_ng_template_1409_Template, 12, 0, "ng-template", null, 407, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1411, "div", 408)(1412, "div", 27)(1413, "div", 28)(1414, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1415, " Table ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1416, "div", 30)(1417, "div", 409)(1418, "table", 410)(1419, "thead")(1420, "tr")(1421, "th", 411);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1422, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1423, "th", 411);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1424, "First");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1425, "th", 411);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1426, "Last");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1427, "th", 411);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1428, "Handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1429, "tbody")(1430, "tr")(1431, "th", 412);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1432, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1433, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1434, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1435, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1436, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1437, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1438, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1439, "tr")(1440, "th", 412);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1441, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1442, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1443, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1444, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1445, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1446, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1447, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1448, "tr")(1449, "th", 412);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1450, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1451, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1452, "Harry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1453, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1454, "Potter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1455, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1456, "@hpt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1457, "div", 413)(1458, "div", 27)(1459, "div", 28)(1460, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1461, " Blockquotes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1462, "div", 30)(1463, "blockquote", 414)(1464, "p", 415);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1465, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1466, "div", 416)(1467, "div", 27)(1468, "div", 28)(1469, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1470, " Icons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1471, "div", 30)(1472, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1473, "Feather Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1474, "p", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1475, "There are 280+ feather icons and you can get all icons info from here: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1476, "a", 417)(1477, "code", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1478, "https://feathericons.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1479, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1480, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1481, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1482, "<i-feather name=\"mail\" class=\"fea icon-sm\"> </i>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1483, "i-feather", 418)(1484, "i-feather", 419)(1485, "i-feather", 420)(1486, "i-feather", 421)(1487, "i-feather", 422)(1488, "i-feather", 423);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1489, "h6", 424);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1490, "Material Design Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1491, "p", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1492, "There are 4400+ Material Design icons and you can get all icons info from here: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1493, "a", 425)(1494, "code", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1495, "https://materialdesignicons.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1496, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1497, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1498, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1499, "<i class=\"mdi mdi-home\"> </i>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1500, "i", 426)(1501, "i", 427)(1502, "i", 428)(1503, "i", 429)(1504, "i", 430)(1505, "i", 431);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1506, "h6", 424);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1507, "Flaticon Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1508, "p", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1509, "There are Flaticon icons and you can get all icons info from here: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1510, "a", 432)(1511, "code", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1512, "https://www.flaticon.com/packs/basic-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1513, "img", 433)(1514, "img", 434)(1515, "img", 435)(1516, "img", 436);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1517, "h6", 424);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1518, "Iconscout (Unicons) Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1519, "p", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1520, "There are 1100+ Iconscout (Unicons) Icons and you can get all icons info from here: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1521, "a", 437)(1522, "code", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1523, "https://www.flaticon.com/packs/basic-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1524, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1525, "Ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1526, "code", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1527, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1528, "<span class=\"h3 text-primary me-2\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1529, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1530, "\u00A0 <i class=\"uil uil-0-plus\"></i>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1531, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1532, "</span>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1533, "span", 438);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1534, "i", 439);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1535, "span", 438);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1536, "i", 440);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1537, "span", 438);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1538, "i", 441);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1539, "span", 438);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1540, "i", 442);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1541, "span", 443);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1542, "i", 444);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1543, "a", 445);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1544, "i-feather", 446);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1294);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#typography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#bg-colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#text-colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#dropdowns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#accordions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#checkboxes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#radio-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#switches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#select-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#subscribe-forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#breadcrumbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#nav-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#progressbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#tooltips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#modals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#blockquotes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__.ScrollToDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbPanelTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbPanelContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 57021:
/*!********************************************************************!*\
  !*** ./src/app/core/components/index-blog/index-blog.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexBlogComponent": () => (/* binding */ IndexBlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 5601);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 37059);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/blog/blog.component */ 62891);






function IndexBlogComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4)(3, "div", 8)(4, "div", 32)(5, "div", 41)(6, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Weekend Travel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 43)(9, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Calvin Carlo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " 13th August, 2019");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Start working with Dalois that can provide everything you need to generate awareness, drive traffic, connect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 49)(18, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
} }
function IndexBlogComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4)(3, "div", 8)(4, "div", 32)(5, "div", 41)(6, "h1", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Business Meeting");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 43)(9, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Calvin Carlo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " 13th August, 2019");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Start working with Dalois that can provide everything you need to generate awareness, drive traffic, connect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 49)(18, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
} }
function IndexBlogComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4)(3, "div", 8)(4, "div", 32)(5, "div", 41)(6, "h1", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Delicious & Organic");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 43)(9, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Calvin Carlo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " 13th August, 2019");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Start working with Dalois that can provide everything you need to generate awareness, drive traffic, connect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 49)(18, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
} }
/***
 * Blog Component
 */
class IndexBlogComponent {
    constructor() {
        /***
         * Nav bg light calss Add
         */
        this.navClass = 'bg-white';
        /***
         * Main Slider navigation Add
         */
        this.showNavigationArrows = true;
        this.showNavigationIndicators = false;
        /**
         * Blog Data
         */
        this.blogData = [
            {
                image: "assets/images/blog/01.jpg",
                title: "Design your apps in your own way",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/blog/02.jpg",
                title: "How apps is changing the IT world",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/blog/03.jpg",
                title: "Smartest Applications for Business",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            }
        ];
        /**
         * Resent Post Data
         */
        this.resentPostData = [
            {
                image: "assets/images/blog/04.jpg",
                title: "How apps is changing the IT world",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/blog/05.jpg",
                title: "Design your apps in your own way",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/blog/06.jpg",
                title: "Smartest Applications for Business",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            }
        ];
    }
    ngOnInit() {
    }
}
IndexBlogComponent.ɵfac = function IndexBlogComponent_Factory(t) { return new (t || IndexBlogComponent)(); };
IndexBlogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexBlogComponent, selectors: [["app-index-blog"]], decls: 85, vars: 7, consts: [["id", "home", 1, "main-slider"], [1, "slides", 3, "showNavigationArrows", "showNavigationIndicators"], ["ngbSlide", ""], [1, "section"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "features-absolute", "blog-search"], [1, "row", "justify-content-center"], [1, "col-md-10"], [1, "text-center", "subcribe-form"], [2, "max-width", "800px"], ["type", "text", "id", "course", "name", "name", "placeholder", "Search keywords...", 1, "rounded-pill", "shadow-md", "bg-white"], ["type", "submit", 1, "btn", "btn-pills", "btn-primary"], [1, "container", "mt-4", "mt-lg-0"], [1, "row", "align-items-center", "mb-4", "pb-4"], [1, "col-md-8"], [1, "section-title", "text-md-left"], [1, "mb-4"], [1, "text-muted", "mb-0", "para-desc"], [1, "text-primary", "fw-bold"], [1, "col-md-4", "mt-4", "mt-sm-0"], [1, "text-center", "text-md-end"], ["href", "javascript:void(0)", 1, "btn", "btn-soft-primary"], ["name", "arrow-right", 1, "fea", "icon-sm"], [3, "blogData"], [1, "container", "mt-100", "mt-60"], ["name", "arrow-right", 1, "icons"], [1, "container-fluid", "mt-100", "mt-60"], [1, "rounded-md", "shadow-md", "py-5", "position-relative", 2, "background", "url('assets/images/3.jpg') center center"], [1, "bg-overlay", "rounded-md"], [1, "container", "py-5"], [1, "col-12"], [1, "section-title", "text-center"], [1, "fw-bold", "text-white", "title-dark", "mb-4", "pb-2"], ["href", "javascript:void(0)", 1, "btn", "btn-primary"], [1, "col-12", "mt-4", "pt-2"], [1, "text-center"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "bg-half-170", "rounded-md", 2, "background", "url('assets/images/blog/bg1.jpg') center center"], [1, "title-heading", "text-center"], [1, "text-white", "title-dark", "mb-3"], [1, "list-unstyled"], [1, "list-inline-item", "small", "user", "text-white-50", "me-2"], [1, "uil", "uil-user", "text-white", "title-dark"], [1, "list-inline-item", "small", "date", "text-white-50"], [1, "uil", "uil-calendar-alt", "text-white", "title-dark"], [1, "para-desc", "mx-auto", "text-white-50", "mb-0"], [1, "mt-4"], [1, "bg-half-170", "rounded-md", 2, "background", "url('assets/images/blog/bg2.jpg') center center"], [1, "mdi", "mdi-account", "text-white", "title-dark"], [1, "mdi", "mdi-calendar-check", "text-white", "title-dark"], [1, "bg-half-170", "rounded-md", 2, "background", "url('assets/images/blog/bg3.jpg') center center"]], template: function IndexBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IndexBlogComponent_ng_template_2_Template, 20, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IndexBlogComponent_ng_template_3_Template, 20, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IndexBlogComponent_ng_template_4_Template, 20, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17)(21, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Popular post");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " that can provide everything you need to generate awareness, drive traffic, connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21)(29, "div", 22)(30, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "See More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "app-blog", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 26)(35, "div", 15)(36, "div", 16)(37, "div", 17)(38, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Recent Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " that can provide everything you need to generate awareness, drive traffic, connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 21)(46, "div", 22)(47, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "See More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i-feather", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "app-blog", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 28)(52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 31)(55, "div", 8)(56, "div", 32)(57, "div", 33)(58, "h2", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "People are podcasting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " all over the world ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 26)(66, "div", 15)(67, "div", 16)(68, "div", 17)(69, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "All News or Blog Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " that can provide everything you need to generate awareness, drive traffic, connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "app-blog", 25)(77, "app-blog", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 36)(79, "div", 37)(80, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "See More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "i-feather", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationArrows", ctx.showNavigationArrows)("showNavigationIndicators", ctx.showNavigationIndicators);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blogData", ctx.blogData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blogData", ctx.resentPostData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blogData", ctx.blogData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blogData", ctx.resentPostData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxScrollTo", "#home");
    } }, dependencies: [angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbSlide, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_0__.BlogComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC1ibG9nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 36450:
/*!****************************************************************************!*\
  !*** ./src/app/core/components/index-business/index-business.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexBusinessComponent": () => (/* binding */ IndexBusinessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-feather */ 5601);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 37059);
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-youtube-player */ 91410);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-typed-js */ 28487);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-count-to */ 97321);
/* harmony import */ var _shared_services_services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/services.component */ 42474);
/* harmony import */ var _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/blog/blog.component */ 62891);









function IndexBusinessComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68)(1, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IndexBusinessComponent_ng_template_30_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const modal_r4 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r4.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "youtube-player", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("videoId", "yba7hPeTSjk");
} }
function IndexBusinessComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68)(1, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IndexBusinessComponent_ng_template_57_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const modal_r7 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r7.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "iframe", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["Agency", "Software", "Technology", "Studio", "Webapps"]; };
/***
 * Business Component
 */
class IndexBusinessComponent {
    constructor(modalService) {
        this.modalService = modalService;
        /**
         * Services Data
         */
        this.servicesData = [
            {
                icon: "uil uil-edit-alt h1 text-primary",
                title: "Design & Development",
                description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper."
            },
            {
                icon: "uil uil-vector-square h1 text-primary",
                title: "Management & Marketing",
                description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word."
            },
            {
                icon: "uil uil-file-search-alt h1 text-primary",
                title: "Stratagy & Research",
                description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today."
            },
            {
                icon: "uil uil-airplay h1 text-primary",
                title: "Easy To Use",
                description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper."
            },
            {
                icon: "uil uil-calendar-alt h1 text-primary",
                title: "Daily Reports",
                description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word."
            },
            {
                icon: "uil uil-clock h1 text-primary",
                title: "Real Time Zone",
                description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today."
            }
        ];
        /**
         * Simple Pricing Data
         */
        this.simple_pricingData = [
            {
                title: "Free",
                price: 0,
                list: ["Full Access", "Enhanced Security", "Source Files", "1 Domain Free"],
                btn: "Buy Now"
            },
            {
                warning: "Best",
                title: "Starter",
                price: 39,
                list: ["Full Access", "Source Files", "Free Appointments", "Free Installment", "Enhanced Security"],
                btn: "Get Started"
            },
            {
                title: "Professional",
                price: 59,
                list: ["Full Access", "Enhanced Security", "Source Files", "1 Domain Free"],
                btn: "Try It Now"
            }
        ];
        /**
         * Blog Data
         */
        this.blogData = [
            {
                image: "assets/images/blog/01.jpg",
                title: "Design your apps in your own way",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/blog/02.jpg",
                title: "How apps is changing the IT world",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/blog/03.jpg",
                title: "Smartest Applications for Business",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            }
        ];
    }
    ngOnInit() {
    }
    /**
    * Open modal for show the video
    * @param content content of modal
    */
    openWindowCustomClass(content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }
    openModal(content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }
}
IndexBusinessComponent.ɵfac = function IndexBusinessComponent_Factory(t) { return new (t || IndexBusinessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal)); };
IndexBusinessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: IndexBusinessComponent, selectors: [["app-index-business"]], decls: 168, vars: 21, consts: [["id", "home", 1, "bg-half-170", "border-bottom", "d-table", "w-100"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-7"], [1, "title-heading", "mt-4"], ["role", "alert", 1, "alert", "alert-white", "alert-pills", "shadow"], [1, "badge", "rounded-pill", "bg-danger", "me-1"], [1, "content"], [1, "text-primary"], [1, "heading", "mb-3"], [3, "strings", "shuffle", "typeSpeed", "loop"], [1, "element", "text-primary", "typing"], [1, "para-desc", "text-muted"], [1, "mt-4"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary", "rounded"], [1, "uil", "uil-store"], [1, "col-lg-6", "col-md-5", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], [1, "position-relative"], ["src", "assets/images/busi01.jpg", "alt", "", 1, "rounded", "img-fluid", "mx-auto", "d-block"], [1, "play-icon"], ["href", "javascript:void(0);", 1, "play-btn", "video-play-icon", 3, "click"], [1, "mdi", "mdi-play", "text-primary", "rounded-circle", "bg-white", "shadow"], ["content", ""], [1, "section"], [1, "row", "justify-content-center"], [1, "col-12", "text-center"], [1, "section-title", "mb-4", "pb-2"], [1, "title", "mb-4"], [1, "text-muted", "para-desc", "mx-auto", "mb-0"], [1, "text-primary", "fw-bold"], [3, "servicesData"], ["data-jarallax", "{\"speed\": 0.5}", "id", "cta", 1, "section", "bg-cta", 2, "background", "url('assets/images/2.jpg')"], [1, "bg-overlay"], [1, "section-title"], [1, "title", "title-dark", "text-white", "mb-4"], [1, "text-light", "para-dark", "para-desc", "mx-auto"], ["href", "javascript:void(0);", 1, "play-btn", "border", "border-light", "mt-4", "video-play-icon", 3, "click"], ["name", "play", 1, "fea", "icon-ex-md", "text-white", "title-dark"], ["contentModal", ""], [1, "text-muted", "para-desc", "mb-0", "mx-auto"], [3, "simple_pricingData"], [1, "container", "mt-100", "mt-60"], [1, "col-lg-6"], [1, "text-muted", "para-desc"], [1, "list-unstyled", "text-muted"], [1, "mb-0"], [1, "text-primary", "h5", "me-2"], [1, "uil", "uil-check-circle", "align-middle"], ["id", "counter", 1, "row", "ms-lg-5"], [1, "col-md-6", "col-12"], [1, "row"], [1, "col-12", "mt-4", "mt-lg-0", "pt-2", "pt-lg-0"], [1, "card", "counter-box", "border-0", "bg-light", "bg-gradient", "shadow", "text-center", "rounded"], [1, "card-body", "py-5"], [1, "counter-value", 3, "from", "duration", "CountTo"], [1, "counter-head", "mb-0"], [1, "col-12", "mt-4", "pt-2"], [1, "card", "counter-box", "border-0", "bg-primary", "bg-gradient", "shadow", "text-center", "rounded"], [1, "text-light", "title-dark", "mb-0"], [1, "counter-head", "mb-0", "title-dark", "text-light"], [1, "row", "pt-lg-4", "mt-lg-4"], [1, "card", "counter-box", "border-0", "bg-success", "bg-gradient", "shadow", "text-center", "rounded"], [1, "section", "bg-light"], [3, "blogData"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-2", "me-3"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary", "mt-2"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["height", "450", "width", "780", 3, "videoId"], ["src", "https://player.vimeo.com/video/287684225", "height", "450", "width", "780", "frameborder", "0", "allowfullscreen", "", "allow", "autoplay; encrypted-media"]], template: function IndexBusinessComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "v3.0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Build ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "anything");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " you want - Dalois.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h1", 9)(14, "ngx-typed-js", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Leading Digital Business For ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Solution ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 13)(21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Make Your Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 16)(25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 19)(28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IndexBusinessComponent_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](31); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openWindowCustomClass(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, IndexBusinessComponent_ng_template_30_Template, 6, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "section", 23)(33, "div", 1)(34, "div", 24)(35, "div", 25)(36, "div", 26)(37, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "What We Do ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " that can provide everything you need to generate awareness, drive traffic, connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "app-services", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 1)(48, "div", 24)(49, "div", 25)(50, "div", 33)(51, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " Stop leaving money on the table. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " Start working with Dalois that can provide everything you need to generate awareness, drive traffic, connect. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IndexBusinessComponent_Template_a_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](58); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openModal(_r2)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "i-feather", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, IndexBusinessComponent_ng_template_57_Template, 6, 0, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "section", 23)(60, "div", 1)(61, "div", 24)(62, "div", 25)(63, "div", 26)(64, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Choose Simple Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " that can provide everything you need to generate awareness, drive traffic, connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "app-simple-pricing", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 41)(73, "div", 2)(74, "div", 42)(75, "div", 33)(76, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "See everything about your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, " Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, " that can provide everything you need to generate awareness, drive traffic, connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "ul", 44)(87, "li", 45)(88, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Digital Marketing Solutions for Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "li", 45)(92, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Our Talented & Experienced Marketing Agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "li", 45)(96, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Create your own skin to match your brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 42)(100, "div", 48)(101, "div", 49)(102, "div", 50)(103, "div", 51)(104, "div", 52)(105, "div", 53)(106, "h2", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "h5", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Happy Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 56)(112, "div", 57)(113, "div", 53)(114, "h2", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "h5", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 49)(120, "div", 60)(121, "div", 56)(122, "div", 61)(123, "div", 53)(124, "h2", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](125, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "K");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "h5", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "Job Placement");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 56)(130, "div", 52)(131, "div", 53)(132, "h2", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "h5", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Project Complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "section", 62)(138, "div", 1)(139, "div", 24)(140, "div", 25)(141, "div", 26)(142, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "Latest News");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, " that can provide everything you need to generate awareness, drive traffic, connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "app-blog", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 41)(151, "div", 24)(152, "div", 25)(153, "div", 33)(154, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "See everything about your employee at one place.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, " that can provide everything you need to generate awareness, drive traffic, connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 13)(162, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "Get Started Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "Free Trial");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](167, "i-feather", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c0))("shuffle", true)("typeSpeed", 80)("loop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("servicesData", ctx.servicesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("simple_pricingData", ctx.simple_pricingData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("from", 3)("duration", 5)("CountTo", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("from", 1)("duration", 3)("CountTo", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("from", 1)("duration", 1)("CountTo", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("from", 98)("duration", 5)("CountTo", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blogData", ctx.blogData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngxScrollTo", "#home");
    } }, dependencies: [angular_feather__WEBPACK_IMPORTED_MODULE_5__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__.ScrollToDirective, ngx_youtube_player__WEBPACK_IMPORTED_MODULE_7__.YoutubePlayerComponent, ngx_typed_js__WEBPACK_IMPORTED_MODULE_8__.NgxTypedJsComponent, angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToDirective, _shared_services_services_component__WEBPACK_IMPORTED_MODULE_1__.ServicesComponent, _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__.BlogComponent], styles: [".dark-modal .modal-content {\r\n  background-color: #000000;\r\n  color: white;\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n  .dark-modal .modal-header {\r\n  border: none\r\n}\r\n\r\n  .dark-modal .close {\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LWJ1c2luZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6ImluZGV4LWJ1c2luZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWhlYWRlciB7XHJcbiAgYm9yZGVyOiBub25lXHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZGFyay1tb2RhbCAuY2xvc2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 28002:
/*!**********************************************************!*\
  !*** ./src/app/core/components/index/index.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexComponent": () => (/* binding */ IndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lightbox */ 25015);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-feather */ 5601);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 37059);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-typed-js */ 28487);
/* harmony import */ var _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/blog/blog.component */ 62891);









const _c0 = "Valoriser notre patrimoine culturel et artistique.";
const _c1 = "Connecter les adh\u00E9rents aux coutumes de notre Groupement. ";
const _c2 = "Inculquer \u00E0 nos adh\u00E9rents les valeurs culturelles Bangou";
const _c3 = "La culture est le socle de nos valeurs et de notre identit\u00E9.";
const _c4 = function () { return [_c0, _c1, _c2, " Promouvoir les traditions du Groupement Bangou.", _c3]; };
function IndexComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4)(3, "div", 6)(4, "div", 59)(5, "div", 71)(6, "h2", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "UEEBG");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 73)(9, "li", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Union Des \u00C9l\u00E8ves et \u00C9tudiants Bangou ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Fer de lance !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "h5", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ngx-typed-js", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c4))("shuffle", true)("typeSpeed", 100)("loop", true);
} }
function IndexComponent_div_157_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 80)(1, "div", 81)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 82)(4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 21)(6, "h5", 83)(7, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h6", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 86)(12, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IndexComponent_div_157_Template_a_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.open(i_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i-feather", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", item_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.category);
} }
/**
 * Index Component
 */
class IndexComponent {
    constructor(_lightbox) {
        this._lightbox = _lightbox;
        this._album = [];
        this.workList = [
            {
                image: 'assets/images/personal/1.jpg',
                title: 'Iphone mockup',
                category: 'Branding'
            },
            {
                image: 'assets/images/personal/2.jpg',
                title: 'Mockup Collection',
                category: 'Mockup'
            },
            {
                image: 'assets/images/personal/3.jpg',
                title: 'Abstract images',
                category: 'Abstract'
            },
            {
                image: 'assets/images/personal/4.jpg',
                title: 'Yellow bg with Books',
                category: 'Books'
            },
            {
                image: 'assets/images/personal/5.jpg',
                title: 'Company V-card',
                category: 'V-card'
            },
            {
                image: 'assets/images/personal/6.jpg',
                title: 'Mockup box with paints',
                category: 'Photography'
            }
        ];
        /**
       * Blog Data
       */
        this.blogData = [
            {
                image: "assets/images/personal/1.jpg",
                title: "Design your apps in your own way",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/personal/2.jpg",
                title: "How apps is changing the IT world",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/personal/3.jpg",
                title: "Smartest Applications for Business",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            }
        ];
        this.showNavigationArrows = true;
        this.showNavigationIndicators = false;
        this.navClass = 'bg-white';
        /**
         * Partners slider
         */
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: false,
            pullDrag: false,
            autoplay: true,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                740: {
                    items: 3
                },
                940: {
                    items: 3
                }
            },
            nav: false
        };
        for (let i = 1; i <= 6; i++) {
            const src = '../../../assets/images/personal/' + i + '.jpg';
            const caption = 'Image ' + i + ' caption here';
            const thumb = '../../../assets/images/personal/' + i + '-thumb.jpg';
            const album = {
                src: src,
                caption: caption,
                thumb: thumb
            };
            this._album.push(album);
        }
    }
    open(index) {
        // open lightbox
        this._lightbox.open(this._album, index);
    }
    close() {
        // close lightbox programmatically
        this._lightbox.close();
    }
    ngOnInit() {
    }
    showMore(id1, id2) {
        document.getElementById(id2).style.display = 'none';
        document.getElementById(id1).style.display = 'block';
    }
    showLess(id1, id2) {
        document.getElementById(id1).style.display = 'none';
        document.getElementById(id2).style.display = 'flex';
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.Lightbox)); };
IndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 180, vars: 5, consts: [["id", "home", 1, "bg-half-10", "d-table", "w-100"], [1, "slides", 3, "showNavigationArrows", "showNavigationIndicators"], ["ngbSlide", ""], [1, "py-4", "border-bottom", "border-top"], [1, "container"], [1, "section", "bg-light", "border-bottom"], [1, "row", "justify-content-center"], [1, "col-12", "text-center"], [1, "section-title", "mb-4", "pb-2"], [1, "title", "mb-4"], [1, "container", "mt-100", "mt-60"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-6", "mt-4", "mt-lg-0", "pt-", "pt-lg-0"], [1, "ms-lg-4"], [1, "text-muted", "para-desc", "mb-0", "mx-auto", 2, "text-align", "justify"], [1, "text-primary", "fw-bold"], [1, "col-lg-6", "col-md-6"], [1, "card", "work-container", "work-modern", "overflow-hidden", "rounded", "border-0", "shadow-md"], [1, "card-body", "p-0"], ["src", "assets/images/ueebg/ndop.jpg", "alt", "work-image", 1, "img-fluid"], [1, "overlay-work", "bg-dark"], [1, "content"], ["href", "javascript:void(0)", 1, "title", "text-white", "d-block", "fw-bold"], [1, "text-light"], [1, "text-muted", "para-desc", 2, "text-align", "justify"], [1, "watch-video", "mt-4", "pt-2"], ["href", "#", "routerLink", "/about", 1, "btn", "btn-primary", "m-1", "me-2"], ["name", "chevron-right", 1, "fea", "icon-sm"], [1, "col-lg-6", "col-6", "mt-4", "mt-lg-0", "pt-2", "pt-lg-0"], [1, "col-lg-6", "col-6"], [1, "row"], [1, "col-lg-12", "col-md-12", "mt-4", "mt-lg-0", "pt-2", "pt-lg-0"], ["src", "assets/images/ueebg/tagidor.jpg", "alt", "work-image", 1, "img-fluid"], [1, "col-lg-12", "col-md-12", "mt-4", "pt-2"], ["src", "assets/images/ueebg/danse.png", "alt", "work-image", 1, "img-fluid"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-light"], ["viewBox", "0 0 2880 250", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M720 125L2160 0H2880V250H0V125H720Z", "fill", "currentColor"], [1, "section", "bg-light"], [1, "col-md-6", "col-12", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "d-flex"], ["name", "help-circle", 1, "fea", "icon-ex-md", "text-primary", "me-2", "mt-1"], [1, "flex-1"], [1, "mt-0"], [1, "answer", "text-muted", "mb-0", 2, "text-align", "justify"], [1, "text-primary"], ["href", "javascript:void(0)", "id", "lire", 3, "click"], ["id", "read"], ["href", "javascript:void(0)", "id", "voir", 3, "click"], ["href", "javascript:void(0)", "id", "lire2", 3, "click"], ["id", "read2"], ["href", "javascript:void(0)", "id", "voir2", 3, "click"], [1, "col-md-6", "col-12", "mt-4", "pt-2"], ["href", "javascript:void(0)", "id", "lire3", 3, "click"], ["id", "read3"], ["href", "javascript:void(0)", "id", "voir3", 3, "click"], [1, "answer", "text-muted", "mb-0"], [1, "row", "my-md-5", "pt-md-3", "my-4", "pt-2", "pb-lg-4", "justify-content-center"], [1, "col-12"], ["class", "col-lg-4 col-md-6 col-12 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "col-12", "mt-4", "pt-2"], ["routerLink", "/portfolio-modern-three", 1, "btn", "btn-outline-primary"], [1, "mdi", "mdi-chevron-right"], [1, "shape", "overflow-hidden", "text-footer"], [1, "text-muted", "para-desc", "mb-0"], [3, "blogData"], ["href", "#", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "bg-half-170", "rounded-md", 2, "background", "url('assets/images/ueebg/gal/gal21.png') center center"], [1, "bg-overlay", "rounded-md"], [1, "title-heading", "text-center"], [1, "text-white", "title-dark", "mb-3", "text-muted"], [1, "list-unstyled"], [1, "text-muted"], [2, "font-size", "larger", "font-weight", "bolder"], [1, "text-white", "title-dark", "mb-1"], [2, "font-weight", "bold", 3, "strings", "shuffle", "typeSpeed", "loop"], [1, "element", "typing", "text-primary"], [1, "mt-4"], [1, "col-lg-4", "col-md-6", "col-12", "mt-4", "pt-2"], [1, "card", "border-0", "work-container", "work-modern", "position-relative", "d-block", "overflow-hidden", "rounded"], ["alt", "work-image", 1, "img-fluid", 3, "src"], [1, "mb-0"], ["routerLink", "/page-work-detail", 1, "text-white", "title"], [1, "text-light", "tag", "mb-0"], [1, "icons", "text-center"], [1, "text-primary", "work-icon", "bg-white", "d-inline-block", "rounded-pill", "mfp-image", 3, "click"], ["name", "camera", 1, "fea", "icon-sm"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, IndexComponent_ng_template_2_Template, 18, 5, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "section", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-clients-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "section", 5)(7, "div", 4)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Union des El\u00E8ves et Etudiants Bangou de Douala ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 8)(18, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "C'est quoi l'UEEBg ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " L\u2019Union des El\u00E8ves et Etudiants Bangou ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "(UEEBg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " est une association \u00E0 but non lucratif et \u00E0 caract\u00E8re essentiellement culturel et \u00E9ducationnel dont l\u2019objectif est de rassembler et mobiliser les \u00E9l\u00E8ves et \u00E9tudiants Bangou derri\u00E8re des \u00E9l\u00E9ments fondamentaux du d\u00E9veloppement des personnes et des collectivit\u00E9s tels que l\u2019\u00E9ducation, la vie ensemble, la connaissance et la p\u00E9rennisation de la culture, et l\u2019insertion professionnelle.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16)(26, "div", 11)(27, "div")(28, "div", 17)(29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "img", 19)(31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 21)(33, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Danses culturelles");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "gnangnan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 10)(38, "div", 11)(39, "div", 12)(40, "div", 13)(41, "div", 8)(42, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Pr\u00E9sentation sommaire de l\u2019UEEBg");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Fond\u00E9e en 1957 \u00E0 Nkongsamba par un groupe d\u2019\u00E9l\u00E8ves et \u00E9tudiants Bangou, anim\u00E9s par le d\u00E9sir de mieux se connaitre et de se donner les moyens n\u00E9cessaires pour pouvoir apporter leur pierre \u00E0 la construction du groupement, l\u2019Union des El\u00E8ves et Etudiants Bangou en abr\u00E9g\u00E9 \u00ABUEEBg\u00BB et dont la devise est \u00AB Unit\u00E9 \u2013 Discipline \u2013 Progr\u00E8s \u00BB. est une association \u00E0 but non lucratif et \u00E0 caract\u00E8re essentiellement culturel et \u00E9ducationnel dont l\u2019objectif est de rassembler et mobiliser les \u00E9l\u00E8ves et \u00E9tudiants Bangou derri\u00E8re des \u00E9l\u00E9ments fondamentaux du d\u00E9veloppement des personnes et des collectivit\u00E9s tels que l\u2019\u00E9ducation, la vie ensemble, la connaissance et la p\u00E9rennisation de la culture, et l\u2019insertion professionnelle.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 25)(47, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "A propos de nous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "i-feather", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 16)(51, "div", 11)(52, "div", 28)(53, "div", 17)(54, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "img", 19)(56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 21)(58, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Tenu trditionnelle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "NDOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 29)(63, "div", 30)(64, "div", 31)(65, "div", 17)(66, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "img", 32)(68, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 21)(70, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Tagidor Hotel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Patrimoine");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 33)(75, "div", 17)(76, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "img", 34)(78, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 21)(80, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Danse traditionnelle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Culture");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 35)(85, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "section", 39)(89, "div", 4)(90, "div", 7)(91, "div", 8)(92, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Nos activit\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 30)(95, "div", 40)(96, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "i-feather", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 43)(99, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "La Journ\u00E9e de la Fille et de la Femme Bangou de Douala");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "La Journ\u00E9e de la Fille et de la Femme Bangou ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "(JFFBg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, " de Douala est un \u00E9v\u00E9nement Culturel qui met en valeur la jeune fille et la femme Bangou de Douala. Cet \u00E9v\u00E9nement culturel est organis\u00E9 par l\u2019Union des El\u00E8ves et Etudiants Bangou (UEEBg) du Centre de Douala. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_106_listener() { return ctx.showMore("read", "lire"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, " Lire la suite");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, " Chaque \u00E9dition porte sur un th\u00E8me pr\u00E9cis afin d\u2019orienter la gente f\u00E9minine Bangou non seulement vers un id\u00E9al de d\u00E9veloppement personnel et de renforcement de leur capacit\u00E9, mais aussi vers un id\u00E9al de d\u00E9veloppement de la Communaut\u00E9 Bangou de Douala et du Groupement Bangou par ricochet. Cet \u00E9v\u00E9nement riche en culture et unique en son genre se tient g\u00E9n\u00E9ralement les mois d\u2019Avril et de Mai et s\u2019\u00E9tend sur une semaine et met en avant plusieurs activit\u00E9s parmi lesquelles Marche sportive, Mini marathon, Concours d\u2019art culinaire, Election Miss UEEBg Douala, Election Miss Maman Bangou de Douala, Vaste Campagne m\u00E9dicale gratuite, Comp\u00E9tition de Handball f\u00E9minin, Causerie \u00E9ducative, Conf\u00E9rence/D\u00E9bat, Matchs de gala, Journ\u00E9e culturelle, Foire et Exposition / Vente. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_110_listener() { return ctx.showLess("read", "lire"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "voir moins");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 40)(113, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "i-feather", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 43)(116, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, " Quinzaine culturelle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "La Quinzaine Culturelle de l\u2019Union des El\u00E8ves et Etudiants Bangou Centre de Douala est un \u00E9v\u00E9nement Culturel qui se tient le mois de Juillet de chaque ann\u00E9e et marque la fin de notre ann\u00E9e associative, la fin d\u2019un mandat de bureau. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_120_listener() { return ctx.showMore("read2", "lire2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, " Lire la suite");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Cet \u00E9v\u00E9nement culturel est organis\u00E9 sous un th\u00E8me pr\u00E9cis questionnant la place du jeune Bangou dans la Communaut\u00E9. Les activit\u00E9s qui meublent cet \u00E9v\u00E9nement sont\u00A0: Investissement humain \u2013 Championnat de football \u2013 Excursions \u2013 Visites d\u2019entreprise - Table ronde \u2013 Matchs de gala \u2013 Sortie p\u00E9pini\u00E8re \u2013 Soir\u00E9e des pr\u00E9sidents \u2013 Journ\u00E9e des anciens ueebgistes \u2013 Gala p\u00E9pini\u00E8re \u2013 Gala de fin d\u2019ann\u00E9e. La Quinzaine Culturelle de l\u2019UEEBg Centre de Douala se veut \u00EAtre un \u00E9v\u00E9nement de rassemblement; un moment de r\u00E9flexion sur la situation de l\u2019\u00E9l\u00E8ve et de l\u2019\u00E9tudiant Bangou de Douala, une opportunit\u00E9 de mettre en avant les atouts et de valoriser les jeunes Bangou de par leur talent et leur potentiel. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_124_listener() { return ctx.showLess("read2", "lire2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "voir moins");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 53)(127, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](128, "i-feather", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 43)(130, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Le Congres National De l'UEEBg");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Le Congr\u00E8s National de l\u2019UEEBg est une activit\u00E9 qui se tient pendant deux semaines tous les mois d\u2019Ao\u00FBt. Par ailleurs, cet \u00E9v\u00E9nement qui se veut unificateur a pour but de promouvoir la culture du groupement Bangou, divertir la jeunesse Bangou pendant les grandes vacances tout en leur inculquant les valeurs de discipline et de travail.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_134_listener() { return ctx.showMore("read3", "lire3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, " Lire la suite");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, " Le Cong\u00E8s National de l\u2019UEEBg est un moment d\u2019apprentissage, de divertissement, d\u2019\u00E9panouissement, aussi et surtout d\u2019impr\u00E9gnation aux valeurs culturelles de notre terre-m\u00E8re. Cette p\u00E9riode est surtout l\u2019occasion idoine pour la jeunesse de d\u00E9couvrir la culture Bangou dans toute sa splendeur et sa richesse aux moyens des ateliers de formation, de diff\u00E9rents chantiers, des rencontres d\u2019\u00E9change avec les personnes ressources, et les excursions ; d\u2019apprendre \u00E0 mieux parler notre langue maternelle, de chanter et m\u00EAme de danser aux diff\u00E9rents rythmes du Groupement au travers des soir\u00E9es culturelles qui y sont organis\u00E9es. Cette activit\u00E9 rassemble au village Bangou tous les \u00E9l\u00E8ves et \u00E9tudiants Bangou du territoire national autour des activit\u00E9s telles que l\u2019Investissement humain \u2013 R\u00E9fection des plaques indicatives des villages \u2013 Apprentissage de la langue \u2018\u2018Nda\u2019nda\u2019\u2019 \u2013 Excursions \u2013 Championnat de football \u2013 Championnat de handball \u2013 D\u00E9fi culturel des centres \u2013 Concours d\u2019orthographe \u2013 Scrabbles \u2013 Soir\u00E9e culturelle \u2013 Apprentissage des danses traditionnelles - S\u00E9minaires de formation \u2013 Pr\u00E9sentation des rapports de fonctionnement des centres.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_138_listener() { return ctx.showLess("read3", "lire3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "voir moins");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 53)(141, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "i-feather", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "div", 43)(144, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "Journ\u00E9e de l'excellence");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "La Journ\u00E9e de l\u2019Excellence Scolaire (JES) Bangou de Douala est un \u00E9v\u00E9nement organis\u00E9 par l\u2019Association des Elites Bangou de Douala (AEBD) dont l\u2019objectif est de promouvoir l\u2019excellence et cultiver en leurs enfants le go\u00FBt de l\u2019effort et la satisfaction du travail bien fait.\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 30)(150, "div", 59)(151, "div", 8)(152, "div", 7)(153, "div", 8)(154, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "Aper\u00E7u de notre gallerie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](157, IndexComponent_div_157_Template, 14, 3, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 61)(159, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "See More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 35)(163, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](165, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 4)(167, "div", 6)(168, "div", 59)(169, "div", 8)(170, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171, "Derni\u00E8res nouvelles");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, " that can provide everything you need to generate awareness, drive traffic, connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "app-blog", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](179, "i-feather", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showNavigationArrows", ctx.showNavigationArrows)("showNavigationIndicators", ctx.showNavigationIndicators);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](156);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.workList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blogData", ctx.blogData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxScrollTo", "#home");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_5__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__.ScrollToDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbSlide, ngx_typed_js__WEBPACK_IMPORTED_MODULE_8__.NgxTypedJsComponent, _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_1__.BlogComponent], styles: ["#read[_ngcontent-%COMP%]{\n    display: none;\n  }\n  \n  #read2[_ngcontent-%COMP%]{\n    display: none;\n  }\n  \n  #read3[_ngcontent-%COMP%]{\n    display: none;\n  }\n  \n  #display[_ngcontent-%COMP%]{\n    display: block;\n  }\n  \n  #lire[_ngcontent-%COMP%]{\n    font-weight: bold;\n    color: #fff;\n  }\n  \n  #lire3[_ngcontent-%COMP%]{\n    font-weight: bold;\n    color: #fff;\n  }\n  \n  #lire2[_ngcontent-%COMP%]{\n    font-weight: bold;\n    color: #fff;\n  }\n  \n  #voir[_ngcontent-%COMP%]{\n    font-weight: bold;\n    color: #fff;\n  }\n  \n  #voir3[_ngcontent-%COMP%]{\n    font-weight: bold;\n    color: #fff;\n  }\n  \n  #voir2[_ngcontent-%COMP%]{\n    font-weight: bold;\n    color: #fff;\n  }\n  \n  #lirenone[_ngcontent-%COMP%]{\n    display: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztFQUNiOztFQUNBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6ImluZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVhZHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAjcmVhZDJ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgI3JlYWQze1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI2Rpc3BsYXl7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gICNsaXJle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAjbGlyZTN7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gICNsaXJlMntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgI3ZvaXJ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gICN2b2lyM3tcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgI3ZvaXIye1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gICNsaXJlbm9uZXtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9Il19 */"] });


/***/ }),

/***/ 89959:
/*!**********************************************************************!*\
  !*** ./src/app/core/components/master-page/master-page.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterPageComponent": () => (/* binding */ MasterPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/header/header.component */ 89470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/footer/footer.component */ 45227);




class MasterPageComponent {
    constructor() { }
    ngOnInit() {
    }
    /**
     * Router activation
     */
    onActivate(componentReference) {
        this.addclass = componentReference.navClass;
        this.buttonShow = componentReference.buttonList;
        this.TopbarShow = componentReference.sliderTopbar;
        this.footerClass = componentReference.footerVariant;
        this.developerPage = componentReference.isdeveloper;
        this.hideFooter = componentReference.hideFooter;
        this.shopPages = componentReference.shopPages;
    }
}
MasterPageComponent.ɵfac = function MasterPageComponent_Factory(t) { return new (t || MasterPageComponent)(); };
MasterPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MasterPageComponent, selectors: [["app-master-page"]], decls: 3, vars: 7, consts: [[3, "navClass", "buttonList", "sliderTopbar", "isdeveloper", "shopPages"], [3, "activate"], [3, "footerVariant", "hideFooter"]], template: function MasterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activate", function MasterPageComponent_Template_router_outlet_activate_1_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-footer", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navClass", ctx.addclass)("buttonList", ctx.buttonShow)("sliderTopbar", ctx.TopbarShow)("isdeveloper", ctx.developerPage)("shopPages", ctx.shopPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("footerVariant", ctx.footerClass)("hideFooter", ctx.hideFooter);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXN0ZXItcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 75296:
/*!************************************************************************!*\
  !*** ./src/app/core/components/page-aboutus/page-aboutus.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAboutusComponent": () => (/* binding */ PageAboutusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



function PageAboutusComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39)(1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageAboutusComponent_ng_template_32_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const modal_r6 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r6.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PageAboutusComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39)(1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageAboutusComponent_ng_template_59_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const modal_r9 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r9.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PageAboutusComponent_ng_template_80_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39)(1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageAboutusComponent_ng_template_80_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const modal_r12 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r12.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
;
/**
 * Aboutus Component
 */
class PageAboutusComponent {
    constructor(modalService) {
        this.modalService = modalService;
        /**
         * Member Data
         */
        this.memberData = [
            {
                profile: "assets/images/client/01.jpg",
                list: ['facebook', "instagram", "twitter", "linkedin"],
                name: "Ronny Jofra",
                designation: "C.E.O"
            },
            {
                profile: "assets/images/client/04.jpg",
                list: ["facebook", "instagram", "twitter", "linkedin"],
                name: "Micheal Carlo",
                designation: "Director"
            },
            {
                profile: "assets/images/client/02.jpg",
                list: ["facebook", "instagram", "twitter", "linkedin"],
                name: "Aliana Rosy",
                designation: "Manager"
            },
            {
                profile: "assets/images/client/03.jpg",
                list: ["facebook", "instagram", "twitter", "linkedin"],
                name: "Sofia Razaq",
                designation: "Developer"
            }
        ];
    }
    ngOnInit() {
    }
    /**
    * Open modal for show the video
    * @param content content of modal
    */
    openWindowCustomClass(content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }
    showMore(id1, id2) {
        document.getElementById(id2).style.display = 'none';
        document.getElementById(id1).style.display = 'block';
    }
    showLess(id1, id2) {
        document.getElementById(id1).style.display = 'none';
        document.getElementById(id2).style.display = 'flex';
    }
}
PageAboutusComponent.ɵfac = function PageAboutusComponent_Factory(t) { return new (t || PageAboutusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal)); };
PageAboutusComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageAboutusComponent, selectors: [["app-page-aboutus"]], decls: 92, vars: 0, consts: [["id", "background", 1, "bg-half", "d-table", "w-100", 2, "background-image", "url('assets/images/ueebg/gal/gal100.png')"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title", "text-muted"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "title", "mb-4", 2, "text-align", "center"], [1, "row", "align-items-center", 2, "padding-bottom", "5%"], [1, "col-lg-6", "col-md-6", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], ["src", "assets/images/ueebg/gal/gal21.png", "alt", "", 1, "rounded", "img-fluid", "mx-auto", "d-block"], [1, "play-icon"], ["href", "javascript:void(0);", "data-type", "youtube", "data-id", "yba7hPeTSjk", 1, "play-btn", 3, "click"], [1, "mdi", "mdi-play", "text-primary", "rounded-circle", "bg-white", "shadow"], ["content", ""], [1, "text-muted", 2, "text-align", "justify"], [1, "text-primary", "fw-bold"], ["href", "javascript:void(0)", "id", "lire", 3, "click"], ["id", "read"], ["href", "javascript:void(0)", "id", "voir", 3, "click"], ["src", "assets/images/ueebg/ueebg5.png", "alt", "", 1, "rounded", "img-fluid", "mx-auto", "d-block"], ["href", "javascript:void(0)", "id", "lire2", 3, "click"], ["id", "read2"], ["href", "javascript:void(0)", "id", "voir2", 3, "click"], ["src", "assets/images/ueebg/gal/gal14.png", "alt", "", 1, "rounded", "img-fluid", "mx-auto", "d-block"], ["href", "javascript:void(0)", "id", "lire3", 3, "click"], ["id", "read3"], ["href", "javascript:void(0)", "id", "voir3", 3, "click"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["src", "https://player.vimeo.com/video/99025203", "height", "450", "width", "780", "frameborder", "0", "allowfullscreen", "", "allow", "autoplay; encrypted-media"]], template: function PageAboutusComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "nav", 7)(8, "ul", 8)(9, "li", 9)(10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "UEEBG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9)(13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "A propos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13)(18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section", 17)(22, "div", 1)(23, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Pr\u00E9sentation de l'UEEBg centre de Douala");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19)(26, "div", 20)(27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22)(30, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageAboutusComponent_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.openWindowCustomClass(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PageAboutusComponent_ng_template_32_Template, 6, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20)(35, "div", 13)(36, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " N\u00E9e \u00E0 Nkongsamba en 1957, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "l\u2019Union des El\u00E8ves et Etudiants Bangou (UEEBg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " est une association nationale qui tire son exemple des jeunesses Bangou en rassemblant les \u00E9l\u00E8ves et \u00E9tudiants Bangou d\u2019une localit\u00E9 mais l\u00E0 sans sp\u00E9cifier le village d\u2019origine. Elle fait de ses principales priorit\u00E9s les \u00E9tudes et la culture ; ce qui participe d\u2019une mani\u00E8re ou d\u2019une autre au d\u00E9veloppement du Groupement Bangou.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageAboutusComponent_Template_a_click_41_listener() { return ctx.showMore("read", "lire"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Lire la suite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " L\u2019UEEBg est consid\u00E9r\u00E9e aupr\u00E8s de la communaut\u00E9 comme \u00E9tant le lien de communication entre la jeunesse et les parents Bangou. Une jeunesse dynamique qui se veut ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u2018\u2019Fer de lance du groupement !\u2019\u2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " ; Quoi de plus pour l\u2019avenir du groupement tout entier ? Comme toute association, elle est r\u00E9gie par des textes et est hi\u00E9rarchis\u00E9e ; \u00E0 la t\u00EAte nous avons le Bureau National, et la base est constitu\u00E9e des Centres au rang desquels le mythique et tr\u00E8s prestigieux Centre de Douala. Association apolitique, \u00E0 but non lucratif, \u00E0 caract\u00E8re essentiellement culturel et \u00E9ducationnel, l\u2019UEEBg Centre de Douala s\u2019\u00E9tend sur toute la ville et comprend cinq (05), bient\u00F4t six (07) sous centres ou antennes. L\u2019antenne 1 a pour si\u00E8ge le quartier Nylon de Brazzaville (Stade Bangou, Foyer Ndengnieup) ; l\u2019antenne 2 est situ\u00E9e \u00E0 Village (Foyer Bangou de Bobongo Petit Paris) ; l\u2019antenne 3 pour sa part si\u00E8ge \u00E0 Bonamoussadi (Kotto - Foyer Bangou de Kotto) ; l\u2019antenne 4 qui a pour si\u00E8ge Bonab\u00E9ri (For\u00EAt bar, Foyer Bangou de Bonab\u00E9ri) ; le Foyer Bangou de Boko accueille l\u2019antenne 5 ; et bient\u00F4t nous accueillerons le nouveau-n\u00E9 de la famille (l\u2019antenne 6) qui aura pour si\u00E8ge Ndogpassi (Face Station Total 2\u00E8me Danger \u2013 Foyer AREBAN). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageAboutusComponent_Template_a_click_48_listener() { return ctx.showLess("read", "lire"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "voir moins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Constitution du bureau");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19)(53, "div", 20)(54, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22)(57, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageAboutusComponent_Template_a_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.openWindowCustomClass(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, PageAboutusComponent_ng_template_59_Template, 6, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20)(62, "div", 13)(63, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "L\u2019UEEBg Centre de Douala est \u00E9galement dot\u00E9e d\u2019une administration tr\u00E8s hi\u00E9rarchis\u00E9e avec \u00E0 sa t\u00EAte l\u2019Assembl\u00E9e G\u00E9n\u00E9rale, suivi du Bureau Primaire (Pr\u00E9sident Ex\u00E9cutif \u2013 1er Vice-pr\u00E9sident Responsable des Finances \u2013 2e Vice-pr\u00E9sident Responsable de l\u2019administration et de la culture\u2013 Secr\u00E9taire G\u00E9n\u00E9rale) ; ensuite vient le Bureau Secondaire (Secr\u00E9taire G\u00E9n\u00E9ral Adjoint \u2013 les deux Censeurs \u2013 Des deux Commissaires aux Comptes \u2013 Et du Charg\u00E9 Culturel et Sportif); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageAboutusComponent_Template_a_click_65_listener() { return ctx.showMore("read2", "lire2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Lire la suite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " ensuite nous avons le Bureau Elargi et le Bureau des sous-centres qui sont mis en place suivant la politique du bureau ex\u00E9cutif; et enfin vient le Coll\u00E8ge des Conseillers et le Bureau d\u2019Honneur. Ceci dit, le bureau ex\u00E9cutif actuel a pour nom de bapt\u00EAme \u2018\u2018Le Bureau de la D\u00E9termination\u2019\u2019 en son Acte 3 est conduit par le Pr\u00E9sident NJIKI Alex ; avec pour 1er Vice-pr\u00E9sident en charge des finances M. KAMGANG Gabin, 2\u00E8me Vice-pr\u00E9sident en charge de l\u2019administration et la culture M. TAYO Steven, et pour Secr\u00E9taire g\u00E9n\u00E9rale Mlle. NANA NGOULEU Latonia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageAboutusComponent_Template_a_click_69_listener() { return ctx.showLess("read2", "lire2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "voir moins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Quotidien de l'UEEBG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 19)(74, "div", 20)(75, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 22)(78, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageAboutusComponent_Template_a_click_78_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.openWindowCustomClass(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, PageAboutusComponent_ng_template_80_Template, 6, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 20)(83, "div", 13)(84, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Le quotidien de l\u2019association est marqu\u00E9 par des r\u00E9unions r\u00E9guli\u00E8res dont celles dites ordinaires se tiennent chaque Dimanche dans la matin\u00E9e (\u00E0 11 heures pr\u00E9cises) et les r\u00E9unions extraordinaires se tiennent pour l\u2019essentiel tous les 1ers Dimanche du mois. Pour ce qui est du financement de ses activit\u00E9s, l\u2019UEEBg Centre de Douala b\u00E9n\u00E9ficie du soutien des");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageAboutusComponent_Template_a_click_86_listener() { return ctx.showMore("read3", "lire3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Lire la suite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Associations des parents, du soutien des personnes ressources, des sponsorings, du revenu des activit\u00E9s, des cotisations de ses membres, et aussi des activit\u00E9s g\u00E9n\u00E9ratrices de revenus qu\u2019elle m\u00E8ne. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageAboutusComponent_Template_a_click_90_listener() { return ctx.showLess("read3", "lire3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "voir moins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".dark-modal .modal-content {\r\n  background-color: #000000;\r\n  color: white;\r\n  background: none;\r\n  border: none;\r\n  }\r\n    .dark-modal .modal-header {\r\n  border : none\r\n  }\r\n    .dark-modal .close {\r\n  color: white;\r\n  }\r\n  #read[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n  #read2[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n  #read3[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n  #display[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n  #lire[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  color: #fff;\r\n}\r\n  #lire3[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  color: #fff;\r\n}\r\n  #lire2[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  color: #fff;\r\n}\r\n  #voir[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  color: #fff;\r\n}\r\n  #voir3[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  color: #fff;\r\n}\r\n  #voir2[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  color: #fff;\r\n}\r\n  #lirenone[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n  #background[_ngcontent-%COMP%] { \r\n    background: rgba(7, 1, 94, 0.377) url('ueebg5.png');\r\n    height: 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-blend-mode: darken;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtYWJvdXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxZQUFZO0VBQ1o7RUFDRjtFQUNFLGFBQWE7QUFDZjtFQUVBO0VBQ0UsYUFBYTtBQUNmO0VBRUE7RUFDRSxhQUFhO0FBQ2Y7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7RUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7RUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7RUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7RUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7RUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7RUFDQTtFQUNFLGFBQWE7QUFDZjtFQUdFO0lBQ0UsbURBQW1GO0lBQ25GLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7R0FDOUIiLCJmaWxlIjoicGFnZS1hYm91dHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWhlYWRlciB7XHJcbiAgYm9yZGVyIDogbm9uZVxyXG4gIH1cclxuICA6Om5nLWRlZXAgLmRhcmstbW9kYWwgLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4jcmVhZHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jcmVhZDJ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI3JlYWQze1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI2Rpc3BsYXl7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNsaXJle1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jbGlyZTN7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiNsaXJlMntcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI3ZvaXJ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiN2b2lyM3tcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI3ZvaXIye1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbiNsaXJlbm9uZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiAgXHJcblxyXG4gICNiYWNrZ3JvdW5kIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDcsIDEsIDk0LCAwLjM3NykgdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3VlZWJnL3VlZWJnNS5wbmcnKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XHJcbiAgIH0iXX0= */"] });


/***/ }),

/***/ 73245:
/*!********************************************************************************!*\
  !*** ./src/app/core/components/page-blog-detail/page-blog-detail.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageBlogDetailComponent": () => (/* binding */ PageBlogDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 5601);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 37059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





/**
 * Page Blog-Detail Component
 */
class PageBlogDetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageBlogDetailComponent.ɵfac = function PageBlogDetailComponent_Factory(t) { return new (t || PageBlogDetailComponent)(); };
PageBlogDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageBlogDetailComponent, selectors: [["app-page-blog-detail"]], decls: 355, vars: 5, consts: [["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "list-unstyled", "mt-4"], [1, "list-inline-item", "h6", "user", "text-muted", "me-2"], [1, "mdi", "mdi-account"], [1, "list-inline-item", "h6", "date", "text-muted"], [1, "mdi", "mdi-calendar-check"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "row"], [1, "col-lg-8", "col-md-6"], [1, "card", "blog", "blog-detail", "border-0", "shadow", "rounded"], ["src", "assets/images/blog/01.jpg", "alt", "", 1, "img-fluid", "rounded-top"], [1, "card-body", "content"], [1, "mdi", "mdi-tag", "text-primary", "me-1"], ["href", "javscript:void(0)", 1, "text-primary"], [1, "text-muted", "mt-3"], [1, "blockquote", "mt-3", "p-3"], [1, "text-muted", "mb-0", "fst-italic"], [1, "text-muted"], [1, "post-meta", "mt-3"], [1, "list-unstyled", "mb-0"], [1, "list-inline-item", "me-2", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted", "like"], [1, "uil", "uil-heart", "me-1"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "text-muted", "comments"], [1, "uil", "uil-comment", "me-1"], [1, "card", "shadow", "rounded", "border-0", "mt-4"], [1, "card-body"], [1, "card-title", "mb-0"], [1, "media-list", "list-unstyled", "mb-0"], [1, "mt-4"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], ["href", "#", 1, "pe-3"], ["src", "assets/images/client/01.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-md-sm", "rounded-circle", "shadow"], [1, "commentor-detail"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "text-dark", "media-heading"], [1, "text-muted", 3, "ngxScrollTo"], [1, "mdi", "mdi-reply"], [1, "mt-3"], [1, "text-muted", "fst-italic", "p-3", "bg-light", "rounded"], ["src", "assets/images/client/02.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-md-sm", "rounded-circle", "shadow"], ["href", "javascript:void(0)", 1, "media-heading", "text-dark"], ["src", "assets/images/client/03.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-md-sm", "rounded-circle", "shadow"], [1, "list-unstyled", "ps-4", "ps-md-5", "sub-comment"], [1, "col-md-12"], [1, "mb-3"], [1, "form-label"], [1, "form-icon", "position-relative"], ["name", "message-circle", 1, "fea", "icon-sm", "icons"], ["id", "message", "placeholder", "Your Comment", "rows", "5", "name", "message", "required", "", 1, "form-control", "ps-5"], [1, "col-lg-6"], [1, "text-danger"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["id", "name", "name", "name", "type", "text", "placeholder", "Name", "required", "", 1, "form-control", "ps-5"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["id", "email", "type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], [1, "send", "d-grid"], ["type", "submit", 1, "btn", "btn-primary"], [1, "col-lg-6", "mt-4", "pt-2"], [1, "card", "blog", "rounded", "border-0", "shadow"], ["src", "assets/images/blog/01.jpg", "alt", "...", 1, "card-img-top", "rounded-top"], [1, "overlay", "rounded-top", "bg-dark"], ["href", "javascript:void(0)", 1, "card-title", "title", "text-dark"], [1, "post-meta", "d-flex", "justify-content-between", "mt-3"], ["routerLink", "/page-blog-detail", 1, "text-muted", "readmore"], [1, "uil", "uil-angle-right-b", "align-middle"], [1, "author"], [1, "text-light", "user", "d-block"], [1, "uil", "uil-user"], [1, "text-light", "date"], [1, "uil", "uil-calendar-alt"], ["src", "assets/images/blog/02.jpg", "alt", "...", 1, "card-img-top", "rounded-top"], [1, "col-lg-4", "col-md-6", "col-12", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "card", "border-0", "sidebar", "sticky-bar", "rounded", "shadow"], [1, "widget"], ["role", "search", "method", "get"], [1, "input-group", "mb-3", "border", "rounded"], ["type", "text", "id", "s", "name", "s", "placeholder", "Search Keywords...", 1, "form-control", "border-0"], ["type", "submit", "id", "searchsubmit", 1, "input-group-text", "bg-transparent", "border-0"], [1, "uil", "uil-search"], [1, "widget", "mb-4", "pb-2"], [1, "widget-title"], [1, "list-unstyled", "mt-4", "mb-0", "blog-categories"], ["href", "jvascript:void(0)"], [1, "float-end"], [1, "clearfix", "post-recent"], [1, "post-recent-thumb", "float-start"], ["alt", "img", "src", "assets/images/blog/07.jpg", 1, "img-fluid", "rounded"], [1, "post-recent-content", "float-start"], [1, "text-muted", "mt-2"], ["alt", "img", "src", "assets/images/blog/08.jpg", 1, "img-fluid", "rounded"], ["alt", "img", "src", "assets/images/blog/01.jpg", 1, "img-fluid", "rounded"], [1, "tagcloud", "mt-4"], ["href", "jvascript:void(0)", 1, "rounded"], [1, "list-unstyled", "social-icon", "mb-0", "mt-4"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], [1, "list-inline-item", "ms-1"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], ["name", "github", 1, "fea", "icon-sm", "fea-social"], ["name", "youtube", 1, "fea", "icon-sm", "fea-social"], ["name", "gitlab", 1, "fea", "icon-sm", "fea-social"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"]], template: function PageBlogDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Design your apps in your own way ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5)(8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Calvin Carlo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 13th August, 2019 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10)(15, "nav", 11)(16, "ul", 12)(17, "li", 13)(18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Landrick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13)(21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 13)(24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Blog Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17)(29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 21)(33, "div", 1)(34, "div", 22)(35, "div", 23)(36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26)(39, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "blockquote", 30)(49, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 33)(54, "ul", 34)(55, "li", 35)(56, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "33");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 38)(60, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 41)(64, "div", 42)(65, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Comments :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul", 44)(68, "li", 45)(69, "div", 46)(70, "div", 47)(71, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 50)(74, "h6", 51)(75, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Lorenzo Peterson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "small", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "15th August, 2019 at 01:25 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 55)(83, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 45)(86, "div", 46)(87, "div", 47)(88, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 50)(91, "h6", 51)(92, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Tammy Camacho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "small", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "15th August, 2019 at 05:44 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 55)(100, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li", 45)(103, "div", 46)(104, "div", 47)(105, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 50)(108, "h6", 51)(109, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Tammy Camacho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "small", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "16th August, 2019 at 03:44 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 55)(117, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "ul", 60)(120, "li", 45)(121, "div", 46)(122, "div", 47)(123, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 50)(126, "h6", 51)(127, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Lorenzo Peterson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "small", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "17th August, 2019 at 01:25 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 55)(135, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 41)(138, "div", 42)(139, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Leave A Comment :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "form", 55)(142, "div", 22)(143, "div", 61)(144, "div", 62)(145, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Your Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i-feather", 65)(149, "textarea", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 67)(151, "div", 62)(152, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "i-feather", 69)(158, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 67)(160, "div", 62)(161, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Your Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "i-feather", 71)(167, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 61)(169, "div", 73)(170, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 41)(173, "div", 42)(174, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Related Posts :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 22)(177, "div", 75)(178, "div", 76)(179, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 77)(181, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 26)(183, "h5")(184, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Design your apps in your own way");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 80)(187, "ul", 34)(188, "li", 35)(189, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "33");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li", 38)(193, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 83)(200, "small", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Calvin Carlo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "small", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " 13th August, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 75)(207, "div", 76)(208, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "img", 88)(210, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 26)(212, "h5")(213, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "How apps is changing the IT world");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 80)(216, "ul", 34)(217, "li", 35)(218, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "33");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li", 38)(222, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 83)(229, "small", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " Calvin Carlo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "small", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " 13th August, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 89)(236, "div", 90)(237, "div", 42)(238, "div", 91)(239, "form", 92)(240, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 97)(245, "h5", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "ul", 99)(248, "li")(249, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Finance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "span", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "li")(254, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "li")(259, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "span", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "li")(264, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Corporate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "span", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "li")(269, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "span", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 97)(274, "h5", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Recent Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 45)(277, "div", 102)(278, "div", 103)(279, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "img", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 105)(282, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Consultant Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "15th June, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 102)(287, "div", 103)(288, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "img", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 105)(291, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Look On The Glorious Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "15th June, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 102)(296, "div", 103)(297, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "img", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 105)(300, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Research Financial.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "15th June, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 97)(305, "h5", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Tags Cloud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 109)(308, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Finance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Bride");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Lifestyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Beauty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Audio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 91)(329, "h5", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Follow us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "ul", 111)(332, "li", 38)(333, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "i-feather", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "li", 114)(336, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "i-feather", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "li", 114)(339, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "i-feather", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "li", 114)(342, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "i-feather", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "li", 114)(345, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "i-feather", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "li", 114)(348, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "i-feather", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "li", 114)(351, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "i-feather", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "a", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "i-feather", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWJsb2ctZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 62774:
/*!********************************************************************************************!*\
  !*** ./src/app/core/components/page-blog-list-sidebar/page-blog-list-sidebar.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageBlogListSidebarComponent": () => (/* binding */ PageBlogListSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 5601);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 37059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function PageBlogListSidebarComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65)(1, "div", 66)(2, "div", 67)(3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 69)(5, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 71)(7, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 68)(14, "div", 76)(15, "h5")(16, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 79)(21, "ul", 80)(22, "li", 81)(23, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 53)(27, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.like);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.message);
} }
;
/**
 * Page Blog-ListSidebar Component
 */
class PageBlogListSidebarComponent {
    constructor() {
        /**
         * Blog Data
         */
        this.blogListData = [
            {
                image: "assets/images/work/14.jpg",
                title: "Design your apps in your own way",
                content: "Due to its widespread use as filler text for layouts, non-readability",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/work/15.jpg",
                title: "Design your apps in your own way",
                content: "Due to its widespread use as filler text for layouts, non-readability",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/work/16.jpg",
                title: "Design your apps in your own way",
                content: "Due to its widespread use as filler text for layouts, non-readability",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/work/17.jpg",
                title: "Design your apps in your own way",
                content: "Due to its widespread use as filler text for layouts, non-readability",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/work/18.jpg",
                title: "Design your apps in your own way",
                content: "Due to its widespread use as filler text for layouts, non-readability",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/work/19.jpg",
                title: "Design your apps in your own way",
                content: "Due to its widespread use as filler text for layouts, non-readability",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            },
            {
                image: "assets/images/work/13.jpg",
                title: "Design your apps in your own way",
                content: "Due to its widespread use as filler text for layouts, non-readability",
                like: "33",
                message: "08",
                name: "Calvin Carlo",
                date: "13th August, 2019"
            }
        ];
    }
    ngOnInit() {
    }
}
PageBlogListSidebarComponent.ɵfac = function PageBlogListSidebarComponent_Factory(t) { return new (t || PageBlogListSidebarComponent)(); };
PageBlogListSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageBlogListSidebarComponent, selectors: [["app-page-blog-list-sidebar"]], decls: 168, vars: 2, consts: [["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "row"], [1, "col-lg-8", "col-12"], ["class", "col-12 mb-4 pb-2", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mb-0"], [1, "page-item"], ["href", "javascript:void(0)", "aria-label", "Previous", 1, "page-link"], [1, "page-item", "active"], ["href", "javascript:void(0)", 1, "page-link"], ["href", "javascript:void(0)", "aria-label", "Next", 1, "page-link"], [1, "col-lg-4", "col-12", "mt-4", "mt-lg-0", "pt-2", "pt-lg-0"], [1, "card", "border-0", "sidebar", "sticky-bar", "rounded", "shadow"], [1, "card-body"], [1, "widget"], ["role", "search", "method", "get"], [1, "input-group", "mb-3", "border", "rounded"], ["type", "text", "id", "s", "name", "s", "placeholder", "Search Keywords...", 1, "form-control", "border-0"], ["type", "submit", "id", "searchsubmit", 1, "input-group-text", "bg-transparent", "border-0"], [1, "uil", "uil-search"], [1, "widget", "mb-4", "pb-2"], [1, "widget-title"], [1, "list-unstyled", "mt-4", "mb-0", "blog-categories"], ["href", "jvascript:void(0)"], [1, "float-end"], [1, "mt-4"], [1, "clearfix", "post-recent"], [1, "post-recent-thumb", "float-start"], ["alt", "img", "src", "assets/images/blog/07.jpg", 1, "img-fluid", "rounded"], [1, "post-recent-content", "float-start"], [1, "text-muted", "mt-2"], ["alt", "img", "src", "assets/images/blog/08.jpg", 1, "img-fluid", "rounded"], ["alt", "img", "src", "assets/images/blog/01.jpg", 1, "img-fluid", "rounded"], [1, "tagcloud", "mt-4"], ["href", "jvascript:void(0)", 1, "rounded"], [1, "list-unstyled", "social-icon", "mb-0", "mt-4"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], [1, "list-inline-item", "ms-1"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], ["name", "github", 1, "fea", "icon-sm", "fea-social"], ["name", "youtube", 1, "fea", "icon-sm", "fea-social"], ["name", "gitlab", 1, "fea", "icon-sm", "fea-social"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "col-12", "mb-4", "pb-2"], [1, "card", "blog", "rounded", "border-0", "shadow", "overflow-hidden"], [1, "row", "align-items-center", "g-0"], [1, "col-md-6"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "overlay", "bg-dark"], [1, "author"], [1, "text-light", "user", "d-block"], [1, "uil", "uil-user"], [1, "text-light", "date"], [1, "uil", "uil-calendar-alt"], [1, "card-body", "content"], ["href", "javascript:void(0)", 1, "card-title", "title", "text-dark"], [1, "text-muted", "mb-0"], [1, "post-meta", "d-flex", "justify-content-between", "mt-3"], [1, "list-unstyled", "mb-0"], [1, "list-inline-item", "me-2", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted", "like"], [1, "uil", "uil-heart", "me-1"], ["href", "javascript:void(0)", 1, "text-muted", "comments"], [1, "uil", "uil-comment", "me-1"], ["routerLink", "/page-blog-detail", 1, "text-muted", "readmore"], [1, "uil", "uil-angle-right-b", "align-middle"]], template: function PageBlogListSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Blog Listing & Sidebar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "nav", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9)(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9)(17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Blog List with Sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 17)(26, "div", 1)(27, "div", 18)(28, "div", 19)(29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PageBlogListSidebarComponent_div_30_Template, 33, 7, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21)(32, "ul", 22)(33, "li", 23)(34, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 25)(37, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 23)(40, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 23)(43, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 23)(46, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28)(49, "div", 29)(50, "div", 30)(51, "div", 31)(52, "form", 32)(53, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 37)(58, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul", 39)(61, "li")(62, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Finance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li")(67, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li")(72, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li")(77, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Corporate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li")(82, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 37)(87, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Recent Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 42)(90, "div", 43)(91, "div", 44)(92, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 46)(95, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Consultant Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "15th June, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 43)(100, "div", 44)(101, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 46)(104, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Look On The Glorious Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "15th June, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 43)(109, "div", 44)(110, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 46)(113, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Research Financial.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "15th June, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 37)(118, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Tags Cloud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 50)(121, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Finance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Bride");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Lifestyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Beauty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Audio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 31)(142, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Follow us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "ul", 52)(145, "li", 53)(146, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i-feather", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li", 56)(149, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i-feather", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li", 56)(152, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "i-feather", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li", 56)(155, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i-feather", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li", 56)(158, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i-feather", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li", 56)(161, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i-feather", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li", 56)(164, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i-feather", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "i-feather", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogListData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__.ScrollToDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWJsb2ctbGlzdC1zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 55292:
/*!******************************************************************************!*\
  !*** ./src/app/core/components/page-comingsoon/page-comingsoon.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageComingsoonComponent": () => (/* binding */ PageComingsoonComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 13491);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ 87836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ 5601);





/**
 * Page ComingSoon Component
 */
class PageComingsoonComponent {
    constructor() { }
    ngOnInit() {
        this._trialEndsAt = "2022-12-24";
        (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(3000).pipe((0,rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__.map)((x) => {
            this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
        })).subscribe((x) => {
            this._days = this.getDays(this._diff);
            this._hours = this.getHours(this._diff);
            this._minutes = this.getMinutes(this._diff);
            this._seconds = this.getSeconds(this._diff);
        });
    }
    /**
     * Get Date & Time
     */
    getDays(t) {
        return Math.floor(t / (1000 * 60 * 60 * 24));
    }
    getHours(t) {
        return Math.floor((t / (1000 * 60 * 60)) % 24);
    }
    getMinutes(t) {
        return Math.floor((t / 1000 / 60) % 60);
    }
    getSeconds(t) {
        return Math.floor((t / 1000) % 60);
    }
}
PageComingsoonComponent.ɵfac = function PageComingsoonComponent_Factory(t) { return new (t || PageComingsoonComponent)(); };
PageComingsoonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PageComingsoonComponent, selectors: [["app-page-comingsoon"]], decls: 43, vars: 4, consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-primary"], ["name", "home", 1, "icons"], ["data-jarallax", "{\"speed\": 0.5}", 1, "bg-home", "d-flex", "align-items-center", 2, "background-image", "url('assets/images/comingsoon.jpg')"], [1, "bg-overlay"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-md-12", "text-center"], ["href", "javascript:void(0)", 1, "logo", "h5"], ["src", "assets/images/logo-light.png", "height", "24", "alt", ""], [1, "text-uppercase", "title-dark", "text-white", "mt-2", "mb-4", "coming-soon"], [1, "text-light", "para-desc", "para-dark", "mx-auto"], [1, "text-primary", "font-weight-bold"], [1, "row"], [1, "col-md-12", "text-center"], ["id", "countdown"], [1, "count-down", "list-unstyled"], ["id", "days", 1, "count-number", "list-inline-item", "m-2"], [1, "count-head"], ["id", "hours", 1, "count-number", "list-inline-item", "m-2"], ["id", "mins", 1, "count-number", "list-inline-item", "m-2"], ["id", "secs", 1, "count-number", "list-inline-item", "m-2"], ["id", "end", 1, "h1"], ["routerLink", "/index", 1, "btn", "btn-primary", "mt-4"], [1, "mdi", "mdi-backup-restore"]], template: function PageComingsoonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i-feather", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "We're Coming soon...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " that can provide everything you need to generate awareness, drive traffic, connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "ul", 16)(21, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 13)(39, "div", 14)(40, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Go Back Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._days);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._minutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._seconds);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNvbWluZ3Nvb24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 56619:
/*!**************************************************************************************!*\
  !*** ./src/app/core/components/page-contact-detail/page-contact-detail.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageContactDetailComponent": () => (/* binding */ PageContactDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 5601);



function PageContactDetailComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29)(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageContactDetailComponent_ng_template_32_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const modal_r2 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
/**
 * Page Contact-Detail Component
 */
class PageContactDetailComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.hideFooter = true;
    }
    ngOnInit() {
    }
    mapView(content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }
}
PageContactDetailComponent.ɵfac = function PageContactDetailComponent_Factory(t) { return new (t || PageContactDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal)); };
PageContactDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageContactDetailComponent, selectors: [["app-page-contact-detail"]], decls: 56, vars: 0, consts: [[1, "vh-100", "d-flex", "align-items-center", 2, "background", "url('assets/images/contact-detail.jpg') center center"], [1, "bg-overlay", "bg-overlay-white"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6", "offset-lg-6", "col-md-7", "offset-md-5"], [1, "title-heading", "mt-5", "pt-4"], [1, "heading"], [1, "d-flex", "contact-detail", "align-items-center", "mt-3"], [1, "icon"], ["name", "mail", 1, "fea", "icon-m-md", "text-dark", "me-3"], [1, "flex-1", "content"], [1, "title", "fw-bold", "mb-0"], ["href", "mailto:contact@example.com", 1, "text-primary"], ["name", "phone", 1, "fea", "icon-m-md", "text-dark", "me-3"], ["href", "tel:+152534-468-854", 1, "text-primary"], ["name", "map-pin", 1, "fea", "icon-m-md", "text-dark", "me-3"], ["data-type", "iframe", 1, "video-play-icon", "text-primary", 3, "click"], ["content", ""], [1, "list-unstyled", "social-icon", "mb-0", "mt-4"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], [1, "list-inline-item", "ms-1"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], ["name", "github", 1, "fea", "icon-sm", "fea-social"], ["name", "youtube", 1, "fea", "icon-sm", "fea-social"], ["name", "gitlab", 1, "fea", "icon-sm", "fea-social"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin", "height", "450", "width", "750"]], template: function PageContactDetailComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contactez nous !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i-feather", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10)(12, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "daloisnguenang@yahoo.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7)(17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i-feather", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10)(20, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "+237 655328018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7)(25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i-feather", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10)(28, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageContactDetailComponent_Template_a_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.mapView(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "View on Google map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PageContactDetailComponent_ng_template_32_Template, 6, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 18)(35, "li", 19)(36, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i-feather", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 22)(39, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i-feather", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 22)(42, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i-feather", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 22)(45, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i-feather", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 22)(48, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i-feather", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 22)(51, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i-feather", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 22)(54, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i-feather", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } }, dependencies: [angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent], styles: [".dark-modal .modal-content {\n    background-color: #000000;\n    color: white;\n    background: none;\n    border: none;\n}\n\n  .dark-modal .modal-header {\n    border: none\n}\n\n  .dark-modal .close {\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtY29udGFjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJwYWdlLWNvbnRhY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG46Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWhlYWRlciB7XG4gICAgYm9yZGVyOiBub25lXG59XG5cbjo6bmctZGVlcCAuZGFyay1tb2RhbCAuY2xvc2Uge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });


/***/ }),

/***/ 65491:
/*!********************************************************************!*\
  !*** ./src/app/core/components/page-error/page-error.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageErrorComponent": () => (/* binding */ PageErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 5601);



/**
 * PAge Error Component
 */
class PageErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageErrorComponent.ɵfac = function PageErrorComponent_Factory(t) { return new (t || PageErrorComponent)(); };
PageErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageErrorComponent, selectors: [["app-page-error"]], decls: 23, vars: 0, consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-soft-primary"], ["name", "home", 1, "icons"], [1, "bg-home", "d-flex", "align-items-center"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-md-12", "text-center"], ["src", "assets/images/404.svg", "alt", "", 1, "img-fluid"], [1, "text-uppercase", "mt-4", "display-3"], [1, "text-capitalize", "text-dark", "mb-4", "error-page"], [1, "text-muted", "para-desc", "mx-auto"], [1, "text-primary", "fw-bold"], [1, "row"], [1, "col-md-12", "text-center"], ["routerLink", "/index", 1, "btn", "btn-outline-primary", "mt-4"], ["routerLink", "/index", 1, "btn", "btn-primary", "mt-4", "ms-2"]], template: function PageErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Oh ! no");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Start working with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " that can provide everything you need to generate awareness, drive traffic, connect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Go To Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWVycm9yLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 94577:
/*!********************************************************************************!*\
  !*** ./src/app/core/components/page-maintenance/page-maintenance.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageMaintenanceComponent": () => (/* binding */ PageMaintenanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

/**
 * Page Maintenance Component
 */
class PageMaintenanceComponent {
    constructor() {
        this.timer(10);
    }
    ngOnInit() {
    }
    timer(minute) {
        let seconds = minute * 60;
        let textSec = "0";
        let statSec = 60;
        const prefix = minute < 10 ? "0" : "";
        const timer = setInterval(() => {
            seconds--;
            if (statSec != 0)
                statSec--;
            else
                statSec = 59;
            if (statSec < 10) {
                textSec = "0" + statSec;
            }
            else
                textSec = statSec;
            this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;
        }, 1000);
    }
}
PageMaintenanceComponent.ɵfac = function PageMaintenanceComponent_Factory(t) { return new (t || PageMaintenanceComponent)(); };
PageMaintenanceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageMaintenanceComponent, selectors: [["app-page-maintenance"]], decls: 25, vars: 1, consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-primary"], ["data-jarallax", "{\"speed\": 0.5}", 1, "bg-home", "d-flex", "align-items-center", 2, "background-image", "url('assets/images/maintenance.jpg')"], [1, "bg-overlay"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-md-12", "text-center"], ["href", "javascript:void(0)", 1, "logo", "h5"], ["src", "assets/images/logo-light.png", "height", "24", "alt", ""], [1, "text-uppercase", "text-white", "title-dark", "mt-2", "mb-4", "maintenance"], [1, "text-white-50", "para-desc", "mx-auto", "para-dark"], [1, "row"], [1, "col-md-12", "text-center"], [1, "text-center"], ["id", "maintenance", 1, "timer"], [1, "d-block", "h6", "text-uppercase", "text-white"], ["routerLink", "/index", 1, "btn", "btn-primary", "mt-4"], [1, "mdi", "mdi-backup-restore"]], template: function PageMaintenanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "System Is Under Maintenance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Perfect and awesome template to present your future product or service. Hooking audience attention is all in the opener.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11)(21, "div", 12)(22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Go Back Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.display);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW1haW50ZW5hbmNlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 80267:
/*!**************************************************************************!*\
  !*** ./src/app/core/components/page-thankyou/page-thankyou.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageThankyouComponent": () => (/* binding */ PageThankyouComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


/**
 * Page Thankyou Component
 */
class PageThankyouComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageThankyouComponent.ɵfac = function PageThankyouComponent_Factory(t) { return new (t || PageThankyouComponent)(); };
PageThankyouComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageThankyouComponent, selectors: [["app-page-thankyou"]], decls: 13, vars: 0, consts: [[1, "bg-home", "bg-light", "d-flex", "align-items-center"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12"], [1, "text-center"], [1, "icon", "d-flex", "align-items-center", "justify-content-center", "bg-soft-primary", "rounded-circle", "mx-auto", 2, "height", "90px", "width", "90px"], [1, "uil", "uil-thumbs-up", "align-middle", "h1", "mb-0"], [1, "my-4", "fw-bold"], [1, "text-muted", "para-desc", "mx-auto"], ["routerLink", "/index", 1, "btn", "btn-soft-primary", "mt-3"]], template: function PageThankyouComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Thank You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Go To Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXRoYW5reW91LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 22219:
/*!************************************************************!*\
  !*** ./src/app/core/components/widget/widget.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetComponent": () => (/* binding */ WidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ 5601);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 37059);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-count-to */ 97321);






function WidgetComponent_ng_template_575_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 332)(1, "button", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WidgetComponent_ng_template_575_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const modal_r2 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r2.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "iframe", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
/**
 * Widget Component
 */
class WidgetComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    mapView(content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }
}
WidgetComponent.ɵfac = function WidgetComponent_Factory(t) { return new (t || WidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
WidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WidgetComponent, selectors: [["app-widget"]], decls: 806, vars: 4, consts: [["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "row"], [1, "col-12"], [1, "section-title"], [1, "col-lg-4", "col-md-6", "col-12", "mt-4", "pt-2"], [1, "features"], [1, "image", "position-relative", "d-inline-block"], [1, "uil", "uil-airplay", "h1", "text-primary"], [1, "content", "mt-4"], [1, "text-muted", "mb-0"], [1, "d-flex", "features", "pt-4", "pb-4"], [1, "icon", "text-center", "rounded-circle", "text-primary", "me-3", "mt-2"], ["name", "monitor", 1, "fea", "icon-ex-md"], [1, "flex-1"], [1, "text-muted", "para", "mb-0"], [1, "card", "work-process", "border-0", "rounded", "shadow"], [1, "card-body"], [1, "text-muted", "para"], ["href", "javascript:void(0)", 1, "text-primary"], [1, "uil", "uil-angle-right-b"], [1, "list-unstyled", "d-flex", "justify-content-between", "mb-0", "mt-2"], [1, "step", "h1", "mb-0", "fw-bold"], [1, "step-icon"], [1, "mdi", "mdi-check-all", "mdi-36px"], [1, "card", "border-0", "text-center", "features", "feature-clean", "course-feature", "p-4", "overflow-hidden", "shadow"], [1, "icons", "text-primary", "text-center", "mx-auto"], [1, "uil", "uil-file", "d-block", "rounded", "h3", "mb-0"], [1, "card-body", "p-0", "mt-4"], ["href", "javascript:void(0)", 1, "title", "h5", "text-dark"], [1, "text-muted", "mt-2"], ["href", "javascript:void(0)", 1, "text-primary", "read-more"], [1, "uil", "uil-file", "text-primary", "full-img"], [1, "card", "bg-light", "rounded", "shadow", "border-0"], [1, "card-body", "py-5"], [1, "uil", "uil-rupee-sign", "h1", "text-primary"], [1, "mt-4"], [1, "card-title"], [1, "text-muted", "mt-3", "mb-0"], [1, "col-lg-4", "col-md-6", "mt-4", "pt-2"], [1, "card", "border-0", "text-center", "features", "feature-clean"], [1, "uil", "uil-phone", "d-block", "rounded", "h3", "mb-0"], [1, "content", "mt-3"], [1, "fw-bold"], [1, "text-muted"], ["href", "tel:+152534-468-854", 1, "text-primary"], [1, "card", "explore-feature", "border-0", "rounded", "text-center", "bg-white", "shadow"], [1, "icon", "rounded-circle", "shadow-lg", "d-inline-block"], ["name", "pen-tool", 1, "fea"], [1, "mt-3", "title"], [1, "uil", "uil-envelope-lock", "d-block", "rounded", "h3", "mb-0"], [1, "mt-2"], ["name", "arrow-right", 1, "fea", "icon-sm"], [1, "d-flex", "features", "feature-clean"], [1, "uil", "uil-airplay", "d-block", "rounded", "h3", "mb-0"], [1, "content", "ms-4"], [1, "mb-1"], ["href", "javascript:void(0)", 1, "text-dark"], [1, "card", "explore-feature", "border-0", "rounded", "text-center", "bg-white"], ["name", "monitor", 1, "fea"], ["href", "javascript:void(0)", 1, "title", "text-dark"], ["href", "javascript:void(0)", 1, "text-muted", "small"], [1, "card", "features", "fea-primary", "rounded", "p-4", "bg-light", "position-relative", "overflow-hidden", "border-0"], [1, "h1", "icon2", "text-primary"], [1, "uil", "uil-briefcase"], [1, "card-body", "p-0", "content"], [1, "para", "text-muted", "mb-0"], [1, "col-12", "mt-4", "pt-2"], [1, "d-flex", "client-testi"], ["src", "assets/images/client/04.jpg", "alt", "", 1, "avatar", "avatar-small", "client-image", "rounded", "shadow"], [1, "flex-1", "content", "p-3", "shadow", "rounded", "bg-white", "position-relative"], [1, "list-unstyled", "mb-0"], [1, "list-inline-item"], [1, "mdi", "mdi-star", "text-warning"], [1, "text-primary"], [1, "card", "client-testi", "text-center", "border", "rounded", "mx-2"], ["src", "assets/images/client/lenovo.svg", "alt", "", 1, "img-fluid", "avatar", "avatar-ex-sm", "mx-auto"], [1, "text-muted", "mt-4"], [1, "card", "client-testi", "m-2", "text-center", "rounded", "shadow", "border-0"], [1, "text-muted", "h6", "fst-italic"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-small", "mt-3", "rounded-circle", "mx-auto", "shadow"], [1, "list-unstyled", "mb-0", "mt-3"], [1, "card", "client-testi", "border-0", "text-center"], ["src", "assets/images/client/04.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-small", "rounded-circle", "mx-auto", "shadow"], [1, "col-lg-8", "col-12", "mt-4"], [1, "card", "rounded", "bg-light", "overflow-hidden", "border-0", "m-2"], [1, "row", "align-items-center", "g-0"], [1, "col-md-5"], ["src", "assets/images/client/02.jpg", "alt", "", 1, "img-fluid"], [1, "col-md-7"], [1, "card-body", "client-testi"], [1, "text-primary", "fw-bold"], [1, "text-muted", "d-block"], [1, "text-muted", "h6", "mb-0", "fst-italic"], [1, "card", "blog", "rounded", "border-0", "shadow"], ["src", "assets/images/blog/01.jpg", "alt", "...", 1, "card-img-top", "rounded-top"], [1, "overlay", "rounded-top", "bg-dark"], [1, "card-body", "content"], ["href", "javascript:void(0)", 1, "card-title", "title", "text-dark"], [1, "post-meta", "d-flex", "justify-content-between", "mt-3"], [1, "list-inline-item", "me-2", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted", "like"], [1, "uil", "uil-heart", "me-1"], ["href", "javascript:void(0)", 1, "text-muted", "comments"], [1, "uil", "uil-comment", "me-1"], ["routerLink", "/page-blog-detail", 1, "text-muted", "readmore"], [1, "uil", "uil-angle-right-b", "align-middle"], [1, "author"], [1, "text-light", "user", "d-block"], [1, "uil", "uil-user"], [1, "text-light", "date"], [1, "uil", "uil-calendar-alt"], [1, "card", "courses-desc", "overflow-hidden", "rounded", "shadow", "border-0"], [1, "position-relative", "d-block", "overflow-hidden"], ["src", "assets/images/course/1.jpg", "alt", "", 1, "img-fluid", "rounded-top", "mx-auto"], [1, "overlay-work", "bg-dark"], ["href", "javascript:void(0)", 1, "text-white", "h6", "preview"], [1, "rating"], [1, "mdi", "mdi-star", "h5", "mb-0", "text-warning"], [1, "uil", "uil-user", "text-muted"], [1, "fees", "d-flex", "justify-content-between"], [1, "list-unstyled", "mb-0", "numbers"], [1, "mdi", "mdi-school", "text-muted"], [1, "mdi", "mdi-book", "text-muted"], [1, "h6"], [1, "card", "blog", "rounded", "border-0", "shadow", "overflow-hidden"], ["src", "assets/images/course/1.jpg", "alt", "...", 1, "card-img-top"], [1, "overlay", "bg-dark"], [1, "teacher", "d-flex", "align-items-center"], ["src", "assets/images/client/01.jpg", "alt", "", 1, "avatar", "avatar-md-sm", "rounded-circle", "shadow"], [1, "ms-2"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "text-light", "user"], [1, "text-light", "small", "my-0"], [1, "course-fee", "bg-white", "text-center", "shadow-lg", "rounded-circle"], [1, "text-primary", "fw-bold", "fee"], ["href", "javascript:void(0)", 1, "text-primary", "h6"], [1, "list-unstyled", "d-flex", "justify-content-between", "border-top", "mt-3", "pt-3", "mb-0"], [1, "text-muted", "small"], ["name", "book", 1, "fea", "icon-sm", "text-info"], [1, "text-muted", "small", "ms-3"], ["name", "clock", 1, "fea", "icon-sm", "text-warning"], ["name", "eye", 1, "fea", "icon-sm", "text-primary"], [1, "col-lg-6", "col-12", "mt-4", "pt-2"], [1, "col-md-6", "order-2", "order-md-1"], [1, "col-md-6", "order-1", "order-md-2"], ["src", "assets/images/work/15.jpg", "alt", "", 1, "img-fluid"], [1, "card", "shop-list", "border-0", "position-relative"], [1, "label", "list-unstyled", "mb-0"], ["href", "javascript:void(0)", 1, "badge", "badge-link", "rounded-pill", "bg-primary"], ["href", "javascript:void(0)", 1, "badge", "badge-link", "rounded-pill", "bg-success"], ["href", "javascript:void(0)", 1, "badge", "badge-link", "rounded-pill", "bg-warning"], [1, "shop-image", "position-relative", "overflow-hidden", "rounded", "shadow"], ["routerLink", "/shop-product-detail"], ["src", "assets/images/shop/product/s1.jpg", "alt", "", 1, "img-fluid"], ["routerLink", "/shop-product-detail", 1, "overlay-work"], ["src", "assets/images/shop/product/s-1.jpg", "alt", "", 1, "img-fluid"], [1, "list-unstyled", "shop-icons"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-pills", "btn-soft-danger"], ["name", "heart", 1, "icons"], ["href", "javascript:void(0)", "data-bs-toggle", "modal", "data-bs-target", "#productview", 1, "btn", "btn-icon", "btn-pills", "btn-soft-primary"], ["name", "eye", 1, "icons"], ["routerLink", "/shop-cart", 1, "btn", "btn-icon", "btn-pills", "btn-soft-warning"], ["name", "shopping-cart", 1, "icons"], [1, "card-body", "content", "pt-4", "p-2"], ["routerLink", "/shop-product-detail", 1, "text-dark", "product-name", "h6"], [1, "d-flex", "justify-content-between", "mt-1"], [1, "text-muted", "small", "fst-italic", "mb-0", "mt-1"], [1, "text-success", "ms-1"], [1, "list-unstyled", "text-warning", "mb-0"], [1, "mdi", "mdi-star"], [1, "card", "border-0", "work-container", "work-classic"], [1, "card-body", "p-0"], ["src", "assets/images/work/2.jpg", "alt", "", 1, "img-fluid", "rounded", "work-image"], [1, "content", "pt-3"], ["href", "javascript:void(0)", 1, "text-dark", "title"], [1, "text-muted", "tag", "mb-0"], [1, "card", "border-0", "work-container", "work-grid", "position-relative", "d-block", "overflow-hidden", "rounded"], ["href", "assets/images/work/11.jpg", "title", "", 1, "lightbox", "d-inline-block"], ["src", "assets/images/work/11.jpg", "alt", "work-image", 1, "img-fluid"], [1, "content", "bg-white", "p-3"], ["routerLink", "/portfolio-detail-one", 1, "text-dark", "title"], [1, "card", "work-container", "work-modern", "position-relative", "overflow-hidden", "shadow", "rounded", "border-0"], ["src", "assets/images/work/3.jpg", "alt", "work-image", 1, "img-fluid", "rounded"], [1, "content"], ["href", "javascript:void(0)", 1, "title", "text-white", "d-block", "fw-bold"], [1, "text-light"], [1, "client"], [1, "muil", "uil-calendar-alt"], [1, "card", "border-0", "work-container", "work-modern", "position-relative", "d-block", "overflow-hidden", "rounded"], [1, "portfolio-box-img", "position-relative", "overflow-hidden"], ["src", "assets/images/personal/6.jpg", "alt", "1", 1, "item-container", "img-fluid", "mx-auto"], ["routerLink", "/portfolio-detail-one", 1, "text-white", "title"], [1, "text-light", "tag", "mb-0"], [1, "icons", "text-center"], ["href", "javascript:void(0);", 1, "text-primary", "work-icon", "bg-white", "d-inline-block", "rounded-pill"], ["name", "camera", 1, "fea", "icon-sm", "image-icon"], [1, "card", "work-container", "work-modern", "rounded", "border-0", "overflow-hidden"], ["src", "assets/images/hotel/01.jpg", "alt", "work-image", 1, "img-fluid", "rounded"], [1, "overlay-work"], ["href", "javascript:void(0)", 1, "title", "text-white", "pb-2", "border-bottom"], [1, "post-meta", "mb-0", "mt-2", "text-white", "list-unstyled"], [1, "list-inline-item", "me-3"], [1, "mdi", "mdi-bed-empty", "mdi-24px", "me-2"], [1, "mdi", "mdi-scale-bathroom", "mdi-24px", "me-2"], [1, "text-white", "d-block", "mb-0"], [1, "text-success"], [1, "read_more", "bg-primary", "text-center", "rounded-circle"], ["href", "javascript:void(0)", 1, "text-light", "d-block"], ["name", "chevron-right", 1, "fea", "icon-sm", "title-dark"], [1, "card", "work-container", "work-modern", "overflow-hidden", "rounded", "border-0", "shadow-lg"], ["src", "assets/images/course/online/ab02.jpg", "alt", "work-image", 1, "img-fluid"], [1, "card", "categories", "overflow-hidden", "rounded", "shadow", "border-0"], ["src", "assets/images/work/5.jpg", "alt", "", 1, "img-fluid"], [1, "list-unstyled", "d-flex", "justify-content-between", "mb-0"], ["href", "javascript:void(0)", 1, "title", "h6", "text-dark"], [1, "h6", "mb-0", "jobs"], [1, "card", "job-box", "rounded", "shadow", "border-0", "overflow-hidden"], [1, "border-bottom"], ["src", "assets/images/job/remote.jpg", "alt", "", 1, "img-fluid"], [1, "job-overlay", "bg-white"], [1, "mb-0", "position"], ["routerLink", "/page-job-detail", 1, "text-dark", "h5"], [1, "list-unstyled", "h6", "mb-0", "text-warning"], [1, "list-inline-item", "mb-0"], [1, "list-unstyled", "head", "mb-0"], [1, "badge", "bg-danger", "rounded-pill"], [1, "card-body", "content", "position-relative"], [1, "firm-logo", "rounded-circle", "shadow", "bg-light", "text-center"], ["src", "assets/images/job/Circleci.svg", "alt", "", 1, "avatar", "avatar-md-sm"], [1, "company-detail", "text-center", "mt-3"], ["routerLink", "/page-job-company", 1, "text-dark", "company-name"], ["data-type", "iframe", 1, "video-play-icon", "text-muted", 3, "click"], ["name", "map-pin", 1, "fea", "icon-sm"], ["content", ""], [1, "job-facts", "list-unstyled"], [1, "list-inline-item", "text-muted"], ["name", "check", 1, "fea", "icon-sm", "text-success", "me-1"], [1, "d-grid"], ["routerLink", "/page-job-detail", 1, "btn", "btn-outline-primary"], [1, "candidate-list", "card", "rounded", "border-0", "shadow"], [1, "list-unstyled", "align-items-center"], [1, "list-inline-item", "float-end"], [1, "mdi", "mdi-heart", "h5", "mb-0"], [1, "badge", "rounded-pill", "bg-soft-success"], [1, "content", "text-center"], ["src", "assets/images/client/02.jpg", "alt", "", 1, "avatar", "avatar-md-md", "shadow-md", "rounded-circle"], [1, "list-unstyled", "mb-1", "mt-2"], ["routerLink", "/page-job-candidate", 1, "text-dark", "h5", "name"], [1, "text-muted", "my-1"], [1, "uil", "uil-graduation-cap", "h4", "mb-0", "me-2", "text-primary"], [1, "list-unstyled", "mt-3"], [1, "list-inline-item", "m-1"], ["href", "jvascript:void(0)", 1, "rounded", "bg-light", "py-1", "px-2", "text-muted", "small"], ["routerLink", "/page-job-candidate", 1, "btn", "btn-soft-primary"], [1, "company-list", "card", "border-0", "rounded", "shadow", "bg-white"], [1, "text-center", "py-5", "border-bottom"], ["src", "assets/images/job/Circleci.svg", "alt", "", 1, "avatar", "avatar-small", "mx-auto", "rounded-circle", "d-block", "mb-3"], ["routerLink", "page-job-company", 1, "text-dark", "h5", "name"], [1, "text-muted", "mt-1", "mb-0"], [1, "p-4"], [1, "list-unstyled", "mb-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-map-pin", "fea", "icon-sm", "text-warning", "me-2"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-link", "fea", "icon-sm", "text-warning", "me-2"], ["d", "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"], ["d", "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-dollar-sign", "fea", "icon-sm", "text-warning", "me-2"], ["x1", "12", "y1", "1", "x2", "12", "y2", "23"], ["d", "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-users", "fea", "icon-sm", "text-warning", "me-2"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["routerLink", "/page-job-company", 1, "btn", "btn-soft-primary"], [1, "card", "pricing-rates", "business-rate", "shadow", "bg-light", "rounded", "text-center", "border-0"], [1, "title", "fw-bold", "text-uppercase", "text-primary", "mb-4"], [1, "d-flex", "justify-content-center", "mb-4"], [1, "h4", "mb-0", "mt-2"], [1, "price", "h1", "mb-0"], [1, "h4", "align-self-end", "mb-1"], [1, "list-unstyled", "mb-0", "ps-0"], [1, "h6", "text-muted", "mb-0"], [1, "text-primary", "h5", "me-2"], [1, "uil", "uil-check-circle", "align-middle"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-4"], [1, "col-lg-5", "col-md-6", "mt-4", "pt-2"], [1, "card", "rounded", "shadow", "bg-light", "border-0"], ["src", "assets/images/payments/payment/master.png", "height", "60", "alt", "", 1, "text-end"], [1, ""], [1, "d-flex", "justify-content-between"], [1, "col-lg-3", "col-md-6", "col-12", "mt-4", "pt-2"], ["id", "counter", 1, "row"], [1, "card", "counter-box", "border-0", "bg-primary", "shadow", "text-center", "rounded"], [1, "mb-0", "text-light", "title-dark"], [1, "counter-value", 3, "CountTo", "from", "duration"], [1, "counter-head", "text-light", "title-dark", "mb-0"], [1, "col-lg-5", "mt-4", "pt-2"], [1, "card", "event-schedule", "rounded", "border"], [1, "d-flex"], [1, "date", "text-center", "text-primary", "me-3", "mb-0", "list-unstyled"], [1, "day", "fw-bold", "mb-2"], [1, "month", "fw-bold"], [1, "flex-1", "content"], [1, "text-muted", "location-time"], [1, "text-dark", "h6"], [1, "text-danger"], ["routerLink", "/widget", 1, "btn", "btn-sm", "btn-outline-primary"], [1, "col-md-6", "col-12", "mt-4", "pt-2"], ["name", "help-circle", 1, "fea", "icon-ex-md", "text-primary", "me-2", "mt-1"], [1, "mt-0"], [1, "answer", "text-muted", "mb-0"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin", "height", "450", "width", "750"]], template: function WidgetComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Widget ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "nav", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 9)(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13)(19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "section", 17)(23, "div", 1)(24, "div", 18)(25, "div", 19)(26, "div", 20)(27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Features Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21)(30, "div", 22)(31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 25)(34, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Easy To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 21)(39, "div", 27)(40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i-feather", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 30)(43, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Use On Any Device");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 21)(48, "div", 32)(49, "div", 33)(50, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Final Approvement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ul", 37)(58, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Step 03.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 21)(63, "div", 41)(64, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 44)(67, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Unlimited Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 21)(76, "div", 49)(77, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 52)(80, "h5", 53)(81, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " Low Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "If the distribution of letters and 'words' is random, the reader will not be distracted.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 55)(86, "div", 56)(87, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 58)(90, "h5", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Start working with Dalois that can provide everything");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "+152 534-468-854");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 55)(97, "div", 62)(98, "div", 33)(99, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "i-feather", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "h5", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Perfect Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Dummy text is text that is used in the publishing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 21)(106, "div", 56)(107, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 44)(110, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Fully Secured");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 67)(115, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "i-feather", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 21)(119, "div", 69)(120, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 71)(123, "h5", 72)(124, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Learners");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "This is required when, for text is not yet available.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 21)(129, "div", 74)(130, "div", 50)(131, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "i-feather", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 58)(134, "h5")(135, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "IT & Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 21)(140, "div", 78)(141, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 81)(144, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Our Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "It is a long established fact that a reader will be of a page reader will be of at its layout.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 18)(149, "div", 83)(150, "div", 20)(151, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Testimonial Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 21)(154, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 86)(157, "ul", 87)(158, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "\" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "- Christa Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "small", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 21)(175, "div", 91)(176, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "p", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "\" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "- Barbara McIntosh");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 21)(183, "div", 94)(184, "div", 33)(185, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "\" It seems that only fragments of the oem Ipsum', which is said to have originated in the 16th century. \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "ul", 97)(189, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](194, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "- Dean Tolle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "small", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 21)(204, "div", 98)(205, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "img", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "p", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "\" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "- Jill Webb");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 100)(212, "div", 101)(213, "div", 102)(214, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "img", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 105)(217, "div", 106)(218, "h6", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Barbara McIntosh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "small", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "ul", 87)(223, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](230, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](232, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "p", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "\" This seems that only fragments of the original text remain in the Ipsum texts used today. The well known have originated in the 16th century. \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 18)(236, "div", 83)(237, "div", 20)(238, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Blog Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 21)(241, "div", 110)(242, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](243, "img", 111)(244, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 113)(246, "h5")(247, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "Design your apps in your own way");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 115)(250, "ul", 87)(251, "li", 116)(252, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](253, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "33");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "li", 88)(256, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](257, "i", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "08");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "a", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "i", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "div", 123)(263, "small", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](264, "i", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, " Calvin Carlo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "small", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "i", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, " 13th August, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 21)(270, "div", 128)(271, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](272, "img", 130)(273, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "a", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "Preview Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](276, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 33)(278, "h5")(279, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "Program for Missionaries");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 133)(282, "ul", 87)(283, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](284, "i", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](286, "i", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](288, "i", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](290, "i", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](292, "i", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "5 Star (3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](295, "i", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "div", 136)(298, "ul", 137)(299, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](300, "i", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, " 30 Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](303, "i", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, " 5 Lession");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "h4")(306, "span", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, "75");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "div", 21)(310, "div", 141)(311, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](312, "img", 142)(313, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](315, "img", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "div", 146)(317, "h6", 147)(318, "a", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](319, "Dung Lewis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "p", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "Professor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "div", 150)(323, "h6", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "$11");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "div", 13)(326, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](328, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 113)(330, "small")(331, "a", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "h5", 67)(334, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Program for Missionaries");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "The most well-known dummy text is the have originated in the 16th century.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](340, "i", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "ul", 153)(342, "li", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](343, "i-feather", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, " 25 Lectures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "li", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](346, "i-feather", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, " 1h 30m ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "li", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](349, "i-feather", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, " 3012 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "div", 159)(352, "div", 141)(353, "div", 102)(354, "div", 160)(355, "div", 113)(356, "h5")(357, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "Design your apps in your own way");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "Due to its widespread use as filler text for layouts, non-readability");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "div", 115)(362, "ul", 87)(363, "li", 116)(364, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](365, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, "33");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "li", 88)(368, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](369, "i", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "08");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "a", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](373, "i", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](375, "img", 162)(376, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "div", 123)(378, "small", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](379, "i", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, " Calvin Carlo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "small", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](382, "i", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](383, " 13th August, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "div", 18)(385, "div", 83)(386, "div", 20)(387, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](388, "Shop Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "div", 21)(390, "div", 163)(391, "ul", 164)(392, "li")(393, "a", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "li")(396, "a", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](397, "Featured");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "li")(399, "a", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](400, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "div", 168)(402, "a", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](403, "img", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "a", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](405, "img", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "ul", 173)(407, "li")(408, "a", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](409, "i-feather", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "li", 67)(411, "a", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](412, "i-feather", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "li", 67)(414, "a", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](415, "i-feather", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "div", 180)(417, "a", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](418, "T-Shirts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](419, "div", 182)(420, "h6", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](421, "$5.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "span", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](423, "30% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "ul", 185)(425, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](426, "i", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](428, "i", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](430, "i", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](432, "i", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](434, "i", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "div", 18)(436, "div", 83)(437, "div", 20)(438, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](439, "Work, Project & Portfolio Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "div", 21)(441, "div", 187)(442, "div", 188)(443, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](444, "img", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "div", 190)(446, "h5", 147)(447, "a", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](448, "Iphone mockup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "h6", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](450, "Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "div", 21)(452, "div", 193)(453, "div", 188)(454, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](455, "img", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "div", 196)(457, "h5", 147)(458, "a", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](459, "Black and white T-shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](460, "h6", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](461, "Clothes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "div", 21)(463, "div", 198)(464, "div", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](465, "img", 199)(466, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](467, "div", 200)(468, "a", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, "Spa Cosmetics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "small", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](471, "Developing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "div", 203)(473, "small", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](474, "i", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](475, " Calvin Carlo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "small", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](477, "i", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](478, " 13th August, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](479, "div", 21)(480, "div", 205)(481, "div", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](482, "img", 207)(483, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "div", 200)(485, "h5", 147)(486, "a", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](487, "Mockup box with paints");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](488, "h6", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](489, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](490, "div", 210)(491, "a", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](492, "i-feather", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "div", 55)(494, "div", 213)(495, "div", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](496, "img", 214)(497, "div", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](498, "div", 200)(499, "a", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](500, "Regular Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](501, "ul", 217)(502, "li", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](503, "i", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](504, "1 Bed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](505, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](506, "i", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](507, "1 Bathrooms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](508, "p", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](509, "Rent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](510, "span", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](511, "$350");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](512, " /Night");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](513, "div", 223)(514, "a", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](515, "i-feather", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](516, "div", 55)(517, "div", 226)(518, "div", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](519, "img", 227)(520, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "div", 200)(522, "a", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](523, "Michanical Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](524, "small", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](525, "Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](526, "div", 18)(527, "div", 83)(528, "div", 20)(529, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](530, "Job Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](531, "div", 55)(532, "div", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](533, "img", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](534, "div", 33)(535, "ul", 230)(536, "li")(537, "a", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](538, "Communications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](539, "li", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](540, "125 Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](541, "div", 21)(542, "div", 233)(543, "div", 234)(544, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](545, "img", 235)(546, "div", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](547, "div", 237)(548, "a", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](549, "Python Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](550, "ul", 239)(551, "li", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](552, "i", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](553, "li", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](554, "i", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](555, "li", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](556, "i", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](557, "li", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](558, "i", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](559, "li", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](560, "i", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](561, "ul", 241)(562, "li", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](563, "Remote");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](564, "div", 243)(565, "div", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](566, "img", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](567, "div", 246)(568, "h5", 147)(569, "a", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](570, "CircleCi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](571, "p", 60)(572, "a", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WidgetComponent_Template_a_click_572_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](576); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.mapView(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](573, "i-feather", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](574, " San Francisco ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](575, WidgetComponent_ng_template_575_Template, 6, 0, "ng-template", null, 250, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](577, "ul", 251)(578, "li", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](579, "i-feather", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](580, " 2 Year Expirence ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](581, "li", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](582, "i-feather", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](583, " Working Hours- 6hr ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](584, "li", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](585, "i-feather", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](586, " Information strategy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](587, "div", 254)(588, "a", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](589, "Apply Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](590, "div", 21)(591, "div", 256)(592, "div", 33)(593, "ul", 257)(594, "li", 258)(595, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](596, "i", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](597, "li", 88)(598, "span", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](599, "Featured");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](600, "div", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](601, "img", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](602, "ul", 263)(603, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](604, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](605, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](606, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](607, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](608, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](609, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](610, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](611, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](612, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](613, "a", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](614, "Martha Griffin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](615, "p", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](616, "WordPress Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](617, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](618, "i", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](619, "Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](620, "span", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](621, "3+ years");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](622, "ul", 267)(623, "li", 268)(624, "a", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](625, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](626, "li", 268)(627, "a", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](628, "WordPress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](629, "li", 268)(630, "a", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](631, "Web Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](632, "li", 268)(633, "a", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](634, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](635, "li", 268)(636, "a", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](637, "JS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](638, "div", 254)(639, "a", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](640, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](641, "i-feather", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](642, "div", 21)(643, "div", 271)(644, "div", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](645, "img", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](646, "a", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](647, "CircleCi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](648, "p", 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](649, "Internet Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](650, "div", 276)(651, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](652, "Company Details :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](653, "ul", 277)(654, "li", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](655, "svg", 278);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](656, "path", 279)(657, "circle", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](658, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](659, "Location :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](660, " San Francisco");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](661, "li", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](662, "svg", 281);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](663, "path", 282)(664, "path", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](665, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](666, "Comapny :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](667, " circleci.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](668, "li", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](669, "svg", 284);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](670, "line", 285)(671, "path", 286);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](672, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](673, "Revenue :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](674, " $ 5M / Annual");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](675, "li", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](676, "svg", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](677, "path", 288)(678, "circle", 289)(679, "path", 290)(680, "path", 291);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](681, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](682, "No. of employees :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](683, " 200");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](684, "div", 254)(685, "a", 292);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](686, "View Detail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](687, "i-feather", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](688, "div", 18)(689, "div", 83)(690, "div", 20)(691, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](692, "Price Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](693, "div", 21)(694, "div", 293)(695, "div", 50)(696, "h6", 294);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](697, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](698, "div", 295)(699, "span", 296);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](700, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](701, "span", 297);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](702, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](703, "span", 298);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](704, "/mo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](705, "ul", 299)(706, "li", 300)(707, "span", 301);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](708, "i", 302);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](709, "Full Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](710, "li", 300)(711, "span", 301);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](712, "i", 302);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](713, "Enhanced Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](714, "li", 300)(715, "span", 301);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](716, "i", 302);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](717, "Source Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](718, "li", 300)(719, "span", 301);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](720, "i", 302);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](721, "1 Domain Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](722, "a", 303);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](723, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](724, "div", 18)(725, "div", 83)(726, "div", 20)(727, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](728, "Payment Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](729, "div", 304)(730, "div", 305)(731, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](732, "img", 306);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](733, "div", 52)(734, "h5", 307);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](735, "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4559");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](736, "div", 308)(737, "p", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](738, "Cristino Murfy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](739, "h6", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](740, "Exp: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](741, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](742, "10/22");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](743, "div", 18)(744, "div", 83)(745, "div", 20)(746, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](747, "Counter Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](748, "div", 309)(749, "div", 310)(750, "div", 19)(751, "div", 311)(752, "div", 50)(753, "h2", 312);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](754, "span", 313);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](755, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](756, "h5", 314);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](757, "Happy Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](758, "div", 18)(759, "div", 83)(760, "div", 20)(761, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](762, "Event Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](763, "div", 315)(764, "div", 316)(765, "div", 33)(766, "div", 317)(767, "ul", 318)(768, "li", 319);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](769, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](770, "li", 320);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](771, "OCT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](772, "div", 321)(773, "h4")(774, "a", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](775, "Digital Conference Event Intro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](776, "p", 322)(777, "span", 323);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](778, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](779, " Hall 3, Sinchang-dong, Kwangju, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](780, "span", 324);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](781, "South Korea");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](782, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](783, "span", 323);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](784, "Time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](785, " 10:30AM to 11:15AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](786, "a", 325);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](787, "Buy Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](788, "div", 18)(789, "div", 83)(790, "div", 20)(791, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](792, "FAQs Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](793, "div", 326)(794, "div", 317);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](795, "i-feather", 327);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](796, "div", 30)(797, "h5", 328);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](798, "How our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](799, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](800, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](801, " work ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](802, "p", 329);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](803, "Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](804, "a", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](805, "i-feather", 331);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](754);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CountTo", 97)("from", 3)("duration", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxScrollTo", "#home");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__.ScrollToDirective, angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 62891:
/*!***********************************************!*\
  !*** ./src/app/shared/blog/blog.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



function BlogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7)(6, "h5")(7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "ul", 10)(11, "li", 11)(12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 14)(16, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19)(23, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.like);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.date, "");
} }
class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], inputs: { blogData: "blogData" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-lg-4 col-md-6 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6", "mt-4", "pt-2"], [1, "card", "blog", "rounded", "border-0", "shadow"], [1, "position-relative"], ["alt", "...", 1, "card-img-top", "rounded-top", 3, "src"], [1, "overlay", "rounded-top", "bg-dark"], [1, "card-body", "content"], ["href", "javascript:void(0)", 1, "card-title", "title", "text-dark"], [1, "post-meta", "d-flex", "justify-content-between", "mt-3"], [1, "list-unstyled", "mb-0"], [1, "list-inline-item", "me-2", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted", "like"], [1, "uil", "uil-heart", "me-1"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "text-muted", "comments"], [1, "uil", "uil-comment", "me-1"], ["routerLink", "/page-blog-detail", "href", "javascript:void(0);", 1, "text-muted", "readmore"], [1, "uil", "uil-angle-right-b"], [1, "author"], [1, "text-light", "user", "d-block"], [1, "uil", "uil-user"], [1, "text-light", "date"], [1, "uil", "uil-calendar-alt"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlogComponent_div_1_Template, 29, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogData);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 21717:
/*!*******************************************************!*\
  !*** ./src/app/shared/features/features.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesComponent": () => (/* binding */ FeaturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 5601);



function FeaturesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i-feather", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9)(5, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", data_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
} }
;
class FeaturesComponent {
    constructor() {
        /**
         * Clients Logo
         */
        this.featuresdata = [
            {
                icon: "monitor",
                title: "Fully Responsive"
            },
            {
                icon: "heart",
                title: "Browser Compatibility"
            },
            {
                icon: "eye",
                title: "Retina Ready"
            },
            {
                icon: "bold",
                title: "Based On Bootstrap 5"
            },
            {
                icon: "feather",
                title: "Feather Icons"
            },
            {
                icon: "code",
                title: "Built With SASS"
            },
            {
                icon: "user-check",
                title: "W3c Valid Code"
            },
            {
                icon: "git-merge",
                title: "Flaticon Icons"
            },
            {
                icon: "settings",
                title: "Easy to customize"
            }
        ];
    }
    ngOnInit() {
    }
}
FeaturesComponent.ɵfac = function FeaturesComponent_Factory(t) { return new (t || FeaturesComponent)(); };
FeaturesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturesComponent, selectors: [["app-features"]], decls: 6, vars: 1, consts: [[1, "row"], ["class", "col-lg-4 col-md-6 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "col-12", "mt-4", "pt-2", "text-center"], ["href", "javascript:void(0)", 1, "btn", "btn-primary"], [1, "uil", "uil-angle-right"], [1, "col-lg-4", "col-md-6", "mt-4", "pt-2"], [1, "d-flex", "key-feature", "align-items-center", "p-3", "rounded", "shadow"], [1, "icon", "text-center", "rounded-circle", "me-3"], [1, "fea", "icon-ex-md", "text-primary", 3, "name"], [1, "flex-1"], [1, "title", "mb-0"]], template: function FeaturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeaturesComponent_div_1_Template, 7, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "See More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.featuresdata);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 45227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 5601);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




function FooterComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "footer", 21)(2, "div", 22)(3, "div", 23)(4, "div", 24)(5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "UEEBg \"Fer de lance\".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 28)(10, "li", 11)(11, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i-feather", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 14)(14, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i-feather", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 14)(17, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i-feather", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 14)(20, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i-feather", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 34)(23, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Newsletter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Connectez-vous afin de toujour \u00EAtre notifi\u00E9 de toutes les actualit\u00E9es.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form")(28, "div", 23)(29, "div", 36)(30, "div", 37)(31, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Votre email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i-feather", 41)(37, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 36)(39, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
} }
function FooterComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 45)(1, "div", 22)(2, "div", 23)(3, "div", 24)(4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "UEEBg \"Fer de lance\".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 47)(9, "li", 11)(10, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i-feather", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 14)(13, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i-feather", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 14)(16, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i-feather", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 14)(19, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i-feather", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 34)(22, "h5", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Newsletter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Connectez-vous afin de toujour \u00EAtre notifi\u00E9 de toutes les actualit\u00E9es.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form")(27, "div", 23)(28, "div", 36)(29, "div", 37)(30, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Votre email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i-feather", 41)(36, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 36)(38, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
} }
function FooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_0_div_1_Template, 41, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FooterComponent_div_0_ng_template_2_Template, 40, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.footerVariant == "bg-light")("ngIfElse", _r2);
} }
/***
 * Footer Component
 */
class FooterComponent {
    constructor() {
        //Get Year
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], inputs: { footerVariant: "footerVariant", hideFooter: "hideFooter" }, decls: 31, vars: 2, consts: [[4, "ngIf"], [1, "footer", "footer-bar"], [1, "container", "text-center"], [1, "row", "align-items-center"], [1, "col-sm-6"], [1, "text-sm-start"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"], ["href", "javascript:void(0);", 1, "text-reset"], [1, "col-sm-6", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "list-unstyled", "text-sm-end", "mb-0"], [1, "list-inline-item"], ["href", "javascript:void(0)"], ["src", "assets/images/payments/american-ex.png", "title", "American Express", "alt", "", 1, "avatar", "avatar-ex-sm"], [1, "list-inline-item", "ms-1"], ["src", "assets/images/payments/discover.png", "title", "Discover", "alt", "", 1, "avatar", "avatar-ex-sm"], ["src", "assets/images/payments/master-card.png", "title", "Master Card", "alt", "", 1, "avatar", "avatar-ex-sm"], ["src", "assets/images/payments/paypal.png", "title", "Paypal", "alt", "", 1, "avatar", "avatar-ex-sm"], ["src", "assets/images/payments/visa.png", "title", "Visa", "alt", "", 1, "avatar", "avatar-ex-sm"], [4, "ngIf", "ngIfElse"], ["execute_block", ""], [1, "footer", "bg-light"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-12", "mb-0", "mb-md-4", "pb-0", "pb-md-2"], ["href", "#", 1, "logo-footer"], ["src", "assets/images/logo-dark.png", "height", "24", "alt", ""], [1, "mt-4", "text-muted"], [1, "list-unstyled", "social-icon", "social", "mb-0", "mt-4"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], [1, "col-lg-3", "col-md-4", "col-12", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "text-dark", "footer-head"], [1, "col-lg-12"], [1, "foot-subscribe", "foot-white", "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["type", "email", "name", "email", "id", "emailsubscribe", "placeholder", "Your email : ", "required", "", 1, "form-control", "bg-light", "border", "ps-5", "rounded"], [1, "d-grid"], ["type", "submit", "id", "submitsubscribe", "name", "send", "value", "Subscribe", 1, "btn", "btn-soft-primary"], [1, "footer"], ["src", "assets/images/logo-light.png", "height", "24", "alt", ""], [1, "list-unstyled", "social-icon", "foot-social-icon", "mb-0", "mt-4"], [1, "text-light", "footer-head"], [1, "mt-4"], ["type", "email", "name", "email", "id", "emailsubscribe", "placeholder", "Your email : ", "required", "", 1, "form-control", "ps-5", "rounded"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dalois");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9)(15, "ul", 10)(16, "li", 11)(17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 14)(20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 14)(23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 14)(26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 14)(29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideFooter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.year, " Dalois. Design with ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 89470:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ 5601);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);







function HeaderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18)(1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ueebg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ueebg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function HeaderComponent_ul_4_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58)(1, "div", 59)(2, "div", 60)(3, "div", 61)(4, "h1", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 64)(7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your wishlist is empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create your first wishlist request...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 64)(12, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "+ Create new wishlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
} }
function HeaderComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 21)(1, "li", 22)(2, "div", 23)(3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26)(6, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 28)(9, "div", 23)(10, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 31)(13, "div", 32)(14, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 35)(17, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "T-shirt (M)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "$320 X 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "$640");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 35)(26, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Bag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "$50 X 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "$250");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 35)(35, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Watch (Men)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "$800 X 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "$800");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 41)(42, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Total($):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "$1690");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 42)(47, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "View Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "*T&C Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 28)(54, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_4_Template_a_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.wishListModal(_r6)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, HeaderComponent_ul_4_ng_template_56_Template, 14, 0, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 22)(59, "div", 49)(60, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 51)(63, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Order History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
} }
function HeaderComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 21)(1, "li", 67)(2, "div", 68)(3, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 71)(6, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 67)(9, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 67)(12, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 67)(15, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 67)(18, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} }
function HeaderComponent_ul_6_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82)(1, "div", 83)(2, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_6_ng_template_17_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const modal_r12 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r12.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 85)(4, "div", 86)(5, "div", 87)(6, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 90)(9, "form", 91)(10, "div", 92)(11, "div", 93)(12, "div", 94)(13, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Your Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i-feather", 98)(19, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 93)(21, "div", 94)(22, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i-feather", 100)(28, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 93)(30, "div", 102)(31, "div", 94)(32, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Remember me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 106)(37, "a", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Forgot password ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 108)(40, "div", 109)(41, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 111)(44, "p", 112)(45, "small", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Don't have an account ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
} }
function HeaderComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 21)(1, "li", 22)(2, "div", 68)(3, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 71)(6, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 28)(9, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 28)(12, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 22)(15, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_6_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.developerModal(_r10)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_ul_6_ng_template_17_Template, 49, 0, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 115)(2, "img", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_span_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_span_8_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_span_8_ng_template_2_Template, 4, 0, "ng-template", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_span_8_ng_template_3_Template, 2, 0, "ng-template", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.navClass === "nav-light");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.navClass !== "nav-light");
} }
const _c0 = function (a0) { return { "tagline-height": a0 }; };
const _c1 = function (a0) { return { "open": a0 }; };
/***
 * Header Component
 */
class HeaderComponent {
    constructor(router, modalService) {
        this.router = router;
        this.modalService = modalService;
        this.isCondensed = false;
        this.router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
                this._activateMenuDropdown();
            }
        });
    }
    ngAfterViewInit() {
        this._activateMenuDropdown();
    }
    ngOnInit() {
    }
    _activateMenuDropdown() {
        /**
         * Menu activation reset
         */
        const resetParent = (el) => {
            el.classList.remove("active");
            const parent = el.parentElement;
            /**
             * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
             * We should come up with non hard coded approach
             */
            if (parent) {
                parent.classList.remove("active");
                const parent2 = parent.parentElement;
                if (parent2) {
                    parent2.classList.remove("active");
                    const parent3 = parent2.parentElement;
                    if (parent3) {
                        parent3.classList.remove("active");
                        const parent4 = parent3.parentElement;
                        if (parent4) {
                            const parent5 = parent4.parentElement;
                            parent5.classList.remove("active");
                        }
                    }
                }
            }
        };
        let links = document.getElementsByClassName("nav-link-ref");
        let matchingMenuItem = null;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < links.length; i++) {
            // reset menu
            resetParent(links[i]);
        }
        for (let i = 0; i < links.length; i++) {
            if (window.location.pathname === links[i]["pathname"]) {
                matchingMenuItem = links[i];
                break;
            }
        }
        if (matchingMenuItem) {
            matchingMenuItem.classList.add("active");
            const parent = matchingMenuItem.parentElement;
            /**
             * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
             * We should come up with non hard coded approach
             */
            if (parent) {
                parent.classList.add("active");
                const parent2 = parent.parentElement;
                if (parent2) {
                    parent2.classList.add("active");
                    const parent3 = parent2.parentElement;
                    if (parent3) {
                        parent3.classList.add("active");
                        const parent4 = parent3.parentElement;
                        if (parent4) {
                            const parent5 = parent4.parentElement;
                            parent5.classList.add("active");
                            document.getElementById("navigation").style.display = "none";
                            this.isCondensed = false;
                        }
                    }
                }
            }
        }
    }
    /**
     * Window scroll method
     */
    // tslint:disable-next-line: typedef
    windowScroll() {
        if (document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50) {
            document.getElementById("topnav").classList.add("nav-sticky");
        }
        else {
            document.getElementById("topnav").classList.remove("nav-sticky");
        }
        if (document.getElementById("back-to-top")) {
            if (document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100) {
                document.getElementById("back-to-top").style.display = "inline";
            }
            else {
                document.getElementById("back-to-top").style.display = "none";
            }
        }
    }
    /**
     * Toggle menu
     */
    toggleMenu() {
        this.isCondensed = !this.isCondensed;
        if (this.isCondensed) {
            document.getElementById("navigation").style.display = "block";
        }
        else {
            document.getElementById("navigation").style.display = "none";
        }
    }
    /**
     * Menu clicked show the submenu
     */
    onMenuClick(event) {
        event.preventDefault();
        const nextEl = event.target.nextSibling.nextSibling;
        if (nextEl && !nextEl.classList.contains("open")) {
            const parentEl = event.target.parentNode;
            if (parentEl) {
                parentEl.classList.remove("open");
            }
            nextEl.classList.add("open");
        }
        else if (nextEl) {
            nextEl.classList.remove("open");
        }
        return false;
    }
    developerModal(content) {
        this.modalService.open(content, { size: 'lg', centered: true });
    }
    wishListModal(content) {
        this.modalService.open(content, { centered: true });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { navClass: "navClass", buttonList: "buttonList", sliderTopbar: "sliderTopbar", isdeveloper: "isdeveloper", shopPages: "shopPages" }, decls: 36, vars: 16, consts: [["id", "topnav", 1, "defaultscroll", "sticky", 3, "ngClass", "scroll"], [1, "container"], ["class", "logo", "routerLink", "/index", 4, "ngIf"], ["class", "buy-button list-inline mb-0", 4, "ngIf"], [4, "ngIf"], [1, "menu-extras"], [1, "menu-item"], ["id", "isToggle", 1, "navbar-toggle", 3, "ngClass", "click"], [1, "lines"], ["id", "navigation"], [1, "navigation-menu"], ["routerLink", "/", 1, "nav-link-ref"], ["routerLink", "/about", 1, "nav-link-ref"], ["routerLink", "/index-portfolio", 1, "nav-link-ref"], ["routerLink", "index-blog", 1, "nav-link-ref"], ["routerLink", "page-contact-detail", 1, "nav-link-ref"], [1, "buy-menu-btn", "d-none"], ["routerLink", "/auth-login", 1, "btn", "btn-primary", "login-btn-primary"], ["routerLink", "/index", 1, "logo"], ["height", "24", "alt", "", 1, "l-dark", "logo-light-mode"], ["src", "assets/images/logo-light.png", "height", "24", "alt", "", 1, "logo-dark-mode"], [1, "buy-button", "list-inline", "mb-0"], [1, "list-inline-item", "mb-0"], ["ngbDropdown", "", 1, "dropdown"], ["type", "button", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-link", "text-decoration-none", "dropdown-toggle", "p-0", "pe-2"], [1, "uil", "uil-search", "h5", "text-muted"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dd-menu", "dropdown-menu-end", "bg-white", "shadow", "rounded", "border-0", "mt-3", "py-0", 2, "width", "300px"], ["type", "text", "id", "text", "name", "name", "placeholder", "Search...", 1, "form-control", "border", "bg-white"], [1, "list-inline-item", "mb-0", "pe-1"], ["type", "button", "ngbDropdownToggle", "", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-icon", "btn-soft-primary", "dropdown-toggle"], [1, "uil", "uil-shopping-cart", "align-middle", "icons"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dd-menu", "dropdown-menu-end", "bg-white", "shadow", "rounded", "border-0", "mt-3", "p-4", 2, "width", "300px"], [1, "pb-4"], ["href", "javascript:void(0)", 1, "d-flex", "align-items-center"], ["src", "assets/images/shop/product/s-1.jpg", "alt", "", 1, "shadow", "rounded", 2, "max-height", "64px"], [1, "flex-1", "text-start", "ms-3"], [1, "text-dark", "mb-0"], [1, "text-muted", "mb-0"], ["href", "javascript:void(0)", 1, "d-flex", "align-items-center", "mt-4"], ["src", "assets/images/shop/product/s-2.jpg", "alt", "", 1, "shadow", "rounded", 2, "max-height", "64px"], ["src", "assets/images/shop/product/s-3.jpg", "alt", "", 1, "shadow", "rounded", 2, "max-height", "64px"], [1, "d-flex", "align-items-center", "justify-content-between", "pt-4", "border-top"], [1, "mt-3", "text-center"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-primary"], [1, "text-muted", "text-start", "mt-1", "mb-0"], ["href", "javascript:void(0);", 1, "btn", "btn-icon", "btn-soft-primary", 3, "click"], [1, "uil", "uil-heart", "align-middle", "icons"], ["content", ""], ["ngbDropdown", "", 1, "dropdown", "dropdown-primary"], [1, "uil", "uil-user", "align-middle", "icons"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "bg-white", "shadow", "rounded", "border-0", "mt-3", "py-3", 2, "width", "200px"], ["href", "#", 1, "dropdown-item", "text-dark"], [1, "uil", "uil-user", "align-middle", "me-1"], [1, "uil", "uil-clipboard-notes", "align-middle", "me-1"], [1, "uil", "uil-arrow-circle-down", "align-middle", "me-1"], [1, "dropdown-divider", "my-3", "border-top"], [1, "uil", "uil-sign-out-alt", "align-middle", "me-1"], [1, "modal-content", "rounded", "shadow-lg", "border-0", "overflow-hidden"], [1, "modal-body", "py-5"], [1, "text-center"], [1, "icon", "d-flex", "align-items-center", "justify-content-center", "bg-soft-danger", "rounded-circle", "mx-auto", 2, "height", "95px", "width", "95px"], [1, "mb-0"], [1, "uil", "uil-heart-break", "align-middle"], [1, "mt-4"], [1, "text-muted"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary"], [1, "list-inline-item", "mb-0", "ms-1"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-link", "text-decoration-none", "dropdown-toggle", "p-0", "pe-2"], [1, "uil", "uil-search", "text-muted"], [1, "dropdown-menu", "dd-menu", "dropdown-menu-end", "bg-white", "shadow", "rounded", "border-0", "mt-3", "py-0", 2, "width", "300px"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-primary"], [1, "uil", "uil-facebook-f", "icons"], [1, "uil", "uil-github", "icons"], [1, "uil", "uil-twitter", "icons"], [1, "uil", "uil-linkedin-alt", "icons"], ["type", "text", "id", "text2", "name", "name", "placeholder", "Search...", 1, "form-control", "border", "bg-white"], ["href", "#", 1, "btn", "btn-icon", "btn-soft-primary"], [1, "mdi", "mdi-stack-overflow", "mdi-18px", "icons"], ["href", "javascript:void(0)", "data-bs-toggle", "modal", "data-bs-target", "#loginform", 1, "btn", "btn-icon", "btn-soft-primary", 3, "click"], [1, "uil", "uil-user", "icons"], ["role", "document", 1, "modal-lg", "modal-dialog-centered"], [1, "modal-content", "rounded", "shadow-lg", "border-0", "overflow-hidden", "position-relative"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "position-absolute", "top-0", "end-0", "mt-2", "me-2", 2, "z-index", "1", 3, "click"], [1, "modal-body", "p-0"], [1, "container-fluid", "px-0"], [1, "row", "align-items-center", "g-0"], [1, "col-lg-6", "col-md-5"], ["src", "assets/images/course/online/ab02.jpg", "alt", "", 1, "img-fluid"], [1, "col-lg-6", "col-md-7"], [1, "login-form", "p-4"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], ["name", "key", 1, "fea", "icon-sm", "icons"], ["type", "password", "placeholder", "Password", "required", "", 1, "form-control", "ps-5"], [1, "d-flex", "justify-content-between"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label", "ms-1"], [1, "forgot-pass", "mb-0"], ["routerLink", "/auth-re-password", 1, "text-dark", "fw-bold"], [1, "col-lg-12", "mb-0"], [1, "d-grid"], [1, "btn", "btn-primary"], [1, "col-12", "text-center"], [1, "mb-0", "mt-3"], [1, "text-dark", "me-2"], ["routerLink", "/auth-signup", 1, "text-dark", "fw-bold"], ["src", "assets/images/logo-dark.png", "height", "24", "alt", "", 1, "l-dark"], ["src", "assets/images/logo-light.png", "height", "24", "alt", "", 1, "l-light"], [1, "buy-button"], [3, "ngIf"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "login-btn-primary"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_Template_header_scroll_0_listener() { return ctx.windowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_a_3_Template, 5, 0, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_ul_4_Template, 76, 0, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_ul_5_Template, 20, 0, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_ul_6_Template, 19, 0, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_a_7_Template, 3, 0, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_span_8_Template, 4, 2, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span")(14, "span")(15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "ul", 10)(18, "li")(19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li")(22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "A propos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li")(25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Gallerie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li")(28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li")(31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16)(34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.navClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.sliderTopbar == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navClass !== "nav-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shopPages == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonList == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isdeveloper == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navClass === "nav-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.buttonList && !ctx.isdeveloper && !ctx.shopPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx.isCondensed === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.navClass);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7890:
/*!***************************************************!*\
  !*** ./src/app/shared/member/member.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberComponent": () => (/* binding */ MemberComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 5601);



function MemberComponent_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", item_r3);
} }
function MemberComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MemberComponent_div_1_li_5_Template, 3, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8)(7, "h5", 9)(8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.profile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r1.list);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.designation);
} }
class MemberComponent {
    constructor() { }
    ngOnInit() {
    }
}
MemberComponent.ɵfac = function MemberComponent_Factory(t) { return new (t || MemberComponent)(); };
MemberComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberComponent, selectors: [["app-member"]], inputs: { memberData: "memberData" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-lg-3 col-md-6 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "mt-4", "pt-2"], [1, "card", "team", "text-center", "border-0"], [1, "position-relative"], ["alt", "", 1, "img-fluid", "avatar", "avatar-ex-large", "rounded-circle", "shadow", 3, "src"], [1, "list-unstyled", "social-icon", "team-icon", "mb-0", "mt-4"], ["class", "list-inline-item ms-1", 4, "ngFor", "ngForOf"], [1, "card-body", "py-3", "px-0", "content"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "name", "text-dark"], [1, "designation", "text-muted"], [1, "list-inline-item", "ms-1"], ["href", "javascript:void(0)", 1, "rounded"], [1, "fea", "icon-sm", "fea-social", 3, "name"]], template: function MemberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MemberComponent_div_1_Template, 12, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.memberData);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 94311:
/*!*****************************************************!*\
  !*** ./src/app/shared/pricing/pricing.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingComponent": () => (/* binding */ PricingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


function PricingComponent_div_1_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 14)(1, "li", 15)(2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3);
} }
function PricingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6)(6, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8)(9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "/mo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PricingComponent_div_1_ul_15_Template, 5, 1, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.warning);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r1.list);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.btn);
} }
class PricingComponent {
    constructor() { }
    ngOnInit() {
    }
}
PricingComponent.ɵfac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(); };
PricingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricingComponent, selectors: [["app-pricing"]], inputs: { pricingData: "pricingData" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-lg-3 col-md-6 col-12 mt-4 pt-2 text-sm-start", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "col-12", "mt-4", "pt-2", "text-sm-start"], [1, "card", "pricing-rates", "business-rate", "shadow", "bg-light", "border-0", "rounded"], [1, "ribbon", "ribbon-right", "ribbon-warning", "overflow-hidden"], [1, "text-center", "d-block", "shadow", "small", "h6"], [1, "card-body"], [1, "title", "fw-bold", "text-uppercase", "text-primary", "mb-4"], [1, "d-flex", "mb-4"], [1, "h4", "mb-0", "mt-2"], [1, "price", "h1", "mb-0"], [1, "h4", "align-self-end", "mb-1"], ["class", "list-unstyled mb-0 ps-0", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-4"], [1, "list-unstyled", "mb-0", "ps-0"], [1, "h6", "text-muted", "mb-0"], [1, "text-primary", "h5", "me-2"], [1, "uil", "uil-check-circle", "align-middle"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PricingComponent_div_1_Template, 18, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pricingData);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 36564:
/*!***********************************************!*\
  !*** ./src/app/shared/scrollspy.directive.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollspyDirective": () => (/* binding */ ScrollspyDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);



class ScrollspyDirective {
    // tslint:disable-next-line: variable-name
    constructor(_el, document) {
        this._el = _el;
        this.document = document;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * Window scroll method
     */
    onScroll(event) {
        let currentSection;
        const children = this._el.nativeElement.querySelectorAll('section');
        const scrollTop = this.document.documentElement.scrollTop;
        const parentOffset = this.document.documentElement.offsetTop;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }
}
ScrollspyDirective.ɵfac = function ScrollspyDirective_Factory(t) { return new (t || ScrollspyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
ScrollspyDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollspyDirective, selectors: [["", "appScrollspy", ""]], hostBindings: function ScrollspyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollspyDirective_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { spiedTags: "spiedTags" }, outputs: { sectionChange: "sectionChange" } });


/***/ }),

/***/ 42474:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/services.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


function ServicesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5)(5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](data_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.description);
} }
class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], inputs: { servicesData: "servicesData" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-md-4 col-12 mt-5", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-12", "mt-5"], [1, "features", "features", "text-center"], [1, "image", "position-relative", "d-inline-block"], [1, "content", "mt-4"], [1, "text-muted", "mb-0"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServicesComponent_div_1_Template, 9, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicesData);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel-o */ 37297);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollspy.directive */ 36564);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-feather */ 5601);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/services.component */ 42474);
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pricing/pricing.component */ 94311);
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/features.component */ 21717);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog/blog.component */ 62891);
/* harmony import */ var _member_member_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./member/member.component */ 7890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);











class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselModule,
        angular_feather__WEBPACK_IMPORTED_MODULE_9__.FeatherModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollspyDirective,
        _services_services_component__WEBPACK_IMPORTED_MODULE_1__.ServicesComponent,
        _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_2__.PricingComponent,
        _features_features_component__WEBPACK_IMPORTED_MODULE_3__.FeaturesComponent,
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__.BlogComponent,
        _member_member_component__WEBPACK_IMPORTED_MODULE_5__.MemberComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselModule,
        angular_feather__WEBPACK_IMPORTED_MODULE_9__.FeatherModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollspyDirective,
        _services_services_component__WEBPACK_IMPORTED_MODULE_1__.ServicesComponent,
        _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_2__.PricingComponent,
        _features_features_component__WEBPACK_IMPORTED_MODULE_3__.FeaturesComponent,
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__.BlogComponent,
        _member_member_component__WEBPACK_IMPORTED_MODULE_5__.MemberComponent] }); })();


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map