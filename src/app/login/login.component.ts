import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onLogin() {
    try {
      const user = await this.authService.login(this.email, this.password);
      console.log('Login successful', user);
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  loginWithGoogle() {
    this.authService
      .loginWithGoogle()
      .then(() => {
        // Redirect to home or another page after login
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('Google login error:', error);
      });
  }
}
