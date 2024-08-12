import { TestBed } from '@angular/core/testing';

import { ArtifactsMapsService } from './artifacts-maps.service';

describe('ArtifactsMapsService', () => {
  let service: ArtifactsMapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactsMapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
