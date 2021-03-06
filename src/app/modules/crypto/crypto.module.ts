import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoRoutingModule } from './crypto-routing.module';
import { CryptoComponent } from './crypto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CryptoComponent],
  imports: [
    CommonModule,
    CryptoRoutingModule,
    FormsModule
  ]
})
export class CryptoModule { }
