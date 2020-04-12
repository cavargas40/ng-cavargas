import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgsRevealModule } from 'ngx-scrollreveal';

import { CoreModule } from 'app/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createTranslateLoader } from './core/config/translations';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { LanguageSwitcherComponent } from './layout/language-switcher/language-switcher.component';
import { HeaderComponent } from './layout/header/header.component';
import { AboutMeModule } from './modules/about-me/about-me.module';
import { ResumeModule } from './modules/resume/resume.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { ContactModule } from './modules/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    FooterComponent,
    NavComponent,
    LanguageSwitcherComponent,
    HeaderComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgsRevealModule,
    AboutMeModule,
    ResumeModule,
    PortfolioModule,
    ContactModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
