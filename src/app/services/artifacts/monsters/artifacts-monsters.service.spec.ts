import { TestBed } from '@angular/core/testing';

import { ArtifactsMonstersService } from './artifacts-monsters.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('ArtifactsMonstersService', () => {
  let service: ArtifactsMonstersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(ArtifactsMonstersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
