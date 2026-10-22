import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and render 4 capability pillars including AI-Augmented Engineering without percentages', () => {
    expect(component).toBeTruthy();
    expect(component.pillars.length).toBe(4);
    expect(component.pillars[0].id).toBe('ai');

    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.capabilities-card');
    expect(cards.length).toBe(4);
    expect(compiled.textContent).toContain('Spec-Driven Development (OpenSpec)');
    expect(compiled.textContent).toContain('Agent Harnesses & Guardrails');
    expect(compiled.textContent).not.toContain('100%');
  });
});
