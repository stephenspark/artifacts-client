import { TestBed } from '@angular/core/testing';

import { ArtifactsMonstersService } from './artifacts-monsters.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ArtifactsMonstersService', () => {
  let service: ArtifactsMonstersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ArtifactsMonstersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
