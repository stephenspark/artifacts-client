import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject, interval } from 'rxjs';
import { startWith, switchMap, tap } from 'rxjs/operators';

import {
  ArtifactsStatusService,
  Status,
} from '../../services/artifacts/status/artifacts-status.service';

import packageJson from '../../../../package.json';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  appVersion: string = packageJson.version;
  angularVersion: string = packageJson.dependencies['@angular/common'].replace(
    '^',
    '',
  );

  status$: Observable<Status>;
  status: Signal<Status | undefined>;
  statusLoading: Subject<boolean> = new Subject<boolean>();

  constructor(private artifactsStatusService: ArtifactsStatusService) {
    this.status$ = interval(10000).pipe(
      startWith(0),
      tap(() => this.statusLoading.next(true)),
      switchMap(() => this.artifactsStatusService.getStatus()),
      tap(() => this.statusLoading.next(false)),
    );

    this.status = toSignal(this.status$);
  }
}
