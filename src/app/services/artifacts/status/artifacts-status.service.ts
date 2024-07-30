import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVICE_GROUP } from '../../../interceptors';

// https://api.artifactsmmo.com/docs/#/operations/get_status__get
export interface Status {
  data: {
    status: string;
    version: string;
    characters_online: number;
    announcements: [{ message: string; created_at?: string }];
    last_wipe: string;
    next_wipe: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ArtifactsStatusService {
  constructor(private http: HttpClient) {}

  getStatus() {
    return this.http.get<Status>('/', {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
    });
  }
}
