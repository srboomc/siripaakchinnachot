import { Component, OnInit } from '@angular/core';
import { Competency } from 'src/app/_model/Competency';
import { Skill } from 'src/app/_model/Skill';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isShowModal: boolean = false;
  showImage: string = '';

  competencies: Competency[] = [
    {
      id: 1,
      name: 'DEVELOPMENT',
      description:
        'Developing frontend and backend for the websites and mobile applications which I mainly use Angular, React Native and Node js.',
      icon: 'fa-solid fa-code',
    },
    {
      id: 2,
      name: 'WEB DESIGN',
      description:
        'Plan, design, and create a new website or mobile application by using Figma before developing or coding.',
      icon: 'fa-solid fa-laptop-code',
    },
    {
      id: 3,
      name: 'GRAPHIC DESIGN',
      description:
        'Designing creative content for online campaigns, print ads, modifying images and even videos by using Adobe Photoshop and Premiere Pro.',
      icon: 'fa-solid fa-photo-film',
    },
    {
      id: 4,
      name: 'MICROSOFT OFFICE',
      description:
        'Doing some document and management on MS Word, MS Excel, Google sheet, and database on MS Access',
      icon: 'fa-solid fa-file',
    },
    {
      id: 5,
      name: 'Data Analytics',
      description:
        'Basic analysing from the dataset by using Decision tree, Random forest, Naive Bayes, Linear regression, and logistic regression',
      icon: 'fa-solid fa-chart-line',
    },
  ];

  navList: Array<string> = ['WHO AM I', 'EDUCATION'];
  selected: string = 'WHO AM I';

  skills: Skill[] = [
    {
      id: 1,
      name: 'TypeScript',
      description:
        'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.',
      percent: 85,
    },
    {
      id: 2,
      name: 'JavaScript',
      description:
        'JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS',
      percent: 85,
    },
    {
      id: 3,
      name: 'HTML',
      description:
        'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
      percent: 80,
    },
    {
      id: 4,
      name: 'CSS',
      description:
        'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
      percent: 65,
    },
    {
      id: 5,
      name: 'Python',
      description:
        'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.',
      percent: 60,
    },
    {
      id: 6,
      name: 'SQL',
      description:
        'SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system.',
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

  openModal(src: string) {
    this.isShowModal = !this.isShowModal;
    this.showImage = src;
  }
}
