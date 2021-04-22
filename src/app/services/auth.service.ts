import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'firebase';
import { firebase } from '@firebase/app';
import '@firebase/auth';
import {
  AngularFirestore, 
  AngularFirestoreDocument 
} from '@angular/fire/firestore';
import { Admins } from '../ViewModels/admins';
import { AddadminService } from './addadmin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any;
  

  constructor(  private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private addadmin: AddadminService
     ){ }
    
     

  // Sign up with email/password
  SignUp(email, password,admin) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.addadmin.createAdmin({...admin,uid:result.user.uid })
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
       // window.alert("you successfully login")
       localStorage.setItem('user', JSON.stringify(result));
       JSON.parse(localStorage.getItem('user'));

        this.router.navigate(['/myprofile']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}