import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLanguageSwitcherComponent } from './nav-language-switcher.component';

describe('NavLanguageSwitcherComponent', () => {
  let component: NavLanguageSwitcherComponent;
  let fixture: ComponentFixture<NavLanguageSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLanguageSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
