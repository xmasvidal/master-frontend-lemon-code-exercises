import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username!: string;
  password!: string;
  errorLogin!: boolean;

  constructor(private router: Router, private authService: AuthService) {
    this.initCredentials();
   }

  private initCredentials() {
    this.username = '';
    this.password = '';
    this.errorLogin = false;
  }

  login() {

    if (this.authService.login(this.username, this.password)) {
      this.initCredentials();
      this.router.navigate(['/dashboard']);
    } else {
      this.errorLogin = true;
    }
  }

  resetValidation() {
    this.errorLogin = false;
  }
}
