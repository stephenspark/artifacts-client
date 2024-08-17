import { TestBed } from '@angular/core/testing';

import { ArtifactsMapsService } from './artifacts-maps.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ArtifactsMapsService', () => {
  let service: ArtifactsMapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ArtifactsMapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
