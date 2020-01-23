import { TestBed } from '@angular/core/testing';

import { ProductServiseService } from './product-servise.service';

describe('ProductServiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductServiseService = TestBed.get(ProductServiseService);
    expect(service).toBeTruthy();
  });
});
