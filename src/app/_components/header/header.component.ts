import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollPosition(name:string){
    const divToScroll = document.getElementById(name);
    divToScroll?.scrollIntoView(true);
  }
}
