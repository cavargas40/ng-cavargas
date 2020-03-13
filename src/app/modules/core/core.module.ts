import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

import { NavbarComponent } from './navbar/navbar.component';
import { NavItemComponent } from './navbar/nav-item/nav-item.component';
import { NavUserComponent } from './navbar/nav-user/nav-user.component';
import { NavToolbarComponent } from './navbar/nav-toolbar/nav-toolbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavItemComponent,
    NavUserComponent,
    NavToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    NavUserComponent,
    NavItemComponent,
  ]
})
export class CoreModule {}
