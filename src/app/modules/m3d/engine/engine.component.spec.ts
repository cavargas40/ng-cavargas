import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineComponent } from './engine.component';
import { EngineService } from './engine.service';

describe('EngineComponent', () => {
  let component: EngineComponent;
  let fixture: ComponentFixture<EngineComponent>;
  let engineServiceSpy: jasmine.SpyObj<EngineService>;

  beforeEach(async () => {
    engineServiceSpy = jasmine.createSpyObj('EngineService', [
      'init',
      'animate',
    ]);

    await TestBed.configureTestingModule({
      declarations: [EngineComponent],
      providers: [{ provide: EngineService, useValue: engineServiceSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and initialize EngineService', () => {
    expect(component).toBeTruthy();
    expect(engineServiceSpy.init).toHaveBeenCalled();
    expect(engineServiceSpy.animate).toHaveBeenCalled();
  });
});
