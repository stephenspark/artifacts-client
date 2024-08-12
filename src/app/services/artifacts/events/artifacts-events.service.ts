import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVICE_GROUP } from '../../../interceptors/auth/headers/auth-headers.interceptor';
import { BaseAPIResponse, Map } from '../../../shared/models/artifacts';

export interface ActiveEvent {
  name: string;
  map: Map;
  previous_skin: string;
  duration: number;
  expiration: string;
  created_at: string;
}

export interface ActiveEventData extends BaseAPIResponse {
  data: ActiveEvent[];
}

@Injectable({
  providedIn: 'root',
})
export class ArtifactsEventsService {
  constructor(private http: HttpClient) {}

  getAllEvents(page = 1, size = 50) {
    return this.http.get<ActiveEventData>('/events', {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      params: {
        page,
        size,
      },
    });
  }
}
