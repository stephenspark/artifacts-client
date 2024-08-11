import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';

import { routes } from './app.routes';
import { authHeadersInterceptor } from './interceptors/auth/headers/auth-headers.interceptor';
import { authInvalidInterceptor } from './interceptors/auth/invalid/auth-invalid.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(
      withFetch(),
      withInterceptors([authHeadersInterceptor, authInvalidInterceptor]),
    ),
    provideRouter(routes),
  ],
};
