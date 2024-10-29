import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css',
})
export class SignUpPageComponent {
  constructor(private readonly authService: AuthService) {}

  email = new FormControl<string>('');
  name = new FormControl<string>('');
  password = new FormControl<string>('');

  signUp() {
    this.authService.signUp({
      email: this.email.value as string,
      name: this.name.value as string,
      password: this.password.value as string,
    });
  }
}
