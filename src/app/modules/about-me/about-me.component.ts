import { Component } from '@angular/core';
import {
  ARCHITECTURAL_ERAS,
  ArchitecturalEra,
} from 'app/core/constants/resume.constants';

export interface ProfileHighlight {
  labelKey: string;
  valueKey: string;
}

@Component({
  standalone: false,
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  public readonly email = 'cavargas40@gmail.com';
  public readonly eras: ArchitecturalEra[] = ARCHITECTURAL_ERAS;
  public readonly highlights: ProfileHighlight[] = [
    {
      labelKey: 'ABOUT_ME.EXPERIENCE_LABEL',
      valueKey: 'ABOUT_ME.EXPERIENCE_VALUE',
    },
    {
      labelKey: 'ABOUT_ME.FOCUS_LABEL',
      valueKey: 'ABOUT_ME.FOCUS_VALUE',
    },
    {
      labelKey: 'ABOUT_ME.METHODOLOGY_LABEL',
      valueKey: 'ABOUT_ME.METHODOLOGY_VALUE',
    },
  ];
}
