import { Component } from '@angular/core';

import {
  RESUME_EXPERIENCE_TIMELINE,
  RESUME_EDUCATION_TIMELINE,
  TimelineMap,
} from 'app/core/constants/resume.constants';

@Component({
  standalone: false,
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  public experienceTimeLine: TimelineMap = RESUME_EXPERIENCE_TIMELINE;
  public educationTimeLine: TimelineMap = RESUME_EDUCATION_TIMELINE;
  public selectedTab = 'experience';

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
