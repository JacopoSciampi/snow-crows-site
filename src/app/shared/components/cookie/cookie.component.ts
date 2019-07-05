import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from '../../service/shared.service';

@Component({
    selector: 'app-cookie',
    templateUrl: './cookie.component.html',
    styleUrls: ['./cookie.component.scss'],
})
export class CookieComponent {
    @Input() isMobileView: boolean;

    constructor(
        private sharedService: SharedService
    ) { }
    public navigateTo(url: string): void {
        window.open(url, '_blank');
    }

    public acceptCookie(): void {
        localStorage.setItem('cookies', 'accepted');
        this.sharedService.setCookieAccepts();
    }
}