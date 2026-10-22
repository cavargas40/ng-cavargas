import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ResumeComponent } from './resume.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { SkillsComponent } from './skills/skills.component';
import { SharedModule } from 'app/shared/shared.module';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeComponent, TimeLineComponent, SkillsComponent],
      imports: [SharedModule, TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the tab', () => {
    component.selectTab('education');
    expect(component.selectedTab).toBe('education');
  });
});
