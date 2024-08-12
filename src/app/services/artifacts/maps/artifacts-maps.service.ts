import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVICE_GROUP } from '../../../interceptors/auth/headers/auth-headers.interceptor';
import { BaseAPIResponse, Map } from '../../../shared/models/artifacts';

export type MapContentType =
  | 'monster'
  | 'resource'
  | 'workshop'
  | 'bank'
  | 'grand_exchange'
  | 'tasks_master';

export interface MapData extends BaseAPIResponse {
  data: Map[];
}

@Injectable({
  providedIn: 'root',
})
export class ArtifactsMapsService {
  constructor(private http: HttpClient) {}

  getAllMaps(
    content_code?: string,
    content_type?: MapContentType,
    page = 1,
    size = 50,
  ) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (content_code) {
      params = params.set('content_code', content_code);
    }

    if (content_type) {
      params = params.set('content_type', content_type);
    }

    return this.http.get<MapData>('/maps/', {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      params,
    });
  }

  getMap(x: number, y: number) {
    return this.http.get<MapData>(`/maps/${x}/${y}`, {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
    });
  }
}
