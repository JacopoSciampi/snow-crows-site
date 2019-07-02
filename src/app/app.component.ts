import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    isMobileview = false;

    public dropdownNavbarOffsetLeft: number;
    public showDropdown = false;
    public dropdownType: number;

    public ngOnInit(): void {
        this.manageDimensions();
    }

    public navigateTo(whereTo: string, isDropdown: boolean, event: any, dropdownType: number): void {
        this.showDropdown = false;
        // ^ Close the other in case

        if (isDropdown) {
            this.dropdownNavbarOffsetLeft = event.currentTarget.offsetLeft;
            this.dropdownType = dropdownType;
            this.showDropdown = true;
        } else {
            // TODO with ngIf & dynamic components
            this.resetDropdownNavbarStuff();
        }
    }

    private resetDropdownNavbarStuff(): void {
        this.dropdownNavbarOffsetLeft = 0;
        this.dropdownType = -1;
        this.showDropdown = false;
    }

    @HostListener("window:resize", ["$event"])
    manageDimensions() {
        (window.innerWidth <= 991) ? this.isMobileview = true : this.isMobileview = false;
    }
}
