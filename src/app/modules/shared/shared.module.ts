import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';

import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { DividerComponent } from './divider/divider.component';
import { SkillBarComponent } from './skill-bar/skill-bar.component';

@NgModule({
  declarations: [
    UnderConstructionComponent,
    DividerComponent,
    SkillBarComponent
  ],
  imports: [CommonModule, MatDividerModule, MatProgressBarModule, MatCardModule],
  exports: [UnderConstructionComponent, DividerComponent, SkillBarComponent]
})
export class SharedModule {}
