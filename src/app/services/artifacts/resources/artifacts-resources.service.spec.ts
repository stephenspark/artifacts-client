import { TestBed } from '@angular/core/testing';

import { ArtifactsResourcesService } from './artifacts-resources.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('ArtifactsResourcesService', () => {
  let service: ArtifactsResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(ArtifactsResourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
