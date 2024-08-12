import { TestBed } from '@angular/core/testing';

import { ArtifactsMonstersService } from './artifacts-monsters.service';

describe('ArtifactsMonstersService', () => {
  let service: ArtifactsMonstersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactsMonstersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
