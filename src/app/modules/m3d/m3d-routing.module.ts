import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { M3dComponent } from './m3d.component';

const routes: Routes = [{ path: '', component: M3dComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class M3dRoutingModule { }
