import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptcha2Component } from 'ngx-captcha';

import { ContactService } from 'app/data/service/contact.service';
import { environment } from '../../../environments/environment';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @ViewChild('captchaElem', { static: false }) captchaElem: ReCaptcha2Component;

  public formGroup: FormGroup;
  public contacted: boolean = false;
  public siteKey: string = environment.recaptchaKey;
  public lang: string = 'en';

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    public translateService: TranslateService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.lang = localStorage.getItem('lang');
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
    });
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required]],
      recaptcha: ['', [Validators.required]],
    });
  }

  contactMe(): void {
    if (this.formGroup.valid) {
      this.contactService.sendMessage(this.formGroup.value).subscribe(() => {
        this.contacted = true;
        this.formGroup.reset();
        Object.keys(this.formGroup.controls).forEach((key) => {
          this.formGroup.get(key).setErrors(null);
        });
        this.captchaElem.resetCaptcha();
      });
    }
  }
}
