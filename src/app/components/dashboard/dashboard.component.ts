import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {
  ArtifactsMyService,
  BankItems,
} from '../../services/artifacts/my/artifacts-my.service';
import { Gold } from '../../shared/models/artifacts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  bankItems$: Observable<BankItems> | undefined;
  gold$: Observable<Gold> | undefined;

  constructor(private artifactsMy: ArtifactsMyService) {}

  getBankItems() {
    this.bankItems$ = this.artifactsMy.getBankItems();
  }

  getBankGolds() {
    this.gold$ = this.artifactsMy.getBankGolds();
  }
}
