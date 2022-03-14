import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  competencies: Array<any> = [
    {
      id: 1,
      name: 'DEVELOPMENT',
      description:
        'The tasks associated with developing websites for hosting via intranet or internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.',
      icon: 'fa-solid fa-code',
    },
    {
      id: 2,
      name: 'WEB DESIGN',
      description:
        'Plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips.',
      icon: 'fa-solid fa-laptop-code',
    },
    {
      id: 3,
      name: 'GRAPHIC DESIGN',
      description:
        'Designing creative content for online campaigns, print ads, websites, and even videos.',
      icon: 'fa-solid fa-photo-film',
    },
  ];

  navList: Array<string> = ['WHO AM I', 'EDUCATION'];
  selected: string = 'WHO AM I';

  skills: Array<object | any> = [
    {
      id: 1,
      name: 'TypeScript',
      percent: 85,
    },
    {
      id: 2,
      name: 'JavaScript',
      percent: 85,
    },
    {
      id: 3,
      name: 'HTML',
      percent: 80,
    },
    {
      id: 4,
      name: 'CSS',
      percent: 65,
    },
    {
      id: 5,
      name: 'Python',
      percent: 60,
    },
    {
      id: 6,
      name: 'SQL',
      percent: 75,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  scrollPosition(name: string) {
    const divToScroll = document.getElementById(name);
    if (name === 'Home') {
      scrollTo(0, 0);
    } else {
      divToScroll?.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  }

  select(nav: string) {
    this.selected = nav;
  }
}
