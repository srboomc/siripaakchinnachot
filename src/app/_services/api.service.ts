import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competency } from '../_model/Competency';
import { Portfolio } from '../_model/Portfolio';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPortfolio(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>('../../assets/db/portfolio.json');
  }

  getCompetency(): Observable<Competency[]> {
    return this.http.get<Competency[]>('../../assets/db/competency.json');
  }
}
