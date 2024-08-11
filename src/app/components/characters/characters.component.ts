import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import {
  ArtifactsMyCharactersService,
  CharacterData,
} from '../../services/artifacts/my/artifacts-my-characters.service';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ArtifactsImageComponent } from '../../shared/components/artifacts/image/artifacts-image.component';
import { ButtonModule } from 'primeng/button';
import { ActiveCharacterService } from '../../services/active-character/active-character.service';
import { ProgressBarModule } from 'primeng/progressbar';
import { Character } from '../../shared/models/artifacts';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ArtifactsImageComponent,
    ButtonModule,
    ProgressBarModule,
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent {
  characters$: Observable<CharacterData>;
  characters: Signal<CharacterData | undefined>;
  activeCharacterName!: string | null;

  constructor(
    private artifactsMyCharactersService: ArtifactsMyCharactersService,
    private activeCharacterService: ActiveCharacterService,
  ) {
    this.characters$ = this.artifactsMyCharactersService.getMyCharacters();
    this.characters = toSignal(this.characters$);
    this.activeCharacterName = this.activeCharacterService.activeCharacter;
  }

  isActiveCharacter(characterName: string) {
    return this.activeCharacterName === characterName;
  }

  setActiveCharacter(activeCharacterName: string) {
    this.activeCharacterService.activeCharacter = activeCharacterName;
    this.activeCharacterName = this.activeCharacterService.activeCharacter;
  }

  trackCharacter(index: number, character: Character) {
    return character ? character.name : undefined;
  }
}
