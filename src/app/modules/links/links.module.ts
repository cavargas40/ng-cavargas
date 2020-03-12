import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LinksComponent],
  imports: [CommonModule, LinksRoutingModule, SharedModule]
})
export class LinksModule {}
