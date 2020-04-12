import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}
