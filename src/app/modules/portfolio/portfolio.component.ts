import { Component } from '@angular/core';
import {
  AI_HARNESS_WORKFLOW_STEPS,
  AiHarnessTrace,
  AiWorkflowStep,
  CAPABILITY_PILLARS,
  CapabilityPillar,
  CaseStudyCategory,
  CaseStudyItem,
  ENGINEERING_CASE_STUDIES,
} from 'app/core/constants/resume.constants';

export interface PortfolioFilterOption {
  id: CaseStudyCategory;
  labelKey: string;
}

@Component({
  standalone: false,
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  public readonly workflowSteps: AiWorkflowStep[] = AI_HARNESS_WORKFLOW_STEPS;
  public readonly capabilityPillars: CapabilityPillar[] = CAPABILITY_PILLARS;
  public readonly caseStudies: CaseStudyItem[] = ENGINEERING_CASE_STUDIES;
  public readonly filters: PortfolioFilterOption[] = [
    { id: 'all', labelKey: 'PORTFOLIO.FILTERS.ALL' },
    { id: 'ai', labelKey: 'PORTFOLIO.FILTERS.AI' },
    { id: 'distributed', labelKey: 'PORTFOLIO.FILTERS.DISTRIBUTED' },
    { id: 'fullstack', labelKey: 'PORTFOLIO.FILTERS.FULLSTACK' },
  ];
  public selectedCategory: CaseStudyCategory = 'all';
  public selectedStepIndex: number = 0;

  get currentTrace(): AiHarnessTrace {
    return (
      this.workflowSteps[this.selectedStepIndex]?.trace ||
      this.workflowSteps[0].trace
    );
  }

  get filteredCaseStudies(): CaseStudyItem[] {
    if (this.selectedCategory === 'all') {
      return this.caseStudies;
    }
    return this.caseStudies.filter(
      (item) => item.category === this.selectedCategory
    );
  }

  selectStep(index: number): void {
    this.selectedStepIndex = index;
  }

  selectCategory(category: CaseStudyCategory): void {
    this.selectedCategory = category;
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }
}
