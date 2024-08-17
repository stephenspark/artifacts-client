import { TestBed } from '@angular/core/testing';

import { ArtifactsMyCharactersService } from './artifacts-my-characters.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('ArtifactsMyCharactersService', () => {
  let service: ArtifactsMyCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(ArtifactsMyCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
