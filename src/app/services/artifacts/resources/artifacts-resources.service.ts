import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVICE_GROUP } from '../../../interceptors/auth/headers/auth-headers.interceptor';
import { BaseAPIResponse, DropRate } from '../../../shared/models/artifacts';

export type SkillTypes = 'mining' | 'woodcutting' | 'fishing';

export interface Resource {
  name: string;
  code: string;
  skill: SkillTypes;
  level: number;
  drops: DropRate[];
}

export interface ResourceData extends BaseAPIResponse {
  data: Resource[] | Resource;
}

@Injectable({
  providedIn: 'root',
})
export class ArtifactsResourcesService {
  constructor(private http: HttpClient) {}

  getAllResources(
    drop?: string,
    max_level?: number,
    min_level?: number,
    skill?: SkillTypes,
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

    if (skill) {
      params = params.set('skill', skill);
    }

    return this.http.get<ResourceData>('/resources', {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      params,
    });
  }

  getResource(code: string) {
    return this.http.get<ResourceData>(`/resources/${code}`, {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
    });
  }
}
