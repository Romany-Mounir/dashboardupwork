import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Admins } from './../ViewModels/admins';

@Injectable({
  providedIn: 'root'
})
export class EditadminService {

  constructor(private angularFirestore: AngularFirestore) { }

updateAdmin(admin: Admins, id) {
  return this.angularFirestore
    .collection("Admins")
    .doc(id)
    .update({
      name: admin.name,
      email: admin.email,
      phone: admin.phone,
      password:admin.password,
      imgUrl:admin.imgUrl,
    });
}
getAdminDoc(id) {
  return this.angularFirestore
  .collection('Admins')
  .doc(id)
  .valueChanges()
}
}
