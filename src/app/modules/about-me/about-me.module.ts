import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  exports: [AboutMeComponent],
})
export class AboutMeModule {}
