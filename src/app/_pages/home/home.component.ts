import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { Competency } from 'src/app/_model/Competency';
import { Portfolio } from 'src/app/_model/Portfolio';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  competencies: Competency[] = [];
  portfolios: Portfolio[] = [];

  navList: Array<string> = ['WHO AM I', 'EDUCATION'];
  selected: string = 'WHO AM I';

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
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
      760: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  async getAllData() {
    this.portfolios = await this.api.getPortfolio().toPromise();
    this.competencies = await this.api.getCompetency().toPromise();
  }

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
