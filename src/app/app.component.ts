import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isMobileview = false;

  public ngOnInit(): void {
    this.manageDimensions();
  }

  @HostListener("window:resize", ["$event"])
  manageDimensions() {
    (window.innerWidth <= 991) ? this.isMobileview = true : this.isMobileview = false;
  }
}
