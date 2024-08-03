import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PrimeNGConfig } from 'primeng/api';

import { FooterComponent, NavigationComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'artifacts-client';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
