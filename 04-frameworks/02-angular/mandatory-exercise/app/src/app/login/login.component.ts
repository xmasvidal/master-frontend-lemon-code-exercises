import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) { }

  username: string = 'master@lemoncode.net';
  password: string = '12345678';

  login() {

    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']);
    }
  }
}
