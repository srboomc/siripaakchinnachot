import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'siripaakchinnachot';

  constructor(private facebookService: FacebookService){}

  ngOnInit(): void {
    this.initFacebookService();
  }

  private initFacebookService(): void {
    const initParams: InitParams = { 
      appId: '448222067012224',
      autoLogAppEvents : true,
      xfbml:true, 
      version:'v3.2'
    };
    this.facebookService.init(initParams);
  }
}
