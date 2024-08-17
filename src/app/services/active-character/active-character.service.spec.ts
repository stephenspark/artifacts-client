import { TestBed } from '@angular/core/testing';

import { ActiveCharacterService } from './active-character.service';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('ActiveCharacterService', () => {
  let service: ActiveCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideExperimentalZonelessChangeDetection()],
    });
    service = TestBed.inject(ActiveCharacterService);

    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      return key === service['activeCharacterKey'] ? 'test-character' : null;
    });
    spyOn(localStorage, 'setItem').and.callFake(() => {
      return;
    });
    spyOn(localStorage, 'removeItem').and.callFake(() => {
      return;
    });
  });

  afterEach(() => {
    (localStorage.getItem as jasmine.Spy).calls.reset();
    (localStorage.setItem as jasmine.Spy).calls.reset();
    (localStorage.removeItem as jasmine.Spy).calls.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the active character from localStorage', () => {
    const character = service.activeCharacter;
    expect(character).toBe('test-character');
    expect(localStorage.getItem).toHaveBeenCalledWith(
      service['activeCharacterKey'],
    );
  });

  it('should set the active character in localStorage', () => {
    service.activeCharacter = 'new-character';
    expect(localStorage.setItem).toHaveBeenCalledWith(
      service['activeCharacterKey'],
      'new-character',
    );
  });

  it('should remove the active character from localStorage', () => {
    service.removeToken();
    expect(localStorage.removeItem).toHaveBeenCalledWith(
      service['activeCharacterKey'],
    );
  });

  it('should initialize active character to empty string if not found in localStorage', () => {
    (localStorage.getItem as jasmine.Spy).and.returnValue(null);
    const character = service.activeCharacter;
    expect(character).toBe('');
    expect(localStorage.setItem).toHaveBeenCalledWith(
      service['activeCharacterKey'],
      '',
    );
  });
});
