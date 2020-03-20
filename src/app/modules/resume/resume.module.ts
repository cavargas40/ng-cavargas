import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { TimeLineComponent } from './time-line/time-line.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [ResumeComponent, TimeLineComponent, SkillsComponent],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      extend: true
    }),
    MatTabsModule,
    MatTooltipModule
  ]
})
export class ResumeModule {}
