import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { AboutMeComponent } from './about-me.component';
import { SharedModule } from 'app/shared/shared.module';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMeComponent],
      imports: [SharedModule, TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create without age calculation and render 3 evolution eras', () => {
    expect(component).toBeTruthy();
    expect((component as any).age).toBeUndefined();
    expect(component.highlights.length).toBe(3);
    expect(component.eras.length).toBe(3);

    const compiled = fixture.nativeElement as HTMLElement;
    const eraCards = compiled.querySelectorAll('.about-me__era-card');
    expect(eraCards.length).toBe(3);
  });

  it('should render direct email link and omit Facebook link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const mailtoLink = compiled.querySelector('a[href="mailto:cavargas40@gmail.com"]');
    const facebookLink = compiled.querySelector('a[href*="facebook.com"]');

    expect(mailtoLink).toBeTruthy();
    expect(facebookLink).toBeNull();
  });
});
