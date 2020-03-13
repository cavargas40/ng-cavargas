import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public age: number = 0;
  constructor() {}

  ngOnInit(): void {
    const dateOfBirth: Date = new Date('10/14/1991');
    this.age = this.calcualteAge(dateOfBirth);
  }

  calcualteAge(dateOfBirth: Date) {
    const ageDifMs = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(ageDifMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
