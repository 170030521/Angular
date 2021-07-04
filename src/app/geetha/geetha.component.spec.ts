import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeethaComponent } from './geetha.component';

describe('GeethaComponent', () => {
  let component: GeethaComponent;
  let fixture: ComponentFixture<GeethaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeethaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeethaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
