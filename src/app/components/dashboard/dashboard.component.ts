import { Component, OnInit } from '@angular/core';
import { ArtifactsStatusService, Status } from '../../services';
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
export class DashboardComponent implements OnInit {
  status$: Observable<Status> | undefined;
  bankItems$: Observable<BankItems> | undefined;
  bankGolds$: Observable<BankGolds> | undefined;

  constructor(
    private artifactsStatus: ArtifactsStatusService,
    private artifactsMy: ArtifactsMyService,
  ) {}

  ngOnInit(): void {
    this.getApiStatus();
  }

  getApiStatus() {
    this.status$ = this.artifactsStatus.getStatus();
  }

  getBankItems() {
    this.bankItems$ = this.artifactsMy.getBankItems();
  }

  getBankGolds() {
    this.bankGolds$ = this.artifactsMy.getBankGolds();
  }
}
