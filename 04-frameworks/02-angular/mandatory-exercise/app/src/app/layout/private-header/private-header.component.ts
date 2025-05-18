import { Component } from '@angular/core';
import { PrivateMenuComponent } from '../private-menu/private-menu.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-private-header',
  imports: [PrivateMenuComponent, MatButtonModule],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss'
})
export class PrivateHeaderComponent {

  userName: string = '';
  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.subscription = this.authService.username$.subscribe((username) => {
      this.userName = username;
    });
  }

  logout():void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
