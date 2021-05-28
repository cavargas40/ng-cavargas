import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3dComponent } from './m3d.component';

describe('M3dComponent', () => {
  let component: M3dComponent;
  let fixture: ComponentFixture<M3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
