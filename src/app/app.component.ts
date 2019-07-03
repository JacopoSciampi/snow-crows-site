import { Component, HostListener, OnInit } from '@angular/core';
import { iMenu } from './helper/interfaces/navbar/iMenu';
import { navbarMenuConfiguration } from './config/navbar/navbar';
import { NavbarService } from './shared/components/navbar/navbar.service';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    // GENERAL STUFF
    isMobileview = false;

    constructor(
        private navbarService: NavbarService
    ){ }

    public ngOnInit(): void {
        this.manageDimensions();
    }

    @HostListener("window:resize", ["$event"])
    manageDimensions() {
        (window.innerWidth <= 991) ? this.isMobileview = true : this.isMobileview = false;
        this.navbarService.setIsMobileView(this.isMobileview);
    }
}
