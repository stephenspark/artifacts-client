import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TokenService } from '../../services/token/token.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CardModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
