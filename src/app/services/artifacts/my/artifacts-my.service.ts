import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVICE_GROUP } from '../../../interceptors/auth/headers/auth-headers.interceptor';
import { BaseAPIResponse, Gold } from '../../../shared/models/artifacts';

export interface BankItems extends BaseAPIResponse {
  data: [
    {
      code: string;
      quantity: number;
    },
  ];
}

export interface PasswordChange {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ArtifactsMyService {
  constructor(private http: HttpClient) {}

  getBankItems(item_code?: string, page = 1, size = 50) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (item_code) {
      params = params.set('item_code', item_code);
    }

    return this.http.get<BankItems>('/my/bank/items', {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      params,
    });
  }

  getBankGolds() {
    return this.http.get<Gold>('/my/bank/gold', {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
    });
  }
}
