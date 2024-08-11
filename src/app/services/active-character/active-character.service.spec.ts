import { TestBed } from '@angular/core/testing';

import { ActiveCharacterService } from './active-character.service';

describe('ActiveCharacterService', () => {
  let service: ActiveCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
