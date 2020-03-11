import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { NavItemComponent } from './navbar/nav-item/nav-item.component';

const modules = [NavbarComponent, NavItemComponent];

@NgModule({
  declarations: modules,
  imports: [AngularMaterialModule, RouterModule],
  exports: modules
})
export class UIModule {}
