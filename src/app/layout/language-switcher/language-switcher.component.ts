import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  standalone: false,
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent implements OnInit {
  public languages = [
    { id: 'en', name: 'English', flag: 'us' },
    { id: 'es', name: 'Español', flag: 'co' },
    { id: 'ja', name: '日本語', flag: 'jp' },
  ];

  public selectedLanguage: string = 'en';

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.loadLanguage();
  }

  selectLanguage(langId: string): void {
    this.selectedLanguage = langId;
    this.changeLanguage();
  }

  changeLanguage(): void {
    this.translateService.use(this.selectedLanguage);
    try {
      localStorage.setItem('lang', this.selectedLanguage);
    } catch {
      // Ignore storage write error in private environments
    }
    this.loadLanguage();
  }

  get currentLanguage(): string {
    const found = this.languages.find(
      (lang) => lang.id === this.selectedLanguage
    );
    return found ? found.name : 'English';
  }

  get currentFlag(): string {
    const found = this.languages.find(
      (lang) => lang.id === this.selectedLanguage
    );
    return found ? found.flag : 'us';
  }

  loadLanguage(): void {
    let storedLang: string | null = null;
    try {
      storedLang = localStorage.getItem('lang');
    } catch {
      storedLang = null;
    }

    const isValid = this.languages.some((lang) => lang.id === storedLang);
    if (isValid && storedLang) {
      this.selectedLanguage = storedLang;
    } else {
      this.selectedLanguage = 'en';
      try {
        localStorage.setItem('lang', 'en');
      } catch {
        // Ignore storage write error
      }
    }
  }
}
