import { Component, OnInit } from '@angular/core';
import { iMenu } from 'src/app/helper/interfaces/iMenu';
import { navbarMenuConfiguration } from 'src/app/config/navbar';
import { NavbarService } from './navbar.service';
import { navbarAnimation } from '../../../config/navbar-animation';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    animations: navbarAnimation
})
export class NavbarComponent implements OnInit{
    // GENERAL STUFF
    isMobileview = false;

    // CONFIGS
    public menuList: iMenu[] = navbarMenuConfiguration;

    // ANIMATION STUFF
    animationNavbarDropdown: string;

    // START DROPDOWN STUFF
    public dropdownNavbarOffsetLeft: number;
    public showDropdown = false;
    public dropdownType: number;
    // END DROPDOWN STUFF

    constructor(
        private navbarService: NavbarService
    ){ }

    public ngOnInit(): void {
        this.navbarService.mobileViewEvent
        .subscribe(isMobileView => {
            this.isMobileview = isMobileView;
        });
    }

    public toggleNavbarDropdown(): void {
        this.animationNavbarDropdown = this.animationNavbarDropdown == 'out' ? 'in' : 'out';
    }
    
    public navigateTo(whereTo: string, isDropdown: boolean, event: any, dropdownType: number, idx: number): void {
        this.setActiveMenuVoice(idx);
        this.animationNavbarDropdown = 'out';
        this.showDropdown = false;

        if (isDropdown) {
            this.dropdownNavbarOffsetLeft = event.currentTarget.offsetLeft;
            this.dropdownType = dropdownType;
            this.showDropdown = true;

            setTimeout(() => {
                this.toggleNavbarDropdown();
            }, 100);
        } else {
            // TODO with ngIf & dynamic components
            this.resetDropdownNavbarStuff();
        }
    }

    private resetDropdownNavbarStuff(): void {
        this.animationNavbarDropdown = 'out';
        this.dropdownNavbarOffsetLeft = 0;
        this.dropdownType = -1;
        this.showDropdown = false;
    }

    private setActiveMenuVoice(index: number): void {
        this.menuList.forEach((item, idx) => {
            (idx == index) ? item.isActive = true : item.isActive = false;
        });
    }

}