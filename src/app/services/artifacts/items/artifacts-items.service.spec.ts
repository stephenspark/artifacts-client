import { TestBed } from '@angular/core/testing';

import { ArtifactsItemsService } from './artifacts-items.service';

describe('ArtifactsItemsService', () => {
  let service: ArtifactsItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactsItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
