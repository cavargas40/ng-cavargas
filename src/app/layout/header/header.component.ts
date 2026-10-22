import { Component } from '@angular/core';
import {
  AI_HARNESS_WORKFLOW_STEPS,
  AiWorkflowStep,
} from 'app/core/constants/resume.constants';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public readonly workflowSteps: AiWorkflowStep[] = AI_HARNESS_WORKFLOW_STEPS;
  public readonly coreStack: string[] = [
    'Angular 19',
    'TypeScript',
    'Node.js',
    'Golang',
    'OpenSpec AI Harnesses',
    'Microservices',
  ];
}
