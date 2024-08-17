import { TestBed } from '@angular/core/testing';

import { NavigationItemsService } from './navigation-items.service';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('NavigationItemsService', () => {
  let service: NavigationItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideExperimentalZonelessChangeDetection()],
    });
    service = TestBed.inject(NavigationItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
