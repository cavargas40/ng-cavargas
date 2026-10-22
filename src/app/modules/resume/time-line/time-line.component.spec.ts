import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { TimeLineComponent } from './time-line.component';
import { RESUME_EXPERIENCE_TIMELINE } from 'app/core/constants/resume.constants';

describe('TimeLineComponent', () => {
  let component: TimeLineComponent;
  let fixture: ComponentFixture<TimeLineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TimeLineComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineComponent);
    component = fixture.componentInstance;
    component.timeline = RESUME_EXPERIENCE_TIMELINE;
    fixture.detectChanges();
  });

  it('should create and render timeline entries with full role descriptions', () => {
    expect(component).toBeTruthy();
    expect(component.formattedTimeline.length).toBeGreaterThan(0);

    const compiled = fixture.nativeElement as HTMLElement;
    const descriptions = compiled.querySelectorAll('.timeline__description');
    expect(descriptions.length).toBe(component.formattedTimeline.length);
    expect(descriptions[0].textContent).toContain('RESUME.TIME_LINE.EXPERIENCE.2020.DETAIL');
  });
});
