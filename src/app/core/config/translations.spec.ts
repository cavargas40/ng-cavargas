import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import {
  TranslateModule,
  TranslateService,
  TranslateLoader,
} from '@ngx-translate/core';

import { createTranslateLoader, languageConfiguration } from './translations';
import enTranslations from '../../../assets/i18n/en.json';
import esTranslations from '../../../assets/i18n/es.json';
import ptTranslations from '../../../assets/i18n/pt.json';
import jaTranslations from '../../../assets/i18n/ja.json';

const flattenKeys = (obj: Record<string, any>, prefix = ''): string[] =>
  Object.keys(obj)
    .sort()
    .reduce((acc: string[], key: string) => {
      const path = prefix ? `${prefix}.${key}` : key;
      const value = obj[key];
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        return acc.concat(flattenKeys(value, path));
      }
      acc.push(path);
      return acc;
    }, []);

describe('translations config', () => {
  beforeEach(waitForAsync(() => {
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

  it('should maintain identical translation key hierarchy across en, es, pt, and ja without AGE', () => {
    const enKeys = flattenKeys(enTranslations);
    const esKeys = flattenKeys(esTranslations);
    const ptKeys = flattenKeys(ptTranslations);
    const jaKeys = flattenKeys(jaTranslations);

    expect(esKeys).toEqual(enKeys);
    expect(ptKeys).toEqual(enKeys);
    expect(jaKeys).toEqual(enKeys);
    expect(enKeys).not.toContain('ABOUT_ME.AGE');
    expect(enKeys).toContain('CAPABILITIES.PILLARS.AI.TITLE');
    expect(enKeys).toContain('PORTFOLIO.AI_SHOWCASE.TITLE');
  });
});

const defineNavigatorLanguage = (lang: string) => {
  Object.defineProperty(navigator, 'language', {
    get: () => lang,
    configurable: true,
  });
};
