import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class SharedService {
    private $cookie = new Subject<boolean>();
    public cookieEvent = this.$cookie.asObservable();

    public setCookieAccepts(): void {
        this.$cookie.next(true);
    }
}