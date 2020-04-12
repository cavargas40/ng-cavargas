import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {
  RESUME_EXPERIENCE_TIMELINE,
  RESUME_EDUCATION_TIMELINE,
} from 'app/core/constants/resume.constants';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ResumeComponent implements OnInit {
  public experienceTimeLine: any = RESUME_EXPERIENCE_TIMELINE;
  public educationTimeLine: any = RESUME_EDUCATION_TIMELINE;
  public selectedTab: string = 'experience';

  constructor() {}

  ngOnInit(): void {}

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
