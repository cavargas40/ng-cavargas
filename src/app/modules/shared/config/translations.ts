import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function languageConfiguration(translateService: TranslateService) {
  const defaultLang = 'ja';
  if (!localStorage.getItem('lang')) {
    const [lang] = navigator.language.split('-');
    translateService.addLangs(['es', 'en', 'pt', 'ja']);
    // translateService.setDefaultLang(defaultLang);
    translateService.use(/(es|en|pt|ja|)/gi.test(lang) ? lang : defaultLang);
    translateService.use(defaultLang);
  } else {
    translateService.use(localStorage.getItem('lang'));
  }
}
