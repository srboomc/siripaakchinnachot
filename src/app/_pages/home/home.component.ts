import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  skills: Array<any> = [
    {
      id: 1,
      category: 'COMPUTER PROGRAMMING',
      subSkills: [
        { id: 'S001', skillName: 'JavaScript & TypeScript' },
        { id: 'S002', skillName: 'HTML' },
        { id: 'S003', skillName: 'CSS' },
        { id: 'S004', skillName: 'Angular' },
        { id: 'S005', skillName: 'React' },
        { id: 'S006', skillName: 'React Native' },
        { id: 'S007', skillName: 'Python' },
        { id: 'S009', skillName: 'Java' },
        { id: 'S009', skillName: 'Google sheet' },
      ],
    },
    {
      id: 2,
      category: 'ADOBE',
      subSkills: [
        { id: 'S010', skillName: 'Photoshop' },
        { id: 'S011', skillName: 'Illustrator' },
        { id: 'S012', skillName: 'Premiere pro' },
      ],
    },
    {
      id: 3,
      category: 'MICROSOFT OFFICE',
      subSkills: [
        { id: 'S013', skillName: 'Ms Word' },
        { id: 'S014', skillName: 'Ms Excel' },
        { id: 'S015', skillName: 'Ms Access' },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
