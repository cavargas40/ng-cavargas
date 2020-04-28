import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MockModule } from 'ng-mocks';
import { NgxCaptchaModule } from 'ngx-captcha';

import { ContactComponent } from './contact.component';
import { CommonModule } from '@angular/common';
import { ContactService } from 'app/data/service/contact.service';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        MockModule(NgxCaptchaModule),
      ],
      providers: [TranslateService, ContactService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;

    component.formGroup = formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required]],
      recaptcha: ['', [Validators.required]],
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    const nameInput = compiled.querySelector('input[id="name"]');
    const emailInput = compiled.querySelector('input[id="email"]');

    expect(nameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
  });

  it('should test form validity', () => {
    const form = component.formGroup;
    expect(form.valid).toBeFalsy();

    const nameInput = form.controls.name;
    const emailInput = form.controls.email;
    const messageInput = form.controls.message;
    const recaptchaInput = form.controls.recaptcha;

    nameInput.setValue('Carlos Vargas');
    emailInput.setValue('cavargas40@gmail.com');
    messageInput.setValue('New message to contact with Myself');
    recaptchaInput.setValue('348765378hdkfghifdgh447568934hfjdgj=');

    expect(form.valid).toBeTruthy();
  });

  it('should test input errors', () => {
    const nameInput = component.formGroup.controls.name;

    expect(nameInput.errors.required).toBeTruthy();

    nameInput.setValue('Carlos Vargas');

    expect(nameInput.errors).toBeNull();
  });

  it('should update the language in the component', () => {
    const lang = 'es';
    const translateService = TestBed.inject(TranslateService);

    translateService.use(lang);

    expect(component.lang).toBe(lang);
  });

  it('should try to contact', () => {
    //mock of the service

  })
});
