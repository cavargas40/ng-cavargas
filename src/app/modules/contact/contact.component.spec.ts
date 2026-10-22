import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ContactComponent } from './contact.component';
import { SharedModule } from 'app/shared/shared.module';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [CommonModule, SharedModule, TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render direct mailto link and social links without recaptcha', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    const mailtoLink = compiled.querySelector(
      'a[href="mailto:cavargas40@gmail.com"]'
    );
    const socialLinks = compiled.querySelectorAll('.contact__social-link');

    expect(mailtoLink).toBeTruthy();
    expect(socialLinks.length).toBe(2);
    expect(compiled.querySelector('ngx-recaptcha2')).toBeNull();
  });

  it('should set copied state when copyEmail is triggered', () => {
    expect(component.copied).toBe(false);
    component.copyEmail();
    expect(component.copied).toBe(true);
  });
});
