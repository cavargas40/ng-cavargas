import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavItemComponent } from './navbar/nav-item/nav-item.component';
import { NavUserComponent } from './navbar/nav-user/nav-user.component';

@NgModule({
  declarations: [NavbarComponent, NavItemComponent, NavUserComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [NavbarComponent, NavUserComponent]
})
export class CoreModule {}
