import { async, TestBed } from '@angular/core/testing';

import { createTranslateLoader, languageConfiguration } from './translations';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
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

    const translateService = TestBed.inject(TranslateService);
    languageConfiguration(translateService);

    expect(localStorage.getItem('lang')).toBe('en');
  });

  it('Should select a default language if the user is not from a language defined', () => {
    console.log('before', navigator.language);
    Object.defineProperty(navigator, 'language', {
      get: () => 'de-DE',
    });

    localStorage.removeItem('lang');

    console.log('after', navigator.language);

    const translateService = TestBed.inject(TranslateService);
    languageConfiguration(translateService);

    expect(localStorage.getItem('lang')).toBe('en');
  });

  it('should load translate language as english', () => {
    localStorage.setItem('lang', 'en');

    const translateService = TestBed.inject(TranslateService);
    languageConfiguration(translateService);
    const lang = translateService.currentLang;

    expect(lang).toBe('en');
  });
});
