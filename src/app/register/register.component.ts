import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  async onRegister() {
    try {
      const user = await this.authService.register(this.email, this.password);
      console.log('Registration successful', user);
    } catch (error) {
      console.error('Registration failed', error);
    }
  }
}
