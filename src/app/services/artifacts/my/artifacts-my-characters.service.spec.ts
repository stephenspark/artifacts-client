import { TestBed } from '@angular/core/testing';

import { ArtifactsMyCharactersService } from './artifacts-my-characters.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ArtifactsMyCharactersService', () => {
  let service: ArtifactsMyCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ArtifactsMyCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
