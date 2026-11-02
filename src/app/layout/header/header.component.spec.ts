import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'app/shared/shared.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [TranslateModule.forRoot(), SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and render hero without legacy video tag and display chapter 00 telemetry', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('video')).toBeNull();
    expect(compiled.querySelectorAll('.hero__pipeline-step').length).toBe(4);
    expect(compiled.querySelector('.cursor-blink')).toBeTruthy();
    expect(compiled.querySelector('.hero__terminal')).toBeTruthy();
    expect(compiled.querySelector('.hero__logistics')).toBeTruthy();
    expect(component.coreStack).toContain('TypeScript');
    expect(component.coreStack).toContain('Rust');
    expect(component.coreStack).toContain('Go');
    expect(component.coreStack).toContain('Kafka');
    expect(component.coreStack).toContain('NestJS');
    expect(component.coreStack).toContain('Terraform');
  });
});
