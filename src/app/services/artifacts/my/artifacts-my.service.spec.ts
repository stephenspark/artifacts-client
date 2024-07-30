import { TestBed } from '@angular/core/testing';

import { ArtifactsMyService } from './artifacts-my.service';

describe('ArtifactsMyService', () => {
  let service: ArtifactsMyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactsMyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
