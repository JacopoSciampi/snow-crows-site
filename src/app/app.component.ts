import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    // GENERAL STUFF
    public isMobileView = false;
    public mainLogo = './assets/logo-compact.png';

    public ngOnInit(): void {
        this.manageDimensions();

        console.log("Yeet");
    }

    @HostListener("window:resize", ["$event"])
    manageDimensions() {
        (window.innerWidth <= 991) ? this.isMobileView = true : this.isMobileView = false;
    }
}
