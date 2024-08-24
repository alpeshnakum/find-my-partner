import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'; // Import Firebase types

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  // Register method
  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      throw error;
    }
  }

  // Login method
  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      throw error;
    }
  }

  // Logout method
  async logout() {
    try {
      await this.afAuth.signOut();
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Logout failed', error.message);
      throw error;
    }
  }

  // Google login method
  async loginWithGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await this.afAuth.signInWithPopup(provider);
      return result;
    } catch (error) {
      console.error('Google login failed', error.message);
      throw error;
    }
  }

  // Get the current logged-in user
  getUser() {
    return this.afAuth.authState;
  }
}
