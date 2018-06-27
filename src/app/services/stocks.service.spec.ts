import { TestBed, inject } from '@angular/core/testing';

import { StocksService } from './stocks.service';
import {HttpClientModule} from '@angular/common/http';

describe('StocksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [StocksService]
    });
  });

  it('should be created', inject([StocksService], (service: StocksService) => {
    expect(service).toBeTruthy();
  }));
});
