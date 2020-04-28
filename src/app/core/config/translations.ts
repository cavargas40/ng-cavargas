import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function languageConfiguration(translateService: TranslateService) {
  const defaultLang = 'en';
  if (!localStorage.getItem('lang')) {
    const [lang] = navigator.language.split('-');
    const selectedLang = /(es|en|pt|ja)/gi.test(lang) ? lang : defaultLang;
    translateService.addLangs(['es', 'en', 'pt', 'ja']);
    translateService.use(selectedLang);
    localStorage.setItem('lang', selectedLang);
  } else {
    translateService.use(localStorage.getItem('lang'));
  }
}
