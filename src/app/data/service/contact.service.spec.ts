import { TestBed, getTestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

describe('Contact Service', () => {
  let injector: TestBed;
  let service: ContactService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactService],
    });

    injector = getTestBed();
    service = TestBed.inject(ContactService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a contact message', () => {
    const mockMessage = {
      name: 'Someone',
      email: 'someone@gmail.com',
      message: 'hello this is a test message.',
      recaptcha:
        '03AGdBq25DXKk_3lVGBYTsthPDGiiOidnvsTBvFFI4yMI3kGVmSx91eONxoaDxz-QFEBJqAgwhU-Ai7ggQGV0WnHbu2hhjgmF3-_xt_MQybSz2IyU0XRTYvqlDEfojae1ThagzPlJf1IA2RZ61ASyZf0BWbpiDpjxoS-4UVFtWq_Eq75iZf8ImZES0rGvc_J4JHYKby3q8AqQEWfIDnmbqN_BDQG9mYYZEJMC1kxXiBgpvrhx7GYhJ6p8UY7G9nhRNGs-gZblS7Ay8uxeLTiNB6z3UXXSyGaM6IsaIw43eStj15Svw226MId4M3KtPOGmg_6Otk_9k8XHz2kuLhxUOB5EplcTZ1RKu66-hYpBDOT-J9vQ80YuHbAy4_UMihP2LUTzx6zzNtTmO',
    };

    service.sendMessage(mockMessage).subscribe((res) => expect(res).toEqual({ name: '-M60zWkU59rlE_x5p4KO' }));

    const req = httpMock.expectOne('https://ng-cavargas.firebaseio.com/contacts.json');
    expect(req.request.method).toBe('POST');
    req.flush({ name: '-M60zWkU59rlE_x5p4KO' });
  });
});
