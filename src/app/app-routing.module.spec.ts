import { Location } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppRoutingModule } from './app-routing.module';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

@Component({
  standalone: false,
  template: '<router-outlet></router-outlet>',
})
class TestHostComponent {}

describe('AppRoutingModule', () => {
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppRoutingModule],
      declarations: [TestHostComponent, ContentLayoutComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should navigate to "" as the root page', fakeAsync(() => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    router.initialNavigation();
    tick();

    expect(location.path()).toBe('');
  }));

  it('should redirect "welcome" to ""', fakeAsync(() => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    router.navigate(['welcome']);
    tick();

    expect(location.path()).toBe('');
  }));

  it('should redirect unknown routes to ""', fakeAsync(() => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    router.navigate(['unknown-route-xyz']);
    tick();

    expect(location.path()).toBe('');
  }));
});
