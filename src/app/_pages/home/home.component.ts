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
      name: 'GRAPHIC DESIGNER',
      description:
        'Designing creative content for online campaigns, print ads, websites, and even videos.',
      icon: 'fa-solid fa-photo-film',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
