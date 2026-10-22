import { Component } from '@angular/core';

export interface NavItem {
  id: string;
  code?: string;
  labelKey: string;
}

@Component({
  standalone: false,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public mobileMenuOpen: boolean = false;
  public activeSection: string = 'hero';

  public readonly navItems: NavItem[] = [
    { id: 'about-me', code: '01', labelKey: 'MENU.ABOUT_ME' },
    { id: 'portfolio', code: '02', labelKey: 'MENU.PORTFOLIO' },
    { id: 'resume', code: '03', labelKey: 'MENU.RESUME' },
    { id: 'contact', code: '04', labelKey: 'MENU.CONTACT' },
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  scrollToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.activeSection = sectionId;
    this.mobileMenuOpen = false;
    const target = document.getElementById(sectionId);
    if (target) {
      target.classList?.add?.('is-active');
      if (typeof target.querySelectorAll === 'function') {
        target
          .querySelectorAll('.story-chapter')
          .forEach((c) => c.classList?.add?.('is-active'));
      }
      if (typeof target.scrollIntoView === 'function') {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
