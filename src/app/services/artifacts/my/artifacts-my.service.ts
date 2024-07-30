import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVICE_GROUP } from '../../../interceptors';

export interface BankItems {
  data: [
    {
      code: string;
      quantity: number;
    },
  ];
  total: number;
  page: number;
  size: number;
  pages?: number;
}

export interface BankGolds {
  data: {
    quantity: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ArtifactsMyService {
  constructor(private http: HttpClient) {}

  getBankItems(page = 1, size = 50) {
    return this.http.get<BankItems>('/my/bank/items', {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      params: {
        page,
        size,
      },
    });
  }

  getBankGolds() {
    return this.http.get<BankGolds>('/my/bank/gold', {
      context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
    });
  }

  // postChangePassword() {}
}
