import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersComponent } from './characters.component';
import { of } from 'rxjs';
import { ArtifactsMyCharactersService } from '../../services/artifacts/my/artifacts-my-characters.service';

class MockArtifactsMyCharactersService {
  getMyCharacters() {
    return of({});
  }
}

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersComponent],
      providers: [
        {
          provide: ArtifactsMyCharactersService,
          useClass: MockArtifactsMyCharactersService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
