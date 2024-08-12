import { TestBed } from '@angular/core/testing';

import { ArtifactsEventsService } from './artifacts-events.service';

describe('ArtifactsEventsService', () => {
  let service: ArtifactsEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactsEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
