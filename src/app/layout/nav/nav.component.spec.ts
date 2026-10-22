import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MockComponent } from 'ng-mocks';

import { NavComponent } from './nav.component';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent, MockComponent(LanguageSwitcherComponent)],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and render navigation items', () => {
    expect(component).toBeTruthy();
    const links = fixture.nativeElement.querySelectorAll('.navbar__link');
    expect(links.length).toBe(4);
  });

  it('should toggle mobile menu and update activeSection on scrollToSection', () => {
    component.toggleMobileMenu();
    expect(component.mobileMenuOpen).toBe(true);

    component.scrollToSection('portfolio');
    expect(component.activeSection).toBe('portfolio');
    expect(component.mobileMenuOpen).toBe(false);
  });
});
