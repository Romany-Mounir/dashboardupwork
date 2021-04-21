import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Admins } from './../ViewModels/admins';

@Injectable({
  providedIn: 'root'
})
export class GetadminsService {

  constructor(private angularFirestore: AngularFirestore) { }
  getAdminList() { 
    return this.angularFirestore
    .collection("Admins")
    .snapshotChanges();
  }
}
