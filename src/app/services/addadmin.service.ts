import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Admins } from './../ViewModels/admins';

@Injectable({
  providedIn: 'root'
})
export class AddadminService {

  constructor(private angularFirestore: AngularFirestore) {
  
   }
   createAdmin(admin:Admins) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection("Admins")
        .add(admin)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }
}
