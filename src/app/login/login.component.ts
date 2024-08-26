import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isResetMode: boolean = false;
  resetEmail: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  async onLogin() {
    try {
      const user = await this.authService.login(this.email, this.password);
      console.log('Login successful', user);
    } catch (error) {
      this.notificationService.showMessage(
        'Login failed. Please check your credentials.'
      );
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

  async sendPasswordResetEmail() {
    try {
      await this.authService.sendPasswordResetEmail(this.resetEmail);
      this.notificationService.showMessage('Password reset email sent.');
    } catch (error) {
      this.notificationService.showMessage(
        'Failed to send password reset email. Please try again.'
      );
    }
  }

  toggleResetMode() {
    this.isResetMode = !this.isResetMode;
  }
}
