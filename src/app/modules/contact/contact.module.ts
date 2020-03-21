import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NgxCaptchaModule } from 'ngx-captcha';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      extend: true
    }),
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxCaptchaModule
  ]
})
export class ContactModule {}
