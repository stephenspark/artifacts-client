import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVICE_GROUP } from '../../../interceptors/auth/headers/auth-headers.interceptor';
import { BaseAPIResponse, DropRate } from '../../../shared/models/artifacts';

export interface Monster {
  name: string;
  code: string;
  level: number;
  hp: number;
  attack_fire: number;
  attack_earth: number;
  attack_water: number;
  attack_air: number;
  res_fire: number;
  res_earth: number;
  res_water: number;
  res_air: number;
  min_gold: number;
  max_gold: number;
  drops: DropRate[];
}

export interface MonsterData extends BaseAPIResponse {
  data: Monster[] | Monster;
}

@Injectable({
  providedIn: 'root',
})
export class ArtifactsMonstersService {
  constructor(private http: HttpClient) {}

  getAllMonsters(
    drop?: string,
    max_level?: number,
    min_level?: number,
    page = 1,
    size = 50,
  ) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (drop) {
      params = params.set('drop', drop);
    }

    if (max_level) {
      params = params.set('max_level', max_level.toString());
    }

    if (min_level) {
      params = params.set('min_level', min_level.toString());
    }

    return this.http.get<MonsterData>('/monsters', {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      params,
    });
  }

  getMonster(code: string) {
    return this.http.get<MonsterData>(`/monsters/${code}`, {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
    });
  }
}
