import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private tokenKeyName = 'artifacts-api-token';
  private _token!: string;

  get token(): string {
    const token = localStorage.getItem(this.tokenKeyName);
    if (!token) {
      this.token = '';
      this._token = '';
    } else {
      this._token = token;
    }

    return this._token;
  }

  set token(tokenValue: string) {
    localStorage.setItem(this.tokenKeyName, tokenValue);
  }

  removeToken() {
    localStorage.removeItem(this.tokenKeyName);
  }
}
