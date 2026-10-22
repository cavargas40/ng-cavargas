import { Component, Input } from '@angular/core';
import { TimelineMap } from 'app/core/constants/resume.constants';

@Component({
  standalone: false,
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss'],
})
export class TimeLineComponent {
  @Input() timeline: TimelineMap = {};

  get formattedTimeline(): string[] {
    return Object.keys(this.timeline || {});
  }
}
