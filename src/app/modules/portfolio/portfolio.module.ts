import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}
