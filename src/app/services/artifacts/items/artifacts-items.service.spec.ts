import { TestBed } from '@angular/core/testing';

import { ArtifactsItemsService } from './artifacts-items.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ArtifactsItemsService', () => {
  let service: ArtifactsItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ArtifactsItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
