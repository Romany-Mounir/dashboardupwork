import { getModuleFactory, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { firebase } from '@firebase/app';
import '@firebase/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AddadminService } from './addadmin.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private addadmin: AddadminService
  ) {}

  // Sign up with email/password
  SignUp(email, password, admin) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.addadmin.createAdmin({ ...admin, uid: result.user.uid });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign in with email/password
  SignIn(email, password) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.afs
          .collection('Admins')
          .get()
          .subscribe((docs) => {
            docs.forEach((doc) => {
              if (doc.data().uid === firebase.auth().currentUser.uid) {
                console.log(doc.data());
                localStorage.setItem('user', JSON.stringify(doc.data()));
                window.location.reload();
              }
            });
          });
        this.router.navigate(['/myprofile']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  ForgotPassword(passwordResetEmail) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
        this.router.navigate(['/restform']);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  //  updatepassword(pass){
  //   firebase.auth().currentUser.updatePassword(pass).then(
  //     res =>
  //     {
  //       console.log(res);
  //     }
  //   ).catch(
  //     err =>
  //     {
  //       console.log(err);
  //     }
  //   )

  //  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['signin']);
    });
  }

  // getdocdata(){
  //      JSON.parse(localStorage.getItem('user'));

  // }
}
