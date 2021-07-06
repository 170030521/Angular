import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Java1Component } from './java1.component';

describe('Java1Component', () => {
  let component: Java1Component;
  let fixture: ComponentFixture<Java1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Java1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Java1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
