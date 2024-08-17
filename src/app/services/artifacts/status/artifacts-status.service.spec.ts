import { TestBed } from '@angular/core/testing';

import { ArtifactsStatusService } from './artifacts-status.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('ArtifactsStatusService', () => {
  let service: ArtifactsStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(ArtifactsStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
