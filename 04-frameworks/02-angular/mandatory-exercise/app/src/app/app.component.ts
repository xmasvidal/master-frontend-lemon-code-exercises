import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicHeaderComponent } from './layout/public-header/public-header.component';
import { PrivateHeaderComponent } from './layout/private-header/private-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthService } from './services/auth.service';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, RouterOutlet, PublicHeaderComponent, PrivateHeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';

  isUserLoggedIn: boolean = false;

  private subscription: Subscription = new Subscription();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.isLoggedIn$.subscribe((username) => {
      this.isUserLoggedIn = username;
    });
  }

  isUserLogged(): boolean {
    return this.isUserLoggedIn;
  }
}
