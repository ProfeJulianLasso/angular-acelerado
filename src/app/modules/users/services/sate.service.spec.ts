import { TestBed } from '@angular/core/testing';

import { SateService } from './sate.service';

describe('SateService', () => {
  let service: SateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
