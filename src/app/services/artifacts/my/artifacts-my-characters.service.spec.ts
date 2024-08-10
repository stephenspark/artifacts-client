import { TestBed } from '@angular/core/testing';

import { ArtifactsMyCharactersService } from './artifacts-my-characters.service';

describe('ArtifactsMyCharactersService', () => {
  let service: ArtifactsMyCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactsMyCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
