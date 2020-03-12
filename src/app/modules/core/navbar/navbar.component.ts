import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent implements OnInit {
  @Input() opened: boolean = true;
  public screenWidth: number;

  constructor() {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }

  ngOnInit(): void {}

  get isBigScreen(): boolean {
    return this.screenWidth > 900;
  }
}
