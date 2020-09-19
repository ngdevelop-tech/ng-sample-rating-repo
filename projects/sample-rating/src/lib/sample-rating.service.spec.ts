import { TestBed } from '@angular/core/testing';

import { SampleRatingService } from './sample-rating.service';

describe('SampleRatingService', () => {
  let service: SampleRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
