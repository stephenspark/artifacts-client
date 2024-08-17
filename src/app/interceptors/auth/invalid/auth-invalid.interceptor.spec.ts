import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import {
  HttpClient,
  HttpInterceptorFn,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { authInvalidInterceptor } from './auth-invalid.interceptor';
import { Router } from '@angular/router';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('authInvalidInterceptor', () => {
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  let router: Router;
  let navigateSpy: jasmine.Spy;

  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => authInvalidInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(withInterceptors([authInvalidInterceptor])),
        provideHttpClientTesting(),
      ],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    router = TestBed.inject(Router);
    navigateSpy = spyOn(router, 'navigate');
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should handle 401 Unauthorized response and navigate to /account route', () => {
    httpClient.get('/test').subscribe({
      next: () => {
        fail('should have failed with 401 error');
      },
      error: (error) => {
        expect(error.status).toBe(401);
        expect(navigateSpy).toHaveBeenCalledWith(['/account']);
      },
    });

    const req = httpTestingController.expectOne('/test');
    req.flush('Unauthorized', {
      status: 401,
      statusText: 'Unauthorized',
    });
  });

  it('should handle 403 Forbidden response and navigate to /account route', () => {
    httpClient.get('/test').subscribe({
      next: () => {
        fail('should have failed with 403 error');
      },
      error: (error) => {
        expect(error.status).toBe(403);
        expect(navigateSpy).toHaveBeenCalledWith(['/account']);
      },
    });

    const req = httpTestingController.expectOne('/test');
    req.flush('Forbidden', {
      status: 403,
      statusText: 'Forbidden',
    });
  });
});
