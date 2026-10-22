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
    { id: 'pt', name: 'Português', flag: 'pt' },
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
    localStorage.setItem('lang', this.selectedLanguage);
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
    this.selectedLanguage = localStorage.getItem('lang') || 'en';
  }
}
