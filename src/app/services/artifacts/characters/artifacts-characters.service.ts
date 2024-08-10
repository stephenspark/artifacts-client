import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVICE_GROUP } from '../../../interceptors/auth-headers/auth-headers.interceptor';
import { Character } from '../../../shared/models/artifacts';

export type SortType =
  | 'woodcutting'
  | 'mining'
  | 'fishing'
  | 'weaponcrafting'
  | 'gearcrafting'
  | 'jewelrycrafting'
  | 'cooking';

export type CharacterSkin =
  | 'men1'
  | 'men2'
  | 'men3'
  | 'women1'
  | 'women2'
  | 'women3';

export interface InventorySlot {
  slot: number;
  code: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class ArtifactsCharactersService {
  constructor(private http: HttpClient) {}

  createCharacter(name: string, skin: CharacterSkin) {
    return this.http.post<Character>(
      '/characters/create',
      {
        name,
        skin,
      },
      {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      },
    );
  }

  getAllCharacters(sort: SortType, page = 1, size = 50) {
    return this.http.get<Character[]>('/characters/', {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      params: {
        page,
        size,
        sort,
      },
    });
  }

  getCharacter(name: string) {
    return this.http.get<Character>(`/characters/${name}`, {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
    });
  }
}
