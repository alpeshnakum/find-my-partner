import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Adjust the path if necessary
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isAuthenticated();
  }

  logout() {
    this.authService
      .logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  }
}
