import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavbarComponent } from './navbar/navbar.component';
import { NavItemComponent } from './navbar/nav-item/nav-item.component';
import { NavUserComponent } from './navbar/nav-user/nav-user.component';

@NgModule({
  declarations: [NavbarComponent, NavItemComponent, NavUserComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule
  ],
  exports: [NavbarComponent, NavUserComponent, NavItemComponent]
})
export class CoreModule {}
