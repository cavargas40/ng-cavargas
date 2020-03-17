import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {
  RESUME_EXPERIENCE_TIMELINE,
  RESUME_EDUCATION_TIMELINE
} from '../../utils/constants/resume.constants';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements OnInit {
  public experienceTimeLine: any = RESUME_EXPERIENCE_TIMELINE;
  public educationTimeLine: any = RESUME_EDUCATION_TIMELINE;
  public selectedTabIndex: number = 0;
  private readonly TAB_INDEX = [
    { id: 1, name: 'experience' },
    { id: 2, name: 'education' },
    { id: 3, name: 'skills' },
    { id: 4, name: 'hobbies' }
  ];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const selectedPath = this.router.url.split('/').pop();
      this.selectedTabIndex =
        this.TAB_INDEX.find(({ name }) => name === selectedPath).id - 1;
    });
  }

  selectTab(event: any) {
    const tabInfo = this.TAB_INDEX.find(index => index.id - 1 === event);
    this.router.navigate(['resume', `${tabInfo.name}`]);
  }
}
