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
    if(name === 'Home'){
      scrollTo(0,0)
    }else{
      divToScroll?.scrollIntoView({
        behavior: 'smooth'
      });
    };

    // close hamburger list after clicked
    var toggle = <HTMLInputElement> document.getElementById('toggle-menu');
    toggle.checked = false;
  }
}
