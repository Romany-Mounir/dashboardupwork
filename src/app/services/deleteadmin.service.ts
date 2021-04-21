import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Admins } from './../ViewModels/admins';

@Injectable({
  providedIn: 'root'
})
export class DeleteadminService {

  constructor(private angularFirestore: AngularFirestore) { }
  deleteAdmin(admin) {
    return this.angularFirestore
      .collection("Admins")
      .doc(admin.id)
      .delete();
  }
}
