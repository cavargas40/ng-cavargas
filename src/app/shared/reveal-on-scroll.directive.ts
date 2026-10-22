import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  standalone: false,
  selector: '[appReveal]',
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  @Input() revealDelay: number = 0;

  private observer: IntersectionObserver | null = null;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const el = this.elementRef.nativeElement;
    this.renderer.addClass(el, 'reveal-item');

    if (this.revealDelay > 0) {
      this.renderer.setStyle(el, 'transitionDelay', `${this.revealDelay}ms`);
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (
      prefersReducedMotion ||
      typeof IntersectionObserver === 'undefined'
    ) {
      this.renderer.addClass(el, 'reveal-visible');
      this.renderer.addClass(el, 'is-active');
      return;
    }

    const threshold = el.classList.contains('story-chapter') ? 0.18 : 0.12;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(el, 'reveal-visible');
            this.renderer.addClass(el, 'is-active');
            if (this.observer) {
              this.observer.unobserve(el);
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
