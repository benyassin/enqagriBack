webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_dashboard_v1_dashboard_v1__ = __webpack_require__("../../../../../src/app/pages/dashboard/v1/dashboard-v1.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_dashboard_v2_dashboard_v2__ = __webpack_require__("../../../../../src/app/pages/dashboard/v2/dashboard-v2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Parametrage_Dashboard_dashboard__ = __webpack_require__("../../../../../src/app/pages/Parametrage/Dashboard/dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Parametrage_Formulaire_formulaire__ = __webpack_require__("../../../../../src/app/pages/Parametrage/Formulaire/formulaire.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_Parametrage_Projet_projet__ = __webpack_require__("../../../../../src/app/pages/Parametrage/Projet/projet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Parametrage_Bloc_bloc__ = __webpack_require__("../../../../../src/app/pages/Parametrage/Bloc/bloc.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_form_stuff_form_plugins_form_plugins__ = __webpack_require__("../../../../../src/app/pages/form-stuff/form-plugins/form-plugins.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_user_login_login__ = __webpack_require__("../../../../../src/app/pages/user/login/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__ = __webpack_require__("../../../../../src/app/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_extra_extra_profile_extra_profile__ = __webpack_require__("../../../../../src/app/pages/extra/extra-profile/extra-profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_utilisateur_dashboard__ = __webpack_require__("../../../../../src/app/pages/utilisateur/dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_utilisateur_utilisateur__ = __webpack_require__("../../../../../src/app/pages/utilisateur/utilisateur.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_Parametrage_Projet_inspect__ = __webpack_require__("../../../../../src/app/pages/Parametrage/Projet/inspect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_utilisateur_profile__ = __webpack_require__("../../../../../src/app/pages/utilisateur/profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reporting_reporting__ = __webpack_require__("../../../../../src/app/pages/reporting/reporting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_reporting_reportingRegion__ = __webpack_require__("../../../../../src/app/pages/reporting/reportingRegion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_reporting_reportingAgent__ = __webpack_require__("../../../../../src/app/pages/reporting/reportingAgent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_chart_chart_flot_chart_flot__ = __webpack_require__("../../../../../src/app/pages/chart/chart-flot/chart-flot.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_chart_chart_js_chart_js__ = __webpack_require__("../../../../../src/app/pages/chart/chart-js/chart-js.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_chart_chart_morris_chart_morris__ = __webpack_require__("../../../../../src/app/pages/chart/chart-morris/chart-morris.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_chart_chart_d3_chart_d3__ = __webpack_require__("../../../../../src/app/pages/chart/chart-d3/chart-d3.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_validation_rna__ = __webpack_require__("../../../../../src/app/pages/validation/rna.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_validation_validation__ = __webpack_require__("../../../../../src/app/pages/validation/validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_collecte_collecte__ = __webpack_require__("../../../../../src/app/pages/collecte/collecte.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_validation_geoless__ = __webpack_require__("../../../../../src/app/pages/validation/geoless.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Dashboard


//parametrage















// Chart




//validation 




/*
// Email
import { EmailInboxV1Page }         from './pages/email/inbox/v1/email-inbox-v1';
import { EmailInboxV2Page }         from './pages/email/inbox/v2/email-inbox-v2';
import { EmailComposePage }         from './pages/email/compose/email-compose';
import { EmailDetailPage }          from './pages/email/detail/email-detail';

// UI Element
import { UIGeneralPage }            from './pages/ui-elements/general/general';
import { UITypographyPage }         from './pages/ui-elements/typography/typography';
import { UITabsAccordionsPage }     from './pages/ui-elements/tabs-accordions/tabs-accordions';
import { UIUnlimitedNavTabsPage }   from './pages/ui-elements/unlimited-nav-tabs/unlimited-nav-tabs';
import { UIModalNotificationPage }  from './pages/ui-elements/modal-notification/modal-notification';
import { UIWidgetBoxesPage }        from './pages/ui-elements/widget-boxes/widget-boxes';
import { UIMediaObjectPage }        from './pages/ui-elements/media-object/media-object';
import { UIButtonsPage }            from './pages/ui-elements/buttons/buttons';
import { UIIconsPage }              from './pages/ui-elements/icons/icons';
import { UISimpleLineIconsPage }    from './pages/ui-elements/simple-line-icons/simple-line-icons';
import { UIIoniconsPage }           from './pages/ui-elements/ionicons/ionicons';
import { UITreeViewPage }           from './pages/ui-elements/tree-view/tree-view';
import { UILanguageBarIconPage }    from './pages/ui-elements/language-bar-icon/language-bar-icon';
import { UISocialButtonsPage }      from './pages/ui-elements/social-buttons/social-buttons';
import { UIIntroJsPage }            from './pages/ui-elements/intro-js/intro-js';

// Bootstrap 4
import { Bootstrap4Page }             from './pages/bootstrap-4/bootstrap-4';

// Form Stuff

import { FormSliderSwitcherPage }   from './pages/form-stuff/form-slider-switcher/form-slider-switcher';
import { FormSummernotePage }       from './pages/form-stuff/form-summernote/form-summernote';
import { FormWysiwygPage }          from './pages/form-stuff/form-wysiwyg/form-wysiwyg';
import { FormValidationPage }          from './pages/form-stuff/form-validation/form-validation';

// Table
import { TableBasicPage }                   from './pages/tables/table-basic/table-basic';
import { TableManageDefaultPage }           from './pages/tables/table-manage-default/table-manage-default';
import { TableManageAutofillPage }          from './pages/tables/table-manage-autofill/table-manage-autofill';
import { TableManageButtonsPage }           from './pages/tables/table-manage-buttons/table-manage-buttons';
import { TableManageColReorderPage }        from './pages/tables/table-manage-colreorder/table-manage-colreorder';
import { TableManageCombinePage }           from './pages/tables/table-manage-combine/table-manage-combine';
import { TableManageFixedColumnsPage }      from './pages/tables/table-manage-fixed-columns/table-manage-fixed-columns';
import { TableManageFixedHeaderPage }       from './pages/tables/table-manage-fixed-header/table-manage-fixed-header';
import { TableManageKeyTablePage }          from './pages/tables/table-manage-keytable/table-manage-keytable';
import { TableManageResponsivePage }        from './pages/tables/table-manage-responsive/table-manage-responsive';
import { TableManageRowReorderPage }        from './pages/tables/table-manage-rowreorder/table-manage-rowreorder';
import { TableManageScrollerPage }          from './pages/tables/table-manage-scroller/table-manage-scroller';
import { TableManageSelectPage }            from './pages/tables/table-manage-select/table-manage-select';

// Chart
import { ChartFlotPage }            from './pages/chart/chart-flot/chart-flot';
import { ChartJsPage }              from './pages/chart/chart-js/chart-js';
import { ChartMorrisPage }          from './pages/chart/chart-morris/chart-morris';
import { ChartD3Page }              from './pages/chart/chart-d3/chart-d3';

// Calendar
import { CalendarPage }             from './pages/calendar/calendar';

// Map
import { MapVectorPage }            from './pages/map/map-vector/map-vector';
import { MapGooglePage }            from './pages/map/map-google/map-google';

// Gallery
import { GalleryV1Page }            from './pages/gallery/gallery-v1/gallery-v1';
import { GalleryV2Page }            from './pages/gallery/gallery-v2/gallery-v2';

// Extra Pages
import { ExtraTimelinePage }        from './pages/extra/extra-timeline/extra-timeline';
import { ExtraComingSoonPage }      from './pages/extra/extra-coming-soon/extra-coming-soon';
import { ExtraSearchResultsPage }   from './pages/extra/extra-search-results/extra-search-results';
import { ExtraInvoicePage }         from './pages/extra/extra-invoice/extra-invoice';
import { ExtraErrorPage }           from './pages/extra/extra-error/extra-error';

// Page Options
import { BlankPage }                from './pages/page-options/page-blank/page-blank';
import { FullHeightContentPage }    from './pages/page-options/full-height-content/full-height-content';
import { SidebarMinifiedPage }      from './pages/page-options/page-with-minified-sidebar/page-with-minified-sidebar';
import { WideSidebarPage }          from './pages/page-options/page-with-wide-sidebar/page-with-wide-sidebar';
import { LightSidebarPage }         from './pages/page-options/page-with-light-sidebar/page-with-light-sidebar';
import { RightSidebarPage }         from './pages/page-options/page-with-right-sidebar/page-with-right-sidebar';
import { TwoSidebarPage }           from './pages/page-options/page-with-two-sidebar/page-with-two-sidebar';
import { WithoutSidebarPage }       from './pages/page-options/page-without-sidebar/page-without-sidebar';
import { TopMenuPage }              from './pages/page-options/page-with-top-menu/page-with-top-menu';
import { TransparentSidebarPage }   from './pages/page-options/page-with-transparent-sidebar/page-with-transparent-sidebar';
import { FooterPage }               from './pages/page-options/page-with-footer/page-with-footer';
import { BoxedLayoutPage }          from './pages/page-options/page-with-boxed-layout/page-with-boxed-layout';
import { MixedMenuPage }            from './pages/page-options/page-with-mixed-menu/page-with-mixed-menu';
import { MegaMenuPage }             from './pages/page-options/page-with-mega-menu/page-with-mega-menu';
import { BoxedLayoutMixedMenuPage } from './pages/page-options/page-boxed-layout-with-mixed-menu/page-boxed-layout-with-mixed-menu';

// User Login / Register
import { LoginV2Page }              from './pages/user/login-v2/login-v2';
import { LoginV3Page }              from './pages/user/login-v3/login-v3';
import { RegisterV3Page }           from './pages/user/register-v3/register-v3';

// Helper
import { HelperCssPage }        from './pages/helper/helper-css/helper-css';*/
var routes = [
    { path: '', redirectTo: 'Parametrage/Parametrage', pathMatch: 'full', canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard/v1', component: __WEBPACK_IMPORTED_MODULE_2__pages_dashboard_v1_dashboard_v1__["a" /* DashboardV1Page */], data: { title: 'Dashboard' }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard/v2', component: __WEBPACK_IMPORTED_MODULE_3__pages_dashboard_v2_dashboard_v2__["a" /* DashboardV2Page */], data: { title: 'Dashboard V2' }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'extra/profile', component: __WEBPACK_IMPORTED_MODULE_11__pages_extra_extra_profile_extra_profile__["a" /* ExtraProfilePage */], data: { title: 'Profile' } },
    { path: 'user/login', component: __WEBPACK_IMPORTED_MODULE_9__pages_user_login_login__["a" /* LoginPage */], data: { title: 'Login' } },
    { path: 'Parametrage/Enquete', component: __WEBPACK_IMPORTED_MODULE_6__pages_Parametrage_Projet_projet__["a" /* ProjetPage */], data: { title: 'Enquête' }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'Parametrage/Enquete/inspect', component: __WEBPACK_IMPORTED_MODULE_14__pages_Parametrage_Projet_inspect__["a" /* testProjetPage */], data: { title: 'Inspect' }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'Parametrage/Parametrage', component: __WEBPACK_IMPORTED_MODULE_4__pages_Parametrage_Dashboard_dashboard__["a" /* DashboardPage */], data: { title: 'Gestion des Enquêtes' }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'Parametrage/Questionnaire', component: __WEBPACK_IMPORTED_MODULE_5__pages_Parametrage_Formulaire_formulaire__["a" /* FormulairePage */], data: { title: 'Questionnaire' }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'Parametrage/Bloc', component: __WEBPACK_IMPORTED_MODULE_7__pages_Parametrage_Bloc_bloc__["a" /* BlocPage */], data: { title: 'Bloc' }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'form/plugins', component: __WEBPACK_IMPORTED_MODULE_8__pages_form_stuff_form_plugins_form_plugins__["a" /* FormPluginsPage */], data: { title: 'Form Plugins' }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'utilisateur', component: __WEBPACK_IMPORTED_MODULE_12__pages_utilisateur_dashboard__["a" /* UtilisateurPage */], data: { title: 'Utilisateur' }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'utilisateur/profile', component: __WEBPACK_IMPORTED_MODULE_15__pages_utilisateur_profile__["a" /* ProfilePage */], data: { title: "ProfilePage" }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'utilisateur/creation', component: __WEBPACK_IMPORTED_MODULE_13__pages_utilisateur_utilisateur__["a" /* CreationUtilisateurPage */], data: { title: "Creation Utilisateur" }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'collectes/rnacollecte', component: __WEBPACK_IMPORTED_MODULE_23__pages_validation_rna__["a" /* RnaValidationPage */], data: { title: 'Rna Collecte' }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'collectes/collecte', component: __WEBPACK_IMPORTED_MODULE_24__pages_validation_validation__["a" /* ValidationPage */], data: { title: 'Collecte' }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'collectes/geoless', component: __WEBPACK_IMPORTED_MODULE_26__pages_validation_geoless__["a" /* GeolessPage */], data: { title: 'Collecte Sans Geometrie' }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'collectes', component: __WEBPACK_IMPORTED_MODULE_25__pages_collecte_collecte__["a" /* CollectePage */], data: { title: 'Collectes' }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'reporting', component: __WEBPACK_IMPORTED_MODULE_16__pages_reporting_reporting__["a" /* ReportingPage */], data: { title: 'Reporting' }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'reporting/Region', component: __WEBPACK_IMPORTED_MODULE_17__pages_reporting_reportingRegion__["a" /* ReportingRegionPage */], data: { title: 'Reporting des Regions' }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'reporting/Agent', component: __WEBPACK_IMPORTED_MODULE_18__pages_reporting_reportingAgent__["a" /* ReportingAgentPage */], data: { title: 'Reporting des Agents ' }, canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'chart/flot', component: __WEBPACK_IMPORTED_MODULE_19__pages_chart_chart_flot_chart_flot__["a" /* ChartFlotPage */], data: { title: 'Chart Flot' } },
    { path: 'chart/morris', component: __WEBPACK_IMPORTED_MODULE_21__pages_chart_chart_morris_chart_morris__["a" /* ChartMorrisPage */], data: { title: 'Chart Morris' } },
    { path: 'chart/js', component: __WEBPACK_IMPORTED_MODULE_20__pages_chart_chart_js_chart_js__["a" /* ChartJsPage */], data: { title: 'Chart JS' } },
    { path: 'chart/d3', component: __WEBPACK_IMPORTED_MODULE_22__pages_chart_chart_d3_chart_d3__["a" /* ChartD3Page */], data: { title: 'Chart D3' } },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.page_sidebar_minified = false;
        this.page_with_footer = false;
        this.page_content_full_height = false;
        this.page_content_full_width = false;
        this.page_sidebar_transparent = false;
        this.page_with_wide_sidebar = false;
        this.page_with_light_sidebar = false;
        this.page_with_right_sidebar = false;
        this.page_without_sidebar = false;
        this.page_with_two_sidebar = false;
        this.page_with_top_menu = false;
        this.page_with_mega_menu = false;
        this.page_boxed_layout = false;
        this.page_content_inverse_mode = false;
        this.page_bg_white = false;
        this.page_without_header = false;
        this.page_pace_top = false;
        router.events.subscribe(function (e) {
            if (e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"]) {
                _this.clearSettings();
            }
        });
    }
    AppComponent.prototype.setPageSidebarMinified = function (setting) {
        this.page_sidebar_minified = setting;
    };
    AppComponent.prototype.setPageFooter = function (setting) {
        this.page_with_footer = setting;
    };
    AppComponent.prototype.setPageWideSidebar = function (setting) {
        this.page_with_wide_sidebar = setting;
    };
    AppComponent.prototype.setPageContentFullHeight = function (setting) {
        this.page_content_full_height = setting;
    };
    AppComponent.prototype.setPageContentFullWidth = function (setting) {
        this.page_content_full_width = setting;
    };
    AppComponent.prototype.setPageSidebarTransparent = function (setting) {
        this.page_sidebar_transparent = setting;
    };
    AppComponent.prototype.setPageLightSidebar = function (setting) {
        this.page_with_light_sidebar = setting;
    };
    AppComponent.prototype.setPageRightSidebar = function (setting) {
        this.page_with_right_sidebar = setting;
    };
    AppComponent.prototype.setPageWithoutSidebar = function (setting) {
        this.page_without_sidebar = setting;
    };
    AppComponent.prototype.setPageTwoSidebar = function (setting) {
        this.page_with_two_sidebar = setting;
    };
    AppComponent.prototype.setPageTopMenu = function (setting) {
        this.page_with_top_menu = setting;
    };
    AppComponent.prototype.setPageTransparentSidebar = function (setting) {
        this.page_sidebar_transparent = setting;
    };
    AppComponent.prototype.setPageMegaMenu = function (setting) {
        this.page_with_mega_menu = setting;
    };
    AppComponent.prototype.setPageContentInverseMode = function (setting) {
        this.page_content_inverse_mode = setting;
    };
    AppComponent.prototype.setPageBoxedLayout = function (setting) {
        this.page_boxed_layout = setting;
        if (this.page_boxed_layout) {
            window.dispatchEvent(new CustomEvent('page-boxed-layout'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-boxed-layout'));
        }
    };
    AppComponent.prototype.setPageBgWhite = function (setting) {
        this.page_bg_white = setting;
        if (this.page_bg_white) {
            window.dispatchEvent(new CustomEvent('page-bg-white'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-bg-white'));
        }
    };
    AppComponent.prototype.setPageWithoutHeader = function (setting) {
        this.page_without_header = setting;
        if (this.page_without_header) {
            window.dispatchEvent(new CustomEvent('page-without-header'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-without-header'));
        }
    };
    AppComponent.prototype.setPagePaceTop = function (setting) {
        this.page_pace_top = setting;
        if (this.page_without_header) {
            window.dispatchEvent(new CustomEvent('page-pace-top'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-pace-top'));
        }
    };
    AppComponent.prototype.clearSettings = function () {
        this.page_sidebar_minified = false;
        this.page_with_footer = false;
        this.page_content_full_height = false;
        this.page_content_full_width = false;
        this.page_with_wide_sidebar = false;
        this.page_with_right_sidebar = false;
        this.page_with_light_sidebar = false;
        this.page_sidebar_transparent = false;
        this.page_without_sidebar = false;
        this.page_with_two_sidebar = false;
        this.page_with_top_menu = false;
        this.page_sidebar_transparent = false;
        this.page_with_mega_menu = false;
        this.page_boxed_layout = false;
        this.page_content_inverse_mode = false;
        this.page_bg_white = false;
        this.page_without_header = false;
        this.page_pace_top = false;
        if (this.page_bg_white) {
            window.dispatchEvent(new CustomEvent('page-bg-white'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-bg-white'));
        }
        if (this.page_boxed_layout) {
            window.dispatchEvent(new CustomEvent('page-boxed-layout'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-boxed-layout'));
        }
        if (this.page_without_header) {
            window.dispatchEvent(new CustomEvent('page-without-header'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-without-header'));
        }
        if (this.page_pace_top) {
            window.dispatchEvent(new CustomEvent('page-pace-top'));
        }
        else {
            window.dispatchEvent(new CustomEvent('clear-pace-top'));
        }
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app',
            template: __webpack_require__("../../../../../src/app/app.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-container\" class=\"page-container fade in page-sidebar-fixed page-header-fixed\" [ngClass]=\"{\r\n    'page-sidebar-minified': page_sidebar_minified,\r\n    'page-content-full-height': page_content_full_height,\r\n    'page-with-wide-sidebar': page_with_wide_sidebar,\r\n    'page-with-light-sidebar': page_with_light_sidebar,\r\n    'page-without-sidebar': page_without_sidebar,\r\n    'page-with-two-sidebar': page_with_two_sidebar,\r\n    'page-with-right-sidebar': page_with_right_sidebar,\r\n    'page-with-top-menu': page_with_top_menu\r\n}\">\r\n    <header *ngIf=\"!this.page_without_header\" [page_with_two_sidebar]=\"this.page_with_two_sidebar\" [page_with_mega_menu]=\"this.page_with_mega_menu\"></header>\r\n    \r\n    <top-menu *ngIf=\"this.page_with_top_menu\"></top-menu>\r\n    \r\n    <sidebar *ngIf=\"!this.page_without_sidebar\" [page_sidebar_transparent]=\"this.page_sidebar_transparent\"></sidebar>\r\n    \r\n    <sidebar-two *ngIf=\"this.page_with_two_sidebar\"></sidebar-two>\r\n    \r\n    <content [page_content_inverse_mode]=\"this.page_content_inverse_mode\" [page_content_full_width]=\"this.page_content_full_width\"></content>\r\n    \r\n    <footer *ngIf=\"this.page_with_footer\"></footer>\r\n    \r\n    <!-- <theme-panel></theme-panel> -->\r\n    \r\n    <!-- begin scroll to top btn -->\r\n    <a href=\"javascript:;\" class=\"btn btn-icon btn-circle btn-success btn-scroll-to-top fade\" data-click=\"scroll-top\"><i class=\"fa fa-angle-up\"></i></a>\r\n    <!-- end scroll to top btn -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_bloc_service__ = __webpack_require__("../../../../../src/app/services/bloc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_perimetre_service__ = __webpack_require__("../../../../../src/app/services/perimetre.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_projet_service__ = __webpack_require__("../../../../../src/app/services/projet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_collecte_service__ = __webpack_require__("../../../../../src/app/services/collecte.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_reporting_service__ = __webpack_require__("../../../../../src/app/services/reporting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_permission__ = __webpack_require__("../../../../angular2-permission/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_formio__ = __webpack_require__("../../../../angular-formio/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_Http_client__ = __webpack_require__("../../../../../src/app/services/Http-client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guard_auth_guard__ = __webpack_require__("../../../../../src/app/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__sidebar_two_sidebar_two_component__ = __webpack_require__("../../../../../src/app/sidebar-two/sidebar-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__content_content_component__ = __webpack_require__("../../../../../src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__top_menu_top_menu_component__ = __webpack_require__("../../../../../src/app/top-menu/top-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__header_mega_menu_mega_menu_component__ = __webpack_require__("../../../../../src/app/header/mega-menu/mega-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__theme_panel_theme_panel_component__ = __webpack_require__("../../../../../src/app/theme-panel/theme-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_dashboard_v1_dashboard_v1__ = __webpack_require__("../../../../../src/app/pages/dashboard/v1/dashboard-v1.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_dashboard_v2_dashboard_v2__ = __webpack_require__("../../../../../src/app/pages/dashboard/v2/dashboard-v2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_user_login_login__ = __webpack_require__("../../../../../src/app/pages/user/login/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_Parametrage_Dashboard_dashboard__ = __webpack_require__("../../../../../src/app/pages/Parametrage/Dashboard/dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_Parametrage_Formulaire_formulaire__ = __webpack_require__("../../../../../src/app/pages/Parametrage/Formulaire/formulaire.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_Parametrage_Bloc_bloc__ = __webpack_require__("../../../../../src/app/pages/Parametrage/Bloc/bloc.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_form_stuff_form_plugins_form_plugins__ = __webpack_require__("../../../../../src/app/pages/form-stuff/form-plugins/form-plugins.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_Parametrage_Projet_projet__ = __webpack_require__("../../../../../src/app/pages/Parametrage/Projet/projet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_Parametrage_Projet_button_render_component__ = __webpack_require__("../../../../../src/app/pages/Parametrage/Projet/button.render.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_Parametrage_Projet_inspect__ = __webpack_require__("../../../../../src/app/pages/Parametrage/Projet/inspect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_validation_rna__ = __webpack_require__("../../../../../src/app/pages/validation/rna.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_validation_validation__ = __webpack_require__("../../../../../src/app/pages/validation/validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_validation_geoless__ = __webpack_require__("../../../../../src/app/pages/validation/geoless.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_collecte_collecte__ = __webpack_require__("../../../../../src/app/pages/collecte/collecte.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_reporting_reporting__ = __webpack_require__("../../../../../src/app/pages/reporting/reporting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_reporting_reportingRegion__ = __webpack_require__("../../../../../src/app/pages/reporting/reportingRegion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_reporting_reportingAgent__ = __webpack_require__("../../../../../src/app/pages/reporting/reportingAgent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_extra_extra_profile_extra_profile__ = __webpack_require__("../../../../../src/app/pages/extra/extra-profile/extra-profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_utilisateur_dashboard__ = __webpack_require__("../../../../../src/app/pages/utilisateur/dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_utilisateur_utilisateur__ = __webpack_require__("../../../../../src/app/pages/utilisateur/utilisateur.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_utilisateur_profile__ = __webpack_require__("../../../../../src/app/pages/utilisateur/profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__lower_case_text_directive__ = __webpack_require__("../../../../../src/app/lower-case-text.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__safe_pipe__ = __webpack_require__("../../../../../src/app/safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_ng2_select2__ = __webpack_require__("../../../../ng2-select2/ng2-select2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_ng2_select2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_53_ng2_select2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__("../../../../angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__values_pipe__ = __webpack_require__("../../../../../src/app/values.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_56_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_chart_chart_flot_chart_flot__ = __webpack_require__("../../../../../src/app/pages/chart/chart-flot/chart-flot.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_chart_chart_js_chart_js__ = __webpack_require__("../../../../../src/app/pages/chart/chart-js/chart-js.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_chart_chart_morris_chart_morris__ = __webpack_require__("../../../../../src/app/pages/chart/chart-morris/chart-morris.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_chart_chart_d3_chart_d3__ = __webpack_require__("../../../../../src/app/pages/chart/chart-d3/chart-d3.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















// Main Component










// Dashboard



//Parametrage







//Validtion

















// Chart




/*



// Email
import { EmailInboxV1Page }         from './pages/email/inbox/v1/email-inbox-v1';
import { EmailInboxV2Page }         from './pages/email/inbox/v2/email-inbox-v2';
import { EmailComposePage }         from './pages/email/compose/email-compose';
import { EmailDetailPage }          from './pages/email/detail/email-detail';

// UI Element
import { UIGeneralPage }            from './pages/ui-elements/general/general';
import { UITypographyPage }         from './pages/ui-elements/typography/typography';
import { UITabsAccordionsPage }     from './pages/ui-elements/tabs-accordions/tabs-accordions';
import { UIUnlimitedNavTabsPage }   from './pages/ui-elements/unlimited-nav-tabs/unlimited-nav-tabs';
import { UIModalNotificationPage }  from './pages/ui-elements/modal-notification/modal-notification';
import { UIWidgetBoxesPage }        from './pages/ui-elements/widget-boxes/widget-boxes';
import { UIMediaObjectPage }        from './pages/ui-elements/media-object/media-object';
import { UIButtonsPage }            from './pages/ui-elements/buttons/buttons';
import { UIIconsPage }              from './pages/ui-elements/icons/icons';
import { UISimpleLineIconsPage }    from './pages/ui-elements/simple-line-icons/simple-line-icons';
import { UIIoniconsPage }           from './pages/ui-elements/ionicons/ionicons';
import { UITreeViewPage }           from './pages/ui-elements/tree-view/tree-view';
import { UILanguageBarIconPage }    from './pages/ui-elements/language-bar-icon/language-bar-icon';
import { UISocialButtonsPage }      from './pages/ui-elements/social-buttons/social-buttons';
import { UIIntroJsPage }            from './pages/ui-elements/intro-js/intro-js';

// Bootstrap 4
import { Bootstrap4Page }             from './pages/bootstrap-4/bootstrap-4';

// Form Stuff
import { FormElementsPage }         from './pages/form-stuff/form-elements/form-elements';

import { FormSliderSwitcherPage }   from './pages/form-stuff/form-slider-switcher/form-slider-switcher';
import { FormSummernotePage }       from './pages/form-stuff/form-summernote/form-summernote';
import { FormWysiwygPage }          from './pages/form-stuff/form-wysiwyg/form-wysiwyg';
import { FormValidationPage }       from './pages/form-stuff/form-validation/form-validation';

// Table
import { TableBasicPage }                   from './pages/tables/table-basic/table-basic';
import { TableManageDefaultPage }           from './pages/tables/table-manage-default/table-manage-default';
import { TableManageAutofillPage }          from './pages/tables/table-manage-autofill/table-manage-autofill';
import { TableManageButtonsPage }           from './pages/tables/table-manage-buttons/table-manage-buttons';
import { TableManageColReorderPage }        from './pages/tables/table-manage-colreorder/table-manage-colreorder';
import { TableManageCombinePage }           from './pages/tables/table-manage-combine/table-manage-combine';
import { TableManageFixedColumnsPage }      from './pages/tables/table-manage-fixed-columns/table-manage-fixed-columns';
import { TableManageFixedHeaderPage }       from './pages/tables/table-manage-fixed-header/table-manage-fixed-header';
import { TableManageKeyTablePage }          from './pages/tables/table-manage-keytable/table-manage-keytable';
import { TableManageResponsivePage }        from './pages/tables/table-manage-responsive/table-manage-responsive';
import { TableManageRowReorderPage }        from './pages/tables/table-manage-rowreorder/table-manage-rowreorder';
import { TableManageScrollerPage }          from './pages/tables/table-manage-scroller/table-manage-scroller';
import { TableManageSelectPage }            from './pages/tables/table-manage-select/table-manage-select';

// Chart
import { ChartFlotPage }            from './pages/chart/chart-flot/chart-flot';
import { ChartJsPage }              from './pages/chart/chart-js/chart-js';
import { ChartMorrisPage }          from './pages/chart/chart-morris/chart-morris';
import { ChartD3Page }              from './pages/chart/chart-d3/chart-d3';

// Calendar
import { CalendarPage }             from './pages/calendar/calendar';

// Map
import { MapVectorPage }            from './pages/map/map-vector/map-vector';
import { MapGooglePage }            from './pages/map/map-google/map-google';

// Gallery
import { GalleryV1Page }            from './pages/gallery/gallery-v1/gallery-v1';
import { GalleryV2Page }            from './pages/gallery/gallery-v2/gallery-v2';

// Extra Pages
import { ExtraTimelinePage }        from './pages/extra/extra-timeline/extra-timeline';
import { ExtraComingSoonPage }      from './pages/extra/extra-coming-soon/extra-coming-soon';
import { ExtraSearchResultsPage }   from './pages/extra/extra-search-results/extra-search-results';
import { ExtraInvoicePage }         from './pages/extra/extra-invoice/extra-invoice';
import { ExtraErrorPage }           from './pages/extra/extra-error/extra-error';

// Page Options
import { BlankPage }                from './pages/page-options/page-blank/page-blank';
import { FullHeightContentPage }    from './pages/page-options/full-height-content/full-height-content';
import { SidebarMinifiedPage }      from './pages/page-options/page-with-minified-sidebar/page-with-minified-sidebar';
import { WideSidebarPage }          from './pages/page-options/page-with-wide-sidebar/page-with-wide-sidebar';
import { LightSidebarPage }         from './pages/page-options/page-with-light-sidebar/page-with-light-sidebar';
import { RightSidebarPage }         from './pages/page-options/page-with-right-sidebar/page-with-right-sidebar';
import { TwoSidebarPage }           from './pages/page-options/page-with-two-sidebar/page-with-two-sidebar';
import { WithoutSidebarPage }       from './pages/page-options/page-without-sidebar/page-without-sidebar';
import { TopMenuPage }              from './pages/page-options/page-with-top-menu/page-with-top-menu';
import { TransparentSidebarPage }   from './pages/page-options/page-with-transparent-sidebar/page-with-transparent-sidebar';
import { FooterPage }               from './pages/page-options/page-with-footer/page-with-footer';
import { BoxedLayoutPage }          from './pages/page-options/page-with-boxed-layout/page-with-boxed-layout';
import { MixedMenuPage }            from './pages/page-options/page-with-mixed-menu/page-with-mixed-menu';
import { MegaMenuPage }             from './pages/page-options/page-with-mega-menu/page-with-mega-menu';
import { BoxedLayoutMixedMenuPage } from './pages/page-options/page-boxed-layout-with-mixed-menu/page-boxed-layout-with-mixed-menu';

// User Login / Register
import { LoginV2Page }              from './pages/user/login-v2/login-v2';
import { LoginV3Page }              from './pages/user/login-v3/login-v3';
import { RegisterV3Page }           from './pages/user/register-v3/register-v3';

// Helper
import { HelperCssPage }        from './pages/helper/helper-css/helper-css';*/
var AppModule = (function () {
    function AppModule(router, titleService, route) {
        var _this = this;
        this.router = router;
        this.titleService = titleService;
        this.route = route;
        router.events.subscribe(function (e) {
            // change page title when url change
            if (e instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["NavigationEnd"]) {
                var title = 'Rna Collecte | ' + _this.route.snapshot.firstChild.data['title'];
                _this.titleService.setTitle(title);
                window.dispatchEvent(new CustomEvent('page-reload'));
            }
        });
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_15_angular_formio__["a" /* FormioModule */], __WEBPACK_IMPORTED_MODULE_17_ng2_smart_table__["a" /* Ng2SmartTableModule */], __WEBPACK_IMPORTED_MODULE_56_ng2_charts_ng2_charts__["ChartsModule"], __WEBPACK_IMPORTED_MODULE_16_angular2_moment__["MomentModule"], __WEBPACK_IMPORTED_MODULE_54_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */], __WEBPACK_IMPORTED_MODULE_53_ng2_select2__["Select2Module"], __WEBPACK_IMPORTED_MODULE_14_angular2_permission__["a" /* Ng2Permission */], __WEBPACK_IMPORTED_MODULE_13_primeng_primeng__["MessagesModule"], __WEBPACK_IMPORTED_MODULE_13_primeng_primeng__["ConfirmDialogModule"], __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_20__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_22__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_24__sidebar_two_sidebar_two_component__["a" /* SidebarTwoComponent */],
                __WEBPACK_IMPORTED_MODULE_25__content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_29__theme_panel_theme_panel_component__["a" /* ThemePanelComponent */],
                __WEBPACK_IMPORTED_MODULE_27__top_menu_top_menu_component__["a" /* TopMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_28__header_mega_menu_mega_menu_component__["a" /* MegaMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_26__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_dashboard_v1_dashboard_v1__["a" /* DashboardV1Page */],
                __WEBPACK_IMPORTED_MODULE_31__pages_dashboard_v2_dashboard_v2__["a" /* DashboardV2Page */],
                __WEBPACK_IMPORTED_MODULE_34__pages_Parametrage_Formulaire_formulaire__["a" /* FormulairePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_Parametrage_Bloc_bloc__["a" /* BlocPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_form_stuff_form_plugins_form_plugins__["a" /* FormPluginsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_user_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_extra_extra_profile_extra_profile__["a" /* ExtraProfilePage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_utilisateur_dashboard__["a" /* UtilisateurPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_utilisateur_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_Parametrage_Dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_51__lower_case_text_directive__["a" /* LowerCaseTextDirective */],
                __WEBPACK_IMPORTED_MODULE_52__safe_pipe__["a" /* TimesPipe */],
                __WEBPACK_IMPORTED_MODULE_37__pages_Parametrage_Projet_projet__["a" /* ProjetPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_utilisateur_utilisateur__["a" /* CreationUtilisateurPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_Parametrage_Projet_inspect__["a" /* testProjetPage */],
                __WEBPACK_IMPORTED_MODULE_55__values_pipe__["a" /* ValuesPipe */],
                __WEBPACK_IMPORTED_MODULE_40__pages_validation_rna__["a" /* RnaValidationPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_validation_validation__["a" /* ValidationPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_collecte_collecte__["a" /* CollectePage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_validation_geoless__["a" /* GeolessPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_chart_chart_flot_chart_flot__["a" /* ChartFlotPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_chart_chart_js_chart_js__["a" /* ChartJsPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_chart_chart_morris_chart_morris__["a" /* ChartMorrisPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_chart_chart_d3_chart_d3__["a" /* ChartD3Page */],
                __WEBPACK_IMPORTED_MODULE_44__pages_reporting_reporting__["a" /* ReportingPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_reporting_reportingRegion__["a" /* ReportingRegionPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_reporting_reportingAgent__["a" /* ReportingAgentPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_Parametrage_Projet_button_render_component__["a" /* ButtonRenderComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"], __WEBPACK_IMPORTED_MODULE_12__services_reporting_service__["a" /* ReportingService */], __WEBPACK_IMPORTED_MODULE_11__services_collecte_service__["a" /* CollecteService */], __WEBPACK_IMPORTED_MODULE_10__services_projet_service__["a" /* ProjetService */], __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_13_primeng_primeng__["ConfirmationService"], __WEBPACK_IMPORTED_MODULE_8__services_form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__services_bloc_service__["a" /* BlocService */], __WEBPACK_IMPORTED_MODULE_9__services_perimetre_service__["a" /* PerimetreService */], __WEBPACK_IMPORTED_MODULE_18__services_Http_client__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_19__guard_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object])
    ], AppModule);
    return AppModule;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin #content -->\r\n<div id=\"content\" class=\"content\" [ngClass]=\"{\r\n    'content-full-width': page_content_full_width,\r\n    'content-inverse-mode': page_content_inverse_mode\r\n}\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<!-- end #content -->"

/***/ }),

/***/ "../../../../../src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ContentComponent.prototype, "page_content_full_width", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ContentComponent.prototype, "page_content_inverse_mode", void 0);
    ContentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'content',
            template: __webpack_require__("../../../../../src/app/content/content.component.html")
        })
    ], ContentComponent);
    return ContentComponent;
}());

//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin #footer -->\r\n<div id=\"footer\" class=\"footer\">\r\n    &copy; 2014 Color Admin Responsive Admin Template - Sean Ngu All Rights Reserved\r\n</div>\r\n<!-- end #footer -->"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            // logged in so return true
            return true;
        }
        else {
            // not logged in so redirect to login page
            this.router.navigate(['/user/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin #header -->\r\n<div id=\"header\" class=\"header navbar navbar-default navbar-fixed-top\">\r\n    <!-- begin container-fluid -->\r\n    <div class=\"container-fluid\">\r\n        <!-- begin mobile sidebar expand / collapse button -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-click=\"sidebar-toggled\" [ngClass]=\"{'pull-left':page_with_two_sidebar}\">\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <button *ngIf=\"this.page_with_two_sidebar\" type=\"button\" class=\"navbar-toggle pull-right\" data-click=\"right-sidebar-toggled\">\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a routerLink=\"/\" class=\"navbar-brand\"><span><img src=\"assets/img/logo-beGIS.png\" alt=\"\" width=\"32\" height=\"27\"></span> <b>beGIS</b></a>\r\n            <button *ngIf=\"this.page_with_mega_menu\" type=\"button\" class=\"navbar-toggle p-0 m-r-5\" data-toggle=\"collapse\" data-target=\"#top-navbar\">\r\n                <span class=\"fa-stack fa-lg text-inverse\">\r\n                    <i class=\"fa fa-square-o fa-stack-2x m-t-2\"></i>\r\n                    <i class=\"fa fa-cog fa-stack-1x\"></i>\r\n                </span>\r\n            </button>\r\n        </div>\r\n        <!-- end mobile sidebar expand / collapse button -->\r\n        \r\n        <mega-menu *ngIf=\"page_with_mega_menu\"></mega-menu>\r\n        \r\n        <!-- begin header navigation right -->\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <li>\r\n           <!--   <form class=\"navbar-form full-width\">\r\n                <div class=\"form-group\">\r\n                   <input type=\"text\" class=\"form-control\" placeholder=\"Enter keyword\" />\r\n                        <button type=\"submit\" class=\"btn btn-search\"><i class=\"fa fa-search\"></i></button>\r\n                    </div>\r\n                </form>-->\r\n            </li>\r\n            <!-- <li class=\"dropdown\">\r\n                <a href=\"javascript:;\" data-toggle=\"dropdown\" class=\"dropdown-toggle f-s-14\">\r\n                    <i class=\"fa fa-bell-o\"></i>\r\n                    <span class=\"label\">5</span>\r\n                </a>\r\n                <ul class=\"dropdown-menu media-list pull-right animated fadeInDown\">\r\n                    <li class=\"dropdown-header\">Notifications (5)</li>\r\n                    <li class=\"media\">\r\n                        <a href=\"javascript:;\">\r\n                            <div class=\"media-left\"><i class=\"fa fa-bug media-object bg-red\"></i></div>\r\n                            <div class=\"media-body\">\r\n                                <h6 class=\"media-heading\">Server Error Reports</h6>\r\n                                <div class=\"text-muted f-s-11\">3 minutes ago</div>\r\n                            </div>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"media\">\r\n                        <a href=\"javascript:;\">\r\n                            <div class=\"media-left\"><img src=\"/assets/img/user-1.jpg\" class=\"media-object\" alt=\"\" /></div>\r\n                            <div class=\"media-body\">\r\n                                <h6 class=\"media-heading\">John Smith</h6>\r\n                                <p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p>\r\n                                <div class=\"text-muted f-s-11\">25 minutes ago</div>\r\n                            </div>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"media\">\r\n                        <a href=\"javascript:;\">\r\n                            <div class=\"media-left\"><img src=\"/assets/img/user-2.jpg\" class=\"media-object\" alt=\"\" /></div>\r\n                            <div class=\"media-body\">\r\n                                <h6 class=\"media-heading\">Olivia</h6>\r\n                                <p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p>\r\n                                <div class=\"text-muted f-s-11\">35 minutes ago</div>\r\n                            </div>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"media\">\r\n                        <a href=\"javascript:;\">\r\n                            <div class=\"media-left\"><i class=\"fa fa-plus media-object bg-green\"></i></div>\r\n                            <div class=\"media-body\">\r\n                                <h6 class=\"media-heading\"> New User Registered</h6>\r\n                                <div class=\"text-muted f-s-11\">1 hour ago</div>\r\n                            </div>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"media\">\r\n                        <a href=\"javascript:;\">\r\n                            <div class=\"media-left\"><i class=\"fa fa-envelope media-object bg-blue\"></i></div>\r\n                            <div class=\"media-body\">\r\n                                <h6 class=\"media-heading\"> New Email From John</h6>\r\n                                <div class=\"text-muted f-s-11\">2 hour ago</div>\r\n                            </div>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"dropdown-footer text-center\">\r\n                        <a href=\"javascript:;\">View more</a>\r\n                    </li>\r\n                </ul>\r\n            </li> -->\r\n            <li class=\"dropdown navbar-user\">\r\n                <a (click)=\"logout()\" href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                    <img src=\"/assets/img/user-13.jpg\" alt=\"\" /> \r\n                    <span class=\"hidden-xs\">{{user.nom}}</span>\r\n                </a>\r\n                <ul class=\"dropdown-menu animated fadeInLeft\">\r\n                    <li class=\"arrow\"></li>\r\n                    <li><a href=\"javascript:;\">Edit Profile</a></li>\r\n                    <li><a href=\"javascript:;\"><span class=\"badge badge-danger pull-right\">2</span> Inbox</a></li>\r\n                    <li><a href=\"javascript:;\">Calendar</a></li>\r\n                    <li><a href=\"javascript:;\">Setting</a></li>\r\n                    <li class=\"divider\"></li>\r\n                    <li><a >Log Out</a></li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n        <!-- end header navigation right -->\r\n    </div>\r\n    <!-- end container-fluid -->\r\n</div>\r\n<!-- end #header -->"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(authenticationService, router, userservice) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.userservice = userservice;
        this.user = this.userservice.user || { 'nom': 'undefined', 'prenom': 'undefined' };
    }
    HeaderComponent.prototype.logout = function () {
        this.router.navigate(['/utilisateur/profile']);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "page_with_two_sidebar", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "page_with_mega_menu", void 0);
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/mega-menu/mega-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin navbar-collapse -->\r\n<div class=\"collapse navbar-collapse pull-left\" id=\"top-navbar\">\r\n    <ul class=\"nav navbar-nav\">\r\n        <li class=\"dropdown dropdown-lg\">\r\n            <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-th-large fa-fw\"></i> Mega <b class=\"caret\"></b></a>\r\n            <div class=\"dropdown-menu dropdown-menu-lg\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 col-sm-4\">\r\n                        <h4 class=\"dropdown-header\">UI Kits</h4>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6 col-xs-6\">\r\n                                <ul class=\"nav\">\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> FontAwesome</a></li>\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Ionicons</a></li>\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Simple Line Icons</a></li>\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Typography</a></li>\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Media Object</a></li>\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Widget Boxes</a></li>\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Tabs & Accordions</a></li>\r\n                                </ul>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-xs-6\">\r\n                                <ul class=\"nav\">\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Unlimited Nav Tabs</a></li>\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Modal & Notification</a></li>\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Buttons</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-sm-4\">\r\n                        <h4 class=\"dropdown-header\">Page Options <span class=\"label label-inverse\">11</span></h4>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6 col-xs-6\">\r\n                                <ul class=\"nav\">\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Blank Page</a></li>\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Page with Footer <span class=\"badge badge-success\">NEW</span></a></li>\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Page without Sidebar</a></li>\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Page with Right Sidebar</a></li>\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Page with Minified Sidebar</a></li>\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Page with Two Sidebar</a></li>\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Page with Line Icons</a></li>\r\n                                </ul>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-xs-6\">\r\n                                <ul class=\"nav\">\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Full Height Content</a></li>\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Page with Mega Menu</a></li>\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Page with Light Sidebar</a></li>\r\n                                    <li><a href=\"javascript:;\" class=\"text-ellipsis\"><i class=\"fa fa-angle-right fa-fw fa-lg text-inverse\"></i> Page with Large Sidebar</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-sm-4\">\r\n                        <h4 class=\"dropdown-header\">Paragraph</h4>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero purus, fermentum at libero convallis, auctor dignissim mauris. Nunc laoreet pellentesque turpis sodales ornare. Nunc vestibulum nunc lorem, at sodales velit malesuada congue. Nam est tortor, tincidunt sit amet eros vitae, aliquam finibus mauris.\r\n                        </p>\r\n                        <p>\r\n                            Fusce ac ligula laoreet ante dapibus mattis. Nam auctor vulputate aliquam. Suspendisse efficitur, felis sed elementum eleifend, ipsum tellus sodales nisi, ut condimentum nisi sem in nibh. Phasellus suscipit vulputate purus at venenatis. Quisque luctus tincidunt tempor.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li>\r\n            <a href=\"javascript:;\">\r\n                <i class=\"fa fa-diamond fa-fw\"></i> Client\r\n            </a>\r\n        </li>\r\n        <li class=\"dropdown\">\r\n            <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"fa fa-database fa-fw\"></i> New <b class=\"caret\"></b>\r\n            </a>\r\n            <ul class=\"dropdown-menu\" role=\"menu\">\r\n                <li><a href=\"javascript:;\">Action</a></li>\r\n                <li><a href=\"javascript:;\">Another action</a></li>\r\n                <li><a href=\"javascript:;\">Something else here</a></li>\r\n                <li class=\"divider\"></li>\r\n                <li><a href=\"javascript:;\">Separated link</a></li>\r\n                <li class=\"divider\"></li>\r\n                <li><a href=\"javascript:;\">One more separated link</a></li>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<!-- end navbar-collapse -->"

/***/ }),

/***/ "../../../../../src/app/header/mega-menu/mega-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MegaMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MegaMenuComponent = (function () {
    function MegaMenuComponent() {
    }
    MegaMenuComponent.prototype.ngOnInit = function () {
    };
    MegaMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mega-menu',
            template: __webpack_require__("../../../../../src/app/header/mega-menu/mega-menu.component.html")
        })
    ], MegaMenuComponent);
    return MegaMenuComponent;
}());

//# sourceMappingURL=mega-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/lower-case-text.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LowerCaseTextDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LowerCaseTextDirective = (function () {
    function LowerCaseTextDirective(ref) {
        this.ref = ref;
    }
    LowerCaseTextDirective.prototype.toUpperCase = function (value) {
        if (this.allowLowerCase)
            this.ref.nativeElement.value = value.toLowerCase();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('UpperCase'),
        __metadata("design:type", Boolean)
    ], LowerCaseTextDirective.prototype, "allowLowerCase", void 0);
    LowerCaseTextDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[LowerCase]',
            host: {
                '(input)': 'toLowerCase($event.target.value)',
            }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], LowerCaseTextDirective);
    return LowerCaseTextDirective;
    var _a;
}());

//# sourceMappingURL=lower-case-text.directive.js.map

/***/ }),

/***/ "../../../../../src/app/pages/Parametrage/Bloc/bloc.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin breadcrumb -->\r\n<!-- end breadcrumb -->\r\n<!-- begin page-header -->\r\n<h1 class=\"page-header\">Creation de Bloc</h1>\r\n<!-- end page-header -->\r\n\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n    <!-- begin col-6 -->\r\n    <div class=\"col-md-12\">\r\n        <!-- begin panel -->\r\n        <p-messages [(value)]=\"msgs\"></p-messages>              \r\n        <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>        \r\n        <div class=\"panel panel-success\" data-sortable-id=\"form-stuff-1\">\r\n            <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">Creation de Bloc</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"name\">Nom du Bloc</label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"Nom...\"  [(ngModel)]=\"model.name\"d>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                            <label>Théme</label>\r\n                            <select [(ngModel)]=\"model.theme\" id=\"themeSelect\" class=\"form-control\" (ngModelChange)=\"onThemeChange($event)\">\r\n                                <option *ngFor=\"let t of themes\" [ngValue]=\"t.value\">{{t.name}}</option>\r\n                            </select>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                            <label>Bloc Existant</label>\r\n                            <select [(ngModel)]=\"blocSelected\" class=\"form-control\" id=\"blocexistant\" (ngModelChange)=\"onBlocSelect($event)\">\r\n                                <option value=\"\"></option>\r\n                                <option *ngFor=\"let b of blocs\" [ngValue]=\"b.fields\">{{b.name}}</option>\r\n                            </select>\r\n                          </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel panel-success\" data-sortable-id=\"form-stuff-1\">\r\n            <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">Bloc Builder</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"formbuilder\"></div>\r\n                <div class=\"setDataWrap\">\r\n                </div>\r\n                <div id=\"build-wrap\"></div>               \r\n                 <div class=\"row\">\r\n                    <div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"...\">\r\n                        <div class=\"btn-group\" role=\"group\">\r\n                            <button id=\"clearfields\" class=\"btn btn-danger btn-sm\">Clear fields</button>\r\n                        </div>\r\n                        <div class=\"btn-group\" role=\"group\">\r\n                            <button  (click)=\"createblock()\" id=\"saveJSON\" type=\"button\" class=\"btn btn-primary  btn-sm\">Enregistrer</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<!-- end row -->"

/***/ }),

/***/ "../../../../../src/app/pages/Parametrage/Bloc/bloc.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bloc_service__ = __webpack_require__("../../../../../src/app/services/bloc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlocPage = (function () {
    function BlocPage(blocservice, confirmationService) {
        this.blocservice = blocservice;
        this.confirmationService = confirmationService;
        this.model = this.blocservice.selectedBloc;
        this.msgs = [];
        this.themes = [
            { name: "Annuelle", value: "annuelle" },
            { name: "Modulaire", value: "modulaire" },
            { name: "Complémentaire", value: "complementaire" },
            { name: "Bloc Sans Théme", value: "none" }
        ];
        this.blocs = {};
        this.formBuilderOptions = {
            sortableControls: true,
            showActionButtons: false,
            // editOnAdd: true,
            controlOrder: ['header', 'paragraph', 'text', 'textarea', 'number', 'date', 'select', 'checkbox-group', 'radio-group', 'button'],
            disableFields: ['autocomplete', 'hidden', 'file', 'button'],
            disabledAttrs: ["Access", "limitRole", "roles"],
            controlPosition: 'left',
            i18n: {
                locale: 'fr-FR'
                // location: 'https://github.com/benyassin/formBuilder-languages/blob/benyassin-patch-1/fr-FR.lang'
            },
            //  stickyControls: {
            //   enable: true
            // },
            roles: {},
        };
    }
    BlocPage.prototype.onThemeChange = function (theme) {
        var _this = this;
        console.log(theme);
        this.blocservice.getBlocs(theme).then(function (data) {
            _this.blocs = data;
        }, function (err) {
            console.log("can't retreive blocs ");
        });
    };
    ;
    BlocPage.prototype.onBlocSelect = function (fields) {
        this.model.fields = fields;
        console.log(this.model.fields);
    };
    BlocPage.prototype.createblock = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'TODO : CHANGER LE MESSAGE ?',
            accept: function () {
                _this.blocservice.createBloc(_this.model).then(function (data) {
                    console.log(_this.model);
                    _this.model = {};
                    _this.blocservice.selectedBloc = {};
                    console.log(_this.model);
                    console.log(_this.blocservice.selectedBloc);
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                    _this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Bloc a été créé avec succès' });
                }, function (err) {
                    console.log("can't retreive blocs ");
                });
            }
        });
    };
    ;
    // Attention solution temporaire a refaire aprés 
    BlocPage.prototype.renderFormBuilder = function () {
        var current = this;
        $('.formbuilder').formBuilder(this.formBuilderOptions).promise.then(function (formBuilder) {
            formBuilder.actions.setData(current.model.fields);
            // console.log(this.fields)
            document.getElementById("saveJSON").addEventListener("click", function () {
                var fields = formBuilder.formData;
                current.model.fields = fields;
            });
            document.getElementById("clearfields").addEventListener("click", function () {
                formBuilder.actions.clearFields();
                delete current.model.fields;
            });
            document.getElementById("blocexistant").addEventListener("change", function () {
                var FormData = current.model.fields;
                console.log(FormData);
                formBuilder.actions.setData(FormData);
            });
        });
    };
    ;
    BlocPage.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('bloc-ready'));
        this.renderFormBuilder();
        if (this.model.theme) {
            this.onThemeChange(this.model.theme);
        }
    };
    BlocPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bloc',
            template: __webpack_require__("../../../../../src/app/pages/Parametrage/Bloc/bloc.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bloc_service__["a" /* BlocService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bloc_service__["a" /* BlocService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]) === "function" && _b || Object])
    ], BlocPage);
    return BlocPage;
    var _a, _b;
}());

//# sourceMappingURL=bloc.js.map

/***/ }),

/***/ "../../../../../src/app/pages/Parametrage/Dashboard/dashboard.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".table th {\r\n    text-align: center;   \r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/Parametrage/Dashboard/dashboard.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- begin page-header -->\r\n<!-- end page-header -->\r\n\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n    <!-- begin col-12 -->\r\n    <div class=\"col-md-12\">\r\n        <!-- begin panel -->\r\n        <p-messages [(value)]=\"msgs\"></p-messages>              \r\n        <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>   \r\n        <div *ngIf=\"user.role == 'admin'\" class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"bt-group pull-right\">\r\n                    <a type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"newForm()\">Nouveau Questionnaire</a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Questionnaires</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <table id=\"data-table\" class=\"table table-striped table-bordered text-center\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th></th>                                \r\n                            <!-- <th>id</th> -->\r\n                            <th>Nom</th>\r\n                            <th>Type</th>\r\n                            <th>Géométrie</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let form of forms | values\">\r\n                            <td><a (click)=\"opendemo(form.id_fields)\"><i  class=\"fa fa-eye\" aria-hidden=\"true\"></i></a></td>\r\n                            <!-- <td>{{ form._id}}</td> -->\r\n                            <td>{{ form.name}}</td>\r\n                            <td *ngIf=\"form.theme == 'pillier1'\">Pilier I</td>\r\n                            <td *ngIf=\"form.theme == 'pillier2'\">Pilier II</td>\r\n                            <td *ngIf=\"form.theme == 'financier'\">Projet Financier</td>\r\n                            <td *ngIf=\"form.theme !== 'financier' && form.theme !== 'pillier1' && form.theme !== 'pillier2'\">{{ form.theme}}</td>\r\n                            <td *ngIf=\"form.geometry == 'none'\">Sans Géometrie</td>                            \r\n                            <td *ngIf=\"form.geometry !== 'none'\">{{ form.geometry}}</td>\r\n                            <td>\r\n                                    <button type=\"button\" [disabled]=\"disable.includes(form._id)\" (click)=\"updateForm(form)\" class=\"btn btn-primary btn-xs\"><i class=\"fa fa-pencil-square-o\"></i>  Modifier</button>\r\n                                    <button type=\"button\" [disabled]=\"!form.id_fields\" (click)=\"duplicateForm(form)\" class=\"btn btn-warning btn-xs\"><i class=\"fa fa-files-o\"></i>  Dupliquer </button>\r\n                                    <button type=\"button\" [disabled]=\"disable.includes(form._id)\" (click)=\"deleteForm(form._id)\" class=\"btn btn-danger btn-xs\"><i class=\"fa fa-trash-o\"></i>  Supprimer</button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div  *ngIf=\"user.role == 'admin'\" class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"bt-group pull-right\">\r\n                    <a type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"newProjet()\">Nouvelle Enquête</a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Enquêtes</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped table-bordered text-center\">\r\n                    <thead>\r\n                        <tr>\r\n                            <!-- <th>_id</th> -->\r\n                            <th>Nom</th>\r\n                            <th>Type</th>\r\n                            <th>Questionnaires</th>\r\n                            <th>Status</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let projet of projets | values\">\r\n                            <!-- <td>{{ projet._id}}</td> -->\r\n                            <td>{{ projet.name}}</td>\r\n                            <td *ngIf=\"projet.theme == 'pillier1'\">Pilier I</td>\r\n                            <td *ngIf=\"projet.theme == 'pillier2'\">Pilier II</td>\r\n                            <td *ngIf=\"projet.theme == 'financier'\">Projet Financier</td>\r\n                            <td *ngIf=\"projet.theme !== 'financier' && projet.theme !== 'pillier1' && projet.theme !== 'pillier2'\">{{ projet.theme}}</td>                            \r\n                            <td>{{ projet.forms.length}}</td>\r\n                            <td>{{ projet.statut}}</td>\r\n                            <td>\r\n                            <button type=\"button\" (click)=\"updateProjet(projet)\" class=\"btn btn-primary btn-xs\"><i class=\"fa fa-pencil-square-o\"></i>  Modifier </button>\r\n                            <button type=\"button\" (click)=\"deleteProjet(projet._id)\" class=\"btn btn-danger btn-xs\"><i class=\"fa fa-trash-o\"></i>  Supprimer</button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div  *ngIf=\"user.role !== 'admin'\" class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"bt-group pull-right\"></div>\r\n                <h4 class=\"panel-title\">Enquêtes</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped table-bordered text-center\">\r\n                    <thead>\r\n                        <tr>\r\n                            <!-- <th>_id</th> -->\r\n                            <th>Nom</th>\r\n                            <th>Type</th>\r\n                            <th>Questionnaires</th>\r\n                            <th>Status</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let projet of _projets | values\">\r\n                            <!-- <td>{{ projet._id}}</td> -->\r\n                            <td>{{ projet?.name}}</td>\r\n                            <td>{{ projet?.theme}}</td>\r\n                            <td>{{ projet?.forms.length}}</td>\r\n                            <td>{{ projet?.statut}}</td>\r\n                            <td>\r\n                            <button type=\"button\" (click)=\"inspect(projet?._id)\" class=\"btn btn-primary btn-xs\"><i class=\"fa fa-eye\"></i>  Consulter </button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>    "

/***/ }),

/***/ "../../../../../src/app/pages/Parametrage/Dashboard/dashboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_projet_service__ = __webpack_require__("../../../../../src/app/services/projet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardPage = (function () {
    function DashboardPage(formservice, projetservice, confirmationService, userservice, router) {
        this.formservice = formservice;
        this.projetservice = projetservice;
        this.confirmationService = confirmationService;
        this.userservice = userservice;
        this.router = router;
        this.forms = {};
        this.projets = {};
        this._projets = {};
        this.msgs = [];
        this.user = this.userservice.user;
        this.disable = [];
        this.themes = [
            { name: "Annuelle", value: "annuelle" },
            { name: "Modulaire", value: "modulaire" },
            { name: "Complementaire", value: "complementaire" },
            { name: "Sans Theme", value: "sanstheme" }
        ];
    }
    DashboardPage.prototype.getForms = function () {
        var _this = this;
        this.formservice.getForms().then(function (data) {
            _this.forms = data;
            console.log(data);
        }, function (err) {
            console.log("error trying to fetch forms " + err);
        });
    };
    DashboardPage.prototype.getProjets = function () {
        var _this = this;
        var that = this;
        this.projetservice.getProjets().then(function (data) {
            console.log(data);
            _this.projets = data;
            done();
        }, function (err) {
            console.log("error trying to fetch projets");
            console.log(err);
        });
        function done() {
            that.projets.map(function (projets) {
                projets.forms.map(function (form) {
                    if (!that.disable.includes(form._id)) {
                        that.disable.push(form._id);
                    }
                });
            });
        }
    };
    DashboardPage.prototype.getProjetsByPerimetre = function () {
        var _this = this;
        this.projetservice.getProjetsByPerimetre().then(function (data) {
            console.log(data);
            _this._projets = data;
        }, function (err) {
            console.log("error trying to fetch projets");
            console.log(err);
        });
    };
    DashboardPage.prototype.getAgentProjet = function () {
        var _this = this;
        this.projetservice.getAgentsProjet().then(function (data) {
            var list = [];
            data.forEach(function (element) {
                list.push(element.projet);
            });
            _this._projets = list;
        }, function (err) {
            console.log("error trying to fetch projets");
            console.log(err);
        });
    };
    DashboardPage.prototype.deleteForm = function (id) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Voulez vous confirmer la suppression ?',
            accept: function () {
                _this.formservice.deleteForm(id).then(function (data) {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Le Questionnaire a été supprimé avec succès' });
                    console.log("form with the id " + id + " was deleted successfully");
                    //TODO: utiliser Splice pour retirer l'element supprimer de la list des forms
                    _this.getForms();
                }, function (err) {
                    console.log("error trying to delete bloc " + err);
                });
            }
        });
    };
    DashboardPage.prototype.deleteProjet = function (id) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Voulez vous confirmer la suppression ?',
            accept: function () {
                _this.projetservice.deleteProjet(id).then(function (data) {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: 'Success', detail: "l'Enquête a été supprimé avec succès" });
                    console.log("form with the id " + id + " was deleted successfully");
                    //TODO: utiliser Splice pour retirer l'element supprimer de la list des forms
                    _this.getProjets();
                }, function (err) {
                    console.log("error trying to delete bloc " + err);
                });
            }
        });
    };
    DashboardPage.prototype.updateForm = function (form) {
        this.formservice.selectedForm = form;
        this.router.navigate(['Parametrage/Questionnaire']);
    };
    DashboardPage.prototype.updateProjet = function (projet) {
        this.projetservice.Projet = projet;
        this.router.navigate(['Parametrage/Enquete']);
    };
    DashboardPage.prototype.duplicateForm = function (form) {
        delete form._id;
        delete form.id;
        delete form.name;
        this.formservice.selectedForm = form;
        this.formservice.selectedForm.duplicate = true;
        this.router.navigate(['Parametrage/Questionnaire']);
    };
    DashboardPage.prototype.newForm = function () {
        this.formservice.selectedForm = null;
        this.router.navigate(['Parametrage/Questionnaire']);
    };
    DashboardPage.prototype.newProjet = function () {
        this.projetservice.Projet = null;
        this.router.navigate(['Parametrage/Enquete']);
    };
    DashboardPage.prototype.inspect = function (projet) {
        this.projetservice.inspect = projet;
        this.router.navigate(['Parametrage/Enquete/inspect']);
    };
    DashboardPage.prototype.opendemo = function (id) {
        window.open("http://localhost:8080/public/demo.html?myParam=" + id, "popup", "width=900,height=600,right=10,top=150");
    };
    DashboardPage.prototype.test = function () {
    };
    DashboardPage.prototype.ngOnInit = function () {
        var _this = this;
        window.dispatchEvent(new CustomEvent('ui-widget-boxes-ready'));
        window.dispatchEvent(new CustomEvent('init-component'));
        if (this.user.role == 'admin') {
            this.getForms();
            this.getProjets();
        }
        else if (this.user.role == 'agent') {
            this.getAgentProjet();
        }
        else if (this.user.role == 'controleur') {
            this.projetservice.getProjetsByController().then(function (data) {
                _this._projets = data;
                // this.region = data.perimetre.region;
                // this.province = data.perimetre.province;
            }, function (err) {
                console.log('error fetching collectes', err);
            });
        }
        else {
            this.getProjetsByPerimetre();
        }
    };
    DashboardPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'Dashboard',
            template: __webpack_require__("../../../../../src/app/pages/Parametrage/Dashboard/dashboard.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/Parametrage/Dashboard/dashboard.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_form_service__["a" /* FormService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_projet_service__["a" /* ProjetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_projet_service__["a" /* ProjetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _e || Object])
    ], DashboardPage);
    return DashboardPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ "../../../../../src/app/pages/Parametrage/Formulaire/formulaire.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports
exports.push([module.i, "@import url(/assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/ionRangeSlider/css/ion.rangeSlider.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/password-indicator/css/password-indicator.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-combobox/css/bootstrap-combobox.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-select/bootstrap-select.min.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/jquery-tag-it/css/jquery.tagit.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-daterangepicker/daterangepicker.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/select2/dist/css/select2.min.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-colorpalette/css/bootstrap-colorpalette.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-fontawesome.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-glyphicons.css);", ""]);

// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/Parametrage/Formulaire/formulaire.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin breadcrumb -->\r\n\r\n<ol class=\"breadcrumb pull-right\">\r\n</ol>\r\n<!-- end breadcrumb -->\r\n<!-- begin page-header -->\r\n<!-- end page-header -->\r\n\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n    <!-- begin col-6 -->\r\n    <div class=\"col-md-12\">\r\n            <p-messages [(value)]=\"msgs\"></p-messages>          \r\n            <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"700\"></p-confirmDialog>        \r\n            <!-- {{model | json}} -->\r\n        <!-- begin panel -->\r\n            <div class=\"panel panel-success\" data-sortable-id=\"form-plugins-4\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\r\n\t\t\t\t<h4 class=\"panel-title\">Questionnaire</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body panel-form\">\r\n\t\t\t\t<div class=\"form-horizontal form-bordered\">\r\n                    <form #f=\"ngForm\" novalidate>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Nom :</label>\r\n\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t<input type=\"text\" id=\"name\" name=\"name\" required minlength=\"4\" #name=\"ngModel\" class=\"form-control\" placeholder=\"\" value=\"\" [(ngModel)]=\"model.name\" />\r\n                    </div>\r\n                        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\r\n                             class=\"help-block\">\r\n                            <p *ngIf=\"name.errors.required\">\r\n                                Ce champ est obligatoire.\r\n                            </p>\r\n                            <div *ngIf=\"name.errors.minlength\">\r\n                                Le nom doit comporter au moins 4 caractères.\r\n                            </div>\r\n                        </div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Géométrie :</label>\r\n\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t<select [(ngModel)]=\"model.geometry\" id=\"geo\" name=\"geo\" #geo=\"ngModel\" required class=\"form-control\">\r\n                                <option *ngFor=\"let g of geometry\" [ngValue]=\"g.value\">{{g.name}}</option>\r\n                            </select>\r\n\t\t\t\t\t\t</div>\r\n                        <div *ngIf=\"geo.invalid && (geo.dirty || geo.touched)\"\r\n                             class=\"help-block\">\r\n                            <p *ngIf=\"geo.errors.required\">\r\n                                Ce champ est obligatoire.\r\n                            </p>\r\n                        </div>\r\n\t\t\t\t\t</div>\r\n                    <div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Type :</label>\r\n\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t<select [(ngModel)]=\"model.theme\" id=\"type\" name=\"type\" #type=\"ngModel\" class=\"form-control\" required>\r\n                                <option *ngFor=\"let t of themes\" [ngValue]=\"t.value\">{{t.name}}</option>\r\n                            </select>\r\n\t\t\t\t\t\t</div>\r\n                        <div *ngIf=\"type.invalid && (type.dirty || type.touched)\"\r\n                             class=\"help-block\">\r\n                            <p *ngIf=\"type.errors.required\">\r\n                                Ce champ est obligatoire.\r\n                            </p>\r\n                        </div>\r\n                    </div>                \r\n                </form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n        </div>\r\n        <div class=\"panel panel-success\" data-sortable-id=\"form-stuff-1\">\r\n\r\n            <div class=\"panel-body\">\r\n                    <div class=\"col-sm-12\">\r\n                            \r\n                    <!--<form action=\"\">-->\r\n\r\n                    <!--</form>-->\r\n                    <!--<div class=\"col-md-2\"></div>-->\r\n                    <!--<div class=\"list-group col-md-4\" [sortablejs]=\"blocs\" [sortablejsOptions]=\"options\">-->\r\n                    <!--<div class=\"list-group-item\" *ngFor=\"let b of blocs\">{{ b.name }}</div>-->\r\n                    <!--</div>-->\r\n                    <!--<div class=\"col-md-3\"></div>-->\r\n                    <!--<div class=\"list-group col-md-4\" [sortablejs]=\"items2\" [sortablejsOptions]=\"options\">-->\r\n                    <!--<div class=\"list-group-item\" *ngFor=\"let item of items2\">{{ item.name }}</div>-->\r\n                    <!--</div>-->\r\n\r\n                <!--</div>-->\r\n                <div class=\"col-md-3\"><button (click)=\"openpopup()\" [disabled]=\"model.duplicate\" type=\"button\" class=\"btn btn-success btn-block\">Form Builder</button></div>\r\n                        <div class=\"col-md-3\">\r\n                            <button (click)=\"opendemo()\" [disabled]=\"model.duplicate || !model.id_fields\" type=\"button\" class=\"btn btn-warning btn-block\">Aperçu</button>\r\n                        </div>\r\n                <div class=\"col-md-3 text-center\">\r\n                <button  (click)=\"createForm()\" id=\"saveForm\" [disabled]=\"!f.valid\" type=\"button\" class=\"btn btn-primary btn-block\">Enregistrer</button>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <button (click)=\"clearForm()\" type=\"button\" class=\"btn btn-danger btn-block\">Réinitialiser</button>\r\n                </div>\r\n            </div>\r\n            </div>\r\n            <!-- <button (click)=\"getExtrapolation()\">extrapolation</button>\r\n            {{extrapolation | json}} -->\r\n\r\n            <div class=\"clearfix\"></div>\r\n            <!--<p-pickList [source]=\"availableblocs\" [target]=\"selectedBlocs\" sourceHeader=\"Available\" targetHeader=\"Selected\" dragdrop=\"true\"-->\r\n                        <!--[responsive]=\"true\" [sourceStyle]=\"{'height':'200px'}\" [targetStyle]=\"{'height':'200px'}\" filterBy=\"name\"-->\r\n                        <!--sourceFilterPlaceholder=\"Search by brand\" targetFilterPlaceholder=\"Search by brand\">-->\r\n                <!--<ng-template let- pTemplate=\"item\">-->\r\n                    <!--<div class=\"ui-helper-clearfix\">-->\r\n                        <!--<div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{availableblocs.name}} - {{car.year}} - {{car.color}}</div>-->\r\n                    <!--</div>-->\r\n                <!--</ng-template>-->\r\n            <!--</p-pickList>-->\r\n\r\n            </div>\r\n                            <!-- #modal-message -->\r\n</div>\r\n\r\n<!-- end row -->"

/***/ }),

/***/ "../../../../../src/app/pages/Parametrage/Formulaire/formulaire.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_bloc_service__ = __webpack_require__("../../../../../src/app/services/bloc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormulairePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormulairePage = (function () {
    function FormulairePage(blocservice, formservice, confirmationService, router) {
        this.blocservice = blocservice;
        this.formservice = formservice;
        this.confirmationService = confirmationService;
        this.router = router;
        this.model = {};
        this.availableblocs = [];
        this.selectedBlocs = [];
        this.msgs = [];
        this.available = {};
        this.selected = {};
        this.extrapolation = [];
        //  moveAll(){
        //      for(var i=0; i < this.blocs.length-1;i++){
        //        var element = this.blocs[i];
        //      this.blocs.splice(i,1)
        //    this.items2.push(element);
        //  i--
        //   }
        //  };
        this.geometry = [
            { name: "Point", value: "point" },
            { name: "Polyline", value: "polyline" },
            { name: "Polygone", value: "polygone" },
            { name: "Sans Géométrie", value: "none" },
        ];
        this.themes = [
            { name: "Annuelle", value: "annuelle" },
            { name: "Modulaire", value: "modulaire" },
            { name: "Complémentaire", value: "complementaire" },
            // {name:"Pillier I", value:"pillier1"},
            // {name:"Pillier II", value:"pillier2"},
            // {name:"Projet Financier",value:"financier"}        
            { name: "RNA", value: "rna" },
        ];
    }
    FormulairePage.prototype.save = function (model, isValid) {
        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
    };
    FormulairePage.prototype.createForm = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: "Voulez vous confirmer l'enregistrement ?",
            accept: function () {
                _this.formservice.createForm(_this.model).then(function (data) {
                    _this.formservice.selectedForm = []; //ugly
                    _this.model = {};
                    _this.router.navigate(['Parametrage/Parametrage']);
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: 'Error', detail: err.message }); //create service
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                    console.log("can't create form");
                    console.log(err);
                });
            }
        });
    };
    FormulairePage.prototype.getExtrapolation = function () {
        var _this = this;
        this.formservice.getExtrapolation(this.model.id_fields).then(function (data) {
            _this.extrapolation = data;
        });
    };
    //TODO : utiliser populate coté api pour reduire le delais sur les calls
    // moved to projet
    // onThemeChange(theme){
    //     console.log(theme);
    //     this.blocservice.getBlocs(theme).then((data) => {
    //         this.availableblocs = data;
    //         // retiré les blocs déja selectionné pour la duplication et l'update
    //         for (var i = 0, len = this.selectedBlocs.length; i < len; i++) { 
    //             for (var j = 0, len2 = this.availableblocs.length; j < len2; j++) { 
    //                 if (this.selectedBlocs[i]._id === this.availableblocs[j]._id) {
    //                     this.availableblocs.splice(j, 1);
    //                     len2=this.availableblocs.length;
    //                 }
    //             }
    //         } 
    //         console.log(this.availableblocs);
    //     },(err) => {
    //         console.log("can't retreive blocs ");
    //     });
    // }
    // moveItem(items,from,to){
    //     console.log(items);
    //     for(let index in items){
    //       let idx=from.indexOf(items[index]);
    //       console.log(idx);
    //       if(idx != -1){
    //           from.splice(idx, 1);
    //           to.push(items[index])
    //       }
    //     }
    // }
    // moveAll(from,to){
    //
    // for(let index in from){
    //     to.push(from[index])
    // }
    // from.length = 0;
    // }
    FormulairePage.prototype.openpopup = function () {
        if (!this.model.id_fields && this.model.id_fields !== "") {
            this.model.id_fields = '_' + Math.random().toString(36).substr(2, 9);
        }
        window.open("http://localhost:8080/public/index.html?myParam=" + this.model.id_fields, "popup", "width=900,height=600,left=10,top=150");
    };
    FormulairePage.prototype.opendemo = function () {
        window.open("http://localhost:8080/public/demo.html?myParam=" + this.model.id_fields, "popup", "width=900,height=600,right=10,top=150");
    };
    FormulairePage.prototype.clearForm = function () {
        this.model = {};
    };
    FormulairePage.prototype.debug = function () {
        console.log(this.model);
    };
    FormulairePage.prototype.ngOnInit = function () {
        this.model = {};
        window.dispatchEvent(new CustomEvent('formulaire-ready'));
        if (this.formservice.selectedForm !== null) {
            console.log('test');
            this.model = this.formservice.selectedForm;
            this.builderid = this.model._id;
        }
    };
    FormulairePage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'formulaire',
            template: __webpack_require__("../../../../../src/app/pages/Parametrage/Formulaire/formulaire.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/Parametrage/Formulaire/formulaire.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_bloc_service__["a" /* BlocService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_bloc_service__["a" /* BlocService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_form_service__["a" /* FormService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _d || Object])
    ], FormulairePage);
    return FormulairePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=formulaire.js.map

/***/ }),

/***/ "../../../../../src/app/pages/Parametrage/Projet/button.render.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonRenderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonRenderComponent = (function () {
    function ButtonRenderComponent() {
    }
    ButtonRenderComponent.prototype.ngOnInit = function () {
        console.log('value', this.value);
        this.renderValue = this.value;
    };
    ButtonRenderComponent.prototype.example = function () {
        alert(this.renderValue);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ButtonRenderComponent.prototype, "value", void 0);
    ButtonRenderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <button (click)=\"example()\">Edit</button>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], ButtonRenderComponent);
    return ButtonRenderComponent;
}());

//# sourceMappingURL=button.render.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/Parametrage/Projet/inspect.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ":host /deep/ * {\r\n    font-size:12px    \r\n  }\r\n  :host /deep/ table {\r\n    color: #606c71;\r\n    \r\n  }\r\n  :host /deep/ table tr td, :host /deep/ table tr th {\r\n    border: 1px solid #e9ebec;\r\n  }\r\n  \r\n  .smart-table-container{ overflow-x: scroll; }\r\n\r\n  .column-size {\r\n    width: 80px\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/Parametrage/Projet/inspect.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    \r\n<div class=\"panel panel-success\">\r\n        <div class=\"panel-heading\">\r\n            <div class=\"bt-group pull-right\">\r\n            </div>\r\n            <h4 class=\"panel-title\">Enquête</h4>\r\n        </div>\r\n<div class=\"panel-body panel-form\">\r\n    <!-- <button (click)=\"test()\">test</button> -->\r\n    <div class=\"form-horizontal form-bordered\">\r\n    <div class=\"form-group\">\r\n\r\n    <label class=\"col-md-4 control-label\">Nom :</label>\r\n    <div class=\"col-md-6\">\r\n      <input type=\"text\" id=\"nom\" disabled=disabled placeholder=\"{{projet.name}}\" class=\"form-control\"/>\r\n    </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n    <label class=\"col-md-4 control-label\">Type :</label>\r\n    <div class=\"col-md-6\">\r\n      <select  disabled=disabled class=\"form-control\">\r\n                  <option>{{projet?.theme}}</option>\r\n      </select>\r\n    </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\">Périmetre :</label>\r\n    <div class=\"col-md-3\">\r\n        <label>Region</label>\r\n        <select  multiple=multiple size=5 class=\"form-control\">\r\n                <option disabled=disabled *ngFor=\"let region of projet?.perimetre?.region\">{{region?.name}}</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n            <label>Province:</label>\r\n            <select  multiple=multiple size=5 class=\"form-control\">\r\n                    <option disabled=disabled *ngFor=\"let province of projet?.perimetre?.province \">{{province?.name }}</option>\r\n            </select>\r\n    </div>\r\n    </div>\r\n<!-- Selected values: {{ projet | json }}        -->\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<div class=\"row\">\r\n    \r\n<div class=\"panel panel-success\">\r\n    <div class=\"panel-heading\">\r\n        <div class=\"bt-group pull-right\">\r\n        </div>\r\n        <h4 class=\"panel-title\">Questionnaires</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <table id=\"data-table\" class=\"table table-striped table-bordered text-center\">\r\n            <thead>\r\n                <tr>\r\n                    <!-- <th>id</th> -->\r\n                    <th>Nom</th>\r\n                    <th>Type</th>\r\n                    <th>Géométrie</th>\r\n                    <th>Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let form of projet.forms\">\r\n                    <!-- <td>{{ form._id}}</td> -->\r\n                    <td>{{ form.name}}</td>\r\n                    <td>{{ form.theme}}</td>\r\n                    <td>{{ form.geometry}}</td>\r\n                    <td>\r\n                        <button type=\"button\" (click)=\"opendemo(form.id_fields)\" class=\"btn btn-warning btn-xs\"><i class=\"fa fa-files-o\"></i>  Aperçu </button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n<p-messages [(value)]=\"msgs\"></p-messages>          \r\n<div *ngIf=\"userservice?.user?.role === 'superviseurP'\" class=\"row\">\r\n<div class=\"col-md-8 panel panel-success\">\r\n    \r\n    <div class=\"panel-body\">\r\n            <!-- <ngx-datatable\r\n            #tables\r\n            class=\"bootstrap\"\r\n            [headerHeight]=\"50\"\r\n            [rowHeight]=\"'auto'\"\r\n            [columnMode]=\"'force'\"\r\n            [rows]=\"rows\"\r\n            [columns]=\"columns\">\r\n        </ngx-datatable>    -->\r\n        <div class=\"smart-table-container\">\r\n            <ng2-smart-table #table *ngIf=\"!dataload\"  [settings]=\"settings\" [source]=\"source\" (rowSelect)=\"clear()\" (edit)=\"event($event)\"></ng2-smart-table>\r\n            </div>\r\n    </div>\r\n</div>\r\n<div class=\"col-md-4\">\r\n<div *ngIf=\"row\" class=\"panel panel-success\">\r\n    <div class=\"panel-body\">\r\n        <form>\r\n            <div class=\"row\">\r\n            <div class=\"form-group col-sm-8\">\r\n                <label>List des Agents :</label>\r\n                <select  [(ngModel)]=\"_agent\" name=\"_agent\" class=\"form-control\">\r\n                    <option [hidden]=\"affectation[row?.index]?.id_agents?.includes(t._id)\" *ngFor=\"let t of Agents\" [ngValue]=\"t\">{{t.prenom}} {{t.nom}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"form-group col-sm-3\">\r\n                <label></label>\r\n            <button class=\"form-control btn btn-success\" (click)=\"addAgent(_agent)\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\r\n            </div>                               \r\n        </div>\r\n        </form>\r\n  \r\n        <table class=\"table table-condensed\">                \r\n            <thead>\r\n            <tr>\r\n            <th>Agents Sélectionnés</th>\r\n            <th></th>\r\n        </tr>\r\n        </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let agent of affectation[row?.index]?.agents; let i = index\" [attr.data-index]=\"i\">\r\n                    <td>{{agent}}</td>\r\n                    <td><a (click)=\"removeAgent(i)\">supprimer</a></td>\r\n                </tr>\r\n        </tbody>\r\n        </table>\r\n    </div>\r\n    </div>\r\n    <div *ngIf=\"row\" class=\"panel panel-success\">\r\n        <div class=\"panel-body\">\r\n            <button (click)=\"save()\" class=\"btn btn-primary btn-lg btn-block\">\r\n                Enregistrer\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/Parametrage/Projet/inspect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projet_service__ = __webpack_require__("../../../../../src/app/services/projet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_perimetre_service__ = __webpack_require__("../../../../../src/app/services/perimetre.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return testProjetPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var testProjetPage = (function () {
    function testProjetPage(projetservice, userservice, perimetreservice) {
        this.projetservice = projetservice;
        this.userservice = userservice;
        this.perimetreservice = perimetreservice;
        this.projet = {};
        this.Communes = [];
        this.Agents = [];
        this.affectation = [];
        this.msgs = [];
        this._agents = [];
        this.settings = {
            columns: {
                commune: {
                    title: 'Communes',
                    width: '60px'
                },
                agents: {
                    title: 'Agents'
                },
            },
            mode: 'external',
            actions: {
                add: false,
                edit: true,
                delete: false,
                position: 'right',
                width: '20px'
            }
        };
        this.rows = [
            { communes: 'test', agents: ['test', 'test'] },
            { communes: 'test', agents: ['test', 'test'] },
            { communes: 'test', agents: ['test', 'test'] },
        ];
        this.columns = [
            { name: 'Communes' },
            { name: 'Agents' },
        ];
    }
    testProjetPage.prototype.opendemo = function (id) {
        window.open("http://localhost/demo.html?myParam=" + id, "popup", "width=900,height=600,right=10,top=150");
    };
    testProjetPage.prototype.getProjet = function (id) {
        var _this = this;
        this.projetservice.getProjet(id).then(function (data) {
            _this.projet = data[0];
        }, function (err) {
            console.log("can't fetch projet");
            console.log(err);
        });
    };
    testProjetPage.prototype.test = function () {
        console.log(this.projet);
    };
    testProjetPage.prototype.getCommunes = function () {
        var _this = this;
        var current = this;
        this.dataload = true;
        this.perimetreservice.getCommunes().then(function (data) {
            var tester = current.Agents.length;
            data.forEach(function (commune) {
                var array = [];
                var id_array = [];
                var i = 0;
                current.Agents.forEach(function (obj) {
                    var test = obj.affectation.findIndex(function (x) { return x.projet == current.projet._id; });
                    if (test != -1) {
                        if (obj.affectation[test].communes.includes(commune.id_commune)) {
                            array.push(obj.nom + ' ' + obj.prenom);
                            id_array.push(obj._id);
                        }
                        i++;
                        console.log(i);
                    }
                });
                current.affectation.push({ 'commune': commune.name, 'agents': array, 'id_commune': commune.id_commune, 'id_agents': id_array });
            });
            _this.source = new __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__["b" /* LocalDataSource */](_this.affectation);
            _this.dataload = false;
        }, function (err) {
            console.log("can't retreive communes ");
        });
    };
    testProjetPage.prototype.getAgents = function () {
        var _this = this;
        var current = this;
        this.userservice.getAgents().then(function (data) {
            _this.Agents = data;
            // data.forEach(function(agents){
            //     current.Agents.push({
            //         "label": agents.nom +" "+ agents.prenom,
            //         "data": "Documents Folder",
            //         "expandedIcon": "fa-user",
            //         "collapsedIcon": "fa-user",
            //     })
            // })
            _this.loading = false;
            _this.getCommunes();
        }, function (err) {
            console.log("can't retreive blocs ");
        });
    };
    testProjetPage.prototype.event = function (data) {
        // console.log(data)
        // console.log('affecation')
        // console.log(this.affectation)
        var _this = this;
        console.log('id_commune', data.data.id_commune);
        var index = this.affectation.findIndex(function (x) { return x.id_commune == data.data.id_commune; });
        data.index = index;
        this.row = data;
        var row = this.affectation[index];
        row.agents.forEach(function (element) {
            _this._agents.push(element);
        });
    };
    testProjetPage.prototype.clear = function () {
        this._agents = [];
    };
    testProjetPage.prototype.addAgent = function (agent) {
        if (agent != null && agent != undefined) {
            // let newArray = this.row.data
            this.affectation[this.row.index].agents.push(agent.nom + ' ' + agent.prenom);
            this.affectation[this.row.index].id_agents.push(agent._id);
            // this.source.update(this.row.data,newArray)
            // this.source.getAll().then((value) => {
            //     this.affectation = value
            // })
            this.source.load(this.affectation);
            this.source.refresh();
            this._agent = null;
            console.log('affectation');
            // this.source.refresh()
        }
    };
    testProjetPage.prototype.removeAgent = function (index) {
        this._agents.splice(index, 1);
        var newArray = this.affectation[this.row.index];
        this.affectation[this.row.index].agents.splice(index, 1);
        this.affectation[this.row.index].id_agents.splice(index, 1);
        // this.source.update(this.affectation[this.row.index],newArray)
        // this.affectation[this.row].agents.splice(index,1)
        // this.affectation[this.row].id_agents.splice(index,1)
        // this.source.getAll().then((value) => {
        //     this.affectation = value 
        //     this.source.load(this.affectation)
        // }) 
        this.source.load(this.affectation);
    };
    testProjetPage.prototype.save = function () {
        var _this = this;
        var request = {};
        this.source.getAll().then(function (data) {
            request.data = data;
            request.projet = _this.projet._id;
            console.log(request);
            _this.userservice.setAffectation(request).then(function (back) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: 'Success', detail: "Affectation" }); //create service
                console.log(back);
            });
        });
    };
    testProjetPage.prototype.ngOnInit = function () {
        if (this.projetservice.inspect !== null)
            this.getProjet(this.projetservice.inspect);
        this.getAgents();
    };
    testProjetPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'inspect',
            template: __webpack_require__("../../../../../src/app/pages/Parametrage/Projet/inspect.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/Parametrage/Projet/inspect.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_projet_service__["a" /* ProjetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_projet_service__["a" /* ProjetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_perimetre_service__["a" /* PerimetreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_perimetre_service__["a" /* PerimetreService */]) === "function" && _c || Object])
    ], testProjetPage);
    return testProjetPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=inspect.js.map

/***/ }),

/***/ "../../../../../src/app/pages/Parametrage/Projet/projet.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".subject-info-box-1,\r\n.subject-info-box-2 {\r\n    float: left;\r\n    width: 45%;\r\n}\r\n.subject-info-box-1 select,\r\n.subject-info-box-2 select {\r\n    height: 200px;\r\n    padding: 0;\r\n}\r\n#label {\r\n    padding-bottom: 1cm;\r\n}\r\n\r\n.subject-info-box-1 select option,\r\n.subject-info-box-2 select option {\r\n    padding: 4px 10px 4px 10px;\r\n}\r\n.subject-info-box-1 select option:hover,\r\n.subject-info-box-2 select option:hover {\r\n    background: #EEEEEE;\r\n}\r\n.subject-info-arrows {\r\n    float: left;\r\n    width: 10%;\r\n}\r\n.subject-info-arrows input {\r\n    width: 70%;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.formbuilder {\r\n    overflow-y: scroll;\r\n}\r\n\r\n#form-builder-container{\r\n    overflow: hidden;\r\n}\r\n\r\n#formbuilder {\r\n    overflow: auto;\r\n}\r\n\r\n.smart-table-container{ overflow-x: scroll; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/Parametrage/Projet/projet.html":
/***/ (function(module, exports) {

module.exports = "<p-messages [(value)]=\"msgs\"></p-messages>\r\n\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n<div class=\"col-md-7\">\r\n<div class=\"panel panel-success\" data-sortable-id=\"form-plugins-4\">\r\n          <div class=\"panel-heading\">\r\n\r\n        <h4 class=\"panel-title\">Enquête</h4>\r\n        </div>\r\n            <div class=\"panel-body panel-form\">\r\n        <div class=\"form-horizontal form-bordered\">\r\n        <form #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\">\r\n\r\n        <label class=\"col-md-2 control-label\">Nom :</label>\r\n        <div class=\"col-md-10\">\r\n          <input type=\"text\" id=\"nom\" name=\"nom\" #nom=\"ngModel\" class=\"form-control\" required placeholder=\"\" value=\"\" [(ngModel)]=\"projet.name\" />\r\n        </div>\r\n                <div *ngIf=\"nom.invalid && (nom.dirty || nom.touched)\"\r\n                     class=\"help-block\">\r\n                    <p *ngIf=\"nom.errors.required\">\r\n                        Ce champ est obligatoire.\r\n                    </p>\r\n                    <div *ngIf=\"nom.errors.minlength\">\r\n                        Le nom doit comporter au moins 4 caractères.\r\n                    </div>\r\n                </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n        <label class=\"col-md-2 control-label\">Type :</label>\r\n        <div class=\"col-md-10\">\r\n          <select [(ngModel)]=\"projet.theme\" id=\"type\" name=\"type\" #type=\"ngModel\" required class=\"form-control\" (ngModelChange)=\"onThemeChange($event)\">\r\n                      <option *ngFor=\"let t of themes\" [ngValue]=\"t.value\">{{t.name}}</option>\r\n          </select>\r\n        </div>\r\n            <div *ngIf=\"type.invalid && (type.dirty || type.touched)\"\r\n                 class=\"help-block\">\r\n                <p *ngIf=\"type.errors.required\">\r\n                    Ce champ est obligatoire.\r\n                </p>\r\n            </div>\r\n        </div>\r\n        </form>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Region :</label>\r\n        <div class=\"col-md-10\">\r\n            <!--<select2 [data]=\"regionsData\" -->\r\n            <!--[options]=\"options\"-->\r\n            <!--[width]=\"240\"            -->\r\n            <!--(valueChanged)=\"onRegionChange($event)\"-->\r\n            <!--&gt;</select2>-->\r\n            <angular2-multiselect [data]=\"list_regions\" [(ngModel)]=\"projet.regions\" [settings]=\"RegionSettings\" (onSelect)=\"OnRegionChange($event)\" (onSelectAll)=\"OnRegionChange($event)\" (onDeSelect)=\"OnRegionDeselect($event)\" (onDeSelectAll)=\"OnRegionDeselect($event)\"></angular2-multiselect>\r\n        </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Province :</label>\r\n        <div class=\"col-md-10\">\r\n            <!--<select2 [data]=\"exampleData\"-->\r\n            <!--[options]=\"options\"-->\r\n            <!--[width]=\"240\"-->\r\n            <!--(valueChanged)=\"onProvinceChange($event)\"-->\r\n            <!--&gt;</select2>-->\r\n            <angular2-multiselect [data]=\"_listprovinces\" [(ngModel)]=\"projet.provinces\" [settings]=\"ProvinceSettings\" (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"OnItemDeSelect($event)\"></angular2-multiselect>\r\n        </div>\r\n        </div>\r\n    <!--Selected values: {{ projet | json }}        -->\r\n    </div>\r\n\r\n\r\n</div>\r\n</div>\r\n</div>\r\n<div class=\"col-md-5\">\r\n    <div class=\"panel panel-success\">\r\n        <div class=\"panel-heading\">\r\n            <h4 class=\"panel-title\">Validation</h4>\r\n        </div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"form-horizontal form-bordered\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-3 control-label\">Alias :</label>\r\n                <div class=\"col-md-9\">\r\n                        {{ error }}                        \r\n                    <input [(ngModel)]=\"_name\" type=\"text\" class=\"form-control\" />\r\n                </div>\r\n                <label class=\"col-md-3 control-label\">Agent :</label>\r\n                <div class=\"col-md-9\">\r\n                    <select [(ngModel)]=\"_agent\" class=\"form-control\">\r\n                        <option [hidden]=\"agentExists(t.id)\" *ngFor=\"let t of controllers\" [ngValue]=\"t.id\">{{t.name}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div>\r\n            <button *ngIf=\"updatinglevel == null\" (click)=\"addLevel(_name,_agent)\" class=\"btn btn-primary btn-sm m-r-5\">Ajouter</button>\r\n            <button type=\"submit\" *ngIf=\"updatinglevel != null\"  (click)=\"updateLevel(_name,_agent)\" class=\"btn btn-sm btn-primary m-r-5\">Valider</button>\r\n            <button type=\"submit\" *ngIf=\"updatinglevel != null\" (click)=\"cancel(false)\" class=\"btn btn-sm btn-primary m-r-5\">Annuler</button>\r\n        </div>\r\n        </div>\r\n        <div class=\"smart-table-container\">\r\n        <table class=\"table table-condensed \">                \r\n            <thead>\r\n                <tr>\r\n            <th>Niveau</th>\r\n            <th>Alias</th>\r\n            <th>Agent</th>\r\n        </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let level of projet.validation; let i = index\" [attr.data-index]=\"i\">\r\n                    <td>{{ i + 1}}</td>\r\n                    <td>{{level.alias}}</td>\r\n                    <td>{{level.name}}</td>\r\n                    <td><a (click)=\"removeLevel(i)\">Supprimer</a> <a (click)=\"setLevel(i)\">Modifier</a></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"col-md-12\">\r\n<div class=\"panel panel-success\" data-sortable-id=\"form-stuff-1\">\r\n            <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">Questionnaires</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                    <div class=\"col-sm-12\">\r\n\r\n                <div class=\"row\">\r\n                <div class=\"col-md-4 form-group subject-info-box-1\">\r\n                        <label >Questionnaires Disponnibles :</label>\r\n\r\n                        <select  [(ngModel)]=\"forms\" size=\"7\" id='forms' class=\"form-control\">\r\n                            <option [hidden]=\"a.id_fields == undefined\" [disabled]=\"(a.geometry !== 'none' && disabled.includes('none')) || (disabled.includes(a.geometry) && a.geometry !== 'none')  || (disabled.length !== 0 && disabled.includes('none') === false && a.geometry === 'none' )\"\r\n                            *ngFor=\"let a of forms_disponnible\" [ngValue]=\"a\">{{ a.name }} - [{{ a.geometry }}]</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-md-4 subject-info-arrows text-center\">\r\n                        <label  id =\"label\">Option</label>\r\n                        <input type=\"button\" id=\"btnAdd\" value=\">\" (click)=\"move(forms,forms_disponnible,forms_selected)\" class=\"btn btn-primary\" /><br />\r\n                        <input type=\"button\" id=\"btnRemove\" value=\"<\" (click)=\"removeitem(selected,forms_selected,forms_disponnible)\" class=\"btn btn-primary\" /><br />\r\n                    </div>\r\n                    <div class=\"col-md-4 form-group subject-info-box-2\">\r\n                        <label >Questionnaires Sélectionnés :</label>\r\n                        <select [(ngModel)]=\"selected\" size=\"7\" id='selected' class=\"form-control\">\r\n                            <option *ngFor=\"let s of forms_selected\" [ngValue]=\"s\">{{ s.name }}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n            </div>\r\n</div>\r\n</div>\r\n<div class=\"col-md-12\">\r\n    <div class=\"panel panel-success\">\r\n                <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">Champs d'extrapolation</h4>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                        <form class=\"form-inline\" >\r\n                                <div class=\"form-group m-r-10\">\r\n                                        <select [disabled]=\"forms_selected.length == 0\" [(ngModel)]=\"formulaire\" name=\"formulaire\" class=\"form-control\" width=\"150px\" (ngModelChange)=\"onFormSelect($event)\">\r\n                                                <option  *ngFor=\"let s of forms_selected;let f = index\" [ngValue]=\"s.id_fields\">{{ s.name }}</option>\r\n                                        </select>                            \r\n                                </div>\r\n                                <div class=\"form-group m-r-10\">\r\n                                        <select [disabled]=\"forms_selected.length == 0\" [(ngModel)]=\"fieldtype\" name=\"fieldtype\" class=\"form-control\" width=\"150px\">\r\n                                                <option value=\"other\" >Champs de filtres</option>\r\n                                                <option value=\"number\" >Champs numérique</option>\r\n\r\n                                        </select>                            \r\n                                </div>\r\n                            <div class=\"form-group m-r-10\" *ngIf=!advanced>\r\n                                    <select [disabled]=\"forms_selected.length == 0 || fieldtype == null || formulaire == null\" [(ngModel)]=\"apiKey\" name=\"apiKey\" class=\"form-control\" width=\"150px\">\r\n                                                    <option [hidden]=\"contains('field',s)\" *ngFor=\"let s of extrapolation;let f = index\" [ngValue]=\"s.key\">{{ s.key }}</option>\r\n                                    </select>                            \r\n                            </div>\r\n                            <!-- {{apiKey}} -->\r\n                            <div class=\"form-group m-r-10\">\r\n                                <input [disabled]=\"extrapolation.length == 0 || fieldtype == null\" [(ngModel)]=\"label\" name=\"label\" type=\"text\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Variable\">\r\n                            </div>\r\n                            <button type=\"submit\" *ngIf=\"updating == null\" (click)=\"add(apiKey,label,formulaire,apikey1,operateur,apikey2)\" class=\"btn btn-sm btn-primary m-r-5\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\r\n                            <button type=\"submit\" *ngIf=\"updating == null\" (click)=\"advance()\" class=\"btn btn-sm btn-primary m-r-5\">Avancée</button>\r\n                            <button type=\"submit\" *ngIf=\"updating != null\"  (click)=\"set(apiKey,label,formulaire,apikey1,operateur,apikey2)\" class=\"btn btn-sm btn-primary m-r-5\">Valider</button>\r\n                            <button type=\"submit\" *ngIf=\"updating != null\" (click)=\"cancel(true)\" class=\"btn btn-sm btn-primary m-r-5\">Annuler</button>\r\n\r\n\r\n\r\n                        </form>\r\n                        <br>\r\n                        <form class=\"form-inline\" *ngIf=\"advanced\">\r\n                            <div class=\"form-group m-r-10\">\r\n                                <select [disabled]=\"extrapolation.length == 0\" [(ngModel)]=\"apikey1\" name=\"apikey1\" class=\"form-control\" width=\"150px\">\r\n                                                <option  [hidden]=\"s.type !== 'number'\" *ngFor=\"let s of extrapolation;let f = index\" [ngValue]=\"s.key\">{{ s.key }}</option>\r\n                                </select>                   \r\n                            </div>\r\n                            <div class=\"form-group m-r-10\">\r\n                                <select [disabled]=\"extrapolation.length == 0\" [(ngModel)]=\"operateur\" name=\"operateur\" class=\"form-control\" width=\"150px\">\r\n                                    <option value=\"+\">+</option>\r\n                                    <option value=\"-\">-</option>\r\n                                    <option value=\"*\">*</option>\r\n                                    <option value=\"/\">/</option>\r\n                                </select>   \r\n                            </div>\r\n                            <div class=\"form-group m-r-10\">\r\n                            <select [disabled]=\"extrapolation.length == 0\" [(ngModel)]=\"apikey2\" name=\"apikey2\" class=\"form-control\" width=\"150px\">\r\n                                <option [hidden]=\"s.type !== 'number'\" *ngFor=\"let s of extrapolation;let f = index\" [ngValue]=\"s.key\">{{ s.key }}</option>\r\n                            </select>\r\n                            </div>\r\n                            <div class=\"form-group m-r-10\">\r\n                                    <!-- <div class=\"checkbox\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\" value=\"true\" name=\"hide\" [(ngModel)]=\"hide\" > hide\r\n                                            </label>\r\n                                    </div> -->\r\n                            </div>\r\n                        </form>\r\n                    <br>\r\n                        <table class=\"table table-hover table-bordered\">\r\n                                <thead>\r\n                                <tr>\r\n                                <th>Key</th>\r\n                                <th>Variable</th>\r\n                                <th></th>\r\n                            </tr>\r\n                            </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of table;let i = index\">\r\n                                        <td *ngIf=\"item.type !='cal' \">{{item?.field?.key}}</td>\r\n                                        <td *ngIf=\"item.type =='cal' \">{{item.formule.variables[0]}} {{item.formule.operateur}} {{item.formule.variables[1]}}</td>\r\n                                        <td>{{item?.label}}</td>\r\n                                        <td><a (click)=\"remove(i)\">Supprimer</a> <a (click)=\"update(i)\">Modifier</a></td>\r\n                                    </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"col-md-4\"></div>\r\n                        <div class=\"col-md-4 text-center\">\r\n                        <button  (click)=\"createProjet()\" [disabled]=\"!f.valid\" id=\"saveProject\" type=\"button\" class=\"btn btn-primary btn-block\">Enregistrer</button>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                                <button (click)=\"clearProjet()\" type=\"button\" class=\"btn btn-danger btn-block\">Réinitialiser</button>\r\n                        </div>\r\n                </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/Parametrage/Projet/projet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_perimetre_service__ = __webpack_require__("../../../../../src/app/services/perimetre.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_projet_service__ = __webpack_require__("../../../../../src/app/services/projet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjetPage = (function () {
    function ProjetPage(formservice, perimetreservice, confirmationservice, projetservice, userservice, router) {
        this.formservice = formservice;
        this.perimetreservice = perimetreservice;
        this.confirmationservice = confirmationservice;
        this.projetservice = projetservice;
        this.userservice = userservice;
        this.router = router;
        this.projet = {};
        this.msgs = [];
        this.forms_selected = [];
        this.forms_disponnible = [];
        this.forms = [];
        this.selected = [];
        // provinces = []
        this.list_regions = [];
        this.list_provinces = [];
        // public ProvinceData = []
        // public exampleData = []
        this.dropdownList = [];
        this.selectedItems = [];
        this.RegionSettings = {};
        this.ProvinceSettings = {};
        this.controllers = [];
        this.advanced = false;
        this.updatinglevel = null;
        this._listprovinces = [];
        //     done(){
        //
        //     }
        // moveItem(items,from,to){    
        // for(let index in items){
        //     let idx=from.indexOf(items[index]);
        //     console.log(idx);
        //     if(idx != -1){
        //         from.splice(idx, 1);
        //         to.push(items[index])
        //         if(this.disabled.includes(items[index].geometry) && items[index].geometry !== 'none'){
        //             this.disabled = this.disabled.filter(item => item !== items[index].geometry)
        //             console.log(this.disabled)
        //         }else{
        //             this.disabled.push(items[index].geometry)
        //             console.log(this.disabled)
        //         }
        //     }
        // }
        // }
        this.disabled = [];
        this.table = [];
        this.extrapolation = [];
        this.themes = [
            { name: "Annuelle", value: "annuelle" },
            { name: "Modulaire", value: "modulaire" },
            { name: "Complémentaire", value: "complementaire" },
            { name: "RNA", value: "rna" },
        ];
        this.projet.validation = [];
        this.projet.regions = [];
    }
    ProjetPage.prototype.addLevel = function (alias, agent) {
        if (!alias) {
            this.error = "Alias est obligatoire";
        }
        else {
            if (this.projet.validation.length < 5 && !this.agentExists(agent)) {
                var index = this.controllers.findIndex(function (x) { return x.id == agent; });
                this.projet.validation.push({ "alias": alias, 'agent': this.controllers[index].id, 'name': this.controllers[index].name });
            }
            this.error = "";
        }
        this._name = "";
        this._agent = "";
    };
    ProjetPage.prototype.removeLevel = function (key) {
        this.projet.validation.splice(key, 1);
    };
    ProjetPage.prototype.setLevel = function (i) {
        this.updatinglevel = i;
        this._name = this.projet.validation[i].alias;
        this._agent = this.projet.validation[i].agent;
    };
    ProjetPage.prototype.updateLevel = function (alias, agent) {
        if (!alias) {
            this.error = "Alias est obligatoire";
        }
        else {
            var index = this.controllers.findIndex(function (x) { return x.id == agent; });
            this.projet.validation[this.updatinglevel].alias = alias;
            this.projet.validation[this.updatinglevel].agent = this.controllers[index].id;
            this.projet.validation[this.updatinglevel].name = this.controllers[index].name;
            this.updatinglevel = null;
            this.error = "";
        }
    };
    ProjetPage.prototype.agentExists = function (id) {
        if (this.projet.validation != null) {
            return this.projet.validation.some(function (el) {
                return el.agent === id;
            });
        }
    };
    ProjetPage.prototype.getControllers = function () {
        var _this = this;
        this.userservice.getControlleurs().then(function (data) {
            data.forEach(function (element) {
                _this.controllers.push({ 'name': element.nom + ' ' + element.prenom, 'id': element._id });
            });
        }, function (err) {
            console.log('fetch controllers', err);
        });
    };
    ProjetPage.prototype.onThemeChange = function (theme) {
        var _this = this;
        this.formservice.getFormsByTheme(theme).then(function (data) {
            _this.forms_disponnible = data;
            // retiré les blocs déja selectionné pour la duplication et l'update
            for (var i = 0, len = _this.forms_selected.length; i < len; i++) {
                for (var j = 0, len2 = _this.forms_disponnible.length; j < len2; j++) {
                    if (_this.forms_selected[i]._id === _this.forms_disponnible[j]._id) {
                        _this.forms_disponnible.splice(j, 1);
                        len2 = _this.forms_disponnible.length;
                    }
                }
            }
            console.log(_this.forms_disponnible);
        }, function (err) {
            console.log("can't retreive Forms ");
        });
    };
    //    onProvinceChange(province){
    //        this.projet['province'] = province.value
    //    }
    //    onRegionChange(region){
    //        console.log
    //        let that = this
    //
    //        let id_mongo = []
    //        region.value.forEach(element => {
    //             id_mongo.push(element.split('|').pop())
    //        });
    //        this.projet['region'] = id_mongo
    //        let provinces = []
    //        let count = 0
    //        for(let i = 0;i < region.value.length;i++ ){
    //          let id_region = region.value[i].split('|').shift()
    //         this.perimetreservice.getProvinces(id_region).then((data) => {
    //             let children = []
    //             for(var key in data){
    //                 children.push({id: data[key].id,text: data[key].name})
    //             }
    //             count++;
    //             provinces.push({'id': id_region,'text': id_region,children: children})
    //             if (count > region.value.length - 1) done();
    //         }, (err) => {
    //           console.info("can't retreive provinces ");
    //         })
    //        }
    //
    //        function done(){
    //            console.log(provinces),
    //            console.log('done here')
    //             that.exampleData = provinces
    //        }
    //
    //
    // };
    //
    ProjetPage.prototype.onRegionSelect = function () {
        //     let that = this;
        //     let thisregions = this.projet['regions'];
        //     let region = [];
        //     let count = 0
        //     for(let i = 0;i < thisregions.length;i++){
        //         let id = thisregions[i].id.split('|').shift();
        //         this.perimetreservice.getProvinces(id).then((data) => {
        //             for(var key in data) {
        //                 region.push({'id': data[key]._id, 'itemName': data[key].name})
        //             }
        //             count++
        //         if (count > thisregions.length - 1) done();
        //         })
        //     }
        //     function done(){
        //        console.log(region),
        //        console.log('done here');
        //         that.list_provinces = region
        //    }
    };
    ProjetPage.prototype.getRegions = function () {
        var _this = this;
        this.perimetreservice.getRegions().then(function (data) {
            var regions = [];
            for (var key in data) {
                regions.push({ 'id': data[key].id_region, 'itemName': data[key].name, '_id': data[key]._id });
            }
            _this.list_regions = regions;
            console.log(regions);
            var array = [];
            _this.projet['perimetre'].region.forEach(function (element) {
                var object = { 'id': element.id_region, 'itemName': element.name, '_id': element._id };
                array.push(object);
                _this.OnRegionChange(object);
            });
            _this.projet.regions = array;
        }, function (err) {
            console.log("can't retreive regions ");
        });
    };
    ProjetPage.prototype.OnRegionChange = function (region) {
        var _this = this;
        if (Array.isArray(region)) {
            this._listprovinces = this.list_provinces;
        }
        else {
            this.list_provinces.forEach(function (element) {
                if (element.id_region == region.id) {
                    _this._listprovinces.push(element);
                }
            });
        }
        console.log(this._listprovinces);
    };
    ProjetPage.prototype.OnRegionDeselect = function (region) {
        if (Array.isArray(region)) {
            this._listprovinces = [];
            this.projet.provinces = [];
        }
        else {
            var provinces = this._listprovinces.filter(function (el) {
                return el.id_region !== region.id;
            });
            console.log(this.projet.provinces);
            var _provinces = this.projet.provinces.filter(function (el) {
                return el.id_region !== region.id;
            });
            this.projet.provinces = _provinces;
            console.log(this.projet.provinces);
            this._listprovinces = provinces;
        }
    };
    ProjetPage.prototype.getProvinces = function () {
        var _this = this;
        this.perimetreservice.getProvinces(0).then(function (data) {
            var provinces = [];
            data.forEach(function (element) {
                provinces.push({ 'id': element.id_province, 'itemName': element.name, 'id_region': element.id_region, '_id': element._id });
            });
            _this.list_provinces = provinces;
            var array = [];
            _this.projet['perimetre'].province.forEach(function (element) {
                array.push({ 'id': element.id_province, 'itemName': element.name, 'id_region': element.id_region, '_id': element._id });
            });
            _this.projet.provinces = array;
        });
    };
    ProjetPage.prototype.onItemSelect = function (item) {
        console.log('Selected Item:');
        console.log(item);
    };
    ProjetPage.prototype.OnItemDeSelect = function (item) {
        console.log('De-Selected Item:');
        console.log(item);
    };
    ProjetPage.prototype.move = function (item, from, to) {
        var idx = from.indexOf(item);
        if (idx != -1) {
            from.splice(idx, 1);
            to.push(item);
            this.disabled.push(item.geometry);
            this.forms = [];
            if (to.length == 1) {
                this.onFormSelect(item.id_fields);
                this.formulaire = item.id_fields;
            }
        }
    };
    ProjetPage.prototype.removeitem = function (item, from, to) {
        var idx = from.indexOf(item);
        if (this.projet.theme == item.theme) {
            if (idx != -1) {
                from.splice(idx, 1);
                this.extrapolation.splice(idx, 1);
                to.push(item);
                var idy = this.disabled.indexOf(item.geometry);
                this.disabled.splice(idy, 1);
                this.selected = [];
                this.extrapolation = [];
            }
        }
        else {
            if (idx != -1) {
                from.splice(idx, 1);
                this.extrapolation.splice(idx, 1);
                var idy = this.disabled.indexOf(item.geometry);
                this.disabled.splice(idy, 1);
                this.extrapolation = [];
            }
        }
        var re = this.table.filter(function (element) {
            return element.form != item.id_fields;
        });
        if (from.length == 1) {
            this.onFormSelect(item.id_fields);
            this.formulaire = item.id_fields;
        }
        this.table = re;
    };
    ProjetPage.prototype.add = function (key, label, form, api1, op, api2) {
        if ((this.apiKey == null || this.apiKey == "") && this.advanced == false || label == null || this.label == "") {
            return;
        }
        if ((api1 == null || api2 == null || op == null) && this.advanced == true) {
            return;
        }
        console.log('here');
        if (this.table.findIndex(function (x) { return x.label == label; }) == -1) {
            var v = this.extrapolation.find(function (x) { return x.key == key; });
            console.log(v);
            var formule = null;
            var type = 'extra';
            switch (this.fieldtype) {
                case 'number':
                    type = 'extra';
                    break;
                case 'other':
                    type = 'filtre';
                    break;
                default:
                    break;
            }
            if (op) {
                formule = { operateur: op, variables: [api1, api2] };
                type = 'cal';
            }
            console.log('form', form);
            this.table.push({ 'field': v, 'label': label, 'form': form, 'formule': formule, 'type': type });
            this.apiKey = "";
            this.label = "";
            this.apikey1 = null;
            this.apikey2 = null;
            this.operateur = null;
            this.advanced = false;
            console.log(this.table);
        }
    };
    ProjetPage.prototype.remove = function (index) {
        this.table.splice(index, 1);
        console.log('element deleted');
    };
    ProjetPage.prototype.update = function (index) {
        this.updating = index;
        var data = this.table[index];
        this.label = data.label;
        this.advanced = false;
        this.formulaire = data.form;
        this.onFormSelect(data.form);
        if (data.type == 'cal') {
            this.advanced = true;
            this.apikey1 = data.formule.variables[0];
            this.operateur = data.formule.operateur;
            this.apikey2 = data.formule.variables[1];
        }
        else {
            this.apiKey = data.field.key;
        }
    };
    ProjetPage.prototype.set = function (key, label, form, api1, op, api2) {
        if ((this.apiKey == null || this.apiKey == "") && this.advanced == false || this.label == null || this.label == "") {
            return;
        }
        if ((api1 == null || api2 == null || op == null) && this.advanced == true) {
            return;
        }
        console.log('here');
        if (this.table.findIndex(function (x) { return x.label == label; }) == this.updating || this.table.findIndex(function (x) { return x.label == label; }) == -1) {
            var v = this.extrapolation.find(function (x) { return x.key == key; });
            var row = this.table[this.updating];
            row.field = v;
            row.label = label;
            row.form = form;
            if (this.advanced == true) {
                if (api1 == null || api2 == null || op == null) {
                    return;
                }
                console.log('row');
                console.log(row);
                row.formule.variables[0] = api1;
                row.formule.variables[1] = api2;
                row.formule.operateur = op;
                console.log(row);
                this.advanced = false;
            }
            this.updating = null;
            this.apiKey = "";
            this.label = "";
            this.apikey1 = null;
            this.apikey2 = null;
            this.operateur = null;
        }
    };
    ProjetPage.prototype.cancel = function (status) {
        this.apiKey = "";
        this.label = "";
        if (status) {
            this.updating = null;
        }
        else {
            this.updatinglevel = null;
        }
    };
    ProjetPage.prototype.advance = function () {
        this.advanced = !this.advanced;
        this.apikey1 = null;
        this.apikey2 = null;
        this.operateur = null;
    };
    ProjetPage.prototype.onFormSelect = function (form) {
        var _this = this;
        console.log(form);
        this.apiKey = null;
        if (form) {
            this.formservice.getExtrapolation(form).then(function (data) {
                _this.extrapolation = data;
                console.log('fields loaded correctly');
            });
        }
    };
    ProjetPage.prototype.contains = function (key, value) {
        var types = ['select', 'checkbox', 'radio', 'selectboxes'];
        if (this.fieldtype == 'other' && !types.includes(value.type)) {
            return true;
        }
        else if (this.fieldtype == 'number' && value.type != this.fieldtype) {
            return true;
        }
        else {
            var isThere = this.table.some(function (element) {
                if (element.type == 'extra' || element.type == 'filtre') {
                    return element[key].key == value.key;
                }
            });
            return isThere;
        }
        // if(this.fieldtype == 'number' && value.type !== 'number'){
        //     return true
        // }
    };
    ProjetPage.prototype.getfields = function (form) {
    };
    ProjetPage.prototype.createProjet = function () {
        var _this = this;
        this.confirmationservice.confirm({
            message: "Voulez vous confirmer l'enregistrement ?",
            accept: function () {
                if (_this.forms_selected) {
                    _this.projet['forms'] = _this.forms_selected.map(function (element) {
                        return element._id;
                    });
                }
                if (_this.projet['provinces']) {
                    _this.projet['province'] = _this.projet['provinces'].map(function (element) {
                        return element._id;
                    });
                }
                if (_this.projet['regions']) {
                    _this.projet['region'] = _this.projet['regions'].map(function (element) {
                        return element._id;
                    });
                }
                delete _this.projet['provinces'];
                delete _this.projet['regions'];
                delete _this.projet['perimetre'];
                _this.projet['extrapolation'] = _this.table;
                _this.projetservice.createProjet(_this.projet).then(function (data) {
                    console.log('projet created');
                    console.log(data);
                    _this.router.navigate(['Parametrage/Parametrage']);
                    localStorage.removeItem('storage');
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: 'Error', detail: err.message });
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                    console.log("can't create projet");
                    console.log(err);
                });
            }
        });
    };
    ProjetPage.prototype.clearProjet = function () {
        this.projet = {};
        this.forms_selected = [];
        this.table = [];
        this.projet.validation = [];
        this.label = "";
        this.extrapolation = [];
        this.disabled = [];
        this._name = "";
        this._agent = "";
        this.forms_disponnible = [];
        this.advanced = false;
        this.apikey1 = null;
        this.apikey2 = null;
        this.operateur = null;
    };
    ProjetPage.prototype.moveAll = function (from, to) {
        for (var index in from) {
            to.push(from[index]);
        }
    };
    //
    //     changed(data: {value: string[]}) {
    //         console.log(data.value)
    //         this.current = data.value.join(' | ');
    //     }
    ProjetPage.prototype.ngOnInit = function () {
        var _this = this;
        this.updating = null;
        this.RegionSettings = {
            singleSelection: false,
            text: "Regions",
            selectAllText: 'Tout sélectionner',
            unSelectAllText: 'Tout désélectionner',
            enableSearchFilter: true,
            searchPlaceholderText: 'Rechercher',
            badgeShowLimit: 10,
        };
        this.ProvinceSettings = {
            singleSelection: false,
            text: "Provinces",
            selectAllText: 'Tout sélectionner',
            unSelectAllText: 'Tout désélectionner',
            enableSearchFilter: true,
            searchPlaceholderText: 'Rechercher',
            badgeShowLimit: 10
        };
        this.getControllers();
        // this.exampleData = []
        // this.regionsData = []
        // this.ProvinceData = []
        // this.options = {
        //     multiple: true
        //   }
        // this.valueRegion = ['Tanger-Tétouan-Al Hoceima']
        //
        console.log(this.projetservice.Projet);
        if (this.projetservice.Projet !== null) {
            this.projet = this.projetservice.Projet;
            this.onThemeChange(this.projet['theme']);
            this.forms_selected = this.projet['forms'] || [];
            this.table = this.projet['extrapolation'];
            this.forms_selected.forEach(function (element) {
                _this.disabled.push(element.geometry);
            });
            this.forms_selected.forEach(function (element) {
                // this.getfields(element)
            });
            var array = [];
            console.log('array');
            console.log(array);
            this.projet['provinces'] = this.projet['perimetre'].province;
        }
        else {
            this.projet.validation = [];
        }
        this.getProvinces();
        this.getRegions();
    };
    ProjetPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'projet',
            template: __webpack_require__("../../../../../src/app/pages/Parametrage/Projet/projet.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/Parametrage/Projet/projet.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_form_service__["a" /* FormService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_perimetre_service__["a" /* PerimetreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_perimetre_service__["a" /* PerimetreService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_projet_service__["a" /* ProjetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_projet_service__["a" /* ProjetService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"]) === "function" && _f || Object])
    ], ProjetPage);
    return ProjetPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=projet.js.map

/***/ }),

/***/ "../../../../../src/app/pages/chart/chart-d3/chart-d3.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports
exports.push([module.i, "@import url(/assets/plugins/nvd3/build/nv.d3.css);", ""]);

// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/chart/chart-d3/chart-d3.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin breadcrumb -->\r\n<ol class=\"breadcrumb pull-right\">\r\n    <li><a href=\"javascript:;\">Home</a></li>\r\n    <li><a href=\"javascript:;\">Page Options</a></li>\r\n    <li class=\"active\">d3 Chart</li>\r\n</ol>\r\n<!-- end breadcrumb -->\r\n<!-- begin page-header -->\r\n<h1 class=\"page-header\">d3 Chart <small>header small text goes here...</small></h1>\r\n<!-- end page-header -->\r\n\r\n<!-- begin alert -->\r\n<div class=\"alert alert-info\">\r\n    <span class=\"label label-inverse m-r-5\">NOTE!</span> NVD3 Chart is not supported in old browser like IE8.\r\n</div>\r\n<!-- end alert -->\r\n\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n    <!-- begin col-6 -->\r\n    <div class=\"col-md-6\">\r\n        <div class=\"panel panel-inverse\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Line Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div id=\"nv-line-chart\" class=\"height-sm\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-6 -->\r\n    <!-- begin col-6 -->\r\n    <div class=\"col-md-6\">\r\n        <div class=\"panel panel-inverse\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Bar Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div id=\"nv-bar-chart\" class=\"height-sm\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-6 -->\r\n</div>\r\n<!-- end row -->\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n    <!-- begin col-6 -->\r\n    <div class=\"col-md-6\">\r\n        <div class=\"panel panel-inverse\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Stacked Area Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div id=\"nv-stacked-area-chart\" class=\"height-sm\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-6 -->\r\n    <!-- begin col-6 -->\r\n    <div class=\"col-md-6\">\r\n        <div class=\"panel panel-inverse\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Stacked Bar Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div id=\"nv-stacked-bar-chart\" class=\"height-sm\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-6 -->\r\n</div>\r\n<!-- end row -->\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n    <!-- begin col-6 -->\r\n    <div class=\"col-md-6\">\r\n        <div class=\"panel panel-inverse\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Pie Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div id=\"nv-pie-chart\" class=\"height-sm\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-6 -->\r\n    <!-- begin col-6 -->\r\n    <div class=\"col-md-6\">\r\n        <div class=\"panel panel-inverse\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Donut Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div id=\"nv-donut-chart\" class=\"height-sm\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-6 -->\r\n</div>\r\n<!-- end row -->\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/chart/chart-d3/chart-d3.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartD3Page; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartD3Page = (function () {
    function ChartD3Page() {
    }
    ChartD3Page.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('chart-d3-ready'));
    };
    ChartD3Page = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'chart-d3',
            template: __webpack_require__("../../../../../src/app/pages/chart/chart-d3/chart-d3.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/chart/chart-d3/chart-d3.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
    ], ChartD3Page);
    return ChartD3Page;
}());

//# sourceMappingURL=chart-d3.js.map

/***/ }),

/***/ "../../../../../src/app/pages/chart/chart-flot/chart-flot.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin breadcrumb -->\r\n<ol class=\"breadcrumb pull-right\">\r\n    <li><a href=\"javascript:;\">Home</a></li>\r\n    <li><a href=\"javascript:;\">Chart</a></li>\r\n    <li class=\"active\">Flot Chart</li>\r\n</ol>\r\n<!-- end breadcrumb -->\r\n<!-- begin page-header -->\r\n<h1 class=\"page-header\">Flot Chart <small>header small text goes here...</small></h1>\r\n<!-- end page-header -->\r\n\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n    <!-- begin col-6 -->\r\n    <div class=\"col-md-6\">\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"flot-chart-1\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Flot Basic Line Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div id=\"flot-basic-chart\" class=\"height-sm\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-6 -->\r\n    <!-- begin col-6 -->\r\n    <div class=\"col-md-6\">\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"flot-chart-2\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Flot Interactive Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div id=\"flot-interactive-chart\" class=\"height-sm\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-6 -->\r\n</div>\r\n<!-- end row -->\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n    <!-- begin col-4 -->\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"flot-chart-3\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Flot Bar Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                    <div id=\"dashboard-donut-chart\" class=\"height-sm\"></div>\r\n                </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-4 -->\r\n    <!-- begin col-4 -->\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"flot-chart-4\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Flot Live Updated Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div id=\"flot-live-updated-chart\" class=\"height-sm\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-4 -->\r\n    <!-- begin col-4 -->\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"flot-chart-5\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Flot Interactive Pie Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div id=\"flot-interactive-pie-chart\" class=\"height-sm\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-4 -->\r\n</div>\r\n<!-- end row -->\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n    <!-- begin col-4 -->\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"flot-chart-6\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Flot Stacked Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div id=\"flot-stacked-chart\" class=\"height-sm\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-4 -->\r\n    <!-- begin col-4 -->\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"flot-chart-7\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Flot Tacking Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div id=\"flot-tracking-chart\" class=\"height-sm\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-4 -->\r\n    <!-- begin col-4 -->\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"flot-chart-8\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Flot Donut Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div id=\"flot-donut-chart\" class=\"height-sm\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-4 -->\r\n</div>\r\n<!-- end row -->"

/***/ }),

/***/ "../../../../../src/app/pages/chart/chart-flot/chart-flot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartFlotPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartFlotPage = (function () {
    function ChartFlotPage() {
    }
    ChartFlotPage.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('chart-flot-ready'));
    };
    ChartFlotPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'chart-flot',
            template: __webpack_require__("../../../../../src/app/pages/chart/chart-flot/chart-flot.html")
        })
    ], ChartFlotPage);
    return ChartFlotPage;
}());

//# sourceMappingURL=chart-flot.js.map

/***/ }),

/***/ "../../../../../src/app/pages/chart/chart-js/chart-js.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin breadcrumb -->\r\n<ol class=\"breadcrumb pull-right\">\r\n    <li><a href=\"javascript:;\">Home</a></li>\r\n    <li><a href=\"javascript:;\">Chart</a></li>\r\n    <li class=\"active\">Chart JS</li>\r\n</ol>\r\n<!-- end breadcrumb -->\r\n<!-- begin page-header -->\r\n<h1 class=\"page-header\">Chart JS <small>header small text goes here...</small></h1>\r\n<!-- end page-header -->\r\n\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"chart-js-1\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Line Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p>\r\n                    A line chart is a way of plotting data points on a line.\r\n                    Often, it is used to show trend data, and the comparison of two data sets.\r\n                </p>\r\n                <div>\r\n                    <canvas id=\"chart-js-line-chart\" data-render=\"chart-js\"></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"chart-js-2\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Bar Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p>\r\n                    A bar chart is a way of showing data as bars.\r\n                    It is sometimes used to show trend data, and the comparison of multiple data sets side by side.\r\n                </p>\r\n                <div>\r\n                    <canvas id=\"chart-js-bar-chart\" data-render=\"chart-js\"></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- end row -->\r\n\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n    <!-- begin col-6 -->\r\n    <div class=\"col-md-6\">\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"flot-chart-3\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Radar Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p>\r\n                    A radar chart is a way of showing multiple data points and the variation between them.\r\n                    They are often useful for comparing the points of two or more different data sets.\r\n                </p>\r\n                <div>\r\n                    <canvas id=\"chart-js-radar-chart\" data-render=\"chart-js\"></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-6 -->\r\n    <!-- begin col-6 -->\r\n    <div class=\"col-md-6\">\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"chart-js-4\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Polar Area Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p>\r\n                    Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment \r\n                    differs depending on the value.\r\n                </p>\r\n                <div>\r\n                    <canvas id=\"chart-js-polar-area-chart\" data-render=\"chart-js\"></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-6 -->\r\n</div>\r\n<!-- end row -->\r\n\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n    <!-- begin col-6 -->\r\n    <div class=\"col-md-6\">\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"flot-chart-5\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Pie Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p>\r\n                    Pie and doughnut charts are probably the most commonly used chart there are. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.\r\n                </p>\r\n                <div>\r\n                    <canvas id=\"chart-js-pie-chart\" data-render=\"chart-js\"></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-6 -->\r\n    <!-- begin col-6 -->\r\n    <div class=\"col-md-6\">\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"chart-js-6\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Doughnut Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p>\r\n                    Pie and doughnut charts are registered under two aliases in the Chart core. Other than their different default value, and different alias, they are exactly the same.\r\n                </p>\r\n                <div>\r\n                    <canvas id=\"chart-js-doughnut-chart\" data-render=\"chart-js\"></canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-6 -->\r\n</div>\r\n<!-- end row -->\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/chart/chart-js/chart-js.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartJsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartJsPage = (function () {
    function ChartJsPage() {
    }
    ChartJsPage.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('chart-js-ready'));
    };
    ChartJsPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'chart-morris',
            template: __webpack_require__("../../../../../src/app/pages/chart/chart-js/chart-js.html")
        })
    ], ChartJsPage);
    return ChartJsPage;
}());

//# sourceMappingURL=chart-js.js.map

/***/ }),

/***/ "../../../../../src/app/pages/chart/chart-morris/chart-morris.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports
exports.push([module.i, "@import url(/assets/plugins/morris/morris.css);", ""]);

// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/chart/chart-morris/chart-morris.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin breadcrumb -->\r\n<ol class=\"breadcrumb pull-right\">\r\n    <li><a href=\"javascript:;\">Home</a></li>\r\n    <li><a href=\"javascript:;\">Chart</a></li>\r\n    <li class=\"active\">Morris Chart</li>\r\n</ol>\r\n<!-- end breadcrumb -->\r\n<!-- begin page-header -->\r\n<h1 class=\"page-header\">Morris Chart <small>header small text goes here...</small></h1>\r\n<!-- end page-header -->\r\n\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n    <!-- begin col-6 -->\r\n    <div class=\"col-md-6\">\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"morris-chart-1\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Morris Line Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <h4 class=\"text-center\">Audi Vehicles Sales Report in UK</h4>\r\n                <div id=\"morris-line-chart\" class=\"height-sm\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"morris-chart-2\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Morris Area Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <h4 class=\"text-center\">Quarterly Apple iOS device unit sales</h4>\r\n                <div id=\"morris-area-chart\" class=\"height-sm\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-6 -->\r\n    <!-- begin col-6 -->\r\n    <div class=\"col-md-6\">\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"morris-chart-3\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Morris Bar Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <h4 class=\"text-center\">Phone CPU benchmarks</h4>\r\n                <div id=\"morris-bar-chart\" class=\"height-sm\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"morris-chart-4\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div>\r\n                <h4 class=\"panel-title\">Morris Donut Chart</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <h4 class=\"text-center\">Donut flavours</h4>\r\n                <div id=\"morris-donut-chart\" class=\"height-sm\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-6 -->\r\n</div>\r\n<!-- end row -->\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/chart/chart-morris/chart-morris.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartMorrisPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartMorrisPage = (function () {
    function ChartMorrisPage() {
    }
    ChartMorrisPage.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('chart-morris-ready'));
    };
    ChartMorrisPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'chart-morris',
            template: __webpack_require__("../../../../../src/app/pages/chart/chart-morris/chart-morris.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/chart/chart-morris/chart-morris.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
    ], ChartMorrisPage);
    return ChartMorrisPage;
}());

//# sourceMappingURL=chart-morris.js.map

/***/ }),

/***/ "../../../../../src/app/pages/collecte/collecte.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ":host /deep/ * {\r\n  font-size:12px    \r\n}\r\n:host /deep/ table {\r\n  color: #606c71;\r\n  \r\n}\r\n:host /deep/ table tr td, :host /deep/ table tr th {\r\n  border: 1px solid #e9ebec;\r\n}\r\n\r\n.smart-table-container{ overflow-x: scroll; }\r\n\r\n.column-size {\r\n  width: 80px\r\n}\r\n  \r\n\r\n/* \r\n  tr.border_bottom td {\r\n  border-top:1px solid black;\r\n  border-bottom:1px solid black;\r\n  border-left:1px solid black;\r\n  border-right:1px solid black;\r\n    \r\n  } */\r\n\r\n  /* @import url('/assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css');\r\n  @import url('/assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css'); */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/collecte/collecte.html":
/***/ (function(module, exports) {

module.exports = "\r\n<p-messages [(value)]=\"msgs\"></p-messages>          \r\n<div class=\"col-md-12\">\r\n    <div class=\"panel panel-success\">\r\n        <div class=\"panel-body\">\r\n            <form>\r\n                <div class=\"row\">\r\n                    \r\n                <div class=\"form-group col-md-3\">\r\n                    <label >Projet: </label>\r\n                <select [(ngModel)]=\"projet\" name=\"projet\" [compareWith]=\"compareById\" class=\"form-control\">\r\n                        <option *ngFor=\"let p of projets\" [ngValue]=\"p\">{{p?.name}}</option>\r\n                </select>\r\n                </div>\r\n                <div class=\"form-group col-md-3\">\r\n                    <label >Status: </label>\r\n                    <select [(ngModel)]=\"status\" name=\"status\" class=\"form-control\">\r\n                            <option [hidden]=\"(s.value == 'new' || s.value == 'reject') && projet?.validation.length == 0\" *ngFor=\"let s of _status\" [ngValue]=\"s.value\">{{s.name}}</option>\r\n                    </select>\r\n                </div>\r\n                      \r\n                <div class=\"form-group col-md-3\">  \r\n                        <label >Region: </label>\r\n                    <select [disabled]=\"!projet || user.role == 'superviseurP' || user.role == 'superviseurR' || this.user.role == 'agent'\" [(ngModel)]=\"_region\" name=\"region\" class=\"form-control\">\r\n                            <option  *ngIf=\"user.role == 'superviseurP' || user.role == 'superviseurR' || user.role == 'agent'\" [ngValue]=\"user?.perimetre?.region?.id_region\" disabled selected>{{user?.perimetre?.region?.name}}</option>\r\n                            <option *ngFor=\"let r of projet?.perimetre.region\" [ngValue]=\"r.id_region\">{{r.name}}</option>\r\n                    </select>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-3\">  \r\n                    <label >Province: </label>\r\n                    <select [disabled]=\"!projet || this.user.role == 'superviseurP' || this.user.role == 'agent'\" [(ngModel)]=\"_province\" name=\"province\" class=\"form-control\">\r\n                            <option *ngIf=\"user.role == 'superviseurP' || user.role == 'agent'\" [ngValue]=\"user?.perimetre?.province?.id_province\" disabled selected>{{user?.perimetre?.province?.name}}</option>\r\n                            <option [hidden]=\"p.id_region != _region\" *ngFor=\"let p of projet?.perimetre.province\" [ngValue]=\"p.id_province\">{{p.name}}</option>\r\n                    </select>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-3\">  \r\n                        <label >Filtre: </label>\r\n                        <select [disabled]=\"!projet\" [(ngModel)]=\"_filtre\" name=\"_filtre\" class=\"form-control\">\r\n                                <option [ngValue]=\"null\"></option>\r\n                               <option [hidden]=\"e.type !== 'filtre'\" *ngFor=\"let e of projet?.extrapolation\" [ngValue]=\"e\">{{e.label}}</option>                        \r\n                        </select>\r\n                </div>\r\n                <div class=\"form-group col-md-3\">  \r\n                        <label >Valeur: </label>\r\n                        <select [disabled]=\"!_filtre\"  [(ngModel)]=\"_value\" name=\"_value\" class=\"form-control\">\r\n                                <ng-container *ngIf=\" _filtre != null &&  _filtre?.field.type == 'select'\">\r\n                               <option *ngFor=\"let v of _filtre?.field.values.values\" [ngValue]=\"v.value\">{{v.label}}</option>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"_filtre != null && _filtre?.field.type == 'checkbox'\">\r\n                                    <option value=\"true\">True</option>\r\n                                    <option value=\"false\">False</option>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"_filtre?.field.type == 'radio' || _filtre?.field.type == 'selectboxes'\">\r\n                                        <option *ngFor=\"let v of _filtre?.field.values\" [ngValue]=\"v.value\">{{v.label}}</option>\r\n                                </ng-container>                        \r\n                        </select>\r\n                </div>\r\n            </div>    \r\n        </form>\r\n\r\n        <div class=\"row\">\r\n        <div class=\"pull-right col-md-12\">\r\n            <button [disabled]=\"projet == null || status == null\" class=\"btn btn-primary\" (click)=\"search(projet,status,_region,_province,_value)\"><i class=\"fa fa-search fa-lg\" aria-hidden=\"true\"></i> Recherche</button>\r\n            <button class=\"btn btn-danger\" (click)=\"reset()\"><i class=\"fa fa-undo fa-lg\" aria-hidden=\"true\"></i> Reinitialiser</button>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"col-md-12\">\r\n        <div *ngIf=\"!dataload\" class=\"panel panel-success\">\r\n                <div class=\"panel-body\">\r\n                    \r\n                    <table class=\"table table-condensed table-bordered\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Champs d'extrapolation</th>\r\n                                <th>Somme</th>\r\n                                <th>Moyenne</th>\r\n                                <th>Variance</th>\r\n                                <th>Ecart Type</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let apikey of ExtrapolatedData\">\r\n                                    <th>{{apikey?.key}}</th>\r\n                                    <th>{{apikey?.somme | number:'1.0-2'}}</th>\r\n                                    <th>{{apikey?.moyenne | number:'1.0-2'}}</th>\r\n                                    <th>{{apikey?.variance | number:'1.0-2'}}</th>\r\n                                    <th>{{apikey?.ecarttype | number:'1.0-2'}}</th>\r\n                                <!-- <ng-container *ngIf=\"apikey.type == 'cal' && apikey.hidden == false\">\r\n                                    <th>{{apikey.label}}</th>\r\n                                </ng-container> -->\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n        </div>\r\n    <div *ngIf=\"!dataload\" class=\"panel panel-success\">\r\n        <div class=\"panel-body\">\r\n                <!-- <ng2-smart-table *ngIf=\"!loading\" [settings]=\"settings\" [source]=\"collectes\"></ng2-smart-table> -->\r\n                <!-- <label> projet</label>\r\n                <select [(ngModel)]=\"projet\" class=\"form-control\">\r\n                    <option *ngFor=\"let p of projets\" [ngValue]=\"p\">{{p.name}}</option>\r\n                </select>\r\n                <label>status</label>\r\n                <select [(ngModel)]=\"status\" class=\"form-control\">\r\n                    <option *ngFor=\"let s of _status\" [ngValue]=\"s.value\">{{s.name}}</option>\r\n                </select>\r\n                status value : {{ status | json}} -->\r\n                <!-- <form>\r\n                    <div class=\"row\">\r\n                        \r\n                    <div class=\"form-group col-md-3\">\r\n                        {{ projet || json}}\r\n                        <label >Projet: </label>\r\n                    <select [(ngModel)]=\"projet\" name=\"projet\" [compareWith]=\"compareById\" class=\"form-control\">\r\n                            <option *ngFor=\"let p of projets\" [ngValue]=\"p\">{{p.name}}</option>\r\n                    </select>\r\n                    </div>\r\n                    <div class=\"form-group col-md-3\">\r\n                        <label >Status: </label>\r\n                        <select [(ngModel)]=\"status\" name=\"status\" class=\"form-control\">\r\n                                <option *ngFor=\"let s of _status\" [ngValue]=\"s.value\">{{s.name}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">                        \r\n                    <div class=\"form-group col-md-3\">  \r\n                            <label >Region: </label>\r\n                        <select [disabled]=\"user.role == 'superviseurP' || user.role == 'superviseurR'\" [(ngModel)]=\"_region\" name=\"region\" class=\"form-control\">\r\n                                <option  *ngIf=\"user.role == 'superviseurP' || user.role == 'superviseurR'\" [ngValue]=\"user?.perimetre?.region?.id_region\" disabled selected>{{user?.perimetre?.region?.name}}</option>\r\n                                <option *ngFor=\"let r of projet?.perimetre.region\" [ngValue]=\"r.id_region\">{{r.name}}</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-3\">  \r\n                        <label >Province: </label>\r\n                        <select [disabled]=\"!projet || this.user.role == 'superviseurP'\" [(ngModel)]=\"_province\" name=\"province\" class=\"form-control\">\r\n                                <option *ngIf=\"user.role == 'superviseurP'\" [ngValue]=\"user?.perimetre?.province?.id_province\" disabled selected>{{user?.perimetre?.province?.name}}</option>\r\n                                <option [hidden]=\"p.id_region != _region\" *ngFor=\"let p of projet?.perimetre.province\" [ngValue]=\"p.id_province\">{{p.name}}</option>\r\n                        </select>\r\n                    </div>\r\n            </div>\r\n\r\n                \r\n            </form>\r\n            <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <button class=\"btn btn-sm btn-primary m-r-5\" (click)=\"search(projet,status,_region,_province)\">Recherche</button>\r\n                <button class=\"btn btn-sm btn-warning m-r-5\" (click)=\"reset()\">Reinitialiser</button>\r\n\r\n            </div>\r\n                <div class=\"col-md-6\">\r\n                </div>\r\n            </div> -->\r\n            <div class=\"row\">\r\n                    <ng2-smart-table #table *ngIf=\"!dataload\"  [settings]=\"settings\" [source]=\"source\" (custom)=\"consulter($event.data.id,projet)\"></ng2-smart-table>\r\n\r\n            </div>\r\n            </div>\r\n    </div>        \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/collecte/collecte.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_collecte_service__ = __webpack_require__("../../../../../src/app/services/collecte.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_projet_service__ = __webpack_require__("../../../../../src/app/services/projet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CollectePage = (function () {
    function CollectePage(collecteservice, projetservice, userservice, router) {
        this.collecteservice = collecteservice;
        this.projetservice = projetservice;
        this.userservice = userservice;
        this.router = router;
        this.msgs = [];
        this.dataload = true;
        this.collectes = [];
        this.hide = true;
        this.settings = {
            columns: {},
            actions: {
                add: false,
                edit: false,
                delete: false,
                custom: [{ name: 'consulter', title: "<a type=\"button\" title=\"Plus de details\" class=\"btn btn-primary btn-xs\"><i class=\"fa fa-eye\"></i> Consulter</a>" }],
                position: 'right'
            },
            pager: {
                perPage: 25
            },
            noDataMessage: ' '
        };
        this.Downloaded = {
            id: 0,
            status: 'random',
            region: 0,
            province: 0
        };
    }
    CollectePage.prototype.compareById = function (obj1, obj2) {
        if (localStorage.getItem('storage') !== null) {
            return obj1._id === obj2._id;
        }
    };
    CollectePage.prototype.filtreData = function (filtre, data) {
        var _this = this;
        var result = [];
        var extra = [];
        var calc = [];
        this.settings.columns = {
            projet: {
                title: 'Enquete',
            },
            type: {
                title: 'Type',
            },
            agent: {
                title: 'Agent'
            },
        },
            this.extrapolation.forEach(function (api) {
                if (api.type == 'extra') {
                    _this.settings.columns[api.field.key] = { 'title': api.label };
                    extra.push(api.field.key);
                }
                if (api.type == 'cal') {
                    _this.settings.columns[api.label] = { 'title': api.label };
                    calc.push(api);
                }
            });
        this.settings.columns['date'] = { 'title': 'Date Synchornisation' };
        data.forEach(function (element) {
            if ((_this._filtre != null && element.collecte[0].data[0].formdata.data[_this._filtre.field.key] == _this._value) || _this._filtre == null) {
                var row_1 = {
                    'projet': _this.anass.name,
                    'type': _this.anass.theme,
                    'agent': element.agent._id,
                    'date': __WEBPACK_IMPORTED_MODULE_5_moment__(new Date(element.createdAt)).format("DD-MM-YYYY à h:mm"),
                    'id': element._id
                };
                calc.forEach(function (c) {
                    row_1[c.label] = _this.calculate(element.collecte[0].data[0].formdata.data, c.formule);
                });
                extra.forEach(function (f) {
                    row_1[f] = element.collecte[0].data[0].formdata.data[f];
                });
                console.log(row_1);
                result.push(row_1);
            }
        });
        this.source = new __WEBPACK_IMPORTED_MODULE_6_ng2_smart_table__["b" /* LocalDataSource */](result);
        console.log(this.source);
        this.extrapolate(result, extra);
        this.msgs = [];
        if (result.length > 0) {
            this.msgs.push({ severity: 'success', summary: '', detail: 'Nombre de collectes correspondant à vos critères de recherche : ' + result.length });
            this.dataload = false;
        }
        else {
            this.msgs.push({ severity: 'warn', summary: '', detail: 'Aucune collecte ne correspond à vos critères de recherche' });
            this.dataload = true;
        }
    };
    CollectePage.prototype.extrapolate = function (data, keys) {
        if (data.length == 0) {
            this.ExtrapolatedData = [];
            return;
        }
        var results = [];
        keys.forEach(function (key) {
            var sum = 0;
            for (var i = 0; i < data.length; i++) {
                sum += (data[i][key]);
            }
            var avg = sum / data.length;
            var varr = 0;
            for (var i = 0; i < data.length; i++) {
                varr += Math.pow(((data[i][key]) - avg), 2);
            }
            varr /= data.length;
            var ec = Math.sqrt(varr);
            results.push({ 'key': key, 'somme': sum, 'moyenne': avg, 'variance': varr, 'ecarttype': ec });
        });
        this.ExtrapolatedData = results;
        console.log(results);
    };
    CollectePage.prototype.search = function (projet, status, region, province, filtre, valeur) {
        var _this = this;
        this.dataload = true;
        console.log(region);
        console.log(province);
        this.hide = false;
        this.anass = { theme: projet.theme, name: projet.name };
        if (projet == null || status == null) {
            return;
        }
        this.extrapolation = projet.extrapolation;
        if (this.projet !== null) {
            localStorage.setItem('storage', JSON.stringify({ 'projet': this.projet, 'status': status, 'region': region, 'province': province }));
        }
        // if(this.Downloaded.id == projet._id 
        //     && this.Downloaded.status == status 
        //     && this.Downloaded.region == region 
        //     && this.Downloaded.province == province ){
        //     console.log('data already loaded using it')
        //     this.filtreData('test',this.collectes)
        //     return
        // }
        // this.Downloaded.id = projet._id
        // this.Downloaded.status = status
        // this.Downloaded.region = region
        // this.Downloaded.province = province
        // console.log(this.Downloaded)
        if (this.user.role == 'controleur') {
            this.index = this.projet.validation.findIndex(function (x) { return x.agent == _this.user._id; });
            this.collecteservice.getCollectesByProjet(projet._id, this.index, status, region, province).then(function (data) {
                _this.filtreData('test', data);
                _this.collectes = data;
            }, function (err) {
                console.log('error trying to fetch collectes');
                console.log(err);
            });
        }
        else {
            this.hide = false;
            if (this.user.role == 'superviseurP') {
                region = this.user.perimetre.region.id_region;
                province = this.user.perimetre.province.id_province;
            }
            console.log(status);
            this.index = this.projet.validation.length - 1;
            switch (status) {
                case 'valid':
                    this.collecteservice.getCollectesByProjet(projet._id, this.index, status, region, province).then(function (data) {
                        _this.collectes = data;
                        _this.filtreData('test', data);
                    }, function (err) {
                        console.log('error trying to fetch collectes');
                        console.log(err);
                    });
                    break;
                case 'new':
                    this.collecteservice.getCollectesByProjet(projet._id, 0, status, region, province).then(function (data) {
                        _this.collectes = data;
                        _this.filtreData('test', data);
                    }, function (err) {
                        console.log('error trying to fetch collectes');
                        console.log(err);
                    });
                    break;
                case 'reject':
                    this.collecteservice.getCollecteEnTraitement(projet._id, this.index, region, province).then(function (data) {
                        _this.collectes = data;
                        _this.filtreData('test', data);
                    }, function (err) {
                        console.log('error trying to fetch collectes');
                        console.log(err);
                    });
                    break;
            }
        }
    };
    CollectePage.prototype.OnProjetSelect = function (projet) {
        this.projet = projet;
        console.log(projet);
    };
    CollectePage.prototype.action = function (id, action) {
        var update = {};
        update.niveau = this.index;
        update.action = action;
        update.id = id;
        console.log(update);
        this.collecteservice.action(update).then(function (data) {
            console.log(data);
        });
    };
    CollectePage.prototype.reset = function () {
        this.projet = null;
        this.status = null;
        if (this.user.role != 'superviseurR' && this.user.role != 'superviseurP') {
            this._region = null;
        }
        if (this.user.role != 'superviseurP') {
            this._province = null;
        }
        this.collectes = [];
        this.hide = true;
        localStorage.removeItem('storage');
        this.Downloaded = {
            id: 0,
            status: 'random',
            region: 0,
            province: 0
        };
        this.ExtrapolatedData = [];
        this.dataload = true;
        this._value = null;
    };
    CollectePage.prototype.getProjets = function () {
        var _this = this;
        if (this.user.role == 'controleur') {
            console.log('im a controller');
            this.projetservice.getProjetsByController().then(function (data) {
                _this.projets = data;
                // this.region = data.perimetre.region;
                // this.province = data.perimetre.province;
                _this.checkStorage();
            }, function (err) {
                console.log('error fetching collectes', err);
            });
        }
        else if (this.user.role == 'agent') {
            var projets_1 = [];
            this.projetservice.getAgentsProjet().then(function (data) {
                data.forEach(function (element) {
                    projets_1.push(element.projet);
                });
                _this.projets = projets_1;
                _this.checkStorage();
            });
        }
        else {
            this.projetservice.getProjetsByPerimetre().then(function (data) {
                _this.projets = data;
                _this.checkStorage();
            });
        }
    };
    CollectePage.prototype.checkStorage = function () {
        console.log('im here');
        if (localStorage.getItem('storage') != null) {
            var data = JSON.parse(localStorage.getItem('storage'));
            this.projet = data.projet;
            this.status = data.status;
            this._province = data.province;
            this._region = data.region;
            this.search(this.projet, this.status, this._region, this._province, 'test', 'test');
            console.log('here');
        }
    };
    CollectePage.prototype.consulter = function (collecte, projet) {
        var _this = this;
        this.collecteservice.getCollecte(collecte).then(function (data) {
            _this.collecteservice.collecte = data;
            console.log(data);
            // this.collecteservice.collecte.projet = projet;
            // this.collecteservice.collecte.agent = collecte.agent;
            if (_this.collecteservice.collecte.geo == false) {
                return _this.router.navigate(['collectes/geoless']);
            }
            if (data.projet.theme == 'rna') {
                _this.router.navigate(['collectes/rnacollecte']);
            }
            else {
                _this.router.navigate(['collectes/collecte']);
            }
        }, function (err) {
            console.log('error trying to fetch collecte id : ' + collecte);
            console.log(err);
        });
    };
    CollectePage.prototype.calculate = function (data, formule) {
        var result;
        switch (formule.operateur) {
            case '+':
                result = data[formule.variables[0]] + data[formule.variables[1]];
                break;
            case '-':
                result = data[formule.variables[0]] - data[formule.variables[1]];
                break;
            case '*':
                result = data[formule.variables[0]] * data[formule.variables[1]];
                break;
            case '/':
                result = data[formule.variables[0]] / data[formule.variables[1]];
                break;
            default:
                break;
        }
        return result;
    };
    CollectePage.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user.role == 'controleur') {
            this._status = [
                { name: "Validé", value: 'valid' },
                { name: "En attente de validation", value: 'new' },
                { name: "Refusé", value: 'reject' }
            ];
        }
        else {
            this._status = [
                { name: "Validé", value: 'valid' },
                { name: "En attente de validation", value: 'new' },
                { name: "En cours de validation", value: 'reject' }
            ];
            if (this.user.role == 'superviseurR') {
                this._region = this.user.perimetre.region.id_region;
            }
            if (this.user.role == 'superviseurP' || this.user.role == 'agent') {
                this._province = this.user.perimetre.province.id_province;
                this._region = this.user.perimetre.region.id_region;
            }
        }
        this.getProjets();
    };
    CollectePage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'Collecte',
            template: __webpack_require__("../../../../../src/app/pages/collecte/collecte.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/collecte/collecte.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_collecte_service__["a" /* CollecteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_collecte_service__["a" /* CollecteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_projet_service__["a" /* ProjetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_projet_service__["a" /* ProjetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _d || Object])
    ], CollectePage);
    return CollectePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=collecte.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/v1/dashboard-v1.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports
exports.push([module.i, "@import url(/assets/plugins/jquery-jvectormap/jquery-jvectormap.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/gritter/css/jquery.gritter.css);", ""]);

// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/v1/dashboard-v1.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin page-header -->\r\n<h1 class=\"page-header\">Dashboard </h1>\r\n<!-- end page-header -->\r\n\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n    <!-- begin col-3 -->\r\n    <div class=\"col-md-3 col-sm-6\">\r\n        <div class=\"widget widget-stats bg-green\">\r\n            <div class=\"stats-icon\"><i class=\"ion-earth\"></i></div>\r\n            <div class=\"stats-info\">\r\n                <h4>EXPLOITATIONS</h4>\r\n                <p>{{total?.exploitation || 0}}</p>\t\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-3 -->\r\n    <!-- begin col-3 -->\r\n    <div class=\"col-md-3 col-sm-6\">\r\n        <div class=\"widget widget-stats bg-blue\">\r\n            <div class=\"stats-icon\"><i class=\"fa fa-object-ungroup\"></i></div>\r\n            <div class=\"stats-info\">\r\n                <h4>PARCELLES</h4>\r\n                <p>{{total?.parcelle || 0}}</p>\t\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-3 -->\r\n    <!-- begin col-3 -->\r\n    <div class=\"col-md-3 col-sm-6\">\r\n        <div class=\"widget widget-stats bg-purple\">\r\n            <div class=\"stats-icon\"><i class=\"fa fa-line-chart \"></i></div>\r\n            <div class=\"stats-info\">\r\n                <h4>SUPERFICIE</h4>\r\n                <p>{{total?.superficie || 18362}}</p>\t\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-3 -->\r\n    <!-- begin col-3 -->\r\n    <div class=\"col-md-3 col-sm-6\">\r\n        <div class=\"widget widget-stats bg-red\">\r\n            <div class=\"stats-icon\"><i class=\"fa fa-users\"></i></div>\r\n            <div class=\"stats-info\">\r\n                <h4>AGENTS</h4>\r\n                <p>{{total?.agents || 11}}</p>\t\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-3 -->\r\n</div>\r\n<div class=\"col-md-8\">\r\n        <div class=\"panel panel-success\" data-sortable-id=\"flot-chart-2\">\r\n            <div class=\"panel-heading\">\r\n                <!-- <div class=\"panel-heading-btn\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n                    <a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n                </div> -->\r\n                <h4 class=\"panel-title\">Statistiques des 7 derniers jours</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                    <div id=\"dashboard-interactive-chart\" class=\"height-sm\"></div>\r\n                </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n            <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">Collectes par géometrie</h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <canvas *ngIf=\"!loading\" baseChart\r\n                        [data]=\"doughnutChartData\"\r\n                        [labels]=\"doughnutChartLabels\"\r\n                        [chartType]=\"doughnutChartType\"                \r\n                        (chartHover)=\"chartHovered($event)\"\r\n                        (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n    <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">\r\n                    <h4 class=\"panel-title\">Statistiques des 7 derniers jours par géometrie</h4>\r\n                </div>\r\n        <div class=\"panel-body\">\r\n        <canvas *ngIf=\"!loading\" baseChart\r\n        [datasets]=\"lineChartData\"\r\n        [labels]=\"lineChartLabels\"\r\n        [options]=\"lineChartOptions\"\r\n        [legend]=\"lineChartLegend\"\r\n        [chartType]=\"lineChartType\"\r\n        (chartHover)=\"chartHovered($event)\"\r\n        (chartClick)=\"chartClicked($event)\"></canvas>        \r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/v1/dashboard-v1.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_reporting_service__ = __webpack_require__("../../../../../src/app/services/reporting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardV1Page; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardV1Page = (function () {
    function DashboardV1Page(reportingservice) {
        this.reportingservice = reportingservice;
        this.loading = true;
        // Pie
        this.doughnutChartLabels = ['Polygone', 'Polyline', 'Point'];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartLegend = false;
        // lineChart
        this.lineChartData = [
            { data: [], label: 'Polygone' },
            { data: [], label: 'Polyline' },
            { data: [], label: 'Point' }
        ];
        this.lineChartLegend = true;
        this.lineChartLabels = [];
        this.lineChartType = 'line';
    }
    // events
    DashboardV1Page.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardV1Page.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardV1Page.prototype.getData = function () {
        var _this = this;
        this.reportingservice.getDashboardData().then(function (data) {
            _this.total = data.total;
            _this.daily = data.daily;
            _this.doughnutChartData = [_this.total.polygone, _this.total.polyline, _this.total.point];
            data.daily.forEach(function (element) {
                _this.lineChartData[0].data.push(element.polygone);
                _this.lineChartData[1].data.push(element.polyline);
                _this.lineChartData[2].data.push(element.point);
                _this.lineChartLabels.push(__WEBPACK_IMPORTED_MODULE_2_moment__(new Date(element.createdAt)).format("DD-MM"));
            });
            console.log(_this.lineChartData);
            _this.loading = false;
        }, function (err) {
            console.log("error");
            console.log(err);
        });
    };
    DashboardV1Page.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('dashboard-v1-ready'));
        this.getData();
    };
    DashboardV1Page = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-v1',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/v1/dashboard-v1.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/v1/dashboard-v1.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_reporting_service__["a" /* ReportingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_reporting_service__["a" /* ReportingService */]) === "function" && _a || Object])
    ], DashboardV1Page);
    return DashboardV1Page;
    var _a;
}());

//# sourceMappingURL=dashboard-v1.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/v2/dashboard-v2.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports
exports.push([module.i, "@import url(/assets/plugins/jquery-jvectormap/jquery-jvectormap.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-calendar/css/bootstrap_calendar.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/gritter/css/jquery.gritter.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/morris/morris.css);", ""]);

// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/v2/dashboard-v2.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin breadcrumb -->\r\n<ol class=\"breadcrumb pull-right\">\r\n    <li><a href=\"javascript:;\">Home</a></li>\r\n    <li><a href=\"javascript:;\">Dashboard</a></li>\r\n    <li class=\"active\">Dashboard v2</li>\r\n</ol>\r\n<!-- end breadcrumb -->\r\n<!-- begin page-header -->\r\n<h1 class=\"page-header\">Dashboard v2 <small>header small text goes here...</small></h1>\r\n<!-- end page-header -->\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n    <!-- begin col-3 -->\r\n    <div class=\"col-md-3 col-sm-6\">\r\n        <div class=\"widget widget-stats bg-green\">\r\n            <div class=\"stats-icon stats-icon-lg\"><i class=\"fa fa-globe fa-fw\"></i></div>\r\n            <div class=\"stats-title\">EXPLOITATIONS</div>\r\n            <div class=\"stats-number\">{{total?.exploitation}}</div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-3 -->\r\n    <!-- begin col-3 -->\r\n    <div class=\"col-md-3 col-sm-6\">\r\n        <div class=\"widget widget-stats bg-blue\">\r\n            <div class=\"stats-icon stats-icon-lg\"><i class=\"fa fa-tags fa-fw\"></i></div>\r\n            <div class=\"stats-title\">PARCELLES</div>\r\n            <div class=\"stats-number\">{{total?.parcelle}}</div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-3 -->\r\n    <!-- begin col-3 -->\r\n    <div class=\"col-md-3 col-sm-6\">\r\n        <div class=\"widget widget-stats bg-purple\">\r\n            <div class=\"stats-icon stats-icon-lg\"><i class=\"fa fa-shopping-cart fa-fw\"></i></div>\r\n            <div class=\"stats-title\">SUPERFICIE TOTAL EN HA</div>\r\n            <div class=\"stats-number\">{{total?.superficie || 0}}</div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-3 -->\r\n    <!-- begin col-3 -->\r\n    <div class=\"col-md-3 col-sm-6\">\r\n        <div class=\"widget widget-stats bg-black\">\r\n            <div class=\"stats-icon stats-icon-lg\"><i class=\"fa fa-comments fa-fw\"></i></div>\r\n            <div class=\"stats-title\">NEW COMMENTS</div>\r\n            <div class=\"stats-number\">3,988</div>\r\n        </div>\r\n    </div>\r\n    <!-- end col-3 -->\r\n</div>\r\n<!-- end row -->\r\n\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n    <div class=\"col-md-8\">\r\n        <div class=\"widget-chart with-sidebar bg-black\">\r\n            <div class=\"widget-chart-content\">\r\n                <h4 class=\"chart-title\">\r\n                    Visitors Analytics\r\n                    <small>Where do our visitors come from</small>\r\n                </h4>\r\n                <div id=\"visitors-line-chart\" class=\"morris-inverse\" style=\"height: 260px;\"></div>\r\n            </div>\r\n            <div class=\"widget-chart-sidebar bg-black-darker\">\r\n                <div class=\"chart-number\">\r\n                    1,225,729\r\n                    <small>visitors</small>\r\n                </div>\r\n                <div id=\"visitors-donut-chart\" style=\"height: 160px\"></div>\r\n                <ul class=\"chart-legend\">\r\n                    <li><i class=\"fa fa-circle-o fa-fw text-success m-r-5\"></i> 34.0% <span>New Visitors</span></li>\r\n                    <li><i class=\"fa fa-circle-o fa-fw text-primary m-r-5\"></i> 56.0% <span>Return Visitors</span></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-inverse\" data-sortable-id=\"index-1\">\r\n            <div class=\"panel-heading\">\r\n                <h4 class=\"panel-title\">\r\n                    Visitors Origin\r\n                </h4>\r\n            </div>\r\n            <div id=\"visitors-map\" class=\"bg-black\" style=\"height: 181px;\"></div>\r\n            <div class=\"list-group\">\r\n                <a href=\"#\" class=\"list-group-item list-group-item-inverse text-ellipsis\">\r\n                    <span class=\"badge badge-success\">20.95%</span>\r\n                    1. United State \r\n                </a> \r\n                <a href=\"#\" class=\"list-group-item list-group-item-inverse text-ellipsis\">\r\n                    <span class=\"badge badge-primary\">16.12%</span>\r\n                    2. India\r\n                </a>\r\n                <a href=\"#\" class=\"list-group-item list-group-item-inverse text-ellipsis\">\r\n                    <span class=\"badge badge-inverse\">14.99%</span>\r\n                    3. South Korea\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/v2/dashboard-v2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_reporting_service__ = __webpack_require__("../../../../../src/app/services/reporting.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardV2Page; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardV2Page = (function () {
    function DashboardV2Page(reportingservice) {
        this.reportingservice = reportingservice;
    }
    DashboardV2Page.prototype.getData = function () {
        var _this = this;
        this.reportingservice.getDashboardData().then(function (data) {
            _this.total = data.total;
            _this.daily = data.daily;
            console.log();
        }, function (err) {
            console.log("error");
            console.log(err);
        });
    };
    DashboardV2Page.prototype.ngOnInit = function () {
        this.getData();
    };
    DashboardV2Page = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-v2',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/v2/dashboard-v2.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/v2/dashboard-v2.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_reporting_service__["a" /* ReportingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_reporting_service__["a" /* ReportingService */]) === "function" && _a || Object])
    ], DashboardV2Page);
    return DashboardV2Page;
    var _a;
}());

//# sourceMappingURL=dashboard-v2.js.map

/***/ }),

/***/ "../../../../../src/app/pages/extra/extra-profile/extra-profile.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin breadcrumb -->\r\n<ol class=\"breadcrumb pull-right\">\r\n    <li><a href=\"javascript:;\">Home</a></li>\r\n    <li><a href=\"javascript:;\">Extra</a></li>\r\n    <li class=\"active\">Profile Page</li>\r\n</ol>\r\n<!-- end breadcrumb -->\r\n<!-- begin page-header -->\r\n<h1 class=\"page-header\">Profile Page <small>header small text goes here...</small></h1>\r\n<!-- end page-header -->\r\n<!-- begin profile-container -->\r\n<div class=\"profile-container\">\r\n    <!-- begin profile-section -->\r\n    <div class=\"profile-section\">\r\n        <!-- begin profile-left -->\r\n        <div class=\"profile-left\">\r\n            <!-- begin profile-image -->\r\n            <div class=\"profile-image\">\r\n                <img src=\"/assets/img/profile-cover.jpg\" />\r\n                <i class=\"fa fa-user hide\"></i>\r\n            </div>\r\n            <!-- end profile-image -->\r\n            <div class=\"m-b-10\">\r\n                <a href=\"#\" class=\"btn btn-warning btn-block btn-sm\">Change Picture</a>\r\n            </div>\r\n            <!-- begin profile-highlight -->\r\n            <div class=\"profile-highlight\">\r\n                <h4><i class=\"fa fa-cog\"></i> Only My Contacts</h4>\r\n                <div class=\"checkbox m-b-5 m-t-0\">\r\n                    <label><input type=\"checkbox\" /> Show my timezone</label>\r\n                </div>\r\n                <div class=\"checkbox m-b-0\">\r\n                    <label><input type=\"checkbox\" /> Show i have 14 contacts</label>\r\n                </div>\r\n            </div>\r\n            <!-- end profile-highlight -->\r\n        </div>\r\n        <!-- end profile-left -->\r\n        <!-- begin profile-right -->\r\n        <div class=\"profile-right\">\r\n            <!-- begin profile-info -->\r\n            <div class=\"profile-info\">\r\n                <!-- begin table -->\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-profile\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th></th>\r\n                                <th>\r\n                                    <h4>Micheal\tMeyer <small>Lorraine Stokes</small></h4>\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr class=\"highlight\">\r\n                                <td class=\"field\">Mood</td>\r\n                                <td><a href=\"#\">Add Mood Message</a></td>\r\n                            </tr>\r\n                            <tr class=\"divider\">\r\n                                <td colspan=\"2\"></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"field\">Mobile</td>\r\n                                <td><i class=\"fa fa-mobile fa-lg m-r-5\"></i> +1-(847)- 367-8924 <a href=\"#\" class=\"m-l-5\">Edit</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"field\">Home</td>\r\n                                <td><a href=\"#\">Add Number</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"field\">Office</td>\r\n                                <td><a href=\"#\">Add Number</a></td>\r\n                            </tr>\r\n                            <tr class=\"divider\">\r\n                                <td colspan=\"2\"></td>\r\n                            </tr>\r\n                            <tr class=\"highlight\">\r\n                                <td class=\"field\">About Me</td>\r\n                                <td><a href=\"#\">Add Description</a></td>\r\n                            </tr>\r\n                            <tr class=\"divider\">\r\n                                <td colspan=\"2\"></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"field\">Country/Region</td>\r\n                                <td>\r\n                                    <select class=\"form-control input-inline input-xs\" name=\"region\">\r\n                                        <option value=\"US\" selected>United State</option>\r\n                                        <option value=\"AF\">Afghanistan</option>\r\n                                        <option value=\"AL\">Albania</option>\r\n                                        <option value=\"DZ\">Algeria</option>\r\n                                        <option value=\"AS\">American Samoa</option>\r\n                                        <option value=\"AD\">Andorra</option>\r\n                                        <option value=\"AO\">Angola</option>\r\n                                        <option value=\"AI\">Anguilla</option>\r\n                                        <option value=\"AQ\">Antarctica</option>\r\n                                        <option value=\"AG\">Antigua and Barbuda</option>\r\n                                    </select>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"field\">City</td>\r\n                                <td>Los Angeles</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"field\">State</td>\r\n                                <td><a href=\"#\">Add State</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"field\">Website</td>\r\n                                <td><a href=\"#\">Add Webpage</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"field\">Gender</td>\r\n                                <td>\r\n                                    <select class=\"form-control input-inline input-xs\" name=\"gender\">\r\n                                        <option value=\"male\">Male</option>\r\n                                        <option value=\"female\">Female</option>\r\n                                    </select>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"field\">Birthdate</td>\r\n                                <td>\r\n                                    <select class=\"form-control input-inline input-xs\" name=\"day\">\r\n                                        <option value=\"04\" selected>04</option>\r\n                                    </select>\r\n                                    -\r\n                                    <select class=\"form-control input-inline input-xs\" name=\"month\">\r\n                                        <option value=\"11\" selected>11</option>\r\n                                    </select>\r\n                                    -\r\n                                    <select class=\"form-control input-inline input-xs\" name=\"year\">\r\n                                        <option value=\"1989\" selected>1989</option>\r\n                                    </select>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"field\">Language</td>\r\n                                <td>\r\n                                    <select class=\"form-control input-inline input-xs\" name=\"language\">\r\n                                        <option value=\"\" selected>English</option>\r\n                                    </select>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <!-- end table -->\r\n            </div>\r\n            <!-- end profile-info -->\r\n        </div>\r\n        <!-- end profile-right -->\r\n    </div>\r\n    <!-- end profile-section -->\r\n    <!-- begin profile-section -->\r\n    <div class=\"profile-section\">\r\n        <!-- begin row -->\r\n        <div class=\"row\">\r\n            <!-- begin col-4 -->\r\n            <div class=\"col-md-4\">\r\n                <h4 class=\"title\">Message <small>56 messages</small></h4>\r\n                <!-- begin scrollbar -->\r\n                <div data-scrollbar=\"true\" data-height=\"280px\" class=\"bg-silver\">\r\n                    <!-- begin chats -->\r\n                    <ul class=\"chats\">\r\n                        <li class=\"left\">\r\n                            <span class=\"date-time\">yesterday 11:23pm</span>\r\n                            <a href=\"javascript:;\" class=\"name\">Sowse Bawdy</a>\r\n                            <a href=\"javascript:;\" class=\"image\"><img alt=\"\" src=\"/assets/img/user-12.jpg\"></a>\r\n                            <div class=\"message\">\r\n                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit volutpat. Praesent mattis interdum arcu eu feugiat.\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"right\">\r\n                            <span class=\"date-time\">08:12am</span>\r\n                            <a href=\"#\" class=\"name\"><span class=\"label label-primary\">ADMIN</span> Me</a>\r\n                            <a href=\"javascript:;\" class=\"image\"><img alt=\"\" src=\"/assets/img/user-13.jpg\"></a>\r\n                            <div class=\"message\">\r\n                                Nullam posuere, nisl a varius rhoncus, risus tellus hendrerit neque.\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"left\">\r\n                            <span class=\"date-time\">09:20am</span>\r\n                            <a href=\"#\" class=\"name\">Neck Jolly</a>\r\n                            <a href=\"javascript:;\" class=\"image\"><img alt=\"\" src=\"/assets/img/user-10.jpg\"></a>\r\n                            <div class=\"message\">\r\n                                Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"left\">\r\n                            <span class=\"date-time\">11:15am</span>\r\n                            <a href=\"#\" class=\"name\">Shag Strap</a>\r\n                            <a href=\"javascript:;\" class=\"image\"><img alt=\"\" src=\"/assets/img/user-14.jpg\"></a>\r\n                            <div class=\"message\">\r\n                                Nullam iaculis pharetra pharetra. Proin sodales tristique sapien mattis placerat.\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                    <!-- end chats -->\r\n                </div>\r\n                <!-- end scrollbar -->\r\n            </div>\r\n            <!-- end col-4 -->\r\n            <!-- begin col-4 -->\r\n            <div class=\"col-md-4\">\r\n                <h4 class=\"title\">Sales <small>3 sales</small></h4>\r\n                <!-- begin scrollbar -->\r\n                <div data-scrollbar=\"true\" data-height=\"280px\" class=\"bg-silver\">\r\n                    <!-- begin table -->\r\n                    <table class=\"table table-condensed\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th></th>\r\n                                <th>Product</th>\r\n                                <th>Amount</th>\r\n                                <th>Date</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"col-md-1 p-r-5\">\r\n                                    <a href=\"javascript:;\" class=\"pull-left\">\r\n                                        <img src=\"/assets/img/product/product-1.png\" width=\"40px\" alt=\"\">\r\n                                    </a>\r\n                                </td>\r\n                                <td>\r\n                                    <h5 class=\"m-t-0 m-b-5\">iPad Air 3</h5>\r\n                                </td>\r\n                                <td>$349.00</td>\r\n                                <td>13/02/2013</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"col-md-1 p-r-5\">\r\n                                    <a href=\"javascript:;\" class=\"pull-left\">\r\n                                        <img src=\"/assets/img/product/product-2.png\" width=\"40px\" alt=\"\">\r\n                                    </a>\r\n                                </td>\r\n                                <td>\r\n                                    <h5 class=\"m-t-0 m-b-5\">Iphone6</h5>\r\n                                </td>\r\n                                <td>$399.00</td>\r\n                                <td>13/02/2013</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"col-md-1 p-r-5\">\r\n                                    <a href=\"javascript:;\" class=\"pull-left\">\r\n                                        <img src=\"/assets/img/product/product-3.png\" width=\"40px\" alt=\"\">\r\n                                    </a>\r\n                                </td>\r\n                                <td>\r\n                                    <h5 class=\"m-t-0 m-b-5\">Macbook Pro</h5>\r\n                                </td>\r\n                                <td>$499.00</td>\r\n                                <td>13/02/2013</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"col-md-1 p-r-5\">\r\n                                    <a href=\"javascript:;\">\r\n                                        <img src=\"/assets/img/product/product-4.png\" width=\"40px\" alt=\"\">\r\n                                    </a>\r\n                                </td>\r\n                                <td>\r\n                                    <h5 class=\"m-t-0 m-b-5\">Samsung Galaxy s4</h5>\r\n                                </td>\r\n                                <td>$230.00</td>\r\n                                <td>13/02/2013</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"col-md-1 p-r-5\">\r\n                                    <a href=\"javascript:;\" class=\"pull-left\">\r\n                                        <img src=\"/assets/img/product/product-5.png\" width=\"40px\" alt=\"\">\r\n                                    </a>\r\n                                </td>\r\n                                <td>\r\n                                    <h5 class=\"m-t-0 m-b-5\">Samsung Note 4</h5>\r\n                                </td>\r\n                                <td>$500.00</td>\r\n                                <td>13/02/2013</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <!-- end table -->\r\n                </div>\r\n                <!-- end scrollbar -->\r\n            </div>\r\n            <!-- end col-4 -->\r\n            <!-- begin col-4 -->\r\n            <div class=\"col-md-4\">\r\n                <h4 class=\"title\">Task <small>24 pending</small></h4>\r\n                <!-- begin scrollbar -->\r\n                <div data-scrollbar=\"true\" data-height=\"280px\" class=\"bg-silver\">\r\n                    <!-- begin todolist -->\r\n                    <ul class=\"todolist\">\r\n                        <li class=\"active\">\r\n                            <a href=\"javascript:;\" class=\"todolist-container active\" data-click=\"todolist\">\r\n                                <div class=\"todolist-input\"><i class=\"fa fa-square-o\"></i></div>\r\n                                <div class=\"todolist-title\">Donec vehicula pretium nisl, id lacinia nisl tincidunt id.</div>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:;\" class=\"todolist-container\" data-click=\"todolist\">\r\n                                <div class=\"todolist-input\"><i class=\"fa fa-square-o\"></i></div>\r\n                                <div class=\"todolist-title\">Duis a ullamcorper massa.</div>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:;\" class=\"todolist-container\" data-click=\"todolist\">\r\n                                <div class=\"todolist-input\"><i class=\"fa fa-square-o\"></i></div>\r\n                                <div class=\"todolist-title\">Phasellus bibendum, odio nec vestibulum ullamcorper.</div>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:;\" class=\"todolist-container\" data-click=\"todolist\">\r\n                                <div class=\"todolist-input\"><i class=\"fa fa-square-o\"></i></div>\r\n                                <div class=\"todolist-title\">Duis pharetra mi sit amet dictum congue.</div>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:;\" class=\"todolist-container\" data-click=\"todolist\">\r\n                                <div class=\"todolist-input\"><i class=\"fa fa-square-o\"></i></div>\r\n                                <div class=\"todolist-title\">Duis pharetra mi sit amet dictum congue.</div>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:;\" class=\"todolist-container\" data-click=\"todolist\">\r\n                                <div class=\"todolist-input\"><i class=\"fa fa-square-o\"></i></div>\r\n                                <div class=\"todolist-title\">Phasellus bibendum, odio nec vestibulum ullamcorper.</div>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:;\" class=\"todolist-container active\" data-click=\"todolist\">\r\n                                <div class=\"todolist-input\"><i class=\"fa fa-square-o\"></i></div>\r\n                                <div class=\"todolist-title\">Donec vehicula pretium nisl, id lacinia nisl tincidunt id.</div>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                    <!-- end todolist -->\r\n                </div>\r\n                <!-- end scrollbar -->\r\n            </div>\r\n            <!-- end col-4 -->\r\n        </div>\r\n        <!-- end row -->\r\n    </div>\r\n    <!-- end profile-section -->\r\n</div>\r\n<!-- end profile-container -->\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/extra/extra-profile/extra-profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtraProfilePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExtraProfilePage = (function () {
    function ExtraProfilePage() {
    }
    ExtraProfilePage.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('page-extra-profile-ready'));
    };
    ExtraProfilePage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'extra-profile',
            template: __webpack_require__("../../../../../src/app/pages/extra/extra-profile/extra-profile.html")
        })
    ], ExtraProfilePage);
    return ExtraProfilePage;
}());

//# sourceMappingURL=extra-profile.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-stuff/form-plugins/form-plugins.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports
exports.push([module.i, "@import url(/assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/ionRangeSlider/css/ion.rangeSlider.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/password-indicator/css/password-indicator.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-combobox/css/bootstrap-combobox.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-select/bootstrap-select.min.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/jquery-tag-it/css/jquery.tagit.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-daterangepicker/daterangepicker.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/select2/dist/css/select2.min.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/bootstrap-colorpalette/css/bootstrap-colorpalette.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-fontawesome.css);", ""]);
exports.push([module.i, "@import url(/assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-glyphicons.css);", ""]);

// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form-stuff/form-plugins/form-plugins.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin breadcrumb -->\r\n<ol class=\"breadcrumb pull-right\">\r\n\t<li><a href=\"javascript:;\">Home</a></li>\r\n\t<li><a href=\"javascript:;\">Form Stuff</a></li>\r\n\t<li class=\"active\">Form Plugins</li>\r\n</ol>\r\n<!-- end breadcrumb -->\r\n<!-- begin page-header -->\r\n<h1 class=\"page-header\">Form Plugins <small>header small text goes here...</small></h1>\r\n<!-- end page-header -->\r\n\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n\t<!-- begin col-6 -->\r\n\t<div class=\"col-md-6\">\r\n\t\t<!-- begin panel -->\r\n\t\t<div class=\"panel panel-inverse\" data-sortable-id=\"form-plugins-1\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-heading-btn\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h4 class=\"panel-title\">Bootstrap Date Time Picker</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body panel-form\">\r\n\t\t\t\t<form class=\"form-horizontal form-bordered\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Default Date Time</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<div class=\"input-group date\" id=\"datetimepicker1\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" />\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-calendar\"></span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Custom Format</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<div class=\"input-group date\" id=\"datetimepicker2\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" />\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-time\"></span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Linked Pickers</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<div class=\"row row-space-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"  id=\"datetimepicker3\" placeholder=\"Min Date\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"datetimepicker4\" placeholder=\"Max Date\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end panel -->\r\n\t\t<!-- begin panel -->\r\n\t\t<div class=\"panel panel-inverse\" data-sortable-id=\"form-plugins-2\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-heading-btn\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h4 class=\"panel-title\">Bootstrap Date Range Picker</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body panel-form\">\r\n\t\t\t\t<form class=\"form-horizontal form-bordered\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Default Date Ranges</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\" id=\"default-daterange\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"default-daterange\" class=\"form-control\" value=\"\" placeholder=\"click to select the date range\" />\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Advance Date Ranges</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<div id=\"advance-daterange\" class=\"btn btn-white btn-block\">\r\n\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-down fa-fw\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end panel -->\r\n\t\t<!-- begin panel -->\r\n\t\t<div class=\"panel panel-inverse\" data-sortable-id=\"form-plugins-3\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-heading-btn\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h4 class=\"panel-title\">Select2</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body panel-form\">\r\n\t\t\t\t<form class=\"form-horizontal form-bordered\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Basic Select2</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<select class=\"default-select2 form-control\">\r\n\t\t\t\t\t\t\t\t<optgroup label=\"Alaskan/Hawaiian Time Zone\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"AK\">Alaska</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"HI\">Hawaii</option>\r\n\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t\t<optgroup label=\"Pacific Time Zone\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"CA\">California</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"NV\">Nevada</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"OR\">Oregon</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"WA\">Washington</option>\r\n\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t\t<optgroup label=\"Mountain Time Zone\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">Arizona</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">Colorado</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">Idaho</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"MT\">Montana</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"NE\">Nebraska</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"NM\">New Mexico</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"ND\">North Dakota</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"UT\">Utah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">Wyoming</option>\r\n\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t\t<optgroup label=\"Central Time Zone\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"AL\">Alabama</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"AR\">Arkansas</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"IL\">Illinois</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"IA\">Iowa</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"KS\">Kansas</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"KY\">Kentucky</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"LA\">Louisiana</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"MN\">Minnesota</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"MS\">Mississippi</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"MO\">Missouri</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"OK\">Oklahoma</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"SD\">South Dakota</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"TX\">Texas</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"TN\">Tennessee</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"WI\">Wisconsin</option>\r\n\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t\t<optgroup label=\"Eastern Time Zone\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"CT\">Connecticut</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"DE\">Delaware</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"FL\">Florida</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"GA\">Georgia</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"IN\">Indiana</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"ME\">Maine</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"MD\">Maryland</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"MA\">Massachusetts</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"MI\">Michigan</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"NH\">New Hampshire</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"NJ\">New Jersey</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"NY\">New York</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"NC\">North Carolina</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"OH\">Ohio</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"PA\">Pennsylvania</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"RI\">Rhode Island</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"SC\">South Carolina</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"VT\">Vermont</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"VA\">Virginia</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"WV\">West Virginia</option>\r\n\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Multiple Selection</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<select class=\"multiple-select2 form-control\" multiple=\"multiple\">\r\n\t\t\t\t\t\t\t\t<optgroup label=\"Alaskan/Hawaiian Time Zone\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"AK\">Alaska</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"HI\">Hawaii</option>\r\n\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t\t<optgroup label=\"Pacific Time Zone\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"CA\">California</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"NV\">Nevada</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"OR\">Oregon</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"WA\">Washington</option>\r\n\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t\t<optgroup label=\"Mountain Time Zone\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"AZ\">Arizona</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"CO\">Colorado</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"ID\">Idaho</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"MT\">Montana</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"NE\">Nebraska</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"NM\">New Mexico</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"ND\">North Dakota</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"UT\">Utah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"WY\">Wyoming</option>\r\n\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t\t<optgroup label=\"Central Time Zone\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"AL\">Alabama</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"AR\">Arkansas</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"IL\">Illinois</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"IA\">Iowa</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"KS\">Kansas</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"KY\">Kentucky</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"LA\">Louisiana</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"MN\">Minnesota</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"MS\">Mississippi</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"MO\">Missouri</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"OK\">Oklahoma</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"SD\">South Dakota</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"TX\">Texas</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"TN\">Tennessee</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"WI\">Wisconsin</option>\r\n\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t\t<optgroup label=\"Eastern Time Zone\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"CT\">Connecticut</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"DE\">Delaware</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"FL\">Florida</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"GA\">Georgia</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"IN\">Indiana</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"ME\">Maine</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"MD\">Maryland</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"MA\">Massachusetts</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"MI\">Michigan</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"NH\">New Hampshire</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"NJ\">New Jersey</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"NY\">New York</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"NC\">North Carolina</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"OH\">Ohio</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"PA\">Pennsylvania</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"RI\">Rhode Island</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"SC\">South Carolina</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"VT\">Vermont</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"VA\">Virginia</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"WV\">West Virginia</option>\r\n\t\t\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end panel -->\r\n\t\t<!-- begin panel -->\r\n\t\t<div class=\"panel panel-inverse\" data-sortable-id=\"form-plugins-4\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-heading-btn\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h4 class=\"panel-title\">Datepicker</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body panel-form\">\r\n\t\t\t\t<form class=\"form-horizontal form-bordered\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Default Datepicker</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"datepicker-default\" placeholder=\"Select Date\" value=\"04/1/2014\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Inline Datepicker</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<div id=\"datepicker-inline\"><div></div></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Auto Close Datepicker</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"datepicker-autoClose\" placeholder=\"Auto Close Datepicker\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Disabled Past Date</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<div class=\"input-group date\" id=\"datepicker-disabled-past\" data-date-format=\"dd-mm-yyyy\" data-date-start-date=\"Date.default\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Select Date\" />\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Range Datepicker</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<div class=\"input-group input-daterange\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"start\" placeholder=\"Date Start\" />\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">to</span>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"end\" placeholder=\"Date End\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end panel -->\r\n\t\t<!-- begin panel -->\r\n\t\t<div class=\"panel panel-inverse\" data-sortable-id=\"form-plugins-5\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-heading-btn\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h4 class=\"panel-title\">jQuery Autocomplete</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body panel-form\">\r\n\t\t\t\t<form class=\"form-horizontal form-bordered\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Autocomplete</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" name=\"\" id=\"jquery-autocomplete\" class=\"form-control\" placeholder=\"Try typing 'a' or 'b'.\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end panel -->\r\n\t\t<!-- begin panel -->\r\n\t\t<div class=\"panel panel-inverse\" data-sortable-id=\"form-plugins-6\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-heading-btn\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h4 class=\"panel-title\">Bootstrap Combobox</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body panel-form\">\r\n\t\t\t\t<form class=\"form-horizontal form-bordered\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Bootstrap Combobox</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<select class=\"combobox\">\r\n\t\t\t\t\t\t\t\t<option value=\"\">Select Location</option>\r\n\t\t\t\t\t\t\t\t<option value=\"PA\">Pennsylvania</option>\r\n\t\t\t\t\t\t\t\t<option value=\"CT\">Connecticut</option>\r\n\t\t\t\t\t\t\t\t<option value=\"NY\">New York</option>\r\n\t\t\t\t\t\t\t\t<option value=\"MD\">Maryland</option>\r\n\t\t\t\t\t\t\t\t<option value=\"VA\">Virginia</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end panel -->\r\n\t\t<!-- begin panel -->\r\n\t\t<div class=\"panel panel-inverse\" data-sortable-id=\"form-plugins-7\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-heading-btn\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h4 class=\"panel-title\">Select with Search</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body panel-form\">\r\n\t\t\t\t<form class=\"form-horizontal form-bordered\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Default</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<p>Convert this</p>\r\n\t\t\t\t\t\t\t<select class=\"form-control\">\r\n\t\t\t\t\t\t\t\t<option value=\"\" selected>Select a Country</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AF\">Afghanistan</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AL\">Albania</option>\r\n\t\t\t\t\t\t\t\t<option value=\"DZ\">Algeria</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AS\">American Samoa</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AD\">Andorra</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AO\">Angola</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AI\">Anguilla</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AQ\">Antarctica</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AG\">Antigua and Barbuda</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<p></p>\r\n\t\t\t\t\t\t\t<p>Become this</p>\r\n\t\t\t\t\t\t\t<select class=\"form-control selectpicker\" data-size=\"10\" data-live-search=\"true\">\r\n\t\t\t\t\t\t\t\t<option value=\"\" selected>Select a Country</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AF\">Afghanistan</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AL\">Albania</option>\r\n\t\t\t\t\t\t\t\t<option value=\"DZ\">Algeria</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AS\">American Samoa</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AD\">Andorra</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AO\">Angola</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AI\">Anguilla</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AQ\">Antarctica</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AG\">Antigua and Barbuda</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Theme White</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<select class=\"form-control selectpicker\" data-size=\"10\" data-live-search=\"true\" data-style=\"btn-white\">\r\n\t\t\t\t\t\t\t\t<option value=\"\" selected>Select a Country</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AF\">Afghanistan</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AL\">Albania</option>\r\n\t\t\t\t\t\t\t\t<option value=\"DZ\">Algeria</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AS\">American Samoa</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AD\">Andorra</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AO\">Angola</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AI\">Anguilla</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AQ\">Antarctica</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AG\">Antigua and Barbuda</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Theme Inverse</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<select class=\"form-control selectpicker\" data-size=\"10\" data-live-search=\"true\" data-style=\"btn-inverse\">\r\n\t\t\t\t\t\t\t\t<option value=\"\" selected>Select a Country</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AF\">Afghanistan</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AL\">Albania</option>\r\n\t\t\t\t\t\t\t\t<option value=\"DZ\">Algeria</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AS\">American Samoa</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AD\">Andorra</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AO\">Angola</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AI\">Anguilla</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AQ\">Antarctica</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AG\">Antigua and Barbuda</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Theme Primary</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<select class=\"form-control selectpicker\" data-size=\"10\" data-live-search=\"true\" data-style=\"btn-primary\">\r\n\t\t\t\t\t\t\t\t<option value=\"\" selected>Select a Country</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AF\">Afghanistan</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AL\">Albania</option>\r\n\t\t\t\t\t\t\t\t<option value=\"DZ\">Algeria</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AS\">American Samoa</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AD\">Andorra</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AO\">Angola</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AI\">Anguilla</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AQ\">Antarctica</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AG\">Antigua and Barbuda</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Theme Info</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<select class=\"form-control selectpicker\" data-size=\"10\" data-live-search=\"true\" data-style=\"btn-info\">\r\n\t\t\t\t\t\t\t\t<option value=\"\" selected>Select a Country</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AF\">Afghanistan</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AL\">Albania</option>\r\n\t\t\t\t\t\t\t\t<option value=\"DZ\">Algeria</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AS\">American Samoa</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AD\">Andorra</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AO\">Angola</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AI\">Anguilla</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AQ\">Antarctica</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AG\">Antigua and Barbuda</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Theme Success</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<select class=\"form-control selectpicker\" data-size=\"10\" data-live-search=\"true\" data-style=\"btn-success\">\r\n\t\t\t\t\t\t\t\t<option value=\"\" selected>Select a Country</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AF\">Afghanistan</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AL\">Albania</option>\r\n\t\t\t\t\t\t\t\t<option value=\"DZ\">Algeria</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AS\">American Samoa</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AD\">Andorra</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AO\">Angola</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AI\">Anguilla</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AQ\">Antarctica</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AG\">Antigua and Barbuda</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Theme Warning</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<select class=\"form-control selectpicker\" data-size=\"10\" data-live-search=\"true\" data-style=\"btn-warning\">\r\n\t\t\t\t\t\t\t\t<option value=\"\" selected>Select a Country</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AF\">Afghanistan</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AL\">Albania</option>\r\n\t\t\t\t\t\t\t\t<option value=\"DZ\">Algeria</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AS\">American Samoa</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AD\">Andorra</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AO\">Angola</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AI\">Anguilla</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AQ\">Antarctica</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AG\">Antigua and Barbuda</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Theme Danger</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<select class=\"form-control selectpicker\" data-size=\"10\" data-live-search=\"true\" data-style=\"btn-danger\">\r\n\t\t\t\t\t\t\t\t<option value=\"\" selected>Select a Country</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AF\">Afghanistan</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AL\">Albania</option>\r\n\t\t\t\t\t\t\t\t<option value=\"DZ\">Algeria</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AS\">American Samoa</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AD\">Andorra</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AO\">Angola</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AI\">Anguilla</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AQ\">Antarctica</option>\r\n\t\t\t\t\t\t\t\t<option value=\"AG\">Antigua and Barbuda</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end panel -->\r\n\t\t<!-- begin panel -->\r\n\t\t<div class=\"panel panel-inverse\" data-sortable-id=\"form-plugins-8\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-heading-btn\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h4 class=\"panel-title\"><span class=\"label label-success pull-left m-r-10\">NEW</span> Bootstrap Show Password</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body panel-form\">\r\n\t\t\t\t<form class=\"form-horizontal form-bordered\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Show / Hide Password</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input data-toggle=\"password\" data-placement=\"after\" class=\"form-control\" type=\"password\" value=\"123\" placeholder=\"password\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Show / Hide Password</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input data-toggle=\"password\" data-placement=\"before\" class=\"form-control\" type=\"password\" value=\"123\" placeholder=\"password\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end panel -->\r\n\t\t<!-- begin panel -->\r\n\t\t<div class=\"panel panel-inverse\" data-sortable-id=\"form-plugins-9\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-heading-btn\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h4 class=\"panel-title\">Password Indicator</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body panel-form\">\r\n\t\t\t\t<form class=\"form-horizontal form-bordered\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Password</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input type=\"password\" name=\"password\" id=\"password-indicator-default\" class=\"form-control m-b-5\" />\r\n\t\t\t\t\t\t\t<div id=\"passwordStrengthDiv\" class=\"is0 m-t-5\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Visible Password</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" name=\"password-visible\" id=\"password-indicator-visible\" class=\"form-control m-b-5\" />\r\n\t\t\t\t\t\t\t<div id=\"passwordStrengthDiv2\" class=\"is0 m-t-5\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end panel -->\r\n\t</div>\r\n\t<!-- end col-6 -->\r\n\t<!-- begin col-6 -->\r\n\t<div class=\"col-md-6\">\r\n\t\t<!-- begin panel -->\r\n\t\t<div class=\"panel panel-inverse\" data-sortable-id=\"form-plugins-10\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-heading-btn\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h4 class=\"panel-title\"><span class=\"label label-success pull-left m-r-10\">NEW</span> Bootstrap Color Palette</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body panel-form\">\r\n\t\t\t\t<form class=\"form-horizontal form-bordered\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Color Palette Dropdown</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"color_palatte_1\" data-id=\"color-palette-1\" />\r\n\t\t\t\t\t\t\t\t<div class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-tint\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t\t\t\t\t\t<li><div id=\"color-palette-1\"></div></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Custom Color Palette</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"color_palatte_custom\" data-id=\"color-palette-custom\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<div id=\"color-palette-custom\" class=\"m-t-5 p-t-3\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end panel -->\r\n\t\t<!-- begin panel -->\r\n\t\t<div class=\"panel panel-inverse\" data-sortable-id=\"form-plugins-11\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-heading-btn\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h4 class=\"panel-title\"><span class=\"label label-success pull-left m-r-10\">NEW</span> jQuery Simple Colorpicker</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body panel-form\">\r\n\t\t\t\t<form class=\"form-horizontal form-bordered\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Basic Usage</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<select name=\"jquery-simplecolorpicker\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"#7bd148\">Green</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#5484ed\">Bold blue</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#a4bdfc\">Blue</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#46d6db\">Turquoise</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#7ae7bf\">Light green</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#51b749\">Bold green</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#fbd75b\">Yellow</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#ffb878\">Orange</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#ff887c\">Red</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#dc2127\">Bold red</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#dbadff\">Purple</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#e1e1e1\">Gray</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">FontAwesome Theme</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<select name=\"jquery-simplecolorpicker-fa\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"#7bd148\">Green</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#5484ed\">Bold blue</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#a4bdfc\">Blue</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#46d6db\">Turquoise</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#7ae7bf\">Light green</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#51b749\">Bold green</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#fbd75b\">Yellow</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#ffb878\">Orange</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#ff887c\">Red</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#dc2127\">Bold red</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#dbadff\">Purple</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#e1e1e1\">Gray</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Dropdown Selection</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<div class=\"input-group m-t-5 m-b-5\">\r\n\t\t\t\t\t\t\t\t<select name=\"colorpicker-picker-longlist\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"#ac725e\">#ac725e</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#d06b64\">#d06b64</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#f83a22\">#f83a22</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#fa573c\">#fa573c</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#ff7537\">#ff7537</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#ffad46\">#ffad46</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#42d692\">#42d692</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#16a765\">#16a765</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#7bd148\">#7bd148</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#b3dc6c\">#b3dc6c</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#fbe983\">#fbe983</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#fad165\">#fad165</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#92e1c0\">#92e1c0</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#9fe1e7\">#9fe1e7</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#9fc6e7\">#9fc6e7</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#4986e7\">#4986e7</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#9a9cff\">#9a9cff</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#b99aff\">#b99aff</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#c2c2c2\">#c2c2c2</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#cabdbf\">#cabdbf</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#cca6ac\">#cca6ac</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#f691b2\">#f691b2</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#cd74e6\">#cd74e6</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"#a47ae2\">#a47ae2</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end panel -->\r\n\t\t<!-- begin panel -->\r\n\t\t<div class=\"panel panel-inverse\" data-sortable-id=\"form-plugins-12\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-heading-btn\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h4 class=\"panel-title\">Colopicker & Timepicker</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body panel-form\">\r\n\t\t\t\t<form class=\"form-horizontal form-bordered\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Default Color Picker</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" value=\"#3498db\" class=\"form-control\" id=\"colorpicker\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Prepend Color Picker</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<div class=\"input-group colorpicker-component\" data-color=\"rgb(0, 0, 0)\" data-color-format=\"rgb\"  id=\"colorpicker-prepend\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" value=\"rgb(0, 0, 0)\" readonly=\"\" class=\"form-control\" />\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i></i></span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">RGBA Color format</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"rgb(155,89,182,0.8)\" id=\"colorpicker-rgba\" data-color-format=\"rgba\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Default timepicker</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<div class=\"input-group bootstrap-timepicker\">\r\n\t\t\t\t\t\t\t\t<input id=\"timepicker\" type=\"text\" class=\"form-control\" />\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-clock-o\"></i></span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end panel -->\r\n\t\t<!-- begin panel -->\r\n\t\t<div class=\"panel panel-inverse\" data-sortable-id=\"form-plugins-13\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-heading-btn\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h4 class=\"panel-title\">Ion Range Slider</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body panel-form\">\r\n\t\t\t\t<form class=\"form-horizontal form-bordered\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Default</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" id=\"default_rangeSlider\" name=\"default_rangeSlider\" value=\"\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Custom Range</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" id=\"customRange_rangeSlider\" name=\"default_rangeSlider\" value=\"\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Custom Values</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" id=\"customValue_rangeSlider\" name=\"default_rangeSlider\" value=\"\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end panel -->\r\n\t\t<!-- begin panel -->\r\n\t\t<div class=\"panel panel-inverse\" data-sortable-id=\"form-plugins-14\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-heading-btn\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h4 class=\"panel-title\">Masked Input</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body panel-form\">\r\n\t\t\t\t<form class=\"form-horizontal form-bordered\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Date</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"masked-input-date\" placeholder=\"dd/mm/yyyy\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Phone</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"masked-input-phone\" placeholder=\"(999) 999-9999\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Tax ID</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"masked-input-tid\" placeholder=\"99-9999999\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Product Key</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"masked-input-pkey\" placeholder=\"a*-999-a999\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">SSN</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"masked-input-ssn\" placeholder=\"999/99/9999\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">SSN</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"masked-input-pno\" placeholder=\"AAA-9999-A\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end panel -->\r\n\t\t<!-- begin panel -->\r\n\t\t<div class=\"panel panel-inverse\" data-sortable-id=\"form-plugins-15\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-heading-btn\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h4 class=\"panel-title\">jQuery Tag It</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body panel-form\">\r\n\t\t\t\t<form class=\"form-horizontal form-bordered\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Default Tags Input with Autocomplete</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<ul id=\"jquery-tagIt-default\">\r\n\t\t\t\t\t\t\t\t<li>Tag1</li>\r\n\t\t\t\t\t\t\t\t<li>Tag2</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<p>Try to enter \"c++, java, php\" </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Inverse Theme</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<ul id=\"jquery-tagIt-inverse\" class=\"inverse\">\r\n\t\t\t\t\t\t\t\t<li>Tag1</li>\r\n\t\t\t\t\t\t\t\t<li>Tag2</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">White Theme</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<ul id=\"jquery-tagIt-white\" class=\"white\">\r\n\t\t\t\t\t\t\t\t<li>Tag1</li>\r\n\t\t\t\t\t\t\t\t<li>Tag2</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Primary Theme</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<ul id=\"jquery-tagIt-primary\" class=\"primary\">\r\n\t\t\t\t\t\t\t\t<li>Tag1</li>\r\n\t\t\t\t\t\t\t\t<li>Tag2</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Info Theme</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<ul id=\"jquery-tagIt-info\" class=\"info\">\r\n\t\t\t\t\t\t\t\t<li>Tag1</li>\r\n\t\t\t\t\t\t\t\t<li>Tag2</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Success Theme</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<ul id=\"jquery-tagIt-success\" class=\"success\">\r\n\t\t\t\t\t\t\t\t<li>Tag1</li>\r\n\t\t\t\t\t\t\t\t<li>Tag2</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Warning Theme</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<ul id=\"jquery-tagIt-warning\" class=\"warning\">\r\n\t\t\t\t\t\t\t\t<li>Tag1</li>\r\n\t\t\t\t\t\t\t\t<li>Tag2</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Danger Theme</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<ul id=\"jquery-tagIt-danger\" class=\"danger\">\r\n\t\t\t\t\t\t\t\t<li>Tag1</li>\r\n\t\t\t\t\t\t\t\t<li>Tag2</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end panel -->\r\n\t\t<!-- begin panel -->\r\n\t\t<div class=\"panel panel-inverse\" data-sortable-id=\"form-plugins-16\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<div class=\"panel-heading-btn\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-default\" data-click=\"panel-expand\"><i class=\"fa fa-expand\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-success\" data-click=\"panel-reload\"><i class=\"fa fa-repeat\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-warning\" data-click=\"panel-collapse\"><i class=\"fa fa-minus\"></i></a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-xs btn-icon btn-circle btn-danger\" data-click=\"panel-remove\"><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h4 class=\"panel-title\"><span class=\"label label-success pull-left m-r-10\">NEW</span> Clipboard.js</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body panel-form\">\r\n\t\t\t\t<form class=\"form-horizontal form-bordered\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Default</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<input id=\"clipboard-default\" type=\"text\" class=\"form-control\" value=\"https://github.com/zenorocha/clipboard.js.git\" />\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-inverse\" type=\"button\" data-clipboard-target=\"#clipboard-default\"><i class=\"fa fa-clipboard\"></i></button>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">Cut to copy</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<textarea class=\"form-control m-b-10\" id=\"clipboard-textarea\" rows=\"7\">Mussum ipsum cacilds...</textarea>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-inverse btn-sm\" type=\"button\" data-clipboard-target=\"#clipboard-textarea\" data-clipboard-action=\"cut\">Cut to clipboard</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"control-label col-md-4\">without Form</label>\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-inverse btn-sm\" type=\"button\" data-clipboard-text=\"Just because you can doesn't mean you should — clipboard.js\">Click to copy</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end panel -->\r\n\t</div>\r\n\t<!-- end col-6 -->\r\n</div>\r\n<!-- end row -->"

/***/ }),

/***/ "../../../../../src/app/pages/form-stuff/form-plugins/form-plugins.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPluginsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormPluginsPage = (function () {
    function FormPluginsPage() {
    }
    FormPluginsPage.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('form-plugins-ready'));
    };
    FormPluginsPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-plugins',
            template: __webpack_require__("../../../../../src/app/pages/form-stuff/form-plugins/form-plugins.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/form-stuff/form-plugins/form-plugins.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
    ], FormPluginsPage);
    return FormPluginsPage;
}());

//# sourceMappingURL=form-plugins.js.map

/***/ }),

/***/ "../../../../../src/app/pages/reporting/reporting.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ":host /deep/ * {\r\n    font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size:12px    \r\n  }\r\n  :host /deep/ table {\r\n    color: #606c71;\r\n    \r\n  }\r\n  :host /deep/ table tr td, :host /deep/ table tr th {\r\n    border: 1px solid #e9ebec;\r\n  }\r\n  \r\n  .smart-table-container{ overflow-x: scroll; }\r\n\r\n  .column-size {\r\n    width: 80px\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/reporting/reporting.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <h1 class=\"page-header\">Reporting </h1>\r\n    \r\n    <div class=\"panel panel-success\">\r\n        \r\n                    <div class=\"panel-body\">\r\n                            <div class=\"smart-table-container\">\r\n<ng2-smart-table *ngIf=\"!loading\"  [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/reporting/reporting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportingPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportingPage = (function () {
    function ReportingPage(router, http) {
        this.router = router;
        this.http = http;
        // data = require('./reporting.json');    
        this.collectes = [];
        this.loading = true;
        this.settings = {
            columns: {},
            actions: {
                add: false,
                edit: false,
                delete: false
            }
        };
    }
    ReportingPage.prototype.getdata = function () {
    };
    ReportingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("./assets/reporting.json")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log("what is in the data ", data);
            _this.data = data;
            _this.loading = false;
            var i = 0;
            for (var key in data[0]) {
                console.log(key, data[0][key]);
                if (i > 1) {
                    _this.settings.columns[key] = { "title": key, "filter": false, };
                }
                else {
                    _this.settings.columns[key] = { "title": key };
                }
                i++;
            }
        });
    };
    ReportingPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'Reporting',
            template: __webpack_require__("../../../../../src/app/pages/reporting/reporting.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/reporting/reporting.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _b || Object])
    ], ReportingPage);
    return ReportingPage;
    var _a, _b;
}());

//# sourceMappingURL=reporting.js.map

/***/ }),

/***/ "../../../../../src/app/pages/reporting/reportingAgent.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <h1 class=\"page-header\">Reporting </h1>\r\n    \r\n    <div class=\"panel panel-success\">\r\n        \r\n                    <div class=\"panel-body\">\r\n                            <div class=\"smart-table-container\">\r\n<ng2-smart-table *ngIf=\"!loading\"  [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/reporting/reportingAgent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportingAgentPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportingAgentPage = (function () {
    function ReportingAgentPage(router, http) {
        this.router = router;
        this.http = http;
        // data = require('./reporting.json');    
        this.collectes = [];
        this.loading = true;
        this.settings = {
            columns: {},
            actions: {
                add: false,
                edit: false,
                delete: false
            }
        };
    }
    ReportingAgentPage.prototype.getdata = function () {
    };
    ReportingAgentPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("./assets/reportingAgent.json")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log("what is in the data ", data);
            _this.data = data;
            _this.loading = false;
            var i = 0;
            for (var key in data[0]) {
                console.log(key, data[0][key]);
                if (i > 3) {
                    _this.settings.columns[key] = { "title": key, "filter": false, };
                }
                else {
                    _this.settings.columns[key] = { "title": key };
                }
                i++;
            }
        });
    };
    ReportingAgentPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ReportingAgent',
            template: __webpack_require__("../../../../../src/app/pages/reporting/reportingAgent.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/reporting/reporting.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _b || Object])
    ], ReportingAgentPage);
    return ReportingAgentPage;
    var _a, _b;
}());

//# sourceMappingURL=reportingAgent.js.map

/***/ }),

/***/ "../../../../../src/app/pages/reporting/reportingRegion.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <h1 class=\"page-header\">Reporting </h1>\r\n    \r\n    <div class=\"panel panel-success\">\r\n        \r\n                    <div class=\"panel-body\">\r\n                            <div class=\"smart-table-container\">\r\n<ng2-smart-table *ngIf=\"!loading\"  [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/reporting/reportingRegion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportingRegionPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportingRegionPage = (function () {
    function ReportingRegionPage(router, http) {
        this.router = router;
        this.http = http;
        // data = require('./reporting.json');    
        this.collectes = [];
        this.loading = true;
        this.settings = {
            columns: {},
            actions: {
                add: false,
                edit: false,
                delete: false
            }
        };
    }
    ReportingRegionPage.prototype.getdata = function () {
    };
    ReportingRegionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("./assets/reportingRegion.json")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log("what is in the data ", data);
            _this.data = data;
            _this.loading = false;
            var i = 0;
            for (var key in data[0]) {
                console.log(key, data[0][key]);
                if (i > 0) {
                    _this.settings.columns[key] = { "title": key, "filter": false, };
                }
                else {
                    _this.settings.columns[key] = { "title": key };
                }
                i++;
            }
        });
    };
    ReportingRegionPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ReportingRegion',
            template: __webpack_require__("../../../../../src/app/pages/reporting/reportingRegion.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/reporting/reporting.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _b || Object])
    ], ReportingRegionPage);
    return ReportingRegionPage;
    var _a, _b;
}());

//# sourceMappingURL=reportingRegion.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/login/login.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin login -->\r\n<div class=\"loginn bg-black animated fadeInDown\">\r\n    <!-- begin brand -->\r\n    <div class=\"loginn-header\">\r\n        <div class=\"brand\">\r\n                <span><img src=\"assets/img/logo-beGIS.png\" width=\"70\" height=\"61\" alt=\"\"></span> <b>beGIS</b>\r\n        </div>\r\n        <div class=\"icon\">\r\n            <i class=\"fa fa-sign-in\"></i>\r\n        </div>\r\n    </div>\r\n    <!-- end brand -->\r\n    <div class=\"loginn-content\">\r\n            <p-messages [(value)]=\"msgs\"></p-messages>            \r\n        <form (ngSubmit)=\"f.form.valid && connecte()\" #f=\"ngForm\" class=\"margin-bottom-0\" novalidate >\r\n            <div class=\"form-group m-b-20\" [ngClass]=\"{ 'has-error': f.submitted && !login.valid }\">\r\n                <input type=\"text\" class=\"form-control input-lg inverse-mode no-border\" placeholder=\"Login\" name=\"login\" [(ngModel)]=\"model.login\" #login=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !login.valid\" class=\"help-block\">Ce champs est obligatoire</div>\r\n            </div>\r\n            <div class=\"form-group m-b-20\">\r\n                <input type=\"password\" class=\"form-control input-lg inverse-mode no-border\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Ce champs est obligatoire</div>\r\n            </div>\r\n            <!-- <div class=\"checkbox m-b-20\">\r\n                <label>\r\n                    <input type=\"checkbox\" /> Remember Me\r\n                </label>\r\n            </div> -->\r\n            <div class=\"loginn-buttons\">\r\n                <button class=\"btn btn-success btn-block btn-lg\">S'authentifier</button>\r\n            </div>\r\n            <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>     \r\n        </form>\r\n    </div>\r\n</div>\r\n<!-- end login -->"

/***/ }),

/***/ "../../../../../src/app/pages/user/login/login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(app, router, authenticationService, userservice) {
        this.app = app;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userservice = userservice;
        this.model = {};
        this.loading = false;
        this.error = '';
        this.msgs = [];
        app.setPageWithoutSidebar(true);
        app.setPageWithoutHeader(true);
        app.setPagePaceTop(true);
    }
    LoginPage.prototype.connecte = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.loginn(this.model)
            .then(function (result) {
            console.log("result", result);
            var user = _this.userservice.user;
            _this.router.navigate(['dashboard/v1']);
        }, function (err) {
            console.log("error", err);
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '', detail: err.message }); //create service                
        });
    };
    LoginPage.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('page-login-ready'));
        this.authenticationService.logout();
    };
    LoginPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/pages/user/login/login.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ "../../../../../src/app/pages/utilisateur/dashboard.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ":host /deep/ * {\r\n  font-size:12px    \r\n}\r\n:host /deep/ table {\r\n  color: #606c71;\r\n  \r\n}\r\n:host /deep/ table tr td, :host /deep/ table tr th {\r\n  border: 1px solid #e9ebec;\r\n}\r\n\r\n.smart-table-container{ overflow-x: scroll; }\r\n\r\n.column-size {\r\n  width: 80px\r\n}\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/utilisateur/dashboard.html":
/***/ (function(module, exports) {

module.exports = "<p-messages [(value)]=\"msgs\"></p-messages>         \r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"700\"></p-confirmDialog>\r\n     \r\n<div class=\"panel panel-success\">\r\n    <div class=\"panel-heading\">\r\n        <div class=\"bt-group pull-right\">\r\n                <a type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"createUser()\">Nouveau compte</a>\r\n        </div>\r\n        <h4 class=\"panel-title\">List des utilisateurs</h4>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n            <!-- <input\r\n            type='text'\r\n            style='padding:8px;margin:15px auto;width:30%;'\r\n            placeholder='Rechercher un utilisateur'\r\n            (keyup)='updateFilter($event)'\r\n          />\r\n            <ngx-datatable\r\n            #table\r\n            class=\"bootstrap\"\r\n            [headerHeight]=\"50\"\r\n            [rowHeight]=\"'auto'\"\r\n            [columnMode]=\"'force'\"\r\n            [rows]=\"rows\"\r\n            [columns]=\"columns\">\r\n            </ngx-datatable>      -->\r\n            <ng2-smart-table *ngIf=\"!loading\"  [settings]=\"settings\" [source]=\"users\" (custom)=\"testfunc($event)\"></ng2-smart-table>\r\n        <!-- <table id=\"data-table\" class=\"table table-striped table-bordered\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Nom</th>\r\n                    <th>Prénom</th>\r\n                    <th>Login</th>\r\n                    <th>Email</th>\r\n                    <th>Role</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let user of users\">\r\n                    <td>{{ user.nom }}</td>\r\n                    <td>{{ user.prenom }}</td>\r\n                    <td>{{ user.login }}</td>\r\n                    <td>{{ user.email}}</td>\r\n                    <td>{{ user.role}}</td>\r\n                    <td>\r\n                        <button type=\"button\" (click)=\"update(user)\" class=\"btn btn-primary btn-xs\"><i class=\"fa fa-pencil-square-o\"></i>  Modifier</button>\r\n                        <button type=\"button\" (click)=\"deleteUser(user._id)\" class=\"btn btn-danger btn-xs\"><i class=\"fa fa-trash-o\"></i>  Supprimer</button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/utilisateur/dashboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilisateurPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//TODO: validation // traitement du return 
// utiliser Splice pour actualiser la list des utilisateur (getUser,createUser,deleteUser )
//trouver une solution pour les array (region,province,commune et role)
var UtilisateurPage = (function () {
    function UtilisateurPage(userService, confirmationService, router) {
        this.userService = userService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.loading = true;
        this.settings = {
            columns: {
                nom: {
                    title: 'Nom'
                },
                prenom: {
                    title: 'Prenom'
                },
                email: {
                    title: 'Email'
                },
                login: {
                    title: 'Login'
                },
                role: {
                    title: 'Role'
                },
            },
            actions: {
                add: false,
                edit: false,
                delete: false,
                custom: [{ name: 'edit', title: "<a type=\"button\" title=\"See Detail Product\" class=\"btn btn-primary btn-xs\"><i class=\"ion-edit\"></i></a>" }, { name: 'delete', title: "<a type=\"button\" title=\"See Detail Product\" class=\"btn btn-danger btn-xs\"><i class=\"ion-trash-a\"></i></a>" }],
                position: 'right'
            },
            pager: {
                perPage: 25
            },
            noDataMessage: ' '
        };
        this.rows = [
            { Nom: 'Austin', Prenom: 'Male', login: 'Swimlane', email: 'geocoding@geocoding.ma', role: 'admin', action: 'action' },
            { nom: 'Austin', prenom: 'Male', login: 'Swimlane', email: 'geocoding@geocoding.ma', role: 'admin', action: 'action' },
            { nom: 'Austin', prenom: 'Male', login: 'Swimlane', email: 'geocoding@geocoding.ma', role: 'admin', action: 'action' },
        ];
        this.columns = [
            { prop: 'Nom' },
            { name: 'Prenom' },
            { name: 'Login' },
            { name: 'Email' },
            { name: 'Role' },
            { name: 'Action' }
        ];
    }
    UtilisateurPage.prototype.testfunc = function (data) {
        switch (data.action) {
            case 'edit':
                this.update(data.data);
                break;
            case 'delete':
                this.deleteUser(data.data._id);
            default:
                break;
        }
    };
    UtilisateurPage.prototype.deleteUser = function (id) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Voulez vous confirmer la suppression ?',
            accept: function () {
                _this.userService.deleteUser(id).then(function (data) {
                    _this.getUsers();
                }, function (err) {
                    console.log("error deleting user");
                });
            }
        });
    };
    UtilisateurPage.prototype.createUser = function () {
        this.userService.selectedUser = null;
        this.router.navigate(['utilisateur/creation']);
    };
    UtilisateurPage.prototype.update = function (user) {
        console.log(user);
        this.userService.selectedUser = user;
        this.router.navigate(['utilisateur/creation']);
    };
    UtilisateurPage.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().then(function (data) {
            _this.users = data;
            _this.loading = false;
        }, function (err) {
            console.log("err trying to fetch users " + err);
        });
    };
    ;
    UtilisateurPage.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UtilisateurPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'utilisateur',
            template: __webpack_require__("../../../../../src/app/pages/utilisateur/dashboard.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/utilisateur/dashboard.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object])
    ], UtilisateurPage);
    return UtilisateurPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ "../../../../../src/app/pages/utilisateur/profile.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin breadcrumb -->\r\n\r\n<!-- end breadcrumb -->\r\n<!-- begin page-header -->\r\n<h1 class=\"page-header\">Profile utilisateur <small></small></h1>\r\n<!-- end page-header -->\r\n<!-- begin profile-container -->\r\n<div class=\"profile-container\">\r\n    <!-- begin profile-section -->\r\n    <div class=\"profile-section\">\r\n        <!-- begin profile-left -->\r\n        <div class=\"profile-left\">\r\n            <!-- begin profile-image -->\r\n            <div class=\"profile-image\">\r\n                <img src=\"/assets/img/agfsdgs.jpg\" />\r\n                <i class=\"fa fa-user hide\"></i>\r\n            </div>\r\n            <!-- end profile-image -->\r\n            <div class=\"m-b-10\">\r\n                <a (click)=\"test()\" class=\"btn btn-warning btn-block btn-sm\">Changer l'image</a>\r\n            </div>\r\n            <!-- begin profile-highlight -->\r\n            <!-- end profile-highlight -->\r\n        </div>\r\n        <!-- end profile-left -->\r\n        <!-- begin profile-right -->\r\n        <div class=\"profile-right\">\r\n            <!-- begin profile-info -->\r\n            <div class=\"profile-info\">\r\n                <!-- begin table -->\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-profile\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th></th>\r\n                                <th>\r\n                                    <h4>{{model.nom + ' ' + model.prenom }} <small></small></h4>\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr class=\"highlight\">\r\n                            <tr>\r\n                                <td class=\"field\">Telephone</td>\r\n                                <td><i class=\"fa fa-mobile fa-lg m-r-5\"></i>{{ model.telephone }} </td>\r\n                            </tr>\r\n                            <tr class=\"divider\">\r\n                                <td colspan=\"2\"></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"field\">Region</td>\r\n                                <td>{{model.perimetre?.region.name}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"field\">Province</td>\r\n                                <td>{{model.perimetre.province?.name}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"field\">Commune</td>\r\n                                <td>{{model.perimetre.commune?.name}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"field\">email</td>\r\n                                <td>{{model.email}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"field\">Role</td>\r\n                                <td>{{ model.role }}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <!-- end table -->\r\n            </div>\r\n            <!-- end profile-info -->\r\n        </div>\r\n        <!-- end profile-right -->\r\n    </div>\r\n    <!-- end profile-section -->\r\n    <!-- begin profile-section -->\r\n    <!-- end profile-section -->\r\n</div>\r\n<!-- end profile-container -->\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/utilisateur/profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projet_service__ = __webpack_require__("../../../../../src/app/services/projet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = (function () {
    function ProfilePage(projetservice, userservice) {
        this.projetservice = projetservice;
        this.userservice = userservice;
        this.model = this.userservice.user;
    }
    ProfilePage.prototype.test = function () {
        this.projetservice.getProjetsByPerimetre().then(function (data) {
            console.log(data);
        }, function (err) {
            console.log("error trying to fetch projets" + err);
        });
    };
    ProfilePage.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('page-extra-profile-ready'));
    };
    ProfilePage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile',
            template: __webpack_require__("../../../../../src/app/pages/utilisateur/profile.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_projet_service__["a" /* ProjetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_projet_service__["a" /* ProjetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ "../../../../../src/app/pages/utilisateur/utilisateur.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "/* @import url('/assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css');\r\n@import url('/assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css');\r\n@import url('/assets/plugins/gritter/css/jquery.gritter.css');\r\n@import url('/assets/plugins/bootstrap-sweetalert/sweetalert.css');\r\n */\r\n\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n[hidden] { display: none !important;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/utilisateur/utilisateur.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- begin page-header -->\r\n<h1 class=\"page-header\">Gestion Utilisateur</h1>\r\n<!-- end page-header -->\r\n\r\n<!-- begin row -->\r\n<div class=\"row\">\r\n    <!-- begin col-12 -->\r\n    <div class=\"col-md-12\">\r\n            <p-messages [(value)]=\"msgs\"></p-messages>         \r\n            <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"700\"></p-confirmDialog>           \r\n            <div class=\"panel panel-success\">\r\n                <div class=\"panel-heading\">\r\n                        <div class=\"bt-group pull-right\">\r\n                        </div>\r\n                        <h4 class=\"panel-title\">Utilisateur</h4>\r\n                </div>\r\n                    <div class=\"panel-body\">\r\n                            <div class=\"col-sm-12\">\r\n                                <form [formGroup]=\"myform\" class=\"margin-bottom-0\" novalidate>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"form-group col-sm-6\" [ngClass]=\"{\r\n                                            'has-danger': login.invalid && (login.dirty || login.touched),\r\n                                            'has-success': login.valid && (login.dirty || login.touched)\r\n                                              }\">\r\n                                                <label>Login</label>\r\n                                                <input type=\"text\"\r\n                                                class=\"form-control\"\r\n                                                formControlName=\"login\"\r\n                                                #input (input)=\"input.value=$event.target.value.toLowerCase()\"\r\n                                                required>\r\n                                                <div class=\"help-block\"\r\n                                                *ngIf=\"login.errors && (login.dirty || login.touched)\">\r\n                                                <p *ngIf=\"login.errors.required\">Ce champ est obligatoire</p>\r\n                                                </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6 form-group\" [ngClass]=\"{\r\n                                            'has-danger': role.invalid && (role.dirty || role.touched),\r\n                                            'has-success': role.valid && (role.dirty || role.touched)\r\n                                           }\">\r\n                                            <label>Role</label>\r\n                                            <select  class=\"form-control\" formControlName=\"role\" required>                                                    \r\n                                                <option *ngFor=\"let r of roles\" [ngValue]=\"r.value\">{{r.name}}</option>\r\n                                                <div  class=\"help-block\" *ngIf=\"role.errors && (role.dirty || role.touched)\">\r\n                                                        <p *ngIf=\"role.errors.required\">Ce champ est obligatoire</p>\r\n                                                </div>\r\n                                            </select>\r\n                                        </div>\t\r\n                                    </div>\t\t\r\n                                    <div class=\"row\">\r\n                                            <div class=\"form-group col-sm-3\" [ngClass]=\"{\r\n                                                'has-danger': nom.invalid && (nom.dirty || nom.touched),\r\n                                                'has-success': nom.valid && (nom.dirty || nom.touched)\r\n                                              }\">\r\n                                                <label>Nom</label>\r\n                                                <input type=\"text\"\r\n                                                class=\"form-control\"\r\n                                                formControlName=\"nom\"\r\n                                                required>\r\n                                                <div class=\"help-block\"\r\n                                                *ngIf=\"nom.errors && (nom.dirty || nom.touched)\">\r\n                                                <p *ngIf=\"nom.errors.required\">Ce champ est obligatoire</p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group col-sm-3\" [ngClass]=\"{\r\n                                                'has-danger': prenom.invalid && (prenom.dirty || prenom.touched),\r\n                                                'has-success': prenom.valid && (prenom.dirty || prenom.touched)\r\n                                              }\">\r\n                                                <label>Prénom</label>\r\n                                                <input type=\"text\"\r\n                                                class=\"form-control\"\r\n                                                formControlName=\"prenom\"\r\n                                                required>\r\n                                                <div class=\"help-block\"\r\n                                                *ngIf=\"prenom.errors && (prenom.dirty || prenom.touched)\">\r\n                                                <p *ngIf=\"prenom.errors.required\">Ce champ est obligatoire</p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-6 form-group\" [ngClass]=\"{\r\n                                                'has-danger': region.invalid && (region.dirty || region.touched),\r\n                                                'has-success': region.valid && (region.dirty || region.touched)\r\n                                               }\">\r\n                                                <label>Region</label>\r\n                                                <select  class=\"form-control\" formControlName=\"region\" (ngModelChange)=\"onRegionChange($event)\">\r\n                                                    <option value=\"\" [selected]=\"true\"></option>                                                    \r\n                                                    <option *ngFor=\"let r of reg\" [ngValue]=\"r.id_region\">{{r.name}}</option>\r\n                                                    <div  class=\"help-block\" *ngIf=\"region.errors && (region.dirty || region.touched)\">\r\n                                                            <p *ngIf=\"region.errors.required\">Ce champ est obligatoire</p>\r\n                                                    </div>\r\n                                                </select>\r\n                                            </div>                                    \r\n                                    </div>\t\t\t\t\r\n                                    <div class=\"row\">\r\n                                            <div class=\"form-group col-sm-3\"\r\n                                            [ngClass]=\"{\r\n                                             'has-danger': password.invalid && (password.dirty || password.touched),\r\n                                             'has-success': password.valid && (password.dirty || password.touched)\r\n                                            }\">\r\n                                                <label>Mot de passe</label>\r\n                                                <input type=\"text\"\r\n                                                class=\"form-control\"\r\n                                                formControlName=\"password\"\r\n                                                >\r\n                                                <div class=\"help-block\"\r\n                                                *ngIf=\"password.errors && (password.dirty || password.touched)\">\r\n                                                <p *ngIf=\"password.errors.required\">Ce champ est obligatoire</p>\r\n                                                <p *ngIf=\"password.errors.minlength\">Le mot de passe doit comporter au moins 8 caractères. </p>\r\n                                                </div>\r\n                                            </div>\r\n            \r\n                                            <div class=\"form-group col-sm-3\"\r\n                                            [ngClass]=\"{\r\n                                             'has-danger': confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched),\r\n                                             'has-success': confirmPassword.valid && (confirmPassword.dirty || confirmPassword.touched)\r\n                                            }\">\r\n                                                <label>Retaper Mot de passe</label>\r\n                                                <input type=\"text\"\r\n                                                class=\"form-control\"\r\n                                                formControlName=\"confirmPassword\"\r\n                                                >\r\n                                                <div class=\"help-block\"\r\n                                                *ngIf=\"confirmPassword.errors && (confirmPassword.dirty || confirmPassword.touched)\">\r\n                                                <p *ngIf=\"confirmPassword.errors.required\">Ce champ est obligatoire</p>\r\n                                                <p *ngIf=\"confirmPassword.errors.minlength\">Le mot de passe doit comporter au moins 8 caractères.</p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div  class=\"col-sm-6 form-group\" [ngClass]=\"{\r\n                                                'has-danger': province.invalid && (province.dirty || province.touched),\r\n                                                'has-success': province.valid && (province.dirty || province.touched)\r\n                                               }\">\r\n                                                <label>Province</label>\r\n                                                <select class=\"form-control\" formControlName=\"province\">\r\n                                                    <option value=\"\" [selected]=\"true\"></option>                                                    \r\n                                                    <option *ngFor=\"let p of prov\" [ngValue]=\"p.id_province\">{{p.name}}</option>\r\n                                                    <div  class=\"help-block\" *ngIf=\"province.errors && (province.dirty || province.touched)\">\r\n                                                            <p *ngIf=\"province.errors.required\">Ce champ est obligatoire</p>\r\n                                                    </div>\r\n                                                </select>\r\n                                            </div>\r\n                                    </div>\r\n                                    <div class=\"row\" >\r\n                                        <div class=\"form-group col-sm-3\" [ngClass]=\"{\r\n                                            'has-danger': telephone.invalid && (telephone.dirty || telephone.touched),\r\n                                            'has-success': telephone.valid && (telephone.dirty || telephone.touched)\r\n                                          }\">\r\n                                            <label>Telephone</label>\r\n                                            <input type=\"tel\"\r\n                                            class=\"form-control\"\r\n                                            formControlName=\"telephone\">\r\n                                            <div class=\"help-block\"\r\n                                            *ngIf=\"telephone.errors && (telephone.dirty || telephone.touched)\">\r\n                                            </div>\r\n                                        </div>\t\t\r\n        \r\n                                        <div class=\"col-sm-3 form-group\"\r\n                                        [ngClass]=\"{\r\n                                         'has-danger': email.invalid && (email.dirty || email.touched),\r\n                                         'has-success': email.valid && (email.dirty || email.touched)\r\n                                        }\">\r\n                                        <label>Email</label>\r\n                                        <input type=\"email\"\r\n                                            class=\"form-control\"\r\n                                            formControlName=\"email\"\r\n                                            required>\r\n                                        <div class=\"help-block\"\r\n                                          *ngIf=\"email.errors && (email.dirty || email.touched)\">\r\n                                       <p *ngIf=\"email.errors.required\">Ce champ est obligatoire</p>\r\n                                       <p *ngIf=\"email.errors.pattern\">Email address incorrect</p>\r\n                                        </div>\r\n                                        </div>\t\r\n        \r\n            \r\n                                            <!-- <div class=\"col-sm-3 form-group\" [ngClass]=\"{\r\n                                                'has-danger': dpa.invalid && (dpa.dirty || dpa.touched),\r\n                                                'has-success': dpa.valid && (dpa.dirty || dpa.touched)\r\n                                               }\">\r\n                                                <label>Dpa</label>\r\n                                                <select  class=\"form-control\" formControlName=\"dpa\">\r\n                                                    <option value=\"\" [selected]=\"true\"></option>                                                    \r\n                                                    <option [hidden]=\"d.id_province != myform.value.province\" *ngFor=\"let d of list_dpa\" [ngValue]=\"d._id\">{{d.DPA}}</option>\r\n                                                    <div  class=\"help-block\" *ngIf=\"dpa.errors && (dpa.dirty || dpa.touched)\">\r\n                                                            <p *ngIf=\"dpa.errors.required\">Ce champ est obligatoire</p>\r\n                                                    </div>\r\n                                                </select>\r\n                                            </div>\r\n                                            \r\n                                            <div  class=\"col-sm-3 form-group\" [ngClass]=\"{\r\n                                                'has-danger': office.invalid && (office.dirty || office.touched),\r\n                                                'has-success': office.valid && (office.dirty || office.touched)\r\n                                               }\">\r\n                                                <label>Office</label>\r\n                                                <select class=\"form-control\" formControlName=\"office\">\r\n                                                    <option value=\"\" [selected]=\"true\"></option>                                                    \r\n                                                    <option [hidden]=\"f.id_province != myform.value.province\" *ngFor=\"let f of list_office\" [ngValue]=\"f._id\">{{f.OFFICE}}</option>\r\n                                                    <div  class=\"help-block\" *ngIf=\"office.errors && (office.dirty || office.touched)\">\r\n                                                            <p *ngIf=\"office.errors.required\">Ce champ est obligatoire</p>\r\n                                                    </div>\r\n                                                </select>\r\n                                            </div>\t -->\r\n                                            \r\n                                        </div>\r\n                                    </form>                              \r\n                                    <button (click)=\"createUser()\"\r\n                                    class=\"btn btn-primary\">Enregistrer\r\n                                    </button>\r\n                                    \r\n                                    <button (click)=\"clearFields()\"\r\n                                    class=\"btn btn-warning\">Réinitialiser\r\n                                    </button>\r\n                                    <!-- {{myform.value | json}} -->\r\n        \r\n                        </div>\t\r\n                    </div>\r\n            </div>\r\n\r\n        <!-- begin panel -->\r\n       \r\n            </div>\r\n        <!-- end panel -->\r\n    <!-- end col-12 -->\r\n</div>\r\n<!-- end row -->\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/utilisateur/utilisateur.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_perimetre_service__ = __webpack_require__("../../../../../src/app/services/perimetre.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreationUtilisateurPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//TODO: validation // traitement du return 
// utiliser Splice pour actualiser la list des utilisateur (getUser,createUser,deleteUser )
//trouver une solution pour les array (region,province,commune et role)
var CreationUtilisateurPage = (function () {
    function CreationUtilisateurPage(userService, confirmationService, perimetreService, router) {
        this.userService = userService;
        this.confirmationService = confirmationService;
        this.perimetreService = perimetreService;
        this.router = router;
        this.model = {};
        this.msgs = [];
        this.comm = [
            { value: 1, name: "commune 1" },
            { value: 2, name: "commune 2" },
            { value: 3, name: "commune 3" },
            { value: 4, name: "commune 4" }
        ];
        this.roles = [
            { value: "admin", name: "Admin" },
            { value: "superviseurR", name: "Superviseur Regional" },
            { value: "superviseurP", name: "Superviseur Provincial" },
            { value: "controleur", name: "Contrôleur" },
            { value: "agent", name: "Agent de Collecte" },
        ];
    }
    CreationUtilisateurPage.prototype.ngOnInit = function () {
        var _this = this;
        window.dispatchEvent(new CustomEvent('utilisateur-ready'));
        this.createFormControls();
        this.createForm();
        this.myform.get('role').valueChanges.subscribe(function (role) {
            if (role !== 'admin' && role !== 'controleur') {
                if (role === 'superviseurR') {
                    _this.myform.get('province').clearValidators();
                    _this.myform.get('region').setValidators([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]);
                    _this.myform.patchValue({
                        province: null,
                    });
                    _this.myform.get('region').enable();
                    _this.myform.get('province').disable();
                    // this.myform.get('dpa').disable()
                    // this.myform.get('office').disable();
                }
                else {
                    _this.myform.get('region').setValidators([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]),
                        _this.myform.get('province').setValidators([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]);
                    _this.myform.get('region').enable();
                    _this.myform.get('province').enable();
                    // this.myform.get('dpa').enable()
                    // this.myform.get('office').enable();
                }
                _this.loadregion();
            }
            else {
                _this.myform.get('province').clearValidators();
                _this.myform.get('region').clearValidators();
                _this.myform.get('province').disable();
                _this.myform.get('region').disable();
                // this.myform.get('dpa').disable()
                // this.myform.get('office').disable();
                _this.myform.patchValue({
                    region: null,
                    province: null,
                });
            }
            _this.myform.get('region').updateValueAndValidity();
            _this.myform.get('province').updateValueAndValidity();
        });
        if (this.userService.selectedUser !== null) {
            var user = this.userService.selectedUser;
            if (user.role != 'admin' && user.role != 'controleur') {
                this.onRegionChange(user.perimetre.region);
            }
            this.loadUser(user);
        }
    };
    CreationUtilisateurPage.prototype.createFormControls = function () {
        this.nom = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required);
        this.prenom = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required);
        this.email = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(8)
        ]);
        // this.password = new FormControl('');
        this.confirmPassword = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(8)
        ]);
        this.login = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(4)
        ]);
        this.telephone = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern("(0|\\+212|00212)[5-7][0-9]{8}"));
        this.role = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required);
        this.region = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]({ value: '', disabled: true });
        this.province = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]({ value: '', disabled: true });
        this.dpa = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]({ value: '', disabled: true });
        this.office = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]({ value: '', disabled: true });
    };
    CreationUtilisateurPage.prototype.createForm = function () {
        this.myform = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            nom: this.nom,
            prenom: this.prenom,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword,
            login: this.login,
            role: this.role,
            telephone: this.telephone,
            region: this.region,
            province: this.province,
        });
    };
    CreationUtilisateurPage.prototype.loadUser = function (user) {
        console.log(user);
        this.myform.patchValue({
            nom: user.nom,
            prenom: user.prenom,
            email: user.email,
            login: user.login,
            password: user.plaintext,
            confirmPassword: user.plaintext,
            telephone: user.telephone,
            role: user.role,
            region: user.perimetre.region,
            province: user.perimetre.province,
        });
        this.user = user._id;
        this.myform.get('password').clearValidators();
        this.myform.get('confirmPassword').clearValidators();
        this.myform.get('password').setValidators([
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(8)
        ]),
            this.myform.get('password').updateValueAndValidity();
        this.myform.get('confirmPassword').updateValueAndValidity();
        // this.model = user;
        // this.model.region = user.perimetre.region;
        // this.model.commune = user.perimetre.commune;
        // this.model.province = user.perimetre.province;
        //  console.log(user)
        //    this.userService.getUser(id).then((data) => {
        //        this.model = data;
        //    this.msgs.push({severity:'info', summary:'Info Message', detail:'User information loaded loaded'});
        //  }, (err) => {
        //      console.log("err trying to fetch user " + err );
        //  });
    };
    CreationUtilisateurPage.prototype.createUser = function () {
        var _this = this;
        if (this.myform.valid) {
            if (this.myform.value.password !== this.myform.value.confirmPassword) {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: "Erreur", detail: "les deux passwords ne sont pas identiques" });
                return;
            }
            // if(this.myform.value.role == 'superviseurP' || this.myform.value.role == 'agent'){
            //     if(!this.myform.value.dpa && !this.myform.value.office){
            //         console.log(this.myform.value.role)
            //     document.body.scrollTop = document.documentElement.scrollTop = 0;
            //     this.msgs = [];                
            //     this.msgs.push({severity:'error', summary:"Erreur", detail: "Veuillez choisir au moins DPA ou OFFICE"})
            //     return 
            //     }
            // }
            this.confirmationService.confirm({
                message: "Voulez vous confirmer l'enregistrement ?",
                accept: function () {
                    delete _this.model.confirmPassword;
                    console.log(_this.myform.value);
                    var data = _this.myform.value;
                    console.log(data);
                    if (_this.user) {
                        data._id = _this.user;
                    }
                    if (!data.password || data.password == "") {
                        delete data.password;
                    }
                    _this.userService.createUser(data).then(function () {
                        _this.myform.reset();
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: "Success", detail: 'Utilisateur a été crée avec succès  ' });
                        //     this.myform.get('password').setValidators([Validators.required,Validators.minLength(8)]),
                        //     this.myform.get('confirmPassword').setValidators([Validators.required])  
                        //     this.myform.get('password').updateValueAndValidity();
                        //     this.myform.get('confirmPassword').updateValueAndValidity(); 
                        document.body.scrollTop = document.documentElement.scrollTop = 0;
                        _this.user = null;
                        _this.router.navigate(['utilisateur/']);
                    }, function (err) {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: "Error", detail: err.message });
                        console.log("err creating user");
                    });
                }
            });
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: "Error", detail: 'Veuillez remplir tous les champs obligatoires du formulaire! ' });
        }
        function removeEmpty(obj) {
            Object.keys(obj).forEach(function (key) {
                (obj[key] && typeof obj[key] === 'object') && removeEmpty(obj[key]) ||
                    (obj[key] === '' || obj[key] === null) && delete obj[key];
            });
            return obj;
        }
        ;
    };
    CreationUtilisateurPage.prototype.onSubmit = function () {
        if (this.myform.valid) {
            console.log("Form Submitted!");
        }
    };
    CreationUtilisateurPage.prototype.clearFields = function () {
        this.user = null;
        this.myform.reset();
    };
    CreationUtilisateurPage.prototype.loadregion = function () {
        var _this = this;
        if (!this.reg) {
            this.perimetreService.getRegions().then(function (data) {
                _this.reg = data;
            }, function (err) {
                console.log("can't retreive regions ");
            });
            // this.perimetreService.getDpaOffice().then((data) => {
            //     this.list_office = data['office']
            //     this.list_dpa = data['dpa']
            // }, (err) => {
            // console.log("can't retreive Office  & Dpa ");
            // }); 
        }
        else {
            console.log('already loaded region');
        }
    };
    ;
    CreationUtilisateurPage.prototype.onRegionChange = function (region) {
        var _this = this;
        this.myform.patchValue({
            province: null,
        });
        console.log(region);
        this.perimetreService.getProvinces(region).then(function (data) {
            _this.prov = data;
        }, function (err) {
            console.log("can't retreive provinces ");
        });
    };
    ;
    CreationUtilisateurPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'creation',
            template: __webpack_require__("../../../../../src/app/pages/utilisateur/utilisateur.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/utilisateur/utilisateur.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ConfirmationService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_perimetre_service__["a" /* PerimetreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_perimetre_service__["a" /* PerimetreService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
    ], CreationUtilisateurPage);
    return CreationUtilisateurPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=utilisateur.js.map

/***/ }),

/***/ "../../../../../src/app/pages/validation/geoless.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n                <div class=\"panel panel-success\">\r\n                   <div class=\"panel-body \">\r\n\r\n                                <div id=\"map\" style=\"height: 300px;\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                        <div class=\"col-md-6\">\r\n                        <div class=\"panel panel-success\">\r\n                                <div class=\"panel-body \">\r\n                                <table id=\"data-table\" class=\"table table-striped table-bordered text-center\">\r\n                                     \r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <td>ID Exploitation</td>\r\n                                                <td>{{collecte.id_exploitation}}</td>\r\n                                            </tr>\r\n                                            <!-- <tr>\r\n                                                <td>superficie</td>\r\n                                                <td>{{selectedParcelle?.superficie}}</td>\r\n                                            </tr> -->\r\n                                            <!-- <tr>\r\n                                                <td>numero</td>\r\n                                                <td>{{selectedParcelle?.numero}}</td>\r\n                                            </tr> -->\r\n                                            <!-- <tr>\r\n                                                <td>Type</td>\r\n                                                <td>{{selectedParcelle?.gjson?.type}}</td>\r\n                                            </tr> -->\r\n                                            <!-- <tr>\r\n                                                <td>Capture</td>\r\n                                                <td><a href=\"#modal-dialog\" class=\"btn btn-sm btn-success\" data-toggle=\"modal\">Ouvrir</a></td>\r\n                                            </tr> -->\r\n                                            <tr>\r\n                                                <td>Date Creation</td>\r\n                                                <td>{{collecte?.collecte[0]?.data[0]?.date_creation}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>Region</td>\r\n                                                <td>{{collecte?.agent.region?.name}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>Province</td>\r\n                                                <td>{{collecte?.agent.province?.name}}</td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                           \r\n                   </div>\r\n                   </div>\r\n                </div>\r\n                </div>\r\n                <div class=\"modal fade\" id=\"modal-dialog\">\r\n                    <div class=\"modal-dialog\">\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\r\n                                <h4 class=\"modal-title\">Capture</h4>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                    \r\n                                <img src=\"{{collecte?.collecte[0]?.data[0]?.capture}}\" /> </div>\r\n                            <div class=\"modal-footer\">\r\n                                <a href=\"javascript:;\" class=\"btn btn-sm btn-white\" data-dismiss=\"modal\">Fermer</a>                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>                   \r\n                   <iframe #parcelle frameBorder=\"0\" class=\"iframe-map\" scrolling=\"no\" width=\"100%\" height=\"800\" id=\"data\" name=\"exploitation\" (load)=\"onIframeLoad(this)\"></iframe>\r\n        <!-- <button \r\n        class=\"btn btn-primary\">Détails\r\n        </button>\r\n        <button\r\n        class=\"btn btn-warning\">Parcelles\r\n        </button>        -->\r\n    \r\n    <!-- {{collecte | json}} -->"

/***/ }),

/***/ "../../../../../src/app/pages/validation/geoless.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_collecte_service__ = __webpack_require__("../../../../../src/app/services/collecte.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_draw__ = __webpack_require__("../../../../leaflet-draw/dist/leaflet.draw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_draw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet_draw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_fullscreen__ = __webpack_require__("../../../../leaflet-fullscreen/dist/Leaflet.fullscreen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_fullscreen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet_fullscreen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolessPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import * as Draw from 'leaflet-draw'
var GeolessPage = (function () {
    function GeolessPage(collecteservice, router) {
        this.collecteservice = collecteservice;
        this.router = router;
        this.Parcelles = [];
        this.selectedParcelle = { numero: "" };
        this.markers = new L.LayerGroup();
        this.drawnItems = new L.FeatureGroup();
        this.hidden = true;
    }
    GeolessPage.prototype.invalidate = function () {
        var that = this;
        // window.dispatchEvent(new Event('resize'));
        setTimeout(function () {
            that.ParcelleMap.invalidateSize();
            that.ParcelleMap.fitBounds(that.parcelleLayers.getBounds());
        }, 400);
        console.log("invalidated");
    };
    GeolessPage.prototype.invalidatex = function () {
        var that = this;
        setTimeout(function () { that.ExploitationMap.invalidateSize(); }, 400);
    };
    GeolessPage.prototype.OnParcelleChange = function (parcelle) {
        // console.log(parcelle)
        // this.hidden = false
        // this.selectedParcelle = parcelle
        // this.parcelle.nativeElement.contentWindow.postMessage({"window":"parcelle","message":'data',"data":parcelle.formdata}, 'http://localhost/demo.html')
        // // this.parcelleLayers.redraw()
        // this.drawnItems.clearLayers()
        // this.markers.clearLayers()
        // this.loadMapData()
        // this.parcelleLayers.addData(this.Parcelles)
        // this.parcelleLayers.addData(this.Parcelles,{style: function(element){
        //   if(element.properties.numero == parcelle.numero) {
        //     return {"color": "#ff7800",
        //     "weight": 5,
        //     "opacity": 0.65};
        // }}})
    };
    // OnTypeChange(data){
    //   this.hidden = true
    //   console.log(data)
    //   this.selected = data
    //   let query = data.form
    //   document.getElementById('data').setAttribute('src', `http://localhost/demo.html?myParam=${query}`)
    //   this.clear()
    //   this.loadMapData()
    // }
    GeolessPage.prototype.getData = function () {
        this.parcelle.nativeElement.contentWindow.postMessage({ "window": "parcelle", "message": 'submit' }, 'http://localhost/demo.html');
    };
    GeolessPage.prototype.clear = function () {
        console.log(this.drawnItems);
        this.drawnItems.clearLayers();
        this.markers.clearLayers();
    };
    // loadMapData(){
    //   let Parcelles = []
    //   this.selected.data.forEach(element => {
    //     Parcelles.push({"type": "Feature","properties":{"numero":element.numero},geometry:element.gjson})
    //   });
    //   let that = this
    //   this.parcelleLayers = new L.GeoJSON(Parcelles,{onEachFeature: onEachFeature,style: function(element){
    //     if(element.properties.numero == that.selectedParcelle.numero) {
    //       return {"color": "#ff7800",
    //       "weight": 5,
    //       "opacity": 0.65};
    //   }
    //   }})
    //   // markers
    //   function onEachFeature(feature, layer) {
    //     let type = that.selected.type
    //     var center
    //     // console.log(layer)
    //     // console.log(feature)
    //     if(type !== 'point'){
    //       center = layer.getBounds().getCenter();
    //       var labelPoint = L.marker([center.lat, center.lng], {
    //         icon: L.divIcon({
    //               className: "labelPoint",
    //               // html: num,
    //               html: feature.properties.numero,
    //               iconSize: null,
    //               // iconUrl: 'assets/marker-icon.png',
    //               // shadowUrl: 'assets/marker-shadow.png'
    //               })
    //         });
    //           that.drawnItems.addLayer(layer)
    //           that.markers.addLayer(labelPoint);
    //     }else{
    //       let icon = 'assets/marker-icon.png'
    //       if(feature.properties.numero == that.selectedParcelle.numero){
    //         icon = 'assets/marker-icon-green.png'
    //       }
    //       center = layer.getLatLng()
    //       var labelPoint = L.marker([center.lat, center.lng], {
    //         icon: L.icon({
    //               // className: "labelPoint",
    //               // html: num,
    //               // html: feature.properties.numero,
    //               // iconSize: null,
    //               iconUrl: icon,
    //               shadowUrl: 'assets/marker-shadow.png'
    //               })
    //         });
    //         that.drawnItems.addLayer(labelPoint)
    //     }
    //   }
    //     this.markers.addTo(this.ParcelleMap);    
    //     //  drawnItems.addLayer(this.parcelleLayers)
    //     this.drawnItems.addTo(this.ParcelleMap)   
    //     this.ParcelleMap.fitBounds(this.parcelleLayers.getBounds())
    // }
    GeolessPage.prototype.ngOnInit = function () {
        //init map
        var _this = this;
        console.log(this.collecteservice.collecte);
        if (this.collecteservice.collecte !== null) {
            this.collecte = this.collecteservice.collecte;
            this.collecte.collecte[0].data[0].date_creation = __WEBPACK_IMPORTED_MODULE_5_moment__(new Date(this.collecte.collecte[0].data[0].date_creation)).format("DD.MM.YYYY - hh:mm");
        }
        else {
            this.router.navigate(['collectes/']);
        }
        var query = this.collecte.collecte[0].form;
        document.getElementById('data').setAttribute('src', "http://localhost/demo.html?myParam=" + query);
        this.receiveMessage = function (event) {
            if (event.origin != 'http://localhost') {
                return;
            }
            if (event.data.window == 'exploitation' && event.data.message === 'loaded') {
                event.source.postMessage({ "window": event.data.window, "message": 'data', "data": _this.collecte.collecte[0].data[0].formdata }, event.origin);
            }
            console.log(event.data);
        };
    };
    GeolessPage.prototype.ngOnDestroy = function () {
        window.removeEventListener('message', this.receiveMessage);
    };
    GeolessPage.prototype.ngAfterViewInit = function () {
        this.isInited = true;
        // Test Exploitation map
        this.ExploitationMap = new L.Map('map').setView([this.collecteservice.collecte.lat, this.collecteservice.collecte.lng], 13);
        // let blocs : any = []
        // this.collecteservice.collecte..forEach(element => {
        //    blocs.push(element.gjson)
        // });
        // let BlocLayers =new  L.GeoJSON(blocs).addTo(this.ExploitationMap)
        // this.ExploitationMap.fitBounds(BlocLayers.getBounds())
        //   var myStyle: any = {
        //     "color": "#ff7800",
        //     "weight": 5,
        //     "opacity": 0.65
        // };
        //     // Test Parcelle map
        //     this.ParcelleMap = new L.Map('map').setView([51.505, -0.09], 13);
        //     let CustomMarker = L.Icon.extend({
        //       options: {
        //           iconAnchor: new L.Point(12, 12),
        //           iconUrl: 'assets/marker-icon.png',
        //           shadowUrl: null
        //       }
        //   });   
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.ExploitationMap);
        L.marker([this.collecteservice.collecte.lat, this.collecteservice.collecte.lng], {
            icon: L.icon({
                iconUrl: 'assets/marker-icon.png',
                shadowUrl: 'assets/marker-shadow.png'
            })
        }).addTo(this.ExploitationMap);
        //   // Draw Control
        //   var optionsDraw = {
        //     position:'topright',
        //          edit: {
        //               featureGroup: this.drawnItems,
        //               polygon : {
        //                 allowIntersection : false
        //               },
        //               remove:true,
        //               edit:true
        //             },
        //          draw: {
        //              rectangle: false,
        //              circle: false,
        //              txt: false,
        //              marker: {
        //               icon: new CustomMarker()
        //             },
        //              circlemarker:false,
        //              polyline: {
        //                 metric:true,
        //                 shapeOptions: {
        //                      color: 'red', 
        //                      weight: 3,
        //                      opacity: 1
        //                 },
        //             },
        //             polygon: {
        //             allowIntersection: false, // Restricts shapes to simple polygons
        //             drawError: {
        //                 color: '#e1e100', // Color the shape will turn when intersects
        //                 message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
        //             },
        //                 shapeOptions: {
        //                     weight: 2,
        //                     opacity: 0.4,
        //                     color: 'black',
        //                     dashArray: '3',
        //                     fillOpacity: 0.3,
        //                     fillColor: 'blue'
        //                 },
        //               },
        //             }
        // };
        //   var drawControl = new L.Control.Draw(optionsDraw);
        // //     this.markers.addTo(this.ParcelleMap);    
        // //     drawnItems.addLayer(this.parcelleLayers)
        // //     this.drawnItems.addTo(this.ParcelleMap)   
        //   var Fullscreen = new L.Control.Fullscreen()
        //     this.ParcelleMap.addControl(Fullscreen)
        //     this.ParcelleMap.addControl(drawControl)
        // //     this.ParcelleMap.fitBounds(this.parcelleLayers.getBounds())
        //   let that = this
        //     this.ParcelleMap.on(L.Draw.Event.CREATED,function(e){
        //       var type = e.layerType,
        //           layer = e.layer
        //           that.drawnItems.addLayer(layer)
        //         });
    };
    GeolessPage.prototype.onIframeLoad = function (element) {
        if (this.isInited) {
            window.addEventListener('message', this.receiveMessage, false);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('iframe'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], GeolessPage.prototype, "iframe", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('parcelle'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], GeolessPage.prototype, "parcelle", void 0);
    GeolessPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'geoless',
            template: __webpack_require__("../../../../../src/app/pages/validation/geoless.html"),
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_collecte_service__["a" /* CollecteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_collecte_service__["a" /* CollecteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object])
    ], GeolessPage);
    return GeolessPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=geoless.js.map

/***/ }),

/***/ "../../../../../src/app/pages/validation/rna.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".labelPoint{\r\n    color:green;\r\n    line-height: 1.8;\r\n    text-shadow: 2px 1px #fff;\r\n    /*text-align: center;*/\r\n    font-size: 150%;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/validation/rna.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n<div class=\"col-md-12\">\r\n        <ul class=\"nav nav-tabs nav-justified\">\r\n                <li class=\"active\">\r\n                    <a href=\"#default-tab-1\" data-toggle=\"tab\" (click)=\"invalidatex()\">\r\n                        <span class=\"visible-md\">Tab 1</span>\r\n                        <span class=\"hidden-md\">Exploitation</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"\">\r\n                    <a href=\"#default-tab-2\" data-toggle=\"tab\" (click)=\"invalidate()\">\r\n                        <span class=\"visible-md\">Tab 2</span>\r\n                        <span class=\"hidden-md\">Parcelles</span>\r\n                    </a>\r\n                </li>\r\n        </ul>\r\n        <div class=\"tab-content\">\r\n                <div class=\"tab-pane fade active in\" id=\"default-tab-1\">\r\n                        <div class=\"container col-md-6\">\r\n                            <div  id=\"map\" style=\"height: 300px;\"></div>\r\n                            <!-- <div  id=\"map2\" style=\"height: 300px;\"></div> -->\r\n                            <!-- <div style=\"height: 300px;\"\r\n                            leaflet\r\n                            [leafletLayers]=\"layers\"\r\n                            [leafletOptions]=\"options\"\r\n                            [leafletFitBounds]=\"fitBounds\"\r\n                            (leafletMapReady)=\"onMapReady($event)\"\r\n                            > -->\r\n                            \r\n                                                </div>\r\n                                                <div class=\"container col-md-6\">\r\n                                                        <table id=\"data-table\" class=\"table table-striped table-bordered text-center\">\r\n\r\n                                                                <tbody>\r\n                                                                    <tr>\r\n                                                                        <th>Exploitation</th>\r\n                                                                        <td>{{collecte?.id_exploitation}}</td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <th>Superficie</th>\r\n                                                                        <td>{{collecte?.exploitation?.superficieTotale}}</td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <th>Date Creation</th>\r\n                                                                        <td>{{collecte?.exploitation?.date_creation}}</td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <th>Nombre de Blocs</th>\r\n                                                                        <td>{{collecte?.blocs?.length}}</td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <th>Nombre de Parcelles</th>\r\n                                                                        <td>{{collecte?.collecte[0]?.data.length}}</td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <th>Region</th>\r\n                                                                        <td>{{collecte?.agent.region?.name}}</td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <th>Province</th>\r\n                                                                     <td>{{collecte?.agent.province?.name}}</td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                        </div>                        \r\n                                                    </div>\r\n                                                    <!-- <formio  src=\"{{exploitationform}}\" [submission]='collecte?.exploitation?.formdata' (render)=\"onrender()\" (beforeSubmit)=\"onSubmit($event)\"></formio>   -->\r\n                                                    \r\n                <div class=\"tab-pane fade\" id=\"default-tab-2\">\r\n                        <div class=\"container col-md-6\">\r\n                                <div  id=\"map2\" style=\"height: 300px;\"></div>\r\n                                \r\n                                <!-- <div style=\"height: 300px;\"\r\n                                leaflet\r\n                                [leafletLayers]=\"layers\"\r\n                                [leafletOptions]=\"options\"\r\n                                [leafletFitBounds]=\"fitBounds\"\r\n                                >  \r\n                                </div> -->\r\n                            </div>\r\n                                <div class=\"container col-md-6\">\r\n                                    <label for=\"\">Parcelles : </label>\r\n                                        <select id=\"type\" name=\"type\" [(ngModel)]=\"_parcelle\" required class=\"form-control\" (ngModelChange)=\"OnParcelleChange($event)\">\r\n                                                <option></option>\r\n                                                <option *ngFor=\"let parcelle of collecte?.collecte[0]?.data\" [ngValue]=\"parcelle\">{{parcelle.numero}}</option>\r\n                                        </select>   \r\n                                        <table id=\"data-table\" class=\"table table-striped table-bordered text-center\">\r\n                                                \r\n                                                   <tbody>\r\n                                                       <tr>\r\n                                                           <th>Numéro</th>\r\n                                                           <td>{{selectedParcelle.numero}}</td>\r\n                                                       </tr>\r\n                                                       <tr>\r\n                                                           <th>Superficie</th>\r\n                                                           <td>{{selectedParcelle.superficie}}</td>\r\n                                                       </tr>\r\n                                                       <tr>\r\n                                                           <th>Date Création</th>\r\n                                                           <td>{{selectedParcelle.date_creation}}</td>\r\n                                                       </tr>\r\n                                                       <tr>\r\n                                                            <th>Bloc</th>\r\n                                                            <td>{{selectedParcelle.bloc}}</td>\r\n                                                       </tr>\r\n                                                   </tbody>\r\n                                               </table>\r\n                                </div>\r\n                                <iframe #parcelle frameBorder=\"0\" class=\"iframe-map\" height=\"800\" width=\"100%\" id=\"parcelle\" name=\"parcelle\" (load)=\"onIframeLoad()\"></iframe>\r\n                </div>\r\n            </div>\r\n    <!-- <button \r\n    class=\"btn btn-primary\">Détails\r\n    </button>\r\n    <button\r\n    class=\"btn btn-warning\">Parcelles\r\n    </button>        -->\r\n</div>\r\n</div>\r\n<!-- <div class=\"row\">\r\n         <div class=\"panel panel-success col-md-12\">\r\n                                \r\n        <div class=\"panel-body \">\r\n                                \r\n                \r\n        </div>\r\n        </div>\r\n</div> -->\r\n\r\n<!-- {{collecte | json}} -->"

/***/ }),

/***/ "../../../../../src/app/pages/validation/rna.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_collecte_service__ = __webpack_require__("../../../../../src/app/services/collecte.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet_draw__ = __webpack_require__("../../../../leaflet-draw/dist/leaflet.draw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet_draw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet_draw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RnaValidationPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import 'leaflet-fullscreen'

// import * as Draw from 'leaflet-draw'
var RnaValidationPage = (function () {
    function RnaValidationPage(collecteservice) {
        this.collecteservice = collecteservice;
        this.Parcelles = [];
        this.selectedParcelle = { numero: "" };
        this.markers = new L.LayerGroup();
        this.drawnItems = new L.FeatureGroup();
        this.couche = L.geoJSON(this.collecteservice.collecte.blocs[0].gjson);
    }
    RnaValidationPage.prototype.invalidate = function () {
        var that = this;
        // window.dispatchEvent(new Event('resize'));
        setTimeout(function () {
            that.ParcelleMap.invalidateSize();
            that.ParcelleMap.fitBounds(that.parcelleLayers.getBounds());
        }, 400);
        console.log("invalidated");
    };
    RnaValidationPage.prototype.invalidatex = function () {
        var that = this;
        setTimeout(function () { that.ExploitationMap.invalidateSize(); }, 400);
    };
    RnaValidationPage.prototype.OnParcelleChange = function (parcelle) {
        parcelle.date_creation = __WEBPACK_IMPORTED_MODULE_3_moment__(new Date(parcelle.date_creation)).format("DD.MM.YYYY à h:mm");
        this.selectedParcelle = parcelle;
        this.parcelle.nativeElement.contentWindow.postMessage({ "window": "parcelle", "message": 'data', "data": JSON.parse(parcelle.formdata) }, 'http://localhost/demo.html');
        // this.parcelleLayers.redraw()
        this.drawnItems.clearLayers();
        this.markers.clearLayers();
        this.parcelleLayers.addData(this.Parcelles);
        // this.parcelleLayers.addData(this.Parcelles,{style: function(element){
        //   if(element.properties.numero == parcelle.numero) {
        //     return {"color": "#ff7800",
        //     "weight": 5,
        //     "opacity": 0.65};
        // }}})
    };
    RnaValidationPage.prototype.getData = function () {
        this.parcelle.nativeElement.contentWindow.postMessage({ "window": "parcelle", "message": 'submit' }, 'http://localhost/demo.html');
    };
    RnaValidationPage.prototype.onrender = function () {
        console.log('render');
        console.log(this.collecte.exploitation.formdata);
    };
    RnaValidationPage.prototype.onSubmit = function (data) {
        console.log(data.data);
    };
    RnaValidationPage.prototype.ngOnInit = function () {
        var _this = this;
        //init map
        console.log(this.collecteservice.collecte);
        if (this.collecteservice.collecte !== null) {
            this.collecte = this.collecteservice.collecte;
            this.collecte.exploitation.date_creation = __WEBPACK_IMPORTED_MODULE_3_moment__(new Date(this.collecte.exploitation.date_creation)).format("DD.MM.YYYY à h:mm");
        }
        // let query = this.collecte.exploitation.form
        this.exploitationform = 'http://localhost:8080/api/forms/' + this.collecte.exploitation.form + '/fields';
        this.exploitationData = this.collecte.exploitation.formdata;
        // let queryy = this.collecte.collecte[0].form
        // document.getElementById('exploitation').setAttribute('src', `http://localhost/demo.html?myParam=${query}`)
        // document.getElementById('parcelle').setAttribute('src', `http://localhost/demo.html?myParam=${queryy}`)
        this.receiveMessage = function (event) {
            if (event.origin != 'http://localhost') {
                return;
            }
            if (event.data.window == 'exploitation' && event.data.message === 'loaded') {
                event.source.postMessage({ "window": event.data.window, "message": 'data', "data": JSON.parse(_this.collecte.exploitation.formdata) }, event.origin);
            }
            console.log(event.data);
        };
    };
    RnaValidationPage.prototype.ngOnDestroy = function () {
        window.removeEventListener('message', this.receiveMessage);
    };
    RnaValidationPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.isInited = true;
        // Test Exploitation map
        this.ExploitationMap = new L.Map('map').setView([51.505, -0.09], 13);
        var blocs = [];
        this.collecteservice.collecte.blocs.forEach(function (element) {
            blocs.push(element.gjson);
        });
        var BlocLayers = new L.GeoJSON(blocs).addTo(this.ExploitationMap);
        this.ExploitationMap.fitBounds(BlocLayers.getBounds());
        var myStyle = {
            "color": "#ff7800",
            "weight": 5,
            "opacity": 0.65
        };
        // Test Parcelle map
        this.ParcelleMap = new L.Map('map2').setView([51.505, -0.09], 13);
        this.collecteservice.collecte.collecte[0].data.forEach(function (element) {
            _this.Parcelles.push({ "type": "Feature", "properties": { "numero": element.numero }, geometry: element.gjson });
        });
        var that = this;
        this.parcelleLayers = new L.GeoJSON(this.Parcelles, { onEachFeature: onEachFeature, style: function (element) {
                if (element.properties.numero == that.selectedParcelle.numero) {
                    return { "color": "#ff7800",
                        "weight": 5,
                        "opacity": 0.65 };
                }
            } });
        //osm 
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.ParcelleMap);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.ExploitationMap);
        // markers
        function onEachFeature(feature, layer) {
            var center = layer.getBounds().getCenter();
            var labelPoint = L.marker([center.lat, center.lng], {
                icon: L.divIcon({
                    className: "labelPoint",
                    // html: num,
                    html: feature.properties.numero,
                    iconSize: null
                })
            });
            that.drawnItems.addLayer(layer);
            that.markers.addLayer(labelPoint);
        }
        // Draw Control
        var optionsDraw = {
            position: 'topright',
            edit: {
                featureGroup: this.drawnItems,
                polygon: {
                    allowIntersection: false
                },
                remove: true,
                edit: true
            },
            draw: {
                rectangle: false,
                circle: false,
                txt: false,
                marker: true,
                circlemarker: false,
                polyline: {
                    metric: true,
                    shapeOptions: {
                        color: 'red',
                        weight: 3,
                        opacity: 1
                    },
                },
                polygon: {
                    allowIntersection: false,
                    drawError: {
                        color: '#e1e100',
                        message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                    },
                    shapeOptions: {
                        weight: 2,
                        opacity: 0.4,
                        color: 'black',
                        dashArray: '3',
                        fillOpacity: 0.3,
                        fillColor: 'blue'
                    },
                },
            }
        };
        var drawControl = new L.Control.Draw(optionsDraw);
        this.markers.addTo(this.ParcelleMap);
        //  drawnItems.addLayer(this.parcelleLayers)
        this.drawnItems.addTo(this.ParcelleMap);
        // var Fullscreen = new L.Control.Fullscreen()
        // this.ParcelleMap.addControl(Fullscreen)
        this.ParcelleMap.addControl(drawControl);
        this.ParcelleMap.fitBounds(this.parcelleLayers.getBounds());
        this.ParcelleMap.on(L.Draw.Event.CREATED, function (e) {
            var type = e.layerType, layer = e.layer;
            that.parcelleLayers.addLayer(layer);
        });
    };
    RnaValidationPage.prototype.onIframeLoad = function (element) {
        if (this.isInited) {
            window.addEventListener('message', this.receiveMessage, false);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('iframe'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], RnaValidationPage.prototype, "iframe", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('parcelle'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], RnaValidationPage.prototype, "parcelle", void 0);
    RnaValidationPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'RnaValidation',
            template: __webpack_require__("../../../../../src/app/pages/validation/rna.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/validation/rna.css")]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_collecte_service__["a" /* CollecteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_collecte_service__["a" /* CollecteService */]) === "function" && _c || Object])
    ], RnaValidationPage);
    return RnaValidationPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=rna.js.map

/***/ }),

/***/ "../../../../../src/app/pages/validation/validation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".labelPoint{\r\n    color:green;\r\n    line-height: 1.8;\r\n    text-shadow: 2px 1px #fff;\r\n    /*text-align: center;*/\r\n    font-size: 150%;\r\n }\r\n\r\n\r\n th {text-align:center}\r\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/validation/validation.html":
/***/ (function(module, exports) {

module.exports = "<p-messages [(value)]=\"msgs\"></p-messages>\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n<div class=\"row\">\r\n    <div class=\"bt-group pull-right\">\r\n            <button (click)=\"saveChange()\" class=\"btn btn-primary btn-lg m-r-5\"><i class=\"fa fa-floppy-o pull-left\"></i>Enregistrer</button>\r\n            <button  [disabled]=\"(user?.role != 'controleur') || (validation[index] == 'valid') || (index == lenght - 1 && validation[index] =='valid')\" (click)=\"action('valid')\" class=\"btn btn-success btn-lg m-r-5\"><i class=\"fa fa-check pull-left\"></i>Valider</button>\r\n            <button  [disabled]=\"(user?.role != 'controleur') || (validation[index] == 'valid') || (index == 0)\" href=\"#modal-refus\"  class=\"btn btn-danger btn-lg m-r-5\" data-toggle=\"modal\"><i class=\"fa fa-ban pull-left\"></i>Rejeter</button>\r\n\r\n\r\n        </div>\r\n<div class=\"col-md-2\">\r\n</div>\r\n</div>\r\n<br>\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n            <div class=\"panel panel-success\">\r\n               <div class=\"panel-body \">\r\n\r\n                            <div id=\"map\" style=\"height: 300px;\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                    <div class=\"col-md-6\">\r\n                    <div class=\"panel panel-success\">\r\n                            <div class=\"panel-body \">\r\n                        <form class=\"form-horizontal\">\r\n                            <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <!-- <label for=\"type\">Questionnaire: </label>                        -->\r\n                            <select id=\"type\" name=\"type\" [(ngModel)]=\"_type\" required class=\"form-control\" (ngModelChange)=\"OnTypeChange($event)\">\r\n                                    <option value=\"\" disabled=\"true\" [selected]=\"!_type\">Questionnaire </option>\r\n                                    <option *ngFor=\"let data of collecte?.collecte\" [ngValue]=\"data\">{{data.formname}}</option>\r\n                                </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">  \r\n\r\n                            <div class=\"col-md-8\">\r\n                                    <!-- <label for=\"parcelle\">Instance: </label> -->\r\n                            <select id=\"parcelle\" name=\"parcelle\" [(ngModel)]=\"_parcelle\" required class=\"form-control\" (ngModelChange)=\"OnParcelleChange($event)\">\r\n                                    <option value=\"\" disabled=\"true\" [selected]=\"!_parcelle\">Bloc</option>\r\n                                    <option *ngFor=\"let data of _type?.data\" [ngValue]=\"data\">{{data.numero}}</option>\r\n                            </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                        </form>  \r\n                            <table id=\"data-table\" class=\"table table-striped table-bordered text-center\">\r\n                                 \r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <th>ID Segment</th>\r\n                                            <td>{{selectedParcelle?.id_segment}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <th>ID Parcelle</th>\r\n                                            <td>{{selectedParcelle?.id_parcelle}}</td>\r\n                                        </tr>\r\n                                        <!--<tr>-->\r\n                                            <!--<th>superficie</th>-->\r\n                                            <!--<td>{{selectedParcelle?.superficie}}</td>-->\r\n                                        <!--</tr>-->\r\n                                        <tr>\r\n                                            <th>Numéro</th>\r\n                                            <td>{{selectedParcelle?.numero}}</td>\r\n                                        </tr>\r\n                                        \r\n                                        <!-- <tr>\r\n                                            <td>Type</td>\r\n                                            <td>{{selectedParcelle?.gjson?.type}}</td>\r\n                                        </tr> -->\r\n                                        <!-- <tr>\r\n                                            <td>Capture</td>\r\n                                            <td><button [disabled]=\"!selectedParcelle\" href=\"#modal-dialog\" class=\"btn btn-sm btn-success\" data-toggle=\"modal\">Ouvrir</button></td>\r\n                                        </tr> -->\r\n                                        <tr>\r\n                                            <th>Date Creation</th>\r\n                                            <td>{{selectedParcelle?.date_creation}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <th>Region</th>\r\n                                            <td>{{collecte?.agent.region?.name}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <th>Province</th>\r\n                                         <td>{{collecte?.agent.province?.name}}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                       \r\n               </div>\r\n               </div>\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"panel panel-success\">\r\n                   <div class=\"panel-body \">\r\n                        <formio *ngIf=\"!hidden\" src=\"{{srcformio}}\" [submission]=selectedParcelle?.formdata (change)=\"onSubmit($event)\"></formio>\r\n                       </div>\r\n                    </div>\r\n            </div>\r\n            <div class=\"modal fade\" id=\"modal-dialog\">\r\n                <div class=\"modal-dialog\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">X</button>\r\n                            <h4 class=\"modal-title\">Capture</h4>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <img src=\"{{selectedParcelle?.capture}}\" alt=\"Capture\" />\r\n                                \r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <a href=\"javascript:;\" class=\"btn btn-sm btn-white\" data-dismiss=\"modal\">Fermer</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal fade\" id=\"modal-refus\">\r\n                <div class=\"modal-dialog\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">X</button>\r\n                            <h4 class=\"modal-title\">Message</h4>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <textarea class=\"form-control\" [(ngModel)]=\"rmessage\" name=\"rmessage\" rows=\"5\" placeholder=\"message ...\"></textarea>                                \r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <a href=\"javascript:;\" class=\"btn btn-sm btn-white\" data-dismiss=\"modal\">Fermer</a>\r\n                            <a (click)=\"action('reject')\" class=\"btn btn-sm btn-primary\" data-dismiss=\"modal\">Rejeter</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n               <!-- <iframe [hidden]=\"hidden\" #parcelle frameBorder=\"0\" class=\"iframe-map\" scrolling=\"no\" width=\"100%\" height=\"800\" id=\"data\" name=\"parcelle\" (load)=\"onIframeLoad(this)\"></iframe> -->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/validation/validation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_collecte_service__ = __webpack_require__("../../../../../src/app/services/collecte.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_draw__ = __webpack_require__("../../../../leaflet-draw/dist/leaflet.draw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_draw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet_draw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_fullscreen__ = __webpack_require__("../../../../leaflet-fullscreen/dist/Leaflet.fullscreen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_fullscreen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet_fullscreen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import * as Draw from 'leaflet-draw'
var ValidationPage = (function () {
    function ValidationPage(collecteservice, router, confirmationservice) {
        this.collecteservice = collecteservice;
        this.router = router;
        this.confirmationservice = confirmationservice;
        this.msgs = [];
        this._parcelle = '';
        this._type = '';
        this.Parcelles = [];
        this.markers = new L.LayerGroup();
        this.drawnItems = new L.FeatureGroup();
        this.hidden = true;
        this.testvar = null;
    }
    ValidationPage.prototype.action = function (action) {
        var _this = this;
        this.confirmationservice.confirm({
            message: "Voulez-vous confirmer cette opération?",
            accept: function () {
                var update = {};
                update.niveau = _this.index;
                update.action = action;
                update.id = _this.collecte._id;
                if (action == 'reject') {
                    if (_this.rmessage == "" || _this.rmessage == null) {
                        update.rmessage = "le contrôleur n'a laissé aucun message";
                    }
                    else {
                        update.rmessage = _this.rmessage;
                    }
                }
                console.log(update);
                _this.collecteservice.action(update).then(function (data) {
                    _this.router.navigate(['collectes/']);
                });
            }
        });
    };
    ValidationPage.prototype.invalidate = function () {
        var that = this;
        // window.dispatchEvent(new Event('resize'));
        setTimeout(function () {
            that.ParcelleMap.invalidateSize();
            that.ParcelleMap.fitBounds(that.parcelleLayers.getBounds());
        }, 400);
    };
    ValidationPage.prototype.invalidatex = function () {
        var that = this;
        setTimeout(function () { that.ExploitationMap.invalidateSize(); }, 400);
    };
    ValidationPage.prototype.OnParcelleChange = function (parcelle) {
        parcelle.date_creation = __WEBPACK_IMPORTED_MODULE_6_moment__(new Date(parcelle.date_creation)).format("DD.MM.YYYY à h:mm");
        this.selectedParcelle = parcelle;
        // this.parcelle.nativeElement.contentWindow.postMessage({"window":"parcelle","message":'data',"data":parcelle.formdata}, 'http://localhost/demo.html');
        // this.parcelleLayers.redraw()
        this.hidden = false;
        this.drawnItems.clearLayers();
        this.markers.clearLayers();
        this.loadMapData();
        // this.parcelleLayers.addData(this.Parcelles)
        // this.parcelleLayers.addData(this.Parcelles,{style: function(element){
        //   if(element.properties.numero == parcelle.numero) {
        //     return {"color": "#ff7800",
        //     "weight": 5,
        //     "opacity": 0.65};
        // }}})
    };
    ValidationPage.prototype.OnTypeChange = function (data) {
        this.srcformio = "http://localhost:8080/api/forms/" + data.form + "/fields";
        this.hidden = true;
        // document.getElementById('data').setAttribute('src', `http://localhost/demo.html?myParam=${query}`);
        this.clear();
        this.loadMapData();
    };
    ValidationPage.prototype.getData = function () {
        this.parcelle.nativeElement.contentWindow.postMessage({ "window": "parcelle", "message": 'submit' }, 'http://localhost/demo.html');
    };
    ValidationPage.prototype.saveChange = function () {
        console.log(this.selectedParcelle.formdata);
        var cdata = { 'id': this.collecte._id, data: this.selectedParcelle.formdata };
        this.collecteservice.updateCollecte(cdata).then(function (data) {
            console.log(data);
        });
    };
    ValidationPage.prototype.onSubmit = function (submission) {
        console.log('submission');
        console.log(submission.data);
        if (submission.data) {
            this.selectedParcelle.formdata.data = submission.data;
        }
        // this.selectedParcelle.formdata = submission.data
        console.log('selectedParcelle');
        console.log(this.selectedParcelle.formdata.data); // This will print out the full submission from Form.io API.
    };
    ValidationPage.prototype.clear = function () {
        this.drawnItems.clearLayers();
        this.markers.clearLayers();
    };
    ValidationPage.prototype.loadMapData = function () {
        var Parcelles = [];
        this._type.data.forEach(function (element) {
            Parcelles.push({ "type": "Feature", "properties": { "numero": element.numero }, geometry: element.gjson });
        });
        var that = this;
        this.parcelleLayers = new L.GeoJSON(Parcelles, { onEachFeature: onEachFeature, style: function (element) {
                if (element.properties.numero == that.selectedParcelle['numero'] || 1) {
                    return { "color": "#ff7800",
                        "weight": 5,
                        "opacity": 0.65 };
                }
            } });
        // markers
        function onEachFeature(feature, layer) {
            var type = that._type.type;
            var center;
            // console.log(layer)
            // console.log(feature)
            if (type !== 'point') {
                center = layer.getBounds().getCenter();
                var labelPoint = L.marker([center.lat, center.lng], {
                    icon: L.divIcon({
                        className: "labelPoint",
                        // html: num,
                        html: feature.properties.numero,
                        iconSize: null,
                    })
                });
                that.drawnItems.addLayer(layer);
                that.markers.addLayer(labelPoint);
            }
            else {
                var icon = 'assets/marker-icon.png';
                if (feature.properties.numero == that.selectedParcelle.numero) {
                    icon = 'assets/marker-icon-green.png';
                }
                center = layer.getLatLng();
                var labelPoint = L.marker([center.lat, center.lng], {
                    icon: L.icon({
                        // className: "labelPoint",
                        // html: num,
                        // html: feature.properties.numero,
                        // iconSize: null,
                        iconUrl: icon,
                        shadowUrl: 'assets/marker-shadow.png'
                    })
                });
                that.drawnItems.addLayer(labelPoint);
            }
        }
        this.markers.addTo(this.ParcelleMap);
        //  drawnItems.addLayer(this.parcelleLayers)
        this.drawnItems.addTo(this.ParcelleMap);
        this.ParcelleMap.fitBounds(this.parcelleLayers.getBounds());
    };
    ValidationPage.prototype.ngOnInit = function () {
        //init map
        var _this = this;
        console.log(this.collecteservice.collecte);
        if (this.collecteservice.collecte !== null) {
            this.collecte = this.collecteservice.collecte;
        }
        else {
            this.router.navigate(['collectes/']);
        }
        this._type = this.collecte.collecte[0];
        this.srcformio = "http://localhost:8080/api/forms/" + this._type.form + "/fields";
        // this.OnParcelleChange(this._type.data[0])
        // let query = this.collecte.exploitation.form
        // document.getElementById('data').setAttribute('src', `http://localhost/demo.html?myParam=${query}`)
        this.validation = this.collecte.validation;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.lenght = this.collecte.projet.validation.length;
        this.index = this.collecte.projet.validation.findIndex(function (x) { return x.agent == _this.user._id; });
        if (this.collecte.rmessage != null && this.validation[this.index] == 'reject') {
            this.msgs.push({ severity: 'error', summary: 'message:', detail: this.collecte.rmessage });
        }
        this.receiveMessage = function (event) {
            if (event.origin != 'http://localhost') {
                return;
            }
            if (event.data.window == 'exploitation' && event.data.message === 'loaded') {
                event.source.postMessage({ "window": event.data.window, "message": 'data', "data": _this.collecte.collecte[0].data[0].formdata.data }, event.origin);
            }
        };
        this.isInited = true;
        this.ParcelleMap = new L.Map('map').setView([51.505, -0.09], 13);
        console.log('map created');
        var CustomMarker = L.Icon.extend({
            options: {
                iconAnchor: new L.Point(12, 12),
                iconUrl: 'assets/marker-icon.png',
                shadowUrl: null
            }
        });
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.ParcelleMap);
        var optionsDraw = {
            position: 'topright',
            edit: {
                featureGroup: this.drawnItems,
                polygon: {
                    allowIntersection: false
                },
                remove: true,
                edit: true
            },
            draw: {
                rectangle: false,
                circle: false,
                txt: false,
                marker: {
                    icon: new CustomMarker()
                },
                circlemarker: false,
                polyline: {
                    metric: true,
                    shapeOptions: {
                        color: 'red',
                        weight: 3,
                        opacity: 1
                    },
                },
                polygon: {
                    allowIntersection: false,
                    drawError: {
                        color: '#e1e100',
                        message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                    },
                    shapeOptions: {
                        weight: 2,
                        opacity: 0.4,
                        color: 'black',
                        dashArray: '3',
                        fillOpacity: 0.3,
                        fillColor: 'blue'
                    },
                },
            }
        };
        var drawControl = new L.Control.Draw(optionsDraw);
        //     this.markers.addTo(this.ParcelleMap);    
        //     drawnItems.addLayer(this.parcelleLayers)
        //     this.drawnItems.addTo(this.ParcelleMap)   
        var Fullscreen = new L.Control.Fullscreen();
        this.ParcelleMap.addControl(Fullscreen);
        this.ParcelleMap.addControl(drawControl);
        //     this.ParcelleMap.fitBounds(this.parcelleLayers.getBounds())
        var that = this;
        this.ParcelleMap.on(L.Draw.Event.CREATED, function (e) {
            var type = e.layerType, layer = e.layer;
            that.drawnItems.addLayer(layer);
        });
        this._parcelle = this.collecte.collecte[0].data[0];
        this.OnParcelleChange(this.collecte.collecte[0].data[0]);
    };
    ValidationPage.prototype.ngOnDestroy = function () {
        window.removeEventListener('message', this.receiveMessage);
    };
    ValidationPage.prototype.ngAfterViewInit = function () {
        // Test Exploitation map
        //     this.ExploitationMap = new L.Map('map').setView([51.505, -0.09], 13);
        //     let blocs : any = []
        //     this.collecteservice.collecte.blocs.forEach(element => {
        //        blocs.push(element.gjson)
        //     });
        //     let BlocLayers =new  L.GeoJSON(blocs).addTo(this.ExploitationMap)
        //     this.ExploitationMap.fitBounds(BlocLayers.getBounds())
        //     var myStyle: any = {
        //       "color": "#ff7800",
        //       "weight": 5,
        //       "opacity": 0.65
        //   };
        //     // Test Parcelle map
        //     this.ParcelleMap = new L.Map('map2').setView([51.505, -0.09], 13);
        //     console.log('map created')
        //     let CustomMarker = L.Icon.extend({
        //       options: {
        //           iconAnchor: new L.Point(12, 12),
        //           iconUrl: 'assets/marker-icon.png',
        //           shadowUrl: null
        //       }
        //   });   
        //   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        //     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        // }).addTo(this.ParcelleMap);
        // Draw Control
        //   var drawControl = new L.Control.Draw(optionsDraw);
        // //     this.markers.addTo(this.ParcelleMap);    
        // //     drawnItems.addLayer(this.parcelleLayers)
        // //     this.drawnItems.addTo(this.ParcelleMap)   
        //   var Fullscreen = new L.Control.Fullscreen();
        //     this.ParcelleMap.addControl(Fullscreen);
        //     this.ParcelleMap.addControl(drawControl);
        // //     this.ParcelleMap.fitBounds(this.parcelleLayers.getBounds())
        //   let that = this
        //     this.ParcelleMap.on(L.Draw.Event.CREATED,function(e){
        //       var type = e.layerType,
        //           layer = e.layer
        //           that.drawnItems.addLayer(layer)
        //         });
    };
    ValidationPage.prototype.onIframeLoad = function (element) {
        if (this.isInited) {
            window.addEventListener('message', this.receiveMessage, false);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('iframe'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], ValidationPage.prototype, "iframe", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('parcelle'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], ValidationPage.prototype, "parcelle", void 0);
    ValidationPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'Validation',
            template: __webpack_require__("../../../../../src/app/pages/validation/validation.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/validation/validation.css")]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_collecte_service__["a" /* CollecteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_collecte_service__["a" /* CollecteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]) === "function" && _e || Object])
    ], ValidationPage);
    return ValidationPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=validation.js.map

/***/ }),

/***/ "../../../../../src/app/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var TimesPipe = (function () {
    function TimesPipe() {
    }
    TimesPipe.prototype.transform = function (value) {
        var iterable = {};
        iterable[Symbol.iterator] = function () {
            var n;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        n = 0;
                        _a.label = 1;
                    case 1:
                        if (!(n < value)) return [3 /*break*/, 3];
                        return [4 /*yield*/, ++n];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        };
        return iterable;
    };
    TimesPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'times' })
    ], TimesPipe);
    return TimesPipe;
}());

//# sourceMappingURL=safe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/Http-client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpClient = (function () {
    function HttpClient(http) {
        this.http = http;
        this.url = 'http://localhost:8080/api/';
    }
    HttpClient.prototype.injectHeader = function (headers) {
        headers.append('Authorization', this.token || localStorage.getItem('token'));
    };
    HttpClient.prototype.get = function (endpoint) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.injectHeader(headers);
        return this.http.get(this.url + endpoint, { headers: headers });
    };
    HttpClient.prototype.getWithParams = function (endpoint, optional) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.injectHeader(headers);
        return this.http.get(this.url + endpoint, { params: optional, headers: headers });
    };
    HttpClient.prototype.post = function (endpoint, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.injectHeader(headers);
        return this.http.post(this.url + endpoint, data, { headers: headers });
    };
    HttpClient.prototype.delete = function (endpoint) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.injectHeader(headers);
        return this.http.delete(this.url + endpoint, { headers: headers });
    };
    HttpClient = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], HttpClient);
    return HttpClient;
    var _a;
}());

//# sourceMappingURL=Http-client.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_permission__ = __webpack_require__("../../../../angular2-permission/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Http_client__ = __webpack_require__("../../../../../src/app/services/Http-client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationService = (function () {
    function AuthenticationService(http, _userservice, _permissionService, httpClient) {
        this.http = http;
        this._userservice = _userservice;
        this._permissionService = _permissionService;
        this.httpClient = httpClient;
        this.baseurl = "/api/";
        // set token if saved in local storage
    }
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(this.baseurl + 'auth/login', JSON.stringify(user), options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            var user = response.json() && response.json().user;
            if (token) {
                // set token property
                _this.httpClient.token = token;
                _this._userservice.user = user;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                _this._permissionService.add(user.role);
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        }, function (err) {
            var details = err.json();
            console.log("working", details);
            return details;
        });
    };
    AuthenticationService.prototype.loginn = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseurl + 'auth/login', JSON.stringify(user), options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                console.log(res);
                var token = res.token;
                var user = res.user;
                if (token) {
                    // set token property
                    _this.httpClient.token = token;
                    _this._userservice.user = user;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(user));
                    _this._permissionService.add(user.role);
                    // return true to indicate successful login
                    resolve(res);
                }
            }, function (err) {
                var details = err.json();
                reject(details);
            });
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        localStorage.clear();
        this._permissionService.clearStore();
    };
    AuthenticationService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_permission__["b" /* PermissionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_permission__["b" /* PermissionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__Http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__Http_client__["a" /* HttpClient */]) === "function" && _d || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/bloc.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Http_client__ = __webpack_require__("../../../../../src/app/services/Http-client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_permission__ = __webpack_require__("../../../../angular2-permission/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlocService = (function () {
    function BlocService(http, authService, _permissionService) {
        this.http = http;
        this.authService = authService;
        this._permissionService = _permissionService;
        this.selectedBloc = {};
    }
    BlocService.prototype.createBloc = function (bloc) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('blocs/', JSON.stringify(bloc))
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    BlocService.prototype.getBlocs = function (theme) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('blocs/?theme=' + theme)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    BlocService.prototype.deleteBloc = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('blocs/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    BlocService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__Http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Http_client__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_permission__["b" /* PermissionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_permission__["b" /* PermissionService */]) === "function" && _c || Object])
    ], BlocService);
    return BlocService;
    var _a, _b, _c;
}());

//# sourceMappingURL=bloc.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/collecte.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Http_client__ = __webpack_require__("../../../../../src/app/services/Http-client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollecteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CollecteService = (function () {
    function CollecteService(http) {
        this.http = http;
        this.collecte = null;
    }
    CollecteService.prototype.getCollecte = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('collectes/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    CollecteService.prototype.getCollectes = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('collectes/')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    CollecteService.prototype.getCollectesByProjet = function (id, niveau, status, region, province) {
        var _this = this;
        if (typeof region == "undefined" || region == null) {
            region = 0;
        }
        if (typeof province == "undefined" || province == null) {
            province = 0;
        }
        return new Promise(function (resolve, reject) {
            _this.http.get('collectes/projet/' + id + '?niveau=' + niveau + "&status=" + status + "&region=" + region + "&province=" + province)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    CollecteService.prototype.getCollecteEnTraitement = function (id, index, region, province) {
        var _this = this;
        if (typeof region == "undefined" || region == null) {
            region = 0;
        }
        if (typeof province == "undefined" || province == null) {
            province = 0;
        }
        console.log('wallah c traitement khoya');
        return new Promise(function (resolve, reject) {
            _this.http.get('collectes/traitement/' + id + "?region=" + region + "&province=" + province + "&index=" + index)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    CollecteService.prototype.action = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('collectes/validate', JSON.stringify(data))
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                var details = err.json();
                reject(details);
            });
        });
    };
    CollecteService.prototype.updateCollecte = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('collectes/update', JSON.stringify(data))
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                var details = err.json();
                reject(details);
            });
        });
    };
    CollecteService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Http_client__["a" /* HttpClient */]) === "function" && _a || Object])
    ], CollecteService);
    return CollecteService;
    var _a;
}());

//# sourceMappingURL=collecte.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Http_client__ = __webpack_require__("../../../../../src/app/services/Http-client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormService = (function () {
    function FormService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.selectedForm = null;
    }
    // return list des forms,
    //TODO : validation et traitement du return
    FormService.prototype.getForms = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('forms/')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //create form
    FormService.prototype.createForm = function (bloc) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('forms/', JSON.stringify(bloc))
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                var details = err.json();
                reject(details);
            });
        });
    };
    FormService.prototype.deleteForm = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('forms/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    FormService.prototype.getFormsByTheme = function (theme) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('forms/' + theme)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    FormService.prototype.getExtrapolation = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('forms/' + id + '/extrapolation')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    FormService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Http_client__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
    ], FormService);
    return FormService;
    var _a, _b;
}());

//# sourceMappingURL=form.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/perimetre.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Http_client__ = __webpack_require__("../../../../../src/app/services/Http-client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerimetreService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PerimetreService = (function () {
    function PerimetreService(http) {
        this.http = http;
    }
    // return list des forms,
    //TODO : validation et traitement du return
    PerimetreService.prototype.getRegions = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('perimetre/region')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    PerimetreService.prototype.getProvinces = function (province) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('perimetre/province/' + province)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    PerimetreService.prototype.getMultipleRegionProvinces = function (region) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('perimetre/province/')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    PerimetreService.prototype.getCommunes = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('perimetre/communes/')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    PerimetreService.prototype.getDpaOffice = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('perimetre/DpaOffice/')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    PerimetreService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Http_client__["a" /* HttpClient */]) === "function" && _a || Object])
    ], PerimetreService);
    return PerimetreService;
    var _a;
}());

//# sourceMappingURL=perimetre.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/projet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Http_client__ = __webpack_require__("../../../../../src/app/services/Http-client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjetService = (function () {
    function ProjetService(http) {
        this.http = http;
        this.Projet = null;
        this.inspect = null;
    }
    ProjetService.prototype.createProjet = function (Projet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('projets/', JSON.stringify(Projet))
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                var details = err.json();
                reject(details);
            });
        });
    };
    ProjetService.prototype.getProjet = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('projets/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ProjetService.prototype.getProjets = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('projets')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ProjetService.prototype.getProjetsByPerimetre = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('projets/projets/test')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ProjetService.prototype.getAgentsProjet = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('projets/Agent/list')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ProjetService.prototype.deleteProjet = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('projets/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                var details = err.json();
                reject(details);
            });
        });
    };
    ProjetService.prototype.getProjetsByController = function () {
        var _this = this;
        console.log('fetch projets');
        return new Promise(function (resolve, reject) {
            _this.http.get('projets/controller/projets')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log('bugged');
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ProjetService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Http_client__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ProjetService);
    return ProjetService;
    var _a;
}());

//# sourceMappingURL=projet.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/reporting.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Http_client__ = __webpack_require__("../../../../../src/app/services/Http-client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportingService = (function () {
    function ReportingService(http) {
        this.http = http;
    }
    ReportingService.prototype.getDashboardData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('reporting/dashboard')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ReportingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Http_client__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ReportingService);
    return ReportingService;
    var _a;
}());

//# sourceMappingURL=reporting.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_permission__ = __webpack_require__("../../../../angular2-permission/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Http_client__ = __webpack_require__("../../../../../src/app/services/Http-client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(_permissionService, http) {
        this._permissionService = _permissionService;
        this.http = http;
        this.selectedUser = null;
        this.user = JSON.parse(localStorage.getItem('user'));
        var user = JSON.parse(localStorage.getItem('user')) || { role: 'disconnected' };
        this._permissionService.define([user.role]);
    }
    // return list des utilisateur , 
    //TODO : validation et traitement du return 
    UserService.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('users/')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserService.prototype.getUser = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('users/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    // Créer un noveau utilisateur return une promise 
    // TODO : validation et traitement du return 
    UserService.prototype.createUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('users/', user)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                var details = err.json();
                reject(details);
            });
        });
    };
    UserService.prototype.deleteUser = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('/users/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserService.prototype.getAgents = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('users/agents/')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserService.prototype.getControlleurs = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('users/controlleurs/')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserService.prototype.setAffectation = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('here');
            _this.http.post('users/affectation', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                var details = err.json();
                reject(details);
            });
        });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_permission__["b" /* PermissionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_permission__["b" /* PermissionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Http_client__["a" /* HttpClient */]) === "function" && _b || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar-two/sidebar-two.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin #sidebar-right -->\r\n<div id=\"sidebar-right\" class=\"sidebar sidebar-right\">\r\n    <!-- begin sidebar scrollbar -->\r\n    <div data-scrollbar=\"true\" data-height=\"100%\">\r\n        <!-- begin sidebar user -->\r\n        <ul class=\"nav m-t-10\">\r\n            <li class=\"nav-widget\">\r\n                <p>Server Status</p>\r\n                <div class=\"pull-left m-b-10 m-t-5\">\r\n                    <div class=\"pull-left p-r-15\">\r\n                        <input class=\"knob\" data-width=\"80\" data-height=\"80\" data-thickness=\".2\" data-readonly=\"true\" data-min=\"10\" data-displayPrevious=true value=\"44\" data-fgColor=\"#00acac\" data-bgColor=\"#242a30\" />\r\n                    </div>\r\n                    <div class=\"pull-left\">\r\n                        <input class=\"knob\" data-width=\"80\" data-height=\"80\" data-thickness=\".2\" data-readonly=\"true\" data-min=\"10\" data-displayPrevious=true value=\"67\" data-fgColor=\"#348fe2\" data-bgColor=\"#242a30\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"pull-left\">\r\n                    <div class=\"pull-left p-r-15\">\r\n                        <input class=\"knob\" data-width=\"80\" data-height=\"80\" data-thickness=\".2\" data-readonly=\"true\" data-min=\"10\" data-displayPrevious=true value=\"70\" data-fgColor=\"#ff5b57\" data-bgColor=\"#242a30\" />\r\n                    </div>\r\n                    <div class=\"pull-left\">\r\n                        <input class=\"knob\" data-width=\"80\" data-height=\"80\" data-thickness=\".2\" data-readonly=\"true\" data-min=\"10\" data-displayPrevious=true value=\"52\" data-fgColor=\"#727cb6\" data-bgColor=\"#242a30\" />\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-widget\">\r\n                <p class=\"m-b-5\">Total Visitors</p>\r\n                <div id=\"sidebar-sparkline-1\" class=\"m-b-10\"></div>\r\n                <p class=\"m-b-5\">Total Page Views</p>\r\n                <div id=\"sidebar-sparkline-2\" class=\"m-b-10\"></div>\r\n                <p class=\"m-b-5\">Total Unique Visitors</p>\r\n                <div id=\"sidebar-sparkline-3\" class=\"m-b-10\"></div>\r\n                <p class=\"m-b-5\">Bounce Rate</p>\r\n                <div id=\"sidebar-sparkline-4\"></div>\r\n            </li>\r\n            <li class=\"nav-widget\">\r\n                <div class=\"panel-group m-b-0\" id=\"accordion\">\r\n                    <div class=\"panel panel-inverse\">\r\n                        <div class=\"panel-heading\">\r\n                            <h3 class=\"panel-title\">\r\n                                <a class=\"accordion-toggle accordion-toggle-styled collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\r\n                                    <i class=\"fa fa-plus-circle pull-right text-success\"></i> \r\n                                    Accordion #1\r\n                                </a>\r\n                            </h3>\r\n                        </div>\r\n                        <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"panel panel-inverse\">\r\n                        <div class=\"panel-heading\">\r\n                            <h3 class=\"panel-title\">\r\n                                <a class=\"accordion-toggle accordion-toggle-styled collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\r\n                                    <i class=\"fa fa-plus-circle pull-right text-success\"></i> \r\n                                    Accordion #2\r\n                                </a>\r\n                            </h3>\r\n                        </div>\r\n                        <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"panel panel-inverse\">\r\n                        <div class=\"panel-heading\">\r\n                            <h3 class=\"panel-title\">\r\n                                <a class=\"accordion-toggle accordion-toggle-styled collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\r\n                                    <i class=\"fa fa-plus-circle pull-right text-success\"></i> \r\n                                    Accordion #3\r\n                                </a>\r\n                            </h3>\r\n                        </div>\r\n                        <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <!-- end sidebar user -->\r\n    </div>\r\n    <!-- end sidebar scrollbar -->\r\n</div>\r\n<div class=\"sidebar-bg sidebar-right\"></div>\r\n<!-- end #sidebar-right -->"

/***/ }),

/***/ "../../../../../src/app/sidebar-two/sidebar-two.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarTwoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarTwoComponent = (function () {
    function SidebarTwoComponent() {
    }
    // fire event sidebar-two-ready
    SidebarTwoComponent.prototype.ngAfterViewInit = function () {
        window.dispatchEvent(new CustomEvent('sidebar-two-ready'));
    };
    SidebarTwoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sidebar-two',
            template: __webpack_require__("../../../../../src/app/sidebar-two/sidebar-two.component.html")
        })
    ], SidebarTwoComponent);
    return SidebarTwoComponent;
}());

//# sourceMappingURL=sidebar-two.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin #sidebar -->\r\n<div id=\"sidebar\" class=\"sidebar\" [ngClass]=\"{'sidebar-transparent': page_sidebar_transparent}\">\r\n    <!-- begin sidebar scrollbar -->\r\n    <div data-scrollbar=\"true\" data-height=\"100%\">\r\n        <!-- begin sidebar user -->\r\n        <ul class=\"nav\">\r\n            <li class=\"nav-profile\">\r\n                <div class=\"image\">\r\n                    <a href=\"javascript:;\"><img src=\"/assets/img/user-13.jpg\" alt=\"\" /></a>\r\n                </div>\r\n                <div class=\"info\">\r\n                    {{ user?.nom }}\r\n                    <small>{{ user?.role }}</small>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <!-- end sidebar user -->\r\n        \r\n        <ul *ngIf=\"menu\" class=\"nav\">\r\n            <li *ngFor=\"let item of menu;\" [ngClass]=\"{'has-sub': item.submenu}\" routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact: true}\">\r\n                <a *ngIf=\"!item.link\" href=\"javasript:;\" [hasPermission]=\"item.roles\"\r\n                onAuthorizedPermission=\"show\"\r\n                onUnauthorizedPermission=\"hide\">\r\n                    <i *ngIf=\"item.icon\" class=\"{{ item.icon }}\"></i>\r\n                    <img *ngIf=\"item.image\" class=\"icon-img\" src=\"{{ item.image }}\" />\r\n                    <span>{{ item.title }}</span>\r\n                    <span *ngIf=\"item.badge\" class=\"badge pull-right\">{{ item.badge }}</span>\r\n                    <span *ngIf=\"item.label\" class=\"label label-theme m-l-5\">{{ item.label }}</span>\r\n                    <b *ngIf=\"item.caret\" class=\"caret\"></b>\r\n                </a>\r\n                <a *ngIf=\"item.link && !item.external\" routerLink=\"{{ item.link }}\" [hasPermission]=\"item.roles\"\r\n                onAuthorizedPermission=\"show\"\r\n                onUnauthorizedPermission=\"hide\">\r\n                    <i *ngIf=\"item.icon\" class=\"{{ item.icon }}\"></i>\r\n                    <img *ngIf=\"item.image\" class=\"icon-img\" src=\"{{ item.image }}\" />\r\n                    <span>{{ item.title }}</span>\r\n                    <span *ngIf=\"item.badge\" class=\"badge pull-right\">{{ item.badge }}</span>\r\n                    <span *ngIf=\"item.label\" class=\"label label-theme m-l-5\">{{ item.label }}</span>\r\n                    <b *ngIf=\"item.caret\" class=\"caret\"></b>\r\n                </a>\r\n                <a *ngIf=\"item.link && item.external\" href=\"{{ item.link }}\">\r\n                    <i *ngIf=\"item.icon\" class=\"{{ item.icon }}\"></i>\r\n                    <img *ngIf=\"item.image\" class=\"icon-img\" src=\"{{ item.image }}\" />\r\n                    <span>{{ item.title }}</span>\r\n                    <span *ngIf=\"item.badge\" class=\"badge pull-right\">{{ item.badge }}</span>\r\n                    <span *ngIf=\"item.label\" class=\"label label-theme m-l-5\">{{ item.label }}</span>\r\n                    <b *ngIf=\"item.caret\" class=\"caret\"></b>\r\n                </a>\r\n                <ul *ngIf=\"item.submenu\" class=\"sub-menu\">\r\n                    <li *ngFor=\"let subitem of item.submenu\" [ngClass]=\"{'has-sub': subitem.submenu}\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                        <a *ngIf=\"!subitem.link\" href=\"javasript:;\">\r\n                            <b *ngIf=\"subitem.caret\" class=\"caret pull-right\"></b>\r\n                            {{ subitem.title }}\r\n                            <i *ngIf=\"subitem.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                        </a>\r\n                        <a *ngIf=\"subitem.link && !subitem.external\" routerLink=\"{{ subitem.link }}\">\r\n                            <b *ngIf=\"subitem.caret\" class=\"caret pull-right\"></b>\r\n                            {{ subitem.title }}\r\n                            <i *ngIf=\"subitem.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                        </a>\r\n                        <a *ngIf=\"subitem.link && subitem.external\" href=\"{{ subitem.link }}\">\r\n                            <b *ngIf=\"subitem.caret\" class=\"caret pull-right\"></b>\r\n                            {{ subitem.title }}\r\n                            <i *ngIf=\"subitem.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                        </a>\r\n                        <ul *ngIf=\"subitem.submenu\" class=\"sub-menu\">\r\n                            <li *ngFor=\"let subitem2 of subitem.submenu\" [ngClass]=\"{'has-sub': subitem2.submenu}\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                                <a *ngIf=\"!subitem2.link\" href=\"javasript:;\">\r\n                                    <b *ngIf=\"subitem2.caret\" class=\"caret pull-right\"></b>\r\n                                    {{ subitem2.title }}\r\n                                    <i *ngIf=\"subitem2.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                                </a>\r\n                                <a *ngIf=\"subitem2.link && !subitem2.external\" routerLink=\"{{ subitem2.link }}\">\r\n                                    <b *ngIf=\"subitem2.caret\" class=\"caret pull-right\"></b>\r\n                                    {{ subitem2.title }}\r\n                                    <i *ngIf=\"subitem2.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                                </a>\r\n                                <a *ngIf=\"subitem2.link && subitem2.external\" href=\"{{ subitem2.link }}\">\r\n                                    <b *ngIf=\"subitem2.caret\" class=\"caret pull-right\"></b>\r\n                                    {{ subitem2.title }}\r\n                                    <i *ngIf=\"subitem2.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                                </a>\r\n                                <ul *ngIf=\"subitem2.submenu\" class=\"sub-menu\">\r\n                                    <li *ngFor=\"let subitem3 of subitem2.submenu\" [ngClass]=\"{'has-sub': subitem3.submenu}\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                                        <a *ngIf=\"!subitem3.link\" href=\"javasript:;\">\r\n                                            <b *ngIf=\"subitem3.caret\" class=\"caret pull-right\"></b>\r\n                                            {{ subitem3.title }}\r\n                                            <i *ngIf=\"subitem3.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                                        </a>\r\n                                        <a *ngIf=\"subitem3.link && !subitem3.external\" routerLink=\"{{ subitem2.link }}\">\r\n                                            <b *ngIf=\"subitem3.caret\" class=\"caret pull-right\"></b>\r\n                                            {{ subitem3.title }}\r\n                                            <i *ngIf=\"subitem3.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                                        </a>\r\n                                        <a *ngIf=\"subitem3.link && subitem3.external\" routerLink=\"{{ subitem2.link }}\">\r\n                                            <b *ngIf=\"subitem3.caret\" class=\"caret pull-right\"></b>\r\n                                            {{ subitem3.title }}\r\n                                            <i *ngIf=\"subitem3.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li><a (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i><span>Déconnexion</span></a></li>\r\n        </ul>\r\n        <!-- end sidebar nav -->\r\n    </div>\r\n    <!-- end sidebar scrollbar -->\r\n</div>\r\n<div class=\"sidebar-bg\"></div>\r\n<!-- end #sidebar -->"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(userservice, authenticationService, router) {
        this.userservice = userservice;
        this.authenticationService = authenticationService;
        this.router = router;
        this.user = this.userservice.user;
        // menu list
        this.menu = [{
                title: 'Dashboard',
                icon: 'fa fa-home  ',
                link: '/dashboard/v1',
                roles: ['admin', 'superviseurP', 'superviseurR']
            }, {
                title: 'Gestion des Enquêtes',
                icon: 'fa fa-cogs',
                link: '/Parametrage/Parametrage',
                roles: ['admin', 'superviseurP', 'superviseurR', 'agent', 'controleur'],
            }, {
                title: 'Utilisateurs',
                roles: ['admin'],
                icon: 'fa fa-users',
                link: '/utilisateur'
            }, {
                title: 'Reporting',
                roles: [],
                icon: 'fa fa-cogs',
                submenu: [{
                        title: 'Region',
                        link: 'reporting/Region'
                    }, {
                        title: 'Province',
                        link: 'reporting'
                    }, {
                        title: 'Agents',
                        link: 'reporting/Agent'
                    }]
            }, {
                title: 'Collectes',
                roles: ['admin', 'controleur', 'superviseurP', 'superviseurR', 'agent'],
                icon: 'fa fa-table',
                link: '/collectes'
            },
        ];
    }
    // fire event sidebar-ready
    SidebarComponent.prototype.ngAfterViewInit = function () {
        window.dispatchEvent(new CustomEvent('sidebar-ready'));
    };
    SidebarComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/user/login']);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidebarComponent.prototype, "page_sidebar_transparent", void 0);
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sidebar',
            template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme-panel/theme-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin theme-panel -->\r\n<div class=\"theme-panel\">\r\n    <a href=\"javascript:;\" data-click=\"theme-panel-expand\" class=\"theme-collapse-btn\"><i class=\"fa fa-cog\"></i></a>\r\n    <div class=\"theme-panel-content\">\r\n        <h5 class=\"m-t-0\">Color Theme</h5>\r\n        <ul class=\"theme-list clearfix\">\r\n            <li class=\"active\"><a href=\"javascript:;\" class=\"bg-green\" data-theme=\"default\" data-click=\"theme-selector\" data-toggle=\"tooltip\" data-trigger=\"hover\" data-container=\"body\" data-title=\"Default\">&nbsp;</a></li>\r\n            <li><a href=\"javascript:;\" class=\"bg-red\" data-theme=\"red\" data-click=\"theme-selector\" data-toggle=\"tooltip\" data-trigger=\"hover\" data-container=\"body\" data-title=\"Red\">&nbsp;</a></li>\r\n            <li><a href=\"javascript:;\" class=\"bg-blue\" data-theme=\"blue\" data-click=\"theme-selector\" data-toggle=\"tooltip\" data-trigger=\"hover\" data-container=\"body\" data-title=\"Blue\">&nbsp;</a></li>\r\n            <li><a href=\"javascript:;\" class=\"bg-purple\" data-theme=\"purple\" data-click=\"theme-selector\" data-toggle=\"tooltip\" data-trigger=\"hover\" data-container=\"body\" data-title=\"Purple\">&nbsp;</a></li>\r\n            <li><a href=\"javascript:;\" class=\"bg-orange\" data-theme=\"orange\" data-click=\"theme-selector\" data-toggle=\"tooltip\" data-trigger=\"hover\" data-container=\"body\" data-title=\"Orange\">&nbsp;</a></li>\r\n            <li><a href=\"javascript:;\" class=\"bg-black\" data-theme=\"black\" data-click=\"theme-selector\" data-toggle=\"tooltip\" data-trigger=\"hover\" data-container=\"body\" data-title=\"Black\">&nbsp;</a></li>\r\n        </ul>\r\n        <div class=\"divider\"></div>\r\n        <div class=\"row m-t-10\">\r\n            <div class=\"col-md-5 control-label double-line\">Header Styling</div>\r\n            <div class=\"col-md-7\">\r\n                <select name=\"header-styling\" class=\"form-control input-sm\">\r\n                    <option value=\"1\">default</option>\r\n                    <option value=\"2\">inverse</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-t-10\">\r\n            <div class=\"col-md-5 control-label\">Header</div>\r\n            <div class=\"col-md-7\">\r\n                <select name=\"header-fixed\" class=\"form-control input-sm\">\r\n                    <option value=\"1\">fixed</option>\r\n                    <option value=\"2\">default</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-t-10\">\r\n            <div class=\"col-md-5 control-label double-line\">Sidebar Styling</div>\r\n            <div class=\"col-md-7\">\r\n                <select name=\"sidebar-styling\" class=\"form-control input-sm\">\r\n                    <option value=\"1\">default</option>\r\n                    <option value=\"2\">grid</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-t-10\">\r\n            <div class=\"col-md-5 control-label\">Sidebar</div>\r\n            <div class=\"col-md-7\">\r\n                <select name=\"sidebar-fixed\" class=\"form-control input-sm\">\r\n                    <option value=\"1\">fixed</option>\r\n                    <option value=\"2\">default</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-t-10\">\r\n            <div class=\"col-md-5 control-label double-line\">Sidebar Gradient</div>\r\n            <div class=\"col-md-7\">\r\n                <select name=\"content-gradient\" class=\"form-control input-sm\">\r\n                    <option value=\"1\">disabled</option>\r\n                    <option value=\"2\">enabled</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-t-10\">\r\n            <div class=\"col-md-5 control-label double-line\">Content Styling</div>\r\n            <div class=\"col-md-7\">\r\n                <select name=\"content-styling\" class=\"form-control input-sm\">\r\n                    <option value=\"1\">default</option>\r\n                    <option value=\"2\">black</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-t-10\">\r\n            <div class=\"col-md-12\">\r\n                <a href=\"#\" class=\"btn btn-inverse btn-block btn-sm\" data-click=\"reset-local-storage\"><i class=\"fa fa-refresh m-r-3\"></i> Reset Local Storage</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- end theme-panel -->"

/***/ }),

/***/ "../../../../../src/app/theme-panel/theme-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemePanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThemePanelComponent = (function () {
    function ThemePanelComponent() {
    }
    ThemePanelComponent.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('theme-panel-ready'));
    };
    ThemePanelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'theme-panel',
            template: __webpack_require__("../../../../../src/app/theme-panel/theme-panel.component.html")
        })
    ], ThemePanelComponent);
    return ThemePanelComponent;
}());

//# sourceMappingURL=theme-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/top-menu/top-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin #top-menu -->\r\n<div id=\"top-menu\" class=\"top-menu\">\r\n    <ul *ngIf=\"menu\" class=\"nav\">\r\n        <li class=\"nav-header\">Navigation</li>\r\n        <li *ngFor=\"let item of menu;\" [ngClass]=\"{'has-sub': item.submenu}\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n            <a *ngIf=\"!item.link\" href=\"javasript:;\">\r\n                <i *ngIf=\"item.icon\" class=\"{{ item.icon }}\"></i>\r\n                <span>{{ item.title }}</span>\r\n                <span *ngIf=\"item.badge\" class=\"badge pull-right\">{{ item.badge }}</span>\r\n                <span *ngIf=\"item.label\" class=\"label label-theme m-l-5\">{{ item.label }}</span>\r\n                <b *ngIf=\"item.caret\" class=\"caret\"></b>\r\n            </a>\r\n            <a *ngIf=\"item.link && !item.external\" routerLink=\"{{ item.link }}\">\r\n                <i *ngIf=\"item.icon\" class=\"{{ item.icon }}\"></i>\r\n                <span>{{ item.title }}</span>\r\n                <span *ngIf=\"item.badge\" class=\"badge pull-right\">{{ item.badge }}</span>\r\n                <span *ngIf=\"item.label\" class=\"label label-theme m-l-5\">{{ item.label }}</span>\r\n                <b *ngIf=\"item.caret\" class=\"caret\"></b>\r\n            </a>\r\n            <a *ngIf=\"item.link && item.external\" href=\"{{ item.link }}\">\r\n                <i *ngIf=\"item.icon\" class=\"{{ item.icon }}\"></i>\r\n                <span>{{ item.title }}</span>\r\n                <span *ngIf=\"item.badge\" class=\"badge pull-right\">{{ item.badge }}</span>\r\n                <span *ngIf=\"item.label\" class=\"label label-theme m-l-5\">{{ item.label }}</span>\r\n                <b *ngIf=\"item.caret\" class=\"caret\"></b>\r\n            </a>\r\n            <ul *ngIf=\"item.submenu\" class=\"sub-menu\">\r\n                <li *ngFor=\"let subitem of item.submenu\" [ngClass]=\"{'has-sub': subitem.submenu}\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                    <a *ngIf=\"!subitem.link\" href=\"javasript:;\">\r\n                        <b *ngIf=\"subitem.caret\" class=\"caret pull-right\"></b>\r\n                        {{ subitem.title }}\r\n                        <i *ngIf=\"subitem.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                    </a>\r\n                    <a *ngIf=\"subitem.link && !subitem.external\" routerLink=\"{{ subitem.link }}\">\r\n                        <b *ngIf=\"subitem.caret\" class=\"caret pull-right\"></b>\r\n                        {{ subitem.title }}\r\n                        <i *ngIf=\"subitem.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                    </a>\r\n                    <a *ngIf=\"subitem.link && subitem.external\" href=\"{{ subitem.link }}\">\r\n                        <b *ngIf=\"subitem.caret\" class=\"caret pull-right\"></b>\r\n                        {{ subitem.title }}\r\n                        <i *ngIf=\"subitem.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                    </a>\r\n                    <ul *ngIf=\"subitem.submenu\" class=\"sub-menu\">\r\n                        <li *ngFor=\"let subitem2 of subitem.submenu\" [ngClass]=\"{'has-sub': subitem2.submenu}\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                            <a *ngIf=\"!subitem2.link\" href=\"javasript:;\">\r\n                                <b *ngIf=\"subitem2.caret\" class=\"caret pull-right\"></b>\r\n                                {{ subitem2.title }}\r\n                                <i *ngIf=\"subitem2.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                            </a>\r\n                            <a *ngIf=\"subitem2.link && !subitem2.external\" routerLink=\"{{ subitem2.link }}\">\r\n                                <b *ngIf=\"subitem2.caret\" class=\"caret pull-right\"></b>\r\n                                {{ subitem2.title }}\r\n                                <i *ngIf=\"subitem2.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                            </a>\r\n                            <a *ngIf=\"subitem2.link && subitem2.external\" href=\"{{ subitem2.link }}\">\r\n                                <b *ngIf=\"subitem2.caret\" class=\"caret pull-right\"></b>\r\n                                {{ subitem2.title }}\r\n                                <i *ngIf=\"subitem2.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                            </a>\r\n                            <ul *ngIf=\"subitem2.submenu\" class=\"sub-menu\">\r\n                                <li *ngFor=\"let subitem3 of subitem2.submenu\" [ngClass]=\"{'has-sub': subitem3.submenu}\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                                    <a *ngIf=\"!subitem3.link\" href=\"javasript:;\">\r\n                                        <b *ngIf=\"subitem3.caret\" class=\"caret pull-right\"></b>\r\n                                        {{ subitem3.title }}\r\n                                        <i *ngIf=\"subitem3.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                                    </a>\r\n                                    <a *ngIf=\"subitem3.link && !subitem3.external\" routerLink=\"{{ subitem2.link }}\">\r\n                                        <b *ngIf=\"subitem3.caret\" class=\"caret pull-right\"></b>\r\n                                        {{ subitem3.title }}\r\n                                        <i *ngIf=\"subitem3.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                                    </a>\r\n                                    <a *ngIf=\"subitem3.link && subitem3.external\" routerLink=\"{{ subitem2.link }}\">\r\n                                        <b *ngIf=\"subitem3.caret\" class=\"caret pull-right\"></b>\r\n                                        {{ subitem3.title }}\r\n                                        <i *ngIf=\"subitem3.highlight\" class=\"fa fa-paper-plane text-theme m-l-5\"></i>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"menu-control menu-control-left\">\r\n            <a href=\"#\" data-click=\"prev-menu\"><i class=\"fa fa-angle-left\"></i></a>\r\n        </li>\r\n        <li class=\"menu-control menu-control-right\">\r\n            <a href=\"#\" data-click=\"next-menu\"><i class=\"fa fa-angle-right\"></i></a>\r\n        </li>\r\n    </ul>\r\n    <!-- end top-menu nav -->\r\n</div>\r\n<!-- end #top-menu -->"

/***/ }),

/***/ "../../../../../src/app/top-menu/top-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopMenuComponent = (function () {
    function TopMenuComponent() {
        this.menu = [{
                title: 'Dashboard',
                icon: 'fa fa-laptop',
                link: '',
                caret: 'true',
                submenu: [{
                        title: 'Dashboard v1',
                        link: '/dashboard/v1'
                    }, {
                        title: 'Dashboard v2',
                        link: '/dashboard/v2'
                    }]
            }, {
                title: 'Email',
                icon: 'fa fa-inbox',
                link: '',
                badge: '10',
                submenu: [{
                        title: 'Inbox v1',
                        link: '/email/inbox/v1'
                    }, {
                        title: 'Inbox v2',
                        link: '/email/inbox/v2'
                    }, {
                        title: 'Compose',
                        link: '/email/compose'
                    }, {
                        title: 'Detail',
                        link: '/email/detail'
                    }]
            }, {
                title: 'UI Elements',
                icon: 'fa fa-suitcase',
                link: '',
                label: 'NEW',
                caret: true,
                submenu: [{
                        title: 'General',
                        link: '/ui/general'
                    }, {
                        title: 'Typography',
                        link: '/ui/typography'
                    }, {
                        title: 'Tabs & Accordions',
                        link: '/ui/tabs-accordions'
                    }, {
                        title: 'Unlimited Nav Tabs',
                        link: '/ui/unlimited-nav-tabs'
                    }, {
                        title: 'Modal & Notification',
                        link: '/ui/modal-notification'
                    }, {
                        title: 'Widget Boxes',
                        link: '/ui/widget-boxes'
                    }, {
                        title: 'Media Object',
                        link: '/ui/media-object'
                    }, {
                        title: 'Buttons',
                        link: '/ui/buttons'
                    }, {
                        title: 'Icons',
                        link: '/ui/icons'
                    }, {
                        title: 'Simple Line Icons',
                        link: '/ui/simple-line-icons'
                    }, {
                        title: 'Ionicons',
                        link: '/ui/ionicons'
                    }, {
                        title: 'Tree View',
                        link: '/ui/tree-view'
                    }, {
                        title: 'Language Bar & Icon',
                        link: '/ui/language-bar-icon'
                    }, {
                        title: 'Social Buttons',
                        link: '/ui/social-buttons',
                        highlight: 'true'
                    }, {
                        title: 'Intro JS',
                        link: '/ui/intro-js',
                        highlight: 'true'
                    }]
            }, {
                title: 'Form Stuff',
                icon: 'fa fa-file-o',
                link: '',
                label: 'NEW',
                caret: true,
                submenu: [{
                        title: 'Form Elements',
                        link: '/form/elements'
                    }, {
                        title: 'Form Plugins',
                        link: '/form/plugins'
                    }, {
                        title: 'Form Slider + Switcher',
                        link: '/form/slider-switcher'
                    }, {
                        title: 'Form Validation',
                        link: '/form/validation'
                    }, {
                        title: 'WYSIWYG',
                        link: '/form/wysiwyg'
                    }, {
                        title: 'Summernote',
                        link: '/form/summernote',
                        highlight: 'true'
                    }]
            }, {
                title: 'Tables',
                icon: 'fa fa-th',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Basic Tables',
                        link: '/table/basic'
                    }, {
                        title: 'Managed Tables',
                        link: '',
                        caret: true,
                        submenu: [{
                                title: 'Default',
                                link: '/table/manage/default'
                            }, {
                                title: 'Autofill',
                                link: '/table/manage/autofill'
                            }, {
                                title: 'Buttons',
                                link: '/table/manage/buttons'
                            }, {
                                title: 'ColReorder',
                                link: '/table/manage/colreorder'
                            }, {
                                title: 'Fixed Column',
                                link: '/table/manage/fixed-columns'
                            }, {
                                title: 'Fixed Header',
                                link: '/table/manage/fixed-header'
                            }, {
                                title: 'KeyTable',
                                link: '/table/manage/keytable'
                            }, {
                                title: 'Responsive',
                                link: '/table/manage/responsive'
                            }, {
                                title: 'RowReorder',
                                link: '/table/manage/rowreorder'
                            }, {
                                title: 'Scroller',
                                link: '/table/manage/scroller'
                            }, {
                                title: 'Select',
                                link: '/table/manage/select'
                            }, {
                                title: 'Extension Combination',
                                link: '/table/manage/combine'
                            }]
                    }]
            }, {
                title: 'Front End',
                icon: 'fa fa-star',
                link: '',
                caret: true,
                submenu: [{
                        title: 'One Page Parallax',
                        link: '/../../frontend/one-page-parallax/template_content_html/index.html',
                        external: true
                    }, {
                        title: 'Blog',
                        link: '/../../frontend/blog/template_content_html/index.html',
                        external: true
                    }, {
                        title: 'Forum',
                        link: '/../../frontend/forum/template_content_html/index.html',
                        external: true
                    }, {
                        title: 'E-Commerce',
                        link: '/../../frontend/e-commerce/template_content_html/index.html',
                        external: true
                    }]
            }, {
                title: 'Email Template',
                icon: 'fa fa-envelope',
                link: '',
                caret: true,
                submenu: [{
                        title: 'System Template',
                        link: '/app/email_system.html',
                        external: true
                    }, {
                        title: 'Newsletter Template',
                        link: '/app/email_newsletter.html',
                        external: true
                    }]
            }, {
                title: 'Chart',
                icon: 'fa fa-area-chart',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Flot Chart',
                        link: '/chart/flot'
                    }, {
                        title: 'Morris Chart',
                        link: '/chart/morris'
                    }, {
                        title: 'Chart JS',
                        link: '/chart/js'
                    }, {
                        title: 'd3 Chart',
                        link: '/chart/d3'
                    }]
            }, {
                title: 'Calendar',
                icon: 'fa fa-calendar',
                link: '/calendar'
            }, {
                title: 'Map',
                icon: 'fa fa-map-marker',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Vector Map',
                        link: '/map/vector'
                    }, {
                        title: 'Google Map',
                        link: '/map/google'
                    }]
            }, {
                title: 'Gallery',
                icon: 'fa fa-camera',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Gallery v1',
                        link: '/gallery/v1'
                    }, {
                        title: 'Gallery v2',
                        link: '/gallery/v2'
                    }]
            }, {
                title: 'Page Options',
                icon: 'fa fa-cogs',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Blank Page',
                        link: '/page/blank'
                    }, {
                        title: 'Page with Footer',
                        link: '/page/with-footer'
                    }, {
                        title: 'Page without Sidebar',
                        link: '/page/without-sidebar'
                    }, {
                        title: 'Page with Right Sidebar',
                        link: '/page/with-right-sidebar'
                    }, {
                        title: 'Page with Minified Sidebar',
                        link: '/page/with-minified-sidebar'
                    }, {
                        title: 'Page with Two Sidebar',
                        link: '/page/with-two-sidebar'
                    }, {
                        title: 'Full Height Content',
                        link: '/page/full-height-content'
                    }, {
                        title: 'Page with Wide Sidebar',
                        link: '/page/with-wide-sidebar'
                    }, {
                        title: 'Page with Light Sidebar',
                        link: '/page/with-light-sidebar'
                    }, {
                        title: 'Page with Mega Menu',
                        link: '/page/with-mega-menu'
                    }, {
                        title: 'Page with Top Menu',
                        link: '/page/with-top-menu'
                    }, {
                        title: 'Page with Boxed Layout',
                        link: '/page/with-boxed-layout'
                    }, {
                        title: 'Page with Mixed Menu',
                        link: '/page/with-mixed-menu'
                    }, {
                        title: 'Boxed Layout with Mixed Menu',
                        link: '/page/boxed-layout-with-mixed-menu'
                    }, {
                        title: 'Page with Transparent Sidebar',
                        link: '/page/with-transparent-sidebar'
                    }]
            }, {
                title: 'Extra',
                icon: 'fa fa-gift',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Timeline',
                        link: '/extra/timeline'
                    }, {
                        title: 'Coming Soon Page',
                        link: '/extra/coming-soon'
                    }, {
                        title: 'Search Results',
                        link: '/extra/search'
                    }, {
                        title: 'Invoice',
                        link: '/extra/invoice'
                    }, {
                        title: '404 Error Page',
                        link: '/extra/error'
                    }, {
                        title: 'Profile Page',
                        link: '/extra/profile'
                    }]
            }, {
                title: 'Login & Register',
                icon: 'fa fa-key',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Login',
                        link: '/user/login'
                    }, {
                        title: 'Login v2',
                        link: '/user/login-v2'
                    }, {
                        title: 'Login v3',
                        link: '/user/login-v3'
                    }, {
                        title: 'Register v3',
                        link: '/user/register-v3'
                    }]
            }, {
                title: 'Version',
                icon: 'fa fa-cubes',
                link: '',
                caret: true,
                label: 'NEW',
                submenu: [{
                        title: 'HTML',
                        link: '/../admin/template_content_html/index.html',
                        external: true
                    }, {
                        title: 'AJAX',
                        link: '/../admin/template_content_ajax/index.html',
                        external: true
                    }, {
                        title: 'ANGULAR JS',
                        link: '/../admin/template_content_angularjs/index.html',
                        external: true
                    }, {
                        title: 'ANGULAR JS 2',
                        link: '',
                        highlight: true
                    }, {
                        title: 'MATERIAL DESIGN',
                        link: '/../admin/template_content_material_design/index.html',
                        external: true
                    }]
            }, {
                title: 'Helper',
                icon: 'fa fa-medkit',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Predefined CSS Classes',
                        link: '/helper/css'
                    }]
            }, {
                title: 'Menu Level',
                icon: 'fa fa-align-left',
                link: '',
                caret: true,
                submenu: [{
                        title: 'Menu 1.1',
                        link: '',
                        caret: true,
                        submenu: [{
                                title: 'Menu 2.1',
                                link: '',
                                caret: true,
                                submenu: [{
                                        title: 'Menu 3.1',
                                        link: ''
                                    }, {
                                        title: 'Menu 3.2',
                                        link: ''
                                    }, {
                                        title: 'Menu 3.3',
                                        link: ''
                                    }]
                            }, {
                                title: 'Menu 2.2',
                                link: ''
                            }, {
                                title: 'Menu 2.3',
                                link: ''
                            }]
                    }, {
                        title: 'Menu 1.2',
                        link: ''
                    }, {
                        title: 'Menu 1.3',
                        link: ''
                    }]
            }];
    }
    // fire event sidebar-two-ready
    TopMenuComponent.prototype.ngAfterViewInit = function () {
        window.dispatchEvent(new CustomEvent('top-menu-ready'));
    };
    TopMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'top-menu',
            template: __webpack_require__("../../../../../src/app/top-menu/top-menu.component.html")
        })
    ], TopMenuComponent);
    return TopMenuComponent;
}());

//# sourceMappingURL=top-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/values.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuesPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValuesPipe = (function () {
    function ValuesPipe() {
    }
    ValuesPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value).map(function (key) { return value[key]; });
    };
    ValuesPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'values',
            pure: false
        })
    ], ValuesPipe);
    return ValuesPipe;
}());

//# sourceMappingURL=values.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../angular-formio/node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../angular-formio/node_modules/moment/locale/af.js",
	"./af.js": "../../../../angular-formio/node_modules/moment/locale/af.js",
	"./ar": "../../../../angular-formio/node_modules/moment/locale/ar.js",
	"./ar-dz": "../../../../angular-formio/node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../angular-formio/node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../../../angular-formio/node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../angular-formio/node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../../../angular-formio/node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../angular-formio/node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../../../angular-formio/node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../angular-formio/node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../../../angular-formio/node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../angular-formio/node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../../../angular-formio/node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../angular-formio/node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../../../angular-formio/node_modules/moment/locale/ar.js",
	"./az": "../../../../angular-formio/node_modules/moment/locale/az.js",
	"./az.js": "../../../../angular-formio/node_modules/moment/locale/az.js",
	"./be": "../../../../angular-formio/node_modules/moment/locale/be.js",
	"./be.js": "../../../../angular-formio/node_modules/moment/locale/be.js",
	"./bg": "../../../../angular-formio/node_modules/moment/locale/bg.js",
	"./bg.js": "../../../../angular-formio/node_modules/moment/locale/bg.js",
	"./bm": "../../../../angular-formio/node_modules/moment/locale/bm.js",
	"./bm.js": "../../../../angular-formio/node_modules/moment/locale/bm.js",
	"./bn": "../../../../angular-formio/node_modules/moment/locale/bn.js",
	"./bn.js": "../../../../angular-formio/node_modules/moment/locale/bn.js",
	"./bo": "../../../../angular-formio/node_modules/moment/locale/bo.js",
	"./bo.js": "../../../../angular-formio/node_modules/moment/locale/bo.js",
	"./br": "../../../../angular-formio/node_modules/moment/locale/br.js",
	"./br.js": "../../../../angular-formio/node_modules/moment/locale/br.js",
	"./bs": "../../../../angular-formio/node_modules/moment/locale/bs.js",
	"./bs.js": "../../../../angular-formio/node_modules/moment/locale/bs.js",
	"./ca": "../../../../angular-formio/node_modules/moment/locale/ca.js",
	"./ca.js": "../../../../angular-formio/node_modules/moment/locale/ca.js",
	"./cs": "../../../../angular-formio/node_modules/moment/locale/cs.js",
	"./cs.js": "../../../../angular-formio/node_modules/moment/locale/cs.js",
	"./cv": "../../../../angular-formio/node_modules/moment/locale/cv.js",
	"./cv.js": "../../../../angular-formio/node_modules/moment/locale/cv.js",
	"./cy": "../../../../angular-formio/node_modules/moment/locale/cy.js",
	"./cy.js": "../../../../angular-formio/node_modules/moment/locale/cy.js",
	"./da": "../../../../angular-formio/node_modules/moment/locale/da.js",
	"./da.js": "../../../../angular-formio/node_modules/moment/locale/da.js",
	"./de": "../../../../angular-formio/node_modules/moment/locale/de.js",
	"./de-at": "../../../../angular-formio/node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../../../angular-formio/node_modules/moment/locale/de-at.js",
	"./de-ch": "../../../../angular-formio/node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../../../angular-formio/node_modules/moment/locale/de-ch.js",
	"./de.js": "../../../../angular-formio/node_modules/moment/locale/de.js",
	"./dv": "../../../../angular-formio/node_modules/moment/locale/dv.js",
	"./dv.js": "../../../../angular-formio/node_modules/moment/locale/dv.js",
	"./el": "../../../../angular-formio/node_modules/moment/locale/el.js",
	"./el.js": "../../../../angular-formio/node_modules/moment/locale/el.js",
	"./en-au": "../../../../angular-formio/node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../../../angular-formio/node_modules/moment/locale/en-au.js",
	"./en-ca": "../../../../angular-formio/node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../../../angular-formio/node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../../../angular-formio/node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../../../angular-formio/node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../../../angular-formio/node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../../../angular-formio/node_modules/moment/locale/en-ie.js",
	"./en-nz": "../../../../angular-formio/node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../../../angular-formio/node_modules/moment/locale/en-nz.js",
	"./eo": "../../../../angular-formio/node_modules/moment/locale/eo.js",
	"./eo.js": "../../../../angular-formio/node_modules/moment/locale/eo.js",
	"./es": "../../../../angular-formio/node_modules/moment/locale/es.js",
	"./es-do": "../../../../angular-formio/node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../../../angular-formio/node_modules/moment/locale/es-do.js",
	"./es-us": "../../../../angular-formio/node_modules/moment/locale/es-us.js",
	"./es-us.js": "../../../../angular-formio/node_modules/moment/locale/es-us.js",
	"./es.js": "../../../../angular-formio/node_modules/moment/locale/es.js",
	"./et": "../../../../angular-formio/node_modules/moment/locale/et.js",
	"./et.js": "../../../../angular-formio/node_modules/moment/locale/et.js",
	"./eu": "../../../../angular-formio/node_modules/moment/locale/eu.js",
	"./eu.js": "../../../../angular-formio/node_modules/moment/locale/eu.js",
	"./fa": "../../../../angular-formio/node_modules/moment/locale/fa.js",
	"./fa.js": "../../../../angular-formio/node_modules/moment/locale/fa.js",
	"./fi": "../../../../angular-formio/node_modules/moment/locale/fi.js",
	"./fi.js": "../../../../angular-formio/node_modules/moment/locale/fi.js",
	"./fo": "../../../../angular-formio/node_modules/moment/locale/fo.js",
	"./fo.js": "../../../../angular-formio/node_modules/moment/locale/fo.js",
	"./fr": "../../../../angular-formio/node_modules/moment/locale/fr.js",
	"./fr-ca": "../../../../angular-formio/node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../angular-formio/node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../../../angular-formio/node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../angular-formio/node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../../../angular-formio/node_modules/moment/locale/fr.js",
	"./fy": "../../../../angular-formio/node_modules/moment/locale/fy.js",
	"./fy.js": "../../../../angular-formio/node_modules/moment/locale/fy.js",
	"./gd": "../../../../angular-formio/node_modules/moment/locale/gd.js",
	"./gd.js": "../../../../angular-formio/node_modules/moment/locale/gd.js",
	"./gl": "../../../../angular-formio/node_modules/moment/locale/gl.js",
	"./gl.js": "../../../../angular-formio/node_modules/moment/locale/gl.js",
	"./gom-latn": "../../../../angular-formio/node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../angular-formio/node_modules/moment/locale/gom-latn.js",
	"./gu": "../../../../angular-formio/node_modules/moment/locale/gu.js",
	"./gu.js": "../../../../angular-formio/node_modules/moment/locale/gu.js",
	"./he": "../../../../angular-formio/node_modules/moment/locale/he.js",
	"./he.js": "../../../../angular-formio/node_modules/moment/locale/he.js",
	"./hi": "../../../../angular-formio/node_modules/moment/locale/hi.js",
	"./hi.js": "../../../../angular-formio/node_modules/moment/locale/hi.js",
	"./hr": "../../../../angular-formio/node_modules/moment/locale/hr.js",
	"./hr.js": "../../../../angular-formio/node_modules/moment/locale/hr.js",
	"./hu": "../../../../angular-formio/node_modules/moment/locale/hu.js",
	"./hu.js": "../../../../angular-formio/node_modules/moment/locale/hu.js",
	"./hy-am": "../../../../angular-formio/node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../../../angular-formio/node_modules/moment/locale/hy-am.js",
	"./id": "../../../../angular-formio/node_modules/moment/locale/id.js",
	"./id.js": "../../../../angular-formio/node_modules/moment/locale/id.js",
	"./is": "../../../../angular-formio/node_modules/moment/locale/is.js",
	"./is.js": "../../../../angular-formio/node_modules/moment/locale/is.js",
	"./it": "../../../../angular-formio/node_modules/moment/locale/it.js",
	"./it.js": "../../../../angular-formio/node_modules/moment/locale/it.js",
	"./ja": "../../../../angular-formio/node_modules/moment/locale/ja.js",
	"./ja.js": "../../../../angular-formio/node_modules/moment/locale/ja.js",
	"./jv": "../../../../angular-formio/node_modules/moment/locale/jv.js",
	"./jv.js": "../../../../angular-formio/node_modules/moment/locale/jv.js",
	"./ka": "../../../../angular-formio/node_modules/moment/locale/ka.js",
	"./ka.js": "../../../../angular-formio/node_modules/moment/locale/ka.js",
	"./kk": "../../../../angular-formio/node_modules/moment/locale/kk.js",
	"./kk.js": "../../../../angular-formio/node_modules/moment/locale/kk.js",
	"./km": "../../../../angular-formio/node_modules/moment/locale/km.js",
	"./km.js": "../../../../angular-formio/node_modules/moment/locale/km.js",
	"./kn": "../../../../angular-formio/node_modules/moment/locale/kn.js",
	"./kn.js": "../../../../angular-formio/node_modules/moment/locale/kn.js",
	"./ko": "../../../../angular-formio/node_modules/moment/locale/ko.js",
	"./ko.js": "../../../../angular-formio/node_modules/moment/locale/ko.js",
	"./ky": "../../../../angular-formio/node_modules/moment/locale/ky.js",
	"./ky.js": "../../../../angular-formio/node_modules/moment/locale/ky.js",
	"./lb": "../../../../angular-formio/node_modules/moment/locale/lb.js",
	"./lb.js": "../../../../angular-formio/node_modules/moment/locale/lb.js",
	"./lo": "../../../../angular-formio/node_modules/moment/locale/lo.js",
	"./lo.js": "../../../../angular-formio/node_modules/moment/locale/lo.js",
	"./lt": "../../../../angular-formio/node_modules/moment/locale/lt.js",
	"./lt.js": "../../../../angular-formio/node_modules/moment/locale/lt.js",
	"./lv": "../../../../angular-formio/node_modules/moment/locale/lv.js",
	"./lv.js": "../../../../angular-formio/node_modules/moment/locale/lv.js",
	"./me": "../../../../angular-formio/node_modules/moment/locale/me.js",
	"./me.js": "../../../../angular-formio/node_modules/moment/locale/me.js",
	"./mi": "../../../../angular-formio/node_modules/moment/locale/mi.js",
	"./mi.js": "../../../../angular-formio/node_modules/moment/locale/mi.js",
	"./mk": "../../../../angular-formio/node_modules/moment/locale/mk.js",
	"./mk.js": "../../../../angular-formio/node_modules/moment/locale/mk.js",
	"./ml": "../../../../angular-formio/node_modules/moment/locale/ml.js",
	"./ml.js": "../../../../angular-formio/node_modules/moment/locale/ml.js",
	"./mr": "../../../../angular-formio/node_modules/moment/locale/mr.js",
	"./mr.js": "../../../../angular-formio/node_modules/moment/locale/mr.js",
	"./ms": "../../../../angular-formio/node_modules/moment/locale/ms.js",
	"./ms-my": "../../../../angular-formio/node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../../../angular-formio/node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../../../angular-formio/node_modules/moment/locale/ms.js",
	"./mt": "../../../../angular-formio/node_modules/moment/locale/mt.js",
	"./mt.js": "../../../../angular-formio/node_modules/moment/locale/mt.js",
	"./my": "../../../../angular-formio/node_modules/moment/locale/my.js",
	"./my.js": "../../../../angular-formio/node_modules/moment/locale/my.js",
	"./nb": "../../../../angular-formio/node_modules/moment/locale/nb.js",
	"./nb.js": "../../../../angular-formio/node_modules/moment/locale/nb.js",
	"./ne": "../../../../angular-formio/node_modules/moment/locale/ne.js",
	"./ne.js": "../../../../angular-formio/node_modules/moment/locale/ne.js",
	"./nl": "../../../../angular-formio/node_modules/moment/locale/nl.js",
	"./nl-be": "../../../../angular-formio/node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../../../angular-formio/node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../../../angular-formio/node_modules/moment/locale/nl.js",
	"./nn": "../../../../angular-formio/node_modules/moment/locale/nn.js",
	"./nn.js": "../../../../angular-formio/node_modules/moment/locale/nn.js",
	"./pa-in": "../../../../angular-formio/node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../../../angular-formio/node_modules/moment/locale/pa-in.js",
	"./pl": "../../../../angular-formio/node_modules/moment/locale/pl.js",
	"./pl.js": "../../../../angular-formio/node_modules/moment/locale/pl.js",
	"./pt": "../../../../angular-formio/node_modules/moment/locale/pt.js",
	"./pt-br": "../../../../angular-formio/node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../../../angular-formio/node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../../../angular-formio/node_modules/moment/locale/pt.js",
	"./ro": "../../../../angular-formio/node_modules/moment/locale/ro.js",
	"./ro.js": "../../../../angular-formio/node_modules/moment/locale/ro.js",
	"./ru": "../../../../angular-formio/node_modules/moment/locale/ru.js",
	"./ru.js": "../../../../angular-formio/node_modules/moment/locale/ru.js",
	"./sd": "../../../../angular-formio/node_modules/moment/locale/sd.js",
	"./sd.js": "../../../../angular-formio/node_modules/moment/locale/sd.js",
	"./se": "../../../../angular-formio/node_modules/moment/locale/se.js",
	"./se.js": "../../../../angular-formio/node_modules/moment/locale/se.js",
	"./si": "../../../../angular-formio/node_modules/moment/locale/si.js",
	"./si.js": "../../../../angular-formio/node_modules/moment/locale/si.js",
	"./sk": "../../../../angular-formio/node_modules/moment/locale/sk.js",
	"./sk.js": "../../../../angular-formio/node_modules/moment/locale/sk.js",
	"./sl": "../../../../angular-formio/node_modules/moment/locale/sl.js",
	"./sl.js": "../../../../angular-formio/node_modules/moment/locale/sl.js",
	"./sq": "../../../../angular-formio/node_modules/moment/locale/sq.js",
	"./sq.js": "../../../../angular-formio/node_modules/moment/locale/sq.js",
	"./sr": "../../../../angular-formio/node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../../../angular-formio/node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../angular-formio/node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../angular-formio/node_modules/moment/locale/sr.js",
	"./ss": "../../../../angular-formio/node_modules/moment/locale/ss.js",
	"./ss.js": "../../../../angular-formio/node_modules/moment/locale/ss.js",
	"./sv": "../../../../angular-formio/node_modules/moment/locale/sv.js",
	"./sv.js": "../../../../angular-formio/node_modules/moment/locale/sv.js",
	"./sw": "../../../../angular-formio/node_modules/moment/locale/sw.js",
	"./sw.js": "../../../../angular-formio/node_modules/moment/locale/sw.js",
	"./ta": "../../../../angular-formio/node_modules/moment/locale/ta.js",
	"./ta.js": "../../../../angular-formio/node_modules/moment/locale/ta.js",
	"./te": "../../../../angular-formio/node_modules/moment/locale/te.js",
	"./te.js": "../../../../angular-formio/node_modules/moment/locale/te.js",
	"./tet": "../../../../angular-formio/node_modules/moment/locale/tet.js",
	"./tet.js": "../../../../angular-formio/node_modules/moment/locale/tet.js",
	"./th": "../../../../angular-formio/node_modules/moment/locale/th.js",
	"./th.js": "../../../../angular-formio/node_modules/moment/locale/th.js",
	"./tl-ph": "../../../../angular-formio/node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../angular-formio/node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../../../angular-formio/node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../../../angular-formio/node_modules/moment/locale/tlh.js",
	"./tr": "../../../../angular-formio/node_modules/moment/locale/tr.js",
	"./tr.js": "../../../../angular-formio/node_modules/moment/locale/tr.js",
	"./tzl": "../../../../angular-formio/node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../../../angular-formio/node_modules/moment/locale/tzl.js",
	"./tzm": "../../../../angular-formio/node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../../../angular-formio/node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../angular-formio/node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../angular-formio/node_modules/moment/locale/tzm.js",
	"./uk": "../../../../angular-formio/node_modules/moment/locale/uk.js",
	"./uk.js": "../../../../angular-formio/node_modules/moment/locale/uk.js",
	"./ur": "../../../../angular-formio/node_modules/moment/locale/ur.js",
	"./ur.js": "../../../../angular-formio/node_modules/moment/locale/ur.js",
	"./uz": "../../../../angular-formio/node_modules/moment/locale/uz.js",
	"./uz-latn": "../../../../angular-formio/node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../angular-formio/node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../../../angular-formio/node_modules/moment/locale/uz.js",
	"./vi": "../../../../angular-formio/node_modules/moment/locale/vi.js",
	"./vi.js": "../../../../angular-formio/node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../../../angular-formio/node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../angular-formio/node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../../../angular-formio/node_modules/moment/locale/yo.js",
	"./yo.js": "../../../../angular-formio/node_modules/moment/locale/yo.js",
	"./zh-cn": "../../../../angular-formio/node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../angular-formio/node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../../../angular-formio/node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../angular-formio/node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../../../../angular-formio/node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../angular-formio/node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../angular-formio/node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map