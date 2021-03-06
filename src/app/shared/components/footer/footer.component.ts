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
    public photoUrl4 = "./assets/home/members/derpy.png";
    public photoUrl5 = "./assets/home/members/fallen.png";
    public photoUrl6 = "./assets/home/members/kiwi.png";
    public photoUrl7 = "./assets/home/members/muju.png";
    public photoUrl8 = "./assets/home/members/jeko.png";

    public photoDiscord = "./assets/icons/discord.png";
    public photoYoutube = "./assets/icons/youtube.png";
    public photoUser    = "./assets/icons/user.png";
    public photoTwitch  = "./assets/icons/twitch.png";

    public blurUrl1 = "./assets/home/members/axiasBlur.png";
    public blurUrl2 = "./assets/home/members/targetBlur.png";
    public blurUrl3 = "./assets/home/members/yuiBlur.png";
    public blurUrl4 = "./assets/home/members/derpyBlur.png";
    public blurUrl5 = "./assets/home/members/fallenBlur.png";
    public blurUrl6 = "./assets/home/members/kiwiBlur.png";
    public blurUrl7 = "./assets/home/members/mujuBlur.png";
    public blurUrl8 = "./assets/home/members/jekoBlur.png";

    public patreonImageUrl = "./assets/buttons/patreon_button.jpg";

    // ANIMATION STUFF
    public animation1: string;
    public animation2: string;
    public animation3: string;
    public animation4: string;
    public animation5: string;
    public animation6: string;
    public animation7: string;
    public animation8: string;

    public modalOffsetLeft1 = - 200;
    public modalOffsetLeft2 = - 200;
    public modalOffsetLeft3 = - 200;
    public modalOffsetLeft4 = - 200;
    public modalOffsetLeft5 = - 200;
    public modalOffsetLeft6 = - 200;
    public modalOffsetLeft7 = - 200;
    public modalOffsetLeft8 = - 200;

    public modalOffsetTop1 = - 200;
    public modalOffsetTop2 = - 200;
    public modalOffsetTop3 = - 200;
    public modalOffsetTop4 = - 200;
    public modalOffsetTop5 = - 200;
    public modalOffsetTop6 = - 200;
    public modalOffsetTop7 = - 200;
    public modalOffsetTop8 = - 200;

    private CheckIfCloseCardByType(type: number): boolean {
        let toReturn = false;
        if(this.lastClickType == type) {
            this.resetCards();
            this.lastClickType = null;
            toReturn = true;
        }

        return toReturn;
    }

    public openCardDetail(type: number, event: any): void {
        this.resetCards();

        if(type === 0) {
            if(this.CheckIfCloseCardByType(type)) {
                return;
            }

            this.animation1 = (this.animation1 === 'out' || typeof(this.animation1) !== 'string')? 'in' : 'out';
            this.animation2 = 'out';
            this.animation3 = 'out';
            this.animation4 = 'out';
            this.animation5 = 'out';
            this.animation6 = 'out';
            this.animation7 = 'out';
            this.animation8 = 'out';

            this.modalOffsetLeft1 = event.currentTarget.offsetLeft - 30;
            this.modalOffsetTop1 = event.currentTarget.offsetTop - 187;
        } else if(type === 1) {
            if(this.CheckIfCloseCardByType(type)) {
                return;
            }

            this.animation1 = 'out';
            this.animation2 = (this.animation2 === 'out' || typeof(this.animation2) !== 'string')? 'in' : 'out';
            this.animation3 = 'out';
            this.animation4 = 'out';
            this.animation5 = 'out';
            this.animation6 = 'out';
            this.animation7 = 'out';
            this.animation8 = 'out';

            this.modalOffsetLeft2 = event.currentTarget.offsetLeft - 30;
            this.modalOffsetTop2 = event.currentTarget.offsetTop - 187;
        } else if(type === 2) {
            if(this.CheckIfCloseCardByType(type)) {
                return;
            }

            this.animation1 = 'out';
            this.animation2 = 'out';
            this.animation3 = (this.animation3 === 'out' || typeof(this.animation3) !== 'string')? 'in' : 'out';
            this.animation4 = 'out';
            this.animation5 = 'out';
            this.animation6 = 'out';
            this.animation7 = 'out';
            this.animation8 = 'out';

            this.modalOffsetLeft3 = event.currentTarget.offsetLeft - 30;
            this.modalOffsetTop3 = event.currentTarget.offsetTop - 212;
        } else if(type === 3) {
            if(this.CheckIfCloseCardByType(type)) {
                return;
            }

            this.animation1 = 'out';
            this.animation2 = 'out';
            this.animation3 = 'out';
            this.animation4 = (this.animation4 === 'out' || typeof(this.animation4) !== 'string')? 'in' : 'out';
            this.animation5 = 'out';
            this.animation6 = 'out';
            this.animation7 = 'out';
            this.animation8 = 'out';

            this.modalOffsetLeft4 = event.currentTarget.offsetLeft - 30;
            this.modalOffsetTop4 = event.currentTarget.offsetTop - 212;
        } else if(type === 4) {
            if(this.CheckIfCloseCardByType(type)) {
                return;
            }

            this.animation1 = 'out';
            this.animation2 = 'out';
            this.animation3 = 'out';
            this.animation4 = 'out';
            this.animation5 = (this.animation5 === 'out' || typeof(this.animation5) !== 'string')? 'in' : 'out';
            this.animation6 = 'out';
            this.animation7 = 'out';
            this.animation8 = 'out';

            this.modalOffsetLeft5 = event.currentTarget.offsetLeft - 30;
            this.modalOffsetTop5 = event.currentTarget.offsetTop - 187;
        } else if(type === 5) {
            if(this.CheckIfCloseCardByType(type)) {
                return;
            }

            this.animation1 = 'out';
            this.animation2 = 'out';
            this.animation3 = 'out';
            this.animation4 = 'out';
            this.animation5 = 'out';
            this.animation6 = (this.animation6 === 'out' || typeof(this.animation6) !== 'string')? 'in' : 'out';
            this.animation7 = 'out';
            this.animation8 = 'out';

            this.modalOffsetLeft6 = event.currentTarget.offsetLeft - 30;
            this.modalOffsetTop6 = event.currentTarget.offsetTop - 162;
        } else if(type === 6) {
            if(this.CheckIfCloseCardByType(type)) {
                return;
            }

            this.animation1 = 'out';
            this.animation2 = 'out';
            this.animation3 = 'out';
            this.animation4 = 'out';
            this.animation5 = 'out';
            this.animation6 = 'out';
            this.animation7 = (this.animation7 === 'out' || typeof(this.animation7) !== 'string')? 'in' : 'out';
            this.animation8 = 'out';

            this.modalOffsetLeft7 = event.currentTarget.offsetLeft - 30;
            this.modalOffsetTop7 = event.currentTarget.offsetTop - 162;
        } else if(type === 7) {
            if(this.CheckIfCloseCardByType(type)) {
                return;
            }

            this.animation1 = 'out';
            this.animation2 = 'out';
            this.animation3 = 'out';
            this.animation4 = 'out';
            this.animation5 = 'out';
            this.animation6 = 'out';
            this.animation7 = 'out';
            this.animation8 = (this.animation8 === 'out' || typeof(this.animation8) !== 'string')? 'in' : 'out';

            this.modalOffsetLeft8 = event.currentTarget.offsetLeft - 30;
            this.modalOffsetTop8 = event.currentTarget.offsetTop - 182;
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
        this.animation8 = 'out';

        this.modalOffsetLeft1 = - 200;
        this.modalOffsetLeft2 = - 200;
        this.modalOffsetLeft3 = - 200;
        this.modalOffsetLeft4 = - 200;
        this.modalOffsetLeft5 = - 200;
        this.modalOffsetLeft6 = - 200;
        this.modalOffsetLeft7 = - 200;
        this.modalOffsetLeft8 = - 200;

    }

    public openLink(url: string): void {
        window.open(url, '_blank');
    }

}