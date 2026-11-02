import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [TranslateModule.forRoot(), RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and render only GitHub and LinkedIn links and compute the current year', () => {
    expect(component).toBeTruthy();
    expect(component.currentYear).toBe(new Date().getFullYear());

    const links: NodeListOf<HTMLAnchorElement> =
      fixture.nativeElement.querySelectorAll('.footer__link');
    expect(links.length).toBe(2);
    expect(links[0].textContent?.trim()).toBe('GitHub');
    expect(links[0].href).toBe('https://github.com/cavargas40');
    expect(links[1].textContent?.trim()).toBe('LinkedIn');
    expect(links[1].href).toContain('linkedin.com');

    const copy = fixture.nativeElement.querySelector('.footer__copy');
    expect(copy?.textContent).toContain(new Date().getFullYear().toString());
  });
});
