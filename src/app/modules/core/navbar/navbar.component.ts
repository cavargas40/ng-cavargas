import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent implements OnInit {
  @Input() opened: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
