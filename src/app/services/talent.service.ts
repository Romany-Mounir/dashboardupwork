import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Talent } from '../models/talent.model';

@Injectable({
  providedIn: 'root'
})
export class TalentService {

  constructor(private angularFirestore: AngularFirestore) { }


  getTalentDoc(id) {
    return this.angularFirestore
    .collection('Talent')
    .doc(id)
    .valueChanges()
  }

  getTalentList() {
    return this.angularFirestore
    .collection('Talent')
    .snapshotChanges();
  }

  createTalent(talent: Talent) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection('Talent')
        .add(talent)
        .then(response => { console.log(response)} , error => reject(error));
    });
  }

  deleteTalent(talent) {
    return this.angularFirestore
      .collection('Talent')
      .doc(talent.id)
      .delete();
  }

  updateTalent(talent: Talent, id) {
    return this.angularFirestore
      .collection('Talent')
      .doc(id)
      .update({
        name: talent.name,
        location: talent.location,
        category: talent.category,
        connects: talent.connects,
        earning: talent.earning
      });
  }
}
