import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'siripaakchinnachot';

  windowScrolled: boolean = false;

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset >= 450;
    });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
