import { inject } from '@angular/core';
import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TokenService } from '../../services/token/token.service';

export const SERVICE_GROUP = new HttpContextToken(() => 'default');

export const authHeadersInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);

  if (req.context.get(SERVICE_GROUP) === 'artifacts') {
    const apiUrl = environment.apiUrl;
    const apiToken = tokenService.token;
    req = req.clone({
      url: `${apiUrl}` + req.url.replace('http://localhost:4200', ''),
      headers: req.headers
        .set('Authorization', `Bearer ${apiToken}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json'),
    });
  }

  return next(req);
};
