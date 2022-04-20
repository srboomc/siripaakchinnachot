import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
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

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };

  portfolios: any = [
    {
      id: 1,
      name: 'A1CE Mobile application',
      category: 'application',
      image: '../../../assets/images/A1CE.png',
      link: '#',
    },
    {
      id: 2,
      name: 'Alinea Bkk',
      category: 'website',
      image: '../../../assets/images/Alinea.png',
      link: 'https://alineabkk.netlify.app',
    },
    {
      id: 3,
      name: 'Intlab',
      category: 'website',
      image: '../../../assets/images/Intlab.png',
      link: '#',
    },
    {
      id: 4,
      name: 'Interactive Cozmo',
      category: 'Internet Of Things',
      image: '../../../assets/images/unavailable_image_placeholder.png',
      link: 'https://www.youtube.com/watch?v=ZjOdVatHVoQ&list=PLa8wyslUO1luCs5ThOqLlsp9B1bERSKh6&index=22&ab_channel=TagunJivasitthikul',
    },
    {
      id: 5,
      name: 'Automatic adjust table',
      category: 'Internet Of Things',
      image: '../../../assets/images/unavailable_image_placeholder.png',
      link: 'https://cie.kmitl.ac.th/news/cie-students-project-series-ep-3-smart-office-table/',
    },
    {
      id: 6,
      name: 'Automatic check attendance',
      category: 'Internet Of Things',
      image: '../../../assets/images/unavailable_image_placeholder.png',
      link: '#',
    },
    {
      id: 7,
      name: 'Learning Course website design',
      category: 'Design',
      image: '../../../assets/images/Course.png',
      link: 'https://www.figma.com/file/hVagusrRNa0iLv3bckQ4Af/SiripaakChinnachot_61011334?node-id=0%3A1',
    },
    {
      id: 8,
      name: 'Smart piggy bank',
      category: 'Internet Of Things',
      image: '../../../assets/images/unavailable_image_placeholder.png',
      link: 'https://www.youtube.com/watch?v=efmyejVVIIs&list=PLa8wyslUO1luCs5ThOqLlsp9B1bERSKh6&index=4&ab_channel=TagunJivasitthikul',
    },
    {
      id: 9,
      name: 'Zombie survival game',
      category: 'Virtual Reality',
      image: '../../../assets/images/unavailable_image_placeholder.png',
      link: '#',
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

  onNavigate(link: string) {
    if (link !== '#') {
      window.open(link, '_blank');
    }
  }
}
