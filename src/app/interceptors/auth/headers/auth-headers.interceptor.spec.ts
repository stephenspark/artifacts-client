import { TestBed } from '@angular/core/testing';
import {
  HttpClient,
  HttpContext,
  HttpInterceptorFn,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';

import {
  authHeadersInterceptor,
  SERVICE_GROUP,
} from './auth-headers.interceptor';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TokenService } from '../../../services/token/token.service';

class MockTokenService {
  token = 'test-token';
}

describe('authHeadersInterceptor', () => {
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => authHeadersInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(withInterceptors([authHeadersInterceptor])),
        provideHttpClientTesting(),
        {
          provide: TokenService,
          useClass: MockTokenService,
        },
      ],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should not modify requests that do not pass a service group at all', () => {
    const testEndpoint = 'https://foobar.com/test';
    httpClient.get(testEndpoint).subscribe();

    const req = httpTestingController.expectOne(testEndpoint);
    expect(req.request.headers.has('Authorization')).toBeFalse();
    req.flush('OK', {
      status: 200,
      statusText: 'OK',
    });
  });

  it('should not modify requests that do not pass the correct service group context', () => {
    const testEndpoint = 'https://foobar.com/test';

    httpClient
      .get(testEndpoint, {
        context: new HttpContext().set(SERVICE_GROUP, 'foobar'),
      })
      .subscribe();

    const req = httpTestingController.expectOne(testEndpoint);
    expect(req.request.headers.has('Authorization')).toBeFalse();
    req.flush('OK', {
      status: 200,
      statusText: 'OK',
    });
  });

  it('should add auth headers to requests that pass the correct service group context', () => {
    const testEndpoint = 'http://localhost:4200/test';
    const expectedEndpoint = 'https://api.artifactsmmo.com/test';
    httpClient
      .get(testEndpoint, {
        context: new HttpContext().set(SERVICE_GROUP, 'artifacts'),
      })
      .subscribe();

    const req = httpTestingController.expectOne(expectedEndpoint);
    expect(req.request.headers.get('Authorization')).toBe('Bearer test-token');
    expect(req.request.headers.get('Accept')).toBe('application/json');
    expect(req.request.headers.get('Content-Type')).toBe('application/json');
    req.flush('OK', {
      status: 200,
      statusText: 'OK',
    });
  });
});
