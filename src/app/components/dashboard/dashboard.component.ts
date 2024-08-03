import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {
  ArtifactsMyService,
  BankGolds,
  BankItems,
} from '../../services/artifacts/my/artifacts-my.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  bankItems$: Observable<BankItems> | undefined;
  bankGolds$: Observable<BankGolds> | undefined;

  constructor(private artifactsMy: ArtifactsMyService) {}

  getBankItems() {
    this.bankItems$ = this.artifactsMy.getBankItems();
  }

  getBankGolds() {
    this.bankGolds$ = this.artifactsMy.getBankGolds();
  }
}
