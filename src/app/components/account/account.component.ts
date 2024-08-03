import { Component } from '@angular/core';
import { TokenService } from '../../services';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  tokenForm = new FormGroup({
    token: new FormControl(''),
  });

  constructor(private tokenService: TokenService) {
    this.tokenForm.setControl(
      'token',
      new FormControl(this.tokenService.token),
    );
  }

  saveToken() {
    const tokenValue = this.tokenForm.value;
    this.tokenService.token = tokenValue.token ?? '';
  }
}
