import { TestBed } from '@angular/core/testing';

import { ArtifactsMyService } from './artifacts-my.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('ArtifactsMyService', () => {
  let service: ArtifactsMyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(ArtifactsMyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
