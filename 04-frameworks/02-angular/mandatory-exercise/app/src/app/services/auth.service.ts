import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private usernameSubject = new BehaviorSubject<string>(this.getUsername());
  username$ = this.usernameSubject.asObservable();
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.isLogged());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  login(username: string, password: string): boolean {

    if (username !== 'master@lemoncode.net' || password !== '12345678') {
      return false;
    }

    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    this.usernameSubject.next(username);
    this.isLoggedInSubject.next(true);

    return true;
  }
  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    this.usernameSubject.next('');
    this.isLoggedInSubject.next(false);
  }
  isLogged(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  getUsername(): string {
    return localStorage.getItem('username') || '';
  }
}
