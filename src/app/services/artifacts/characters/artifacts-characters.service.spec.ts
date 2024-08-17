import { TestBed } from '@angular/core/testing';

import {
  ArtifactsCharactersService,
  CharacterSkin,
  SortType,
  CharacterData,
} from './artifacts-characters.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { SERVICE_GROUP } from '../../../interceptors/auth/headers/auth-headers.interceptor';
import { Character } from '../../../shared/models/artifacts';

describe('ArtifactsCharactersService', () => {
  let service: ArtifactsCharactersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(ArtifactsCharactersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a character', () => {
    const mockCharacter: Character = {} as Character;
    const name = 'TestCharacter';
    const skin: CharacterSkin = 'men1';

    service.createCharacter(name, skin).subscribe((character) => {
      expect(character).toEqual(mockCharacter);
    });

    const req = httpMock.expectOne('/characters/create');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ name, skin });
    expect(req.request.context.get(SERVICE_GROUP)).toBe('artifacts');
    req.flush(mockCharacter);
  });

  it('should get all characters', () => {
    const mockCharacterData: CharacterData = {
      data: [{}],
    } as CharacterData;
    const sort: SortType = 'mining';
    const page = 1;
    const size = 50;

    service.getAllCharacters(sort, page, size).subscribe((data) => {
      expect(data).toEqual(mockCharacterData);
    });

    const req = httpMock.expectOne(
      (request) =>
        request.url === '/characters/' &&
        request.params.get('page') === page.toString() &&
        request.params.get('size') === size.toString() &&
        request.params.get('sort') === sort,
    );
    expect(req.request.method).toBe('GET');
    expect(req.request.context.get(SERVICE_GROUP)).toBe('artifacts');
    req.flush(mockCharacterData);
  });

  it('should get a character by name', () => {
    const mockCharacterData: CharacterData = {
      data: [{}],
    } as CharacterData;
    const name = 'TestCharacter';

    service.getCharacter(name).subscribe((data) => {
      expect(data).toEqual(mockCharacterData);
    });

    const req = httpMock.expectOne(`/characters/${name}`);
    expect(req.request.method).toBe('GET');
    expect(req.request.context.get(SERVICE_GROUP)).toBe('artifacts');
    req.flush(mockCharacterData);
  });
});
