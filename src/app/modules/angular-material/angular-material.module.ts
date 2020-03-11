import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

const modules = [MatToolbarModule, MatSidenavModule];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class AngularMaterialModule {}
