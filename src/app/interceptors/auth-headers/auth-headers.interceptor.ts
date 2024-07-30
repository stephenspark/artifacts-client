import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const SERVICE_GROUP = new HttpContextToken(() => 'default');

export const authHeadersInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(SERVICE_GROUP) === 'artifacts') {
    const apiUrl = environment.apiUrl;
    const apiToken = environment.artifactsApiToken;
    req = req.clone({
      url: `${apiUrl}` + req.url.replace('http://localhost:4200', ''),
      headers: req.headers
        .set('Authorization', `Bearer ${apiToken}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json'),
    });

    console.log(req);
  }

  return next(req);
};
