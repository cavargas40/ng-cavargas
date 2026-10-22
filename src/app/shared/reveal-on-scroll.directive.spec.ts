import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevealOnScrollDirective } from './reveal-on-scroll.directive';

@Component({
  standalone: false,
  template: `
    <div id="target" appReveal [revealDelay]="120">Content</div>
    <div id="chapter-target" class="story-chapter" appReveal>Chapter Content</div>
  `,
})
class HostComponent {}

describe('RevealOnScrollDirective', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent, RevealOnScrollDirective],
    }).compileComponents();
  });

  it('should add reveal-item class and apply revealDelay style on init', () => {
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    const targetEl = fixture.nativeElement.querySelector(
      '#target'
    ) as HTMLElement;
    expect(targetEl.classList.contains('reveal-item')).toBe(true);
    expect(targetEl.style.transitionDelay).toBe('120ms');
  });

  it('should reveal element and set is-active immediately when IntersectionObserver is unavailable', () => {
    const originalIO = (window as any).IntersectionObserver;
    (window as any).IntersectionObserver = undefined;

    try {
      fixture = TestBed.createComponent(HostComponent);
      fixture.detectChanges();

      const targetEl = fixture.nativeElement.querySelector(
        '#target'
      ) as HTMLElement;
      expect(targetEl.classList.contains('reveal-visible')).toBe(true);
      expect(targetEl.classList.contains('is-active')).toBe(true);

      const chapterEl = fixture.nativeElement.querySelector(
        '#chapter-target'
      ) as HTMLElement;
      expect(chapterEl.classList.contains('is-active')).toBe(true);
    } finally {
      (window as any).IntersectionObserver = originalIO;
    }
  });
});
