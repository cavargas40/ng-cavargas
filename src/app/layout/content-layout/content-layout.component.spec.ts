import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ContentLayoutComponent } from './content-layout.component';

describe('ContentLayoutComponent', () => {
  let component: ContentLayoutComponent;
  let fixture: ComponentFixture<ContentLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ContentLayoutComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and render main sections including chapters and canvas', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#top-progress-bar')).toBeTruthy();
    expect(compiled.querySelector('#matrix-canvas')).toBeTruthy();
    expect(compiled.querySelector('.story-spine-track')).toBeTruthy();
    expect(compiled.querySelector('.story-spine-laser')).toBeTruthy();

    expect(compiled.querySelector('#ch-00')).toBeTruthy();
    expect(compiled.querySelector('#ch-01')).toBeTruthy();
    expect(compiled.querySelector('#ch-02')).toBeTruthy();
    expect(compiled.querySelector('#ch-03')).toBeTruthy();
    expect(compiled.querySelector('#ch-04')).toBeTruthy();

    expect(compiled.querySelector('#hero')).toBeTruthy();
    expect(compiled.querySelector('#about-me')).toBeTruthy();
    expect(compiled.querySelector('#resume')).toBeTruthy();
    expect(compiled.querySelector('#portfolio')).toBeTruthy();
    expect(compiled.querySelector('#contact')).toBeTruthy();
  });

  it('should scroll to chapter smoothly on scrollToChapter call', () => {
    const scrollSpy = jasmine.createSpy('scrollIntoView');
    const fakeEl = { scrollIntoView: scrollSpy } as any;
    spyOn(document, 'getElementById').and.returnValue(fakeEl);

    component.scrollToChapter('ch-02');
    expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
  });
});
