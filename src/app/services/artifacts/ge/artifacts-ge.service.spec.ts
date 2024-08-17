import { TestBed } from '@angular/core/testing';

import { ArtifactsGeService } from './artifacts-ge.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ArtifactsGeService', () => {
  let service: ArtifactsGeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ArtifactsGeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
