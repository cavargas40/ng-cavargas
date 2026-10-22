import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { STORY_CHAPTERS, StoryChapter } from 'app/core/constants/resume.constants';

interface MatrixColumn {
  x: number;
  headRow: number;
  progress: number;
  speed: number;
  trailLength: number;
  fontSize: number;
  chars: string[];
}

const GLYPHS =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン0123456789ABCDEFZ';

@Component({
  standalone: false,
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('matrixCanvas', { static: false })
  public canvasRef?: ElementRef<HTMLCanvasElement>;

  public readonly chapters: StoryChapter[] = STORY_CHAPTERS;
  public activeChapterId: string = 'ch-00';
  public activeChapterName: string = 'CH_00: SIGNAL_INIT';
  public scrollDepthPercent: number = 0;
  public formattedDepth: string = '000';
  public formattedWarp: string = '1.0';

  private scrollVelocity = 0;
  private lastScrollY = 0;
  private animationFrameId: number | null = null;
  private isDestroyed = false;
  private scrollListener?: () => void;
  private resizeListener?: () => void;
  private chapterObserver?: IntersectionObserver;

  // Matrix canvas variables
  private width = 0;
  private height = 0;
  private cellSize = 15;
  private numRows = 0;
  private columns: MatrixColumn[] = [];
  private ctx: CanvasRenderingContext2D | null = null;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.lastScrollY = window.scrollY || 0;
    this.initScrollAndTelemetry();
    this.initMatrixCanvas();
  }

  private initScrollAndTelemetry(): void {
    this.scrollListener = () => {
      const scrollTop = window.scrollY || 0;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const pct = Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100));

      const delta = Math.abs(scrollTop - this.lastScrollY);
      this.lastScrollY = scrollTop;
      this.scrollVelocity = Math.min(3.0, this.scrollVelocity + delta * 0.03);

      this.scrollDepthPercent = pct;
      this.formattedDepth = String(Math.round(pct)).padStart(3, '0');
    };

    window.addEventListener('scroll', this.scrollListener, { passive: true });
    this.scrollListener();

    if (typeof IntersectionObserver !== 'undefined') {
      this.chapterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.classList?.add?.('is-active');
              if (typeof target.querySelectorAll === 'function') {
                target
                  .querySelectorAll('.story-chapter')
                  .forEach((c) => c.classList?.add?.('is-active'));
              }
              const wrapper =
                (typeof target.closest === 'function'
                  ? target.closest('[data-chapter-name]')
                  : null) || target;
              const chId =
                wrapper.getAttribute?.('id') ||
                target.getAttribute?.('id') ||
                '';
              const chName =
                wrapper.getAttribute?.('data-chapter-name') ||
                target.getAttribute?.('data-chapter-name') ||
                '';
              if (chId) {
                const normalizedId = chId.split('-').slice(0, 2).join('-');
                this.ngZone.run(() => {
                  this.activeChapterId = normalizedId;
                  if (chName) {
                    this.activeChapterName = chName;
                  }
                });
              }
            }
          });
        },
        { threshold: 0.12, rootMargin: '-4% 0px -10% 0px' }
      );

      const chapterEls = document.querySelectorAll('.story-chapter, [id^="ch-"]');
      chapterEls.forEach((el) => this.chapterObserver?.observe(el));
    }
  }

  private initMatrixCanvas(): void {
    if (!this.canvasRef || !this.canvasRef.nativeElement) {
      return;
    }

    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) {
      return;
    }

    const resetCanvas = () => {
      if (!canvas || !this.ctx || this.isDestroyed) {
        return;
      }
      const dpr = window.devicePixelRatio || 1;
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      canvas.width = this.width * dpr;
      canvas.height = this.height * dpr;
      canvas.style.width = this.width + 'px';
      canvas.style.height = this.height + 'px';
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      this.cellSize = 15;
      const fontSize = 12;
      const numCols = Math.ceil(this.width / this.cellSize);
      this.numRows = Math.ceil(this.height / this.cellSize) + 25;

      this.columns = Array.from({ length: numCols }, (_, colIdx) => {
        const chars = Array.from({ length: this.numRows }, () =>
          this.randomGlyph()
        );
        return {
          x: colIdx * this.cellSize + Math.floor(this.cellSize / 2),
          headRow: Math.floor(Math.random() * this.numRows) - 15,
          progress: Math.random(),
          speed: 0.1 + Math.random() * 0.18,
          trailLength: 10 + Math.floor(Math.random() * 14),
          fontSize,
          chars,
        };
      });
    };

    resetCanvas();

    this.resizeListener = () => resetCanvas();
    window.addEventListener('resize', this.resizeListener, { passive: true });

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      this.startRainLoop();
    });
  }

  private randomGlyph(): string {
    return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
  }

  private startRainLoop(): void {
    const loop = () => {
      if (this.isDestroyed || !this.ctx) {
        return;
      }

      this.scrollVelocity *= 0.9;
      const warpFactor = 1 + this.scrollVelocity;
      this.formattedWarp = warpFactor.toFixed(1);

      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.textBaseline = 'middle';
      this.ctx.textAlign = 'center';

      const trailHex = '#00ff66';
      const nearHeadHex = '#86efac';
      const headHex = '#ffffff';

      for (let i = 0; i < this.columns.length; i++) {
        const col = this.columns[i];
        this.ctx.font = `600 ${col.fontSize}px "MS Gothic", "Hiragino Kaku Gothic ProN", monospace`;

        col.progress += col.speed * warpFactor;
        if (col.progress >= 1) {
          const steps = Math.floor(col.progress);
          col.progress -= steps;
          col.headRow += steps;

          if (col.headRow >= 0 && col.headRow < this.numRows) {
            col.chars[col.headRow] = this.randomGlyph();
          }

          if (col.headRow - col.trailLength > this.numRows) {
            col.headRow = -Math.floor(Math.random() * 12);
            col.trailLength = 10 + Math.floor(Math.random() * 14);
            col.speed = 0.1 + Math.random() * 0.18;
          }
        }

        for (let d = col.trailLength; d >= 0; d--) {
          const r = col.headRow - d;
          if (r < 0 || r >= this.numRows) {
            continue;
          }
          const y = r * this.cellSize + Math.floor(this.cellSize / 2);
          if (y > this.height) {
            continue;
          }

          if (d > 0 && Math.random() < 0.02) {
            col.chars[r] = this.randomGlyph();
          }

          const ch = col.chars[r];

          if (d === 0) {
            this.ctx.fillStyle = headHex;
            this.ctx.shadowColor = trailHex;
            this.ctx.shadowBlur = 8;
            this.ctx.globalAlpha = 1;
            this.ctx.fillText(ch, col.x, y);
            this.ctx.shadowBlur = 0;
          } else if (d <= 2) {
            this.ctx.fillStyle = nearHeadHex;
            this.ctx.globalAlpha = 0.9;
            this.ctx.fillText(ch, col.x, y);
          } else {
            this.ctx.fillStyle = trailHex;
            const fade = Math.max(0.06, 1 - d / (col.trailLength + 1));
            this.ctx.globalAlpha = fade * 0.8;
            this.ctx.fillText(ch, col.x, y);
          }
        }
      }

      this.ctx.globalAlpha = 1;
      this.ctx.shadowBlur = 0;
      this.animationFrameId = requestAnimationFrame(loop);
    };

    this.animationFrameId = requestAnimationFrame(loop);
  }

  public scrollToChapter(chapterId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.activeChapterId = chapterId;
    const target = document.getElementById(chapterId);
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

  ngOnDestroy(): void {
    this.isDestroyed = true;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
    if (this.chapterObserver) {
      this.chapterObserver.disconnect();
    }
  }
}
