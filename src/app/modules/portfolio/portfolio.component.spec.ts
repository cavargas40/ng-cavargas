import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioComponent } from './portfolio.component';
import { TranslateModule } from '@ngx-translate/core';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open a link', () => {
    spyOn(window, 'open');

    component.goToLink('https://www.google.com');

    expect(window.open).toHaveBeenCalled();
  });
});
