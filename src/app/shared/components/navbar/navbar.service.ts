import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class NavbarService {
    private $mobileView = new Subject<boolean>();
    public mobileViewEvent = this.$mobileView.asObservable();

    public setIsMobileView(isMobileView: boolean): void {
        this.$mobileView.next(isMobileView);
    }
}