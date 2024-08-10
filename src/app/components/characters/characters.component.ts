import { Component, Signal } from '@angular/core';
import {
  ArtifactsMyCharactersService,
  CharacterData,
} from '../../services/artifacts/my/artifacts-my-characters.service';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  characters$: Observable<CharacterData>;
  characters: Signal<CharacterData | undefined>;

  constructor(
    private artifactsMyCharactersService: ArtifactsMyCharactersService,
  ) {
    this.characters$ = this.artifactsMyCharactersService.getMyCharacters();
    this.characters = toSignal(this.characters$);
  }
}
