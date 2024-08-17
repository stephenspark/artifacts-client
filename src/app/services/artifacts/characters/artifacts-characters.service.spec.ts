import { TestBed } from '@angular/core/testing';

import { ArtifactsCharactersService } from './artifacts-characters.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ArtifactsCharactersService', () => {
  let service: ArtifactsCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ArtifactsCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
