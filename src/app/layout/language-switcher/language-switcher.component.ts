import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent implements OnInit {
  public languages = [
    { id: 'es', name: 'Español', flag: 'co' },
    { id: 'en', name: 'English', flag: 'us' },
    { id: 'ja', name: '日本語', flag: 'jp' },
    { id: 'pt', name: 'Português', flag: 'pt' },
  ];

  public selectedLanguage: string;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.loadLanguage();
  }

  changeLanguage(language: string) {
    this.translateService.use(language);
    localStorage.setItem('lang', language);
    this.loadLanguage();
  }

  get currentLanguage() {
    return this.languages.find((lang) => lang.id === this.selectedLanguage)
      .name;
  }

  get currentFlag() {
    return this.languages.find((lang) => lang.id === this.selectedLanguage)
      .flag;
  }

  loadLanguage() {
    this.selectedLanguage = localStorage.getItem('lang');
  }
}
