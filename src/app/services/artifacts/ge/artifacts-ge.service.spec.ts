import { TestBed } from '@angular/core/testing';

import { ArtifactsGeService } from './artifacts-ge.service';

describe('ArtifactsGeService', () => {
  let service: ArtifactsGeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactsGeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
