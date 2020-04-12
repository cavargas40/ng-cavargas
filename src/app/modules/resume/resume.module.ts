import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { SharedModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { TimeLineComponent } from './time-line/time-line.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillBarComponent } from 'app/modules/resume/skills/skill-bar/skill-bar.component';

@NgModule({
  declarations: [ResumeComponent, TimeLineComponent, SkillsComponent, SkillBarComponent],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
    SharedModule,
  ],
  exports: [ResumeComponent],
})
export class ResumeModule {}
