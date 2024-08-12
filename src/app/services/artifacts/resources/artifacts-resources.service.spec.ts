import { TestBed } from '@angular/core/testing';

import { ArtifactsResourcesService } from './artifacts-resources.service';

describe('ArtifactsResourcesService', () => {
  let service: ArtifactsResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactsResourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
