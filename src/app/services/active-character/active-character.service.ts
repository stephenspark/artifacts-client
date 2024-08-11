import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiveCharacterService {
  private activeCharacterKey = 'artifacts-active-character';
  private _activeCharacter!: string;

  get activeCharacter(): string {
    const activeCharacter = localStorage.getItem(this.activeCharacterKey);
    if (!activeCharacter) {
      this.activeCharacter = '';
      this._activeCharacter = '';
    } else {
      this._activeCharacter = activeCharacter;
    }

    return this._activeCharacter;
  }

  set activeCharacter(value: string) {
    localStorage.setItem(this.activeCharacterKey, value);
  }

  removeToken() {
    localStorage.removeItem(this.activeCharacterKey);
  }
}
