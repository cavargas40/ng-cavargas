import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { MatrixDecodeDirective } from './matrix-decode.directive';

@Component({
  standalone: false,
  template: `
    <h2 id="decode-target" [appMatrixDecode]="titleText" [decodeDuration]="100">
      {{ titleText }}
    </h2>
  `,
})
class HostComponent {
  titleText = 'INITIAL_SIGNAL';
}

describe('MatrixDecodeDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let component: HostComponent;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [HostComponent, MatrixDecodeDirective],
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);
  });

  it('should initialize and apply text immediately when IntersectionObserver is unavailable', () => {
    const originalIO = (window as any).IntersectionObserver;
    (window as any).IntersectionObserver = undefined;

    try {
      fixture = TestBed.createComponent(HostComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      const el = fixture.nativeElement.querySelector('#decode-target') as HTMLElement;
      expect(el.textContent?.trim()).toBe('INITIAL_SIGNAL');
    } finally {
      (window as any).IntersectionObserver = originalIO;
    }
  });

  it('should resolve final text after decode animation runs', fakeAsync(() => {
    const originalIO = (window as any).IntersectionObserver;
    (window as any).IntersectionObserver = undefined;

    try {
      fixture = TestBed.createComponent(HostComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      const el = fixture.nativeElement.querySelector('#decode-target') as HTMLElement;
      const directive = fixture.debugElement
        .children[0]
        .injector
        .get(MatrixDecodeDirective);

      directive.triggerDecode('NEW_TRANSMISSION');
      tick(50);
      expect(el.textContent?.trim()).not.toBe('');

      tick(120);
      expect(el.textContent?.trim()).toBe('NEW_TRANSMISSION');
    } finally {
      (window as any).IntersectionObserver = originalIO;
    }
  }));

  it('should clean up timers and observer on destroy', () => {
    const originalIO = (window as any).IntersectionObserver;
    (window as any).IntersectionObserver = undefined;

    try {
      fixture = TestBed.createComponent(HostComponent);
      fixture.detectChanges();

      expect(() => fixture.destroy()).not.toThrow();
    } finally {
      (window as any).IntersectionObserver = originalIO;
    }
  });
});
