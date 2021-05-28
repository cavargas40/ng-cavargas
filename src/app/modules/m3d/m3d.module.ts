import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { M3dRoutingModule } from './m3d-routing.module';
import { M3dComponent } from './m3d.component';
import { EngineComponent } from './engine/engine.component';


@NgModule({
  declarations: [
    M3dComponent,
    EngineComponent
  ],
  imports: [
    CommonModule,
    M3dRoutingModule
  ]
})
export class M3dModule { }
