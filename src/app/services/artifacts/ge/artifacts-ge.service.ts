import { Injectable } from '@angular/core';
import { SERVICE_GROUP } from '../../../interceptors/auth/headers/auth-headers.interceptor';
import { HttpClient, HttpContext } from '@angular/common/http';
import { BaseAPIResponse, GEItem } from '../../../shared/models/artifacts';

export interface GEItemData extends BaseAPIResponse {
  data: GEItem[] | GEItem;
}

@Injectable({
  providedIn: 'root',
})
export class ArtifactsGeService {
  constructor(private http: HttpClient) {}

  getAllGEItems(page = 1, size = 50) {
    return this.http.get<GEItemData>('/ge/', {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      params: {
        page,
        size,
      },
    });
  }

  getGEItem(code: string) {
    return this.http.get<GEItemData>(`/ge/${code}`, {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
    });
  }
}
