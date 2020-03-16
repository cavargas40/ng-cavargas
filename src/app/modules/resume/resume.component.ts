import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RESUME_EXPERIENCE_TIMELINE } from '../../utils/constants/resume.constants';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements OnInit {
  public experienceTimeLine: any = RESUME_EXPERIENCE_TIMELINE;

  constructor() {}

  ngOnInit(): void {}
}
