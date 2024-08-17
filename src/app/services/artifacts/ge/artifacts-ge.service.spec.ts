import { TestBed } from '@angular/core/testing';

import { ArtifactsGeService } from './artifacts-ge.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('ArtifactsGeService', () => {
  let service: ArtifactsGeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(ArtifactsGeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
