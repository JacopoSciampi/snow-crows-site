import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CookieComponent } from './shared/components/cookie/cookie.component';
import { HomeInfoComponent } from './shared/components/_home/_home/info/home.info.component';

import { SharedService } from './shared/service/shared.service';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        NavbarComponent,
        CookieComponent,
        HomeInfoComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [
        SharedService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
