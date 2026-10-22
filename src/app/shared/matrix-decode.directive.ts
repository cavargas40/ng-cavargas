import {
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

const MATRIX_GLYPHS =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン0123456789ABCDEFZ';

@Directive({
  standalone: false,
  selector: '[appMatrixDecode]',
})
export class MatrixDecodeDirective implements OnInit, OnChanges, OnDestroy {
  @Input() appMatrixDecode: string = '';
  @Input() decodeDuration: number = 350;

  private observer: IntersectionObserver | null = null;
  private timerId: any = null;
  private langSub: Subscription | null = null;
  private hasIntersected = false;
  private currentResolvedText = '';

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private ngZone: NgZone,
    @Optional() private translateService: TranslateService | null
  ) {}

  ngOnInit(): void {
    const el = this.elementRef.nativeElement;

    if (this.appMatrixDecode) {
      this.currentResolvedText = this.appMatrixDecode;
    } else {
      this.currentResolvedText = el.textContent?.trim() || '';
    }

    if (this.translateService) {
      this.langSub = this.translateService.onLangChange.subscribe(() => {
        setTimeout(() => {
          const updated =
            this.appMatrixDecode ||
            this.elementRef.nativeElement.textContent?.trim() ||
            '';
          if (updated && this.hasIntersected) {
            this.currentResolvedText = updated;
            this.triggerDecode(updated);
          }
        }, 0);
      });
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (
      prefersReducedMotion ||
      typeof IntersectionObserver === 'undefined'
    ) {
      this.hasIntersected = true;
      this.applyFinalText(this.currentResolvedText);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.hasIntersected = true;
            this.triggerDecode(this.currentResolvedText);
            if (this.observer) {
              this.observer.unobserve(el);
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    this.observer.observe(el);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.appMatrixDecode && !changes.appMatrixDecode.isFirstChange()) {
      this.currentResolvedText = changes.appMatrixDecode.currentValue || '';
      if (this.hasIntersected) {
        this.triggerDecode(this.currentResolvedText);
      }
    }
  }

  public triggerDecode(targetText?: string): void {
    const el = this.elementRef.nativeElement;
    const target =
      targetText !== undefined
        ? targetText
        : this.currentResolvedText ||
          this.appMatrixDecode ||
          el.textContent?.trim() ||
          '';

    if (!target) {
      return;
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      this.applyFinalText(target);
      return;
    }

    this.clearTimer();

    const frameInterval = 28;
    const totalFrames = Math.max(6, Math.floor(this.decodeDuration / frameInterval));
    let frame = 0;

    this.ngZone.runOutsideAngular(() => {
      this.timerId = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const resolvedLength = Math.floor(progress * target.length);

        let output = '';
        for (let i = 0; i < target.length; i++) {
          const char = target[i];
          if (/\s/.test(char)) {
            output += char;
          } else if (i < resolvedLength) {
            output += char;
          } else if (i === resolvedLength) {
            const randIdx = Math.floor(Math.random() * MATRIX_GLYPHS.length);
            output += MATRIX_GLYPHS[randIdx];
          } else {
            const randIdx = Math.floor(Math.random() * MATRIX_GLYPHS.length);
            output += MATRIX_GLYPHS[randIdx];
          }
        }

        this.renderer.setProperty(el, 'textContent', output);

        if (frame >= totalFrames) {
          this.clearTimer();
          this.renderer.setProperty(el, 'textContent', target);
        }
      }, frameInterval);
    });
  }

  private applyFinalText(text: string): void {
    this.clearTimer();
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'textContent',
      text
    );
  }

  private clearTimer(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  ngOnDestroy(): void {
    this.clearTimer();
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    if (this.langSub) {
      this.langSub.unsubscribe();
      this.langSub = null;
    }
  }
}
