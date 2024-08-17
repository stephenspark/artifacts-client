import { TestBed } from '@angular/core/testing';

import { ArtifactsMapsService } from './artifacts-maps.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('ArtifactsMapsService', () => {
  let service: ArtifactsMapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(ArtifactsMapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
