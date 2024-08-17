import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

@Component({ selector: 'app-footer', template: '' })
class MockFooterComponent {}

@Component({ selector: 'app-navigation', template: '' })
class MockNavigationComponent {}

class MockArtifactsStatusService {
  getArtifactsStatus() {
    return of({});
  }
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
      declarations: [MockNavigationComponent, MockFooterComponent],
      providers: [
        {
          provide: MockArtifactsStatusService,
          useClass: MockArtifactsStatusService,
        },
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have the 'artifacts MMO client' title`, () => {
    expect(app.title).toEqual('Artifacts MMO Client');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('main')?.className).toBe('app-container');
  });
});
