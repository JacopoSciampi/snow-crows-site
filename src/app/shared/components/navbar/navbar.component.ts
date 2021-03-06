import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { iMenu } from 'src/app/helper/interfaces/navbar/iMenu';
import { iDropdownItem } from '../../../helper/interfaces/navbar/iDropdownItem';
import { navbarAnimation } from '../../../config/navbar/navbar-animation';
import { NavbarDropdownItemRaidBuilds, NavbarDropdownItemCommunity } from '../../../config/navbar/navbar';
import { NavbarMenuConfiguration, NavbarDropdownItemClassGuides, NavbarDropdownItemFractals } from 'src/app/config/navbar/navbar';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    animations: navbarAnimation
})
export class NavbarComponent implements OnChanges{
    // GENERAL STUFF
    @Input() isMobileView;

    // CONFIGS
    public menuList: iMenu[] = NavbarMenuConfiguration;
    public raidBuildDropwon: iDropdownItem[] = NavbarDropdownItemRaidBuilds;
    public classGuidesDropdown:iDropdownItem[] = NavbarDropdownItemClassGuides;
    public fractalsDropdown: iDropdownItem[] = NavbarDropdownItemFractals;
    public communityDropdown: iDropdownItem[] = NavbarDropdownItemCommunity;

    // ANIMATION STUFF
    animation1: string;
    animation2: string;
    animation3: string;
    animation4: string;

    public dropdownNavbarOffsetLeft1 = - 200;
    public dropdownNavbarOffsetLeft2 = - 200;
    public dropdownNavbarOffsetLeft3 = - 200;
    public dropdownNavbarOffsetLeft4 = - 200;

    // END DROPDOWN STUFF

    public ngOnChanges(): void {
        this.resetDropdownNavbarStuff();
    }
    
    public navigateTo(url: string, isDropdown: boolean, event: any, idx: number, animationIndex: number): void {
        this.setActiveMenuVoice(idx);

        if (isDropdown) {
            this.toggleNavbarDropdown(event, animationIndex);
            
        } else {
            this.setActiveMenuVoice(null);
            this.resetDropdownNavbarStuff();
            
            if(!!url && url.indexOf('http') != -1) {
    
                window.open(url, '_blank');
            }
        }
    }

    public dropdownNavigateTo(item: iDropdownItem): void {
        this.setActiveMenuVoice(null);
        this.resetDropdownNavbarStuff();

        if(!!item.externalUrl) {
            window.open(item.externalUrl, '_blank');
            return;
        }
    }

    private resetDropdownNavbarStuff(): void {
        this.animation1 = 'out';
        this.animation2 = 'out';
        this.animation3 = 'out';
        this.animation4 = 'out';

        this.dropdownNavbarOffsetLeft1 = -200;
        this.dropdownNavbarOffsetLeft2 = -200;
        this.dropdownNavbarOffsetLeft3 = -200;
        this.dropdownNavbarOffsetLeft4 = -200;

    }

    private setActiveMenuVoice(index: number): void {
        this.menuList.forEach((item, idx) => {
            (idx == index) ? item.isActive = true : item.isActive = false;
        });
    }

    private toggleNavbarDropdown(event: any, animationIndex: number): void {
        if(animationIndex === 0) {
            this.animation1 = (this.animation1 === 'out' || typeof(this.animation1) !== 'string')? 'in' : 'out';
            this.animation2 = 'out';
            this.animation3 = 'out';
            this.animation4 = 'out';

            this.dropdownNavbarOffsetLeft1 = event.currentTarget.offsetLeft;

            if(this.animation1 === 'out') {
                this.setActiveMenuVoice(null);
            }
        } else if(animationIndex === 1) {
            this.animation1 = 'out';
            this.animation2 = (this.animation2 === 'out' || typeof(this.animation2) !== 'string')? 'in' : 'out'
            this.animation3 = 'out';
            this.animation4 = 'out';

            this.dropdownNavbarOffsetLeft2 = event.currentTarget.offsetLeft;

            if(this.animation2 === 'out') {
                this.setActiveMenuVoice(null);
            }
        } else if(animationIndex === 2) {
            this.animation1 = 'out';
            this.animation2 = 'out';
            this.animation3 = (this.animation3 === 'out' || typeof(this.animation3) !== 'string')? 'in' : 'out'
            this.animation4 = 'out';

            this.dropdownNavbarOffsetLeft3 = event.currentTarget.offsetLeft;

            if(this.animation3 === 'out') {
                this.setActiveMenuVoice(null);
            }
        } else if(animationIndex ===3) {
            this.animation1 = 'out';
            this.animation2 = 'out';
            this.animation3 = 'out'
            this.animation4 = (this.animation4 === 'out' || typeof(this.animation4) !== 'string')? 'in' : 'out'

            this.dropdownNavbarOffsetLeft4 = event.currentTarget.offsetLeft;

            if(this.animation4 === 'out') {
                this.setActiveMenuVoice(null);
            }
        }
    }
}