import { TestBed } from '@angular/core/testing';

import { ArtifactsStatusService } from './artifacts-status.service';

describe('ArtifactsStatusService', () => {
  let service: ArtifactsStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactsStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
