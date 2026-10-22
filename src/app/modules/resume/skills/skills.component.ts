import { Component } from '@angular/core';
import {
  CAPABILITY_PILLARS,
  CapabilityPillar,
} from 'app/core/constants/resume.constants';

@Component({
  standalone: false,
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  public readonly pillars: CapabilityPillar[] = CAPABILITY_PILLARS;
}
