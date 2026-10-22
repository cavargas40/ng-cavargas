import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { RevealOnScrollDirective } from './reveal-on-scroll.directive';
import { MatrixDecodeDirective } from './matrix-decode.directive';

@NgModule({
  declarations: [RevealOnScrollDirective, MatrixDecodeDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    RevealOnScrollDirective,
    MatrixDecodeDirective,
  ],
})
export class SharedModule {}
