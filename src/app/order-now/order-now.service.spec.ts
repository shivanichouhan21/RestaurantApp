import { TestBed } from '@angular/core/testing';

import { OrderNowService } from './order-now.service';

describe('OrderNowService', () => {
  let service: OrderNowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderNowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
