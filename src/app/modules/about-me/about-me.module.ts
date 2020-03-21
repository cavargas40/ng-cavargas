import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      extend: true
    }),
    FlexLayoutModule
  ]
})
export class AboutMeModule {}
