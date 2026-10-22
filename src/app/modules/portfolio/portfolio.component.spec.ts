import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from 'app/shared/shared.module';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioComponent],
      imports: [SharedModule, TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and render AI workflow steps and engineering case studies without dead portfolio.cavargas.com links', () => {
    expect(component).toBeTruthy();
    expect(component.workflowSteps.length).toBe(4);
    expect(component.caseStudies.length).toBe(4);

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.portfolio__step').length).toBe(4);
    expect(compiled.querySelectorAll('.portfolio__card').length).toBe(4);
    expect(compiled.innerHTML).not.toContain('portfolio.cavargas.com');
  });

  it('should update live artifact inspector on stage selection', () => {
    expect(component.selectedStepIndex).toBe(0);
    expect(component.currentTrace.title).toContain('config.yaml');

    component.selectStep(1);
    fixture.detectChanges();

    expect(component.selectedStepIndex).toBe(1);
    expect(component.currentTrace.title).toContain('specs/engineering-case-studies-and-ai/spec.md');

    const compiled = fixture.nativeElement as HTMLElement;
    const inspectorCode = compiled.querySelector('.portfolio__inspector-code');
    expect(inspectorCode?.textContent).toContain('Requirement');
  });

  it('should filter case studies by category', () => {
    component.selectCategory('ai');
    fixture.detectChanges();
    expect(component.filteredCaseStudies.length).toBe(1);
    expect(component.filteredCaseStudies[0].id).toBe('spec-driven-ai-harness');

    component.selectCategory('all');
    fixture.detectChanges();
    expect(component.filteredCaseStudies.length).toBe(4);
  });

  it('should open a link', () => {
    spyOn(window, 'open');

    component.goToLink('https://github.com/cavargas40/ng-cavargas');

    expect(window.open).toHaveBeenCalledWith(
      'https://github.com/cavargas40/ng-cavargas',
      '_blank'
    );
  });
});
