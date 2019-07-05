import { Component, HostListener, OnInit } from '@angular/core';

import { SharedService } from './shared/service/shared.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    // GENERAL STUFF
    public isMobileView = false;
    public mainLogo = './assets/logo-compact.png';
    public cookiesAccepted = true;

    constructor(
        private sharedService: SharedService,
    ) { }

    public ngOnInit(): void {
        this.manageDimensions();
        this.checkCookies();

        console.log("Yeet");
    }

    private checkCookies(): void {
        if(!!localStorage.getItem('cookies')){
            this.setCookie(true);
        } else {
            this.setCookie(false);
            this.initCookieSubscription();
        }
    }

    private setCookie(status: boolean): void {
        this.cookiesAccepted = status;
    }

    private initCookieSubscription(): void {
        this.sharedService.cookieEvent
            .subscribe(() => {
                this.setCookie(true);
            });
    }

    @HostListener("window:resize", ["$event"])
    manageDimensions() {
        (window.innerWidth <= 991) ? this.isMobileView = true : this.isMobileView = false;
    }
}
