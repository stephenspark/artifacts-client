import { TestBed } from '@angular/core/testing';

import { ArtifactsEventsService } from './artifacts-events.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('ArtifactsEventsService', () => {
  let service: ArtifactsEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(ArtifactsEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
