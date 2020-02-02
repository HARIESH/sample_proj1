import { TestBed } from '@angular/core/testing';

import { AllPostCardService } from './all-post-card.service';

describe('AllPostCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllPostCardService = TestBed.get(AllPostCardService);
    expect(service).toBeTruthy();
  });
});
