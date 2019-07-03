import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-home-info',
    templateUrl: './home.info.component.html',
    styleUrls: ['./home.info.component.scss'],
})
export class HomeInfoComponent {
    // GENERAL STUFF
    @Input() isMobileView;

    public pathImageBuilds = "./assets/home/builds.png";
    public pathImagePotions = "./assets/home/new-to-raids.png";
    public pathImageNewToRaids = "./assets/home/potions.png";
    public pathImageSocial = "./assets/home/social.png";

    public containerAboutBg = "./assets/bg-about.png";

    public socialUrl = "https://discord.gg/qTs63YH";

    public navigateTo(isExternalUrl: boolean, url: string): void {
        if(isExternalUrl) {
            window.open(url, '_blank');
        }
    }
}