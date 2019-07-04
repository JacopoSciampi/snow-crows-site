import { Component, Input } from '@angular/core';
import { footerAnimations } from 'src/app/config/footer/footer-animations';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    animations: footerAnimations
})
export class FooterComponent {
    // GENERAL STUFF
    @Input() isMobileView;
    lastClickType = null;

    public photoUrl1 = "./assets/home/members/axias.png";
    public photoUrl2 = "./assets/home/members/target.png";
    public photoUrl3 = "./assets/home/members/yui.png";

    public photoDiscord = "./assets/icons/discord.png";
    public photoYoutube = "./assets/icons/youtube.png";
    public photoUser    = "./assets/icons/user.png";

    // ANIMATION STUFF
    public animation1: string;
    public animation2: string;
    public animation3: string;
    public animation4: string;
    public animation5: string;
    public animation6: string;
    public animation7: string;

    public modalOffsetLeft1 = - 200;
    public modalOffsetLeft2 = - 200;
    public modalOffsetLeft3 = - 200;
    public modalOffsetLeft4 = - 200;
    public modalOffsetLeft5 = - 200;
    public modalOffsetLeft6 = - 200;
    public modalOffsetLeft7 = - 200;

    public modalOffsetTop1 = - 200;
    public modalOffsetTop2 = - 200;
    public modalOffsetTop3 = - 200;
    public modalOffsetTop4 = - 200;
    public modalOffsetTop5 = - 200;
    public modalOffsetTop6 = - 200;
    public modalOffsetTop7 = - 200;

    public openCardDetail(type: number, event: any): void {
        this.resetCards();

        if(type === 0) {
            if(this.lastClickType == type) {
                this.resetCards();
                this.lastClickType = null;
                return;
            }

            this.animation1 = (this.animation1 === 'out' || typeof(this.animation1) !== 'string')? 'in' : 'out';
            this.animation2 = 'out';
            this.animation3 = 'out';
            this.animation4 = 'out';
            this.animation5 = 'out';
            this.animation6 = 'out';
            this.animation7 = 'out';

            this.modalOffsetLeft1 = event.currentTarget.offsetLeft - 30;
            this.modalOffsetTop1 = event.currentTarget.offsetTop - 187;
        } else if(type === 1) {
            this.animation1 = 'out'
            this.animation2 = (this.animation2 === 'out' || typeof(this.animation2) !== 'string')? 'in' : 'out';
            this.animation3 = 'out';
            this.animation4 = 'out';
            this.animation5 = 'out';
            this.animation6 = 'out';
            this.animation7 = 'out';

            this.modalOffsetLeft2 = event.currentTarget.offsetLeft - 30;
            this.modalOffsetTop2 = event.currentTarget.offsetTop - 187;
        }

        this.lastClickType = type;

    }

    private resetCards(): void {
        this.animation1 = 'out';
        this.animation2 = 'out';
        this.animation3 = 'out';
        this.animation4 = 'out';
        this.animation5 = 'out';
        this.animation6 = 'out';
        this.animation7 = 'out';

        this.modalOffsetLeft1 = - 200;
        this.modalOffsetLeft2 = - 200;
        this.modalOffsetLeft3 = - 200;
        this.modalOffsetLeft4 = - 200;
        this.modalOffsetLeft5 = - 200;
        this.modalOffsetLeft6 = - 200;
        this.modalOffsetLeft7 = - 200;

    }

    public openLink(url: string): void {
        window.open(url, '_blank');
    }

}