import { TestBed } from '@angular/core/testing';

import { RequesInterceptorService } from './reques-interceptor.service';

describe('RequesInterceptorService', () => {
  let service: RequesInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequesInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
