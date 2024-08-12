import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVICE_GROUP } from '../../../interceptors/auth/headers/auth-headers.interceptor';
import {
  BaseAPIResponse,
  GEItem,
  Item,
} from '../../../shared/models/artifacts';

export type CraftTypes =
  | 'weaponcrafting'
  | 'gearcrafting'
  | 'jewelrycrafting'
  | 'cooking'
  | 'woodcutting'
  | 'mining';

export type ItemTypes =
  | 'consumable'
  | 'body_armor'
  | 'weapon'
  | 'resource'
  | 'leg_armor'
  | 'helmet'
  | 'boots'
  | 'shield'
  | 'amulet'
  | 'ring';

export interface ItemData extends BaseAPIResponse {
  data: Item[];
}

export interface SingleItem {
  data: {
    item: Item;
    ge: GEItem;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ArtifactsItemsService {
  constructor(private http: HttpClient) {}

  getAllItems(
    craft_material?: string,
    craft_skill?: CraftTypes,
    max_level?: number,
    min_level?: number,
    name?: string,
    type?: ItemTypes,
    page = 1,
    size = 50,
  ) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (craft_material) {
      params = params.set('craft_material', craft_material);
    }

    if (craft_skill) {
      params = params.set('craft_skill', craft_skill);
    }

    if (max_level) {
      params = params.set('max_level', max_level.toString());
    }

    if (min_level) {
      params = params.set('min_level', min_level.toString());
    }

    if (name) {
      params = params.set('name', name);
    }

    if (type) {
      params = params.set('type', type);
    }

    return this.http.get<ItemData>('/maps/', {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      params,
    });
  }

  getItem(code: string) {
    return this.http.get<SingleItem>(`/items/${code}`, {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
    });
  }
}
