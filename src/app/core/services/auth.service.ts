import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afA: AngularFireAuth
  ) { }

  createUser(email: string, password: string) {
    return this.afA.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.afA.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afA.auth.signOut();
  }

  hasUser() {
    return this.afA.authState;
  }
}
