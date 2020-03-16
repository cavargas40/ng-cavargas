import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {
  @Input() timeline: any = {};

  constructor() {}

  ngOnInit(): void {}

  get formattedTimeline() {
    return Object.keys(this.timeline);
  }
}
