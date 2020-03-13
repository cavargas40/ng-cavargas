import { NgModule } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';

import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { DividerComponent } from './divider/divider.component';

@NgModule({
  declarations: [UnderConstructionComponent, DividerComponent],
  imports: [MatDividerModule],
  exports: [UnderConstructionComponent, DividerComponent]
})
export class SharedModule {}
