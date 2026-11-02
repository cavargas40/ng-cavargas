import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LanguageSwitcherComponent } from './language-switcher.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('LanguageSwitcherComponent', () => {
  let component: LanguageSwitcherComponent;
  let fixture: ComponentFixture<LanguageSwitcherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageSwitcherComponent],
      imports: [TranslateModule.forRoot()],
      providers: [TranslateService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the language', () => {
    const language = 'ja';
    component.selectedLanguage = language;
    component.changeLanguage();

    expect(localStorage.getItem('lang')).toBe(language);
  });

  it('should have 3 active languages: en, es, ja', () => {
    expect(component.languages.length).toBe(3);
    expect(component.languages.map((l) => l.id)).toEqual(['en', 'es', 'ja']);
  });

  it('should get the currentLanguage', () => {
    const language = 'es';
    component.selectedLanguage = language;
    component.changeLanguage();

    expect(component.currentLanguage).toBe('Español');
  });

  it('should get the currentFlag', () => {
    const language = 'ja';
    component.selectedLanguage = language;
    component.changeLanguage();

    expect(component.currentFlag).toBe('jp');
  });

  it('should migrate legacy pt or invalid locale in localStorage to en', () => {
    localStorage.setItem('lang', 'pt');
    component.loadLanguage();
    expect(component.selectedLanguage).toBe('en');
    expect(localStorage.getItem('lang')).toBe('en');

    localStorage.setItem('lang', 'invalid-xyz');
    component.loadLanguage();
    expect(component.selectedLanguage).toBe('en');
    expect(localStorage.getItem('lang')).toBe('en');
  });
});
