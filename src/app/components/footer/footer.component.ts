import {
  ChangeDetectionStrategy,
  Component,
  signal,
  Signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, interval } from 'rxjs';
import { startWith, switchMap, tap } from 'rxjs/operators';

import {
  ArtifactsStatusService,
  StatusData,
} from '../../services/artifacts/status/artifacts-status.service';

import packageJson from '../../../../package.json';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  appVersion: string = packageJson.version;
  angularVersion: string = packageJson.dependencies['@angular/common'].replace(
    '^',
    '',
  );

  status$: Observable<StatusData>;
  status: Signal<StatusData | undefined>;
  statusLoading = signal(false);

  constructor(private artifactsStatusService: ArtifactsStatusService) {
    this.status$ = interval(30000).pipe(
      startWith(0),
      tap(() => this.statusLoading.set(true)),
      switchMap(() => this.artifactsStatusService.getStatus()),
      tap(() => this.statusLoading.set(false)),
    );

    this.status = toSignal(this.status$);
  }
}
