import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVICE_GROUP } from '../../../interceptors/auth/headers/auth-headers.interceptor';
import { BaseAPIResponse } from '../../../shared/models/artifacts';

export interface Status {
  status: string;
  version: string;
  characters_online: number;
  announcements: [{ message: string; created_at?: string }];
  last_wipe: string;
  next_wipe: string;
}

export interface StatusData extends BaseAPIResponse {
  data: Status;
}

@Injectable({
  providedIn: 'root',
})
export class ArtifactsStatusService {
  constructor(private http: HttpClient) {}

  getStatus() {
    return this.http.get<StatusData>('/', {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
    });
  }
}
