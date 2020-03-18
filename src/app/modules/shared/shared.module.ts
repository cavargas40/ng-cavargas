import { NgModule } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { DividerComponent } from './divider/divider.component';
import { SkillBarComponent } from './skill-bar/skill-bar.component';

@NgModule({
  declarations: [UnderConstructionComponent, DividerComponent, SkillBarComponent],
  imports: [MatDividerModule, MatProgressBarModule],
  exports: [UnderConstructionComponent, DividerComponent]
})
export class SharedModule {}
