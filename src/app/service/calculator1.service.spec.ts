import { TestBed } from '@angular/core/testing';

import { Calculator1Service } from './calculator1.service';

describe('Calculator1Service', () => {
  let service: Calculator1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Calculator1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
