import { TestBed, inject } from '@angular/core/testing';

import { ShowreelService } from './showreel.service';

describe('ShowreelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowreelService]
    });
  });

  it('should be created', inject([ShowreelService], (service: ShowreelService) => {
    expect(service).toBeTruthy();
  }));
});
