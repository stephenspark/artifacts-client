import { TestBed } from '@angular/core/testing';

import { ArtifactsMyService } from './artifacts-my.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ArtifactsMyService', () => {
  let service: ArtifactsMyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ArtifactsMyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
