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

  it('should get the currentLanguage', () => {
    const language = 'pt';
    component.selectedLanguage = language;
    component.changeLanguage();

    expect(component.currentLanguage).toBe('Português');
  });

  it('should get the currentFlag', () => {
    const language = 'ja';
    component.selectedLanguage = language;
    component.changeLanguage();

    expect(component.currentFlag).toBe('jp');
  });
});
