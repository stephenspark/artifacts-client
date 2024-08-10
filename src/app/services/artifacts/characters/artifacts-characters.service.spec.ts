import { TestBed } from '@angular/core/testing';

import { ArtifactsCharactersService } from './artifacts-characters.service';

describe('ArtifactsCharactersService', () => {
  let service: ArtifactsCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactsCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
