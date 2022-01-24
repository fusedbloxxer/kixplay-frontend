import { TestBed } from '@angular/core/testing';

import { WatchApiService } from './watch-api.service';

describe('WatchApiService', () => {
  let service: WatchApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
