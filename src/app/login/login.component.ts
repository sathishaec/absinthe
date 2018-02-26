import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
//import { Router, ActivatedRoute } from '@angular/router';

import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';
import { AlertService, AuthenticationService } from '../_services/index';
import { NotificationsComponent } from '../notifications/notifications.component';

declare const $: any;
@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})



export class LoginComponent implements OnInit {

    model: any = {};
    loading = false;
    returnUrl: string;
    authenticationFlag: boolean = true;
    errors = null;
    //@ViewChild(NavbarComponent) navbar: NavbarComponent;
    constructor(
        public location: Location,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private notificationscomponent: NotificationsComponent,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        
        // get return url from route parameters or default to '/'
        this.returnUrl = "/dashboard";

       
    }
    ngAfterViewInit() {
        ///this.runOnRouteChange();
    }


    login() {
        this.loading = true;
        console.log(this.model.empid);
        if (this.model.empid == "" || this.model.empid == "undefined" ) {
            this.notificationscomponent.showNotification('top', 'right', "EMP Id Missing", "danger");
            this.loading = false;
        } else if (this.model.password == ""||this.model.password == "undefined") {
            this.notificationscomponent.showNotification('top', 'right', "Password Missing", "danger");
            this.loading = false;
        } else {
            this.authenticationService.login(this.model.empid, this.model.password)
                .subscribe(
                data => {
                    if (data.status == "201") {
                        console.log("false");
                        this.notificationscomponent.showNotification('top', 'right', data.message, "danger");
                        this.authenticationFlag = false;
                        this.alertService.error(data.message);
                        this.loading = false;
                        this.errors = data.message;
                    }
                    this.router.navigate([this.returnUrl]);
                },
                error => {

                });
        }
    }
}
