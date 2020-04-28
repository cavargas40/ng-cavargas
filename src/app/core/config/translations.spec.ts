import { async, TestBed } from '@angular/core/testing';

import { createTranslateLoader, languageConfiguration } from './translations';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import {
  TranslateModule,
  TranslateService,
  TranslateLoader,
} from '@ngx-translate/core';

describe('translations config', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient],
          },
        }),
        HttpClientTestingModule,
      ],
      providers: [TranslateService],
    }).compileComponents();
  }));

  it('should set language in local storage', () => {
    localStorage.removeItem('lang');

    defineNavigatorLanguage('en-US');
    const translateService = TestBed.inject(TranslateService);
    languageConfiguration(translateService);

    expect(localStorage.getItem('lang')).toBe('en');
  });

  it('should select a default language', () => {
    localStorage.removeItem('lang');

    defineNavigatorLanguage('de-DE');

    const translateService = TestBed.inject(TranslateService);
    languageConfiguration(translateService);

    expect(localStorage.getItem('lang')).toBe('en');
  });

  it('should load translate language as Spanish', () => {
    localStorage.setItem('lang', 'es');

    const translateService = TestBed.inject(TranslateService);
    languageConfiguration(translateService);
    const lang = translateService.currentLang;

    expect(lang).toBe('es');
  });

  it('should load Japanese as a currentLanguage', () => {
    localStorage.removeItem('lang');

    defineNavigatorLanguage('ja-TY');

    const translateService = TestBed.inject(TranslateService);
    languageConfiguration(translateService);
    const lang = translateService.currentLang;

    expect(lang).toBe('ja');
  });
});

const defineNavigatorLanguage = (lang: string) => {
  Object.defineProperty(navigator, 'language', {
    get: () => lang,
    configurable: true,
  });
}
