import { Component, HostListener, OnInit, AfterContentChecked, ViewChild } from '@angular/core';
import { NavbarService } from './shared/components/navbar/navbar.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    // GENERAL STUFF
    public isMobileView = false;
    public mainLogo = './assets/logo-compact.png';
    private timeoutNavbar: any;

    @ViewChild('navbar') navbar: any;

    constructor(
        private navbarService: NavbarService
    ){ }

    public ngOnInit(): void {
        this.manageDimensions();
    }

    @HostListener("window:resize", ["$event"])
    manageDimensions() {
        (window.innerWidth <= 991) ? this.isMobileView = true : this.isMobileView = false;

        if(!!this.navbar) {
            this.navbarService.setIsMobileView(this.isMobileView);
        } else {
            this.timeoutNavbar = setTimeout(() => {
                if(!!this.navbar) {
                    clearTimeout(this.timeoutNavbar);
                    this.navbarService.setIsMobileView(this.isMobileView);
                }
            }, 50);
        }
    }
}
