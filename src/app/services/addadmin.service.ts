import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Admins } from './../ViewModels/admins';

@Injectable({
  providedIn: 'root'
})
export class AddadminService {

  constructor(private angularFirestore: AngularFirestore,  private act: ActivatedRoute,
    private router: Router,) {
  
   }
   createAdmin(admin:Admins) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection("Admins")
        .add(admin)
        .then(response =>{
          if( response != null)
          {
            this.router.navigate(['myprofile']);
          }
        }),
         error => reject(error);
    });
  }
}
