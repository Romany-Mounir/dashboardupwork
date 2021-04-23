import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Client } from 'src/app/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private angularFirestore: AngularFirestore) { }


  getClientDoc(id) {
    return this.angularFirestore
    .collection('Clients')
    .doc(id)
    .valueChanges()
  }

  getClientList() {
    return this.angularFirestore
    .collection('Clients')
    .snapshotChanges();
  }

  createClient(client: Client) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection('Clients')
        .add(client)
        .then(response => { console.log(response)} , error => reject(error));
    });
  }

  deleteClient(client) {
    return this.angularFirestore
      .collection('Clients')
      .doc(client.id)
      .delete();
  }

  updateClient(client: Client, id) {
    return this.angularFirestore
      .collection('Clients')
      .doc(id)
      .update({
        name: client.name,
        location: client.location,
        paymentVerfied: client.paymentVerfied
      });
  }
}
