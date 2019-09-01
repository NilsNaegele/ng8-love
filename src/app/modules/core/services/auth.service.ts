import { SnackBarService } from './snack-bar.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { switchMap } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private db: AngularFireDatabase,
              private router: Router,
              private snackBarService: SnackBarService) {
        this.user = this.afAuth.authState.pipe(
          switchMap(user => {
            if (user) {
              return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
            } else {
              return of(null);
            }
          })
        );
    }

    googleLogin() {
      const provider = new auth.GoogleAuthProvider();
      return this.oAuthLogin(provider);
    }

    private oAuthLogin(provider) {
      return this.afAuth.auth.signInWithPopup(provider)
             .then((credential) => {
              this.snackBarService.open('Willkommen bei DBT für Dich!');
               this.updateUserData(credential.user);
             });
    }

    emailSignUp(email: string, password: string) {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(credential => {
        this.snackBarService.open('Willkommen bei DBT für Dich!');
        return this.updateUserData(credential.user);
      })
      .catch(error => {
        this.handleError(error);
      });
    }

    emailLogin(email: string, password: string) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(credential => {
        this.snackBarService.open('Willkommen zurück bei DBT für Dich!');
        return this.updateUserData(credential.user);
      })
      .catch(error => {
        this.handleError(error);
      });
    }

    getAuth() {
      return this.afAuth.authState;
    }

    private handleError(error: Error) {
      console.error(error);
      this.snackBarService.open(error.message, 'error');
    }


    private updateUserData(user) {
      // sets user data to firestore on login
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

      const data: User = {
          uid: user.uid,
          email: user.email || null,
          displayName: user.displayName || 'no name',
          photoURL: user.photoUrl || 'https://goo.gl/Fz9nrQ'
      };
      return userRef.set(data);
    }

    signOut() {
      this.afAuth.auth.signOut().then(() => {
        this.snackBarService.open('Bis bald in DBT Für Dich!');
        this.router.navigate(['/']);
      });
    }



}
