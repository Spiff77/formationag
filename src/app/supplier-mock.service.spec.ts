import { TestBed } from '@angular/core/testing';

import { SupplierMockService } from './supplier-mock.service';

describe('SupplierMockService', () => {
  let service: SupplierMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
