import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs'; // Import 'of' from 'rxjs'

import { FooterComponent } from './footer.component';
import { ArtifactsStatusService } from '../../services/artifacts/status/artifacts-status.service'; // Import the service

class MockArtifactsStatusService {
  getStatus() {
    return of({});
  }
}

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [
        {
          provide: ArtifactsStatusService,
          useClass: MockArtifactsStatusService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more tests here to cover the functionality that depends on ArtifactsStatusService
});
