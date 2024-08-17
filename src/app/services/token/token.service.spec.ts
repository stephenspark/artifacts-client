import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('TokenService', () => {
  let service: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideExperimentalZonelessChangeDetection()],
    });
    service = TestBed.inject(TokenService);

    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      return key === 'artifacts-api-token' ? 'test-token' : null;
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

  it('should return an empty string if no token is in localStorage', () => {
    (localStorage.getItem as jasmine.Spy).and.returnValue(null);
    expect(service.token).toBe('');
  });

  it('should return the token if it is in localStorage', () => {
    (localStorage.getItem as jasmine.Spy).and.returnValue('test-token');
    expect(service.token).toBe('test-token');
  });

  it('should store the token in localStorage when set', () => {
    const testToken = 'test-token';
    service.token = testToken;
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'artifacts-api-token',
      testToken,
    );
  });

  it('should remove the token from localStorage when removeToken is called', () => {
    service.removeToken();
    expect(localStorage.removeItem).toHaveBeenCalledWith('artifacts-api-token');
  });
});
