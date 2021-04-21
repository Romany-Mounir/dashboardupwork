import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cardoverview',
  templateUrl: './cardoverview.component.html',
  styleUrls: ['./cardoverview.component.css']
})
export class CardoverviewComponent implements OnInit {
    // clients:  Observable<any[]>;
    // Clients:any;
  constructor(db:AngularFireDatabase) { 
    // this.clients=db.list('/clients').valueChanges();
    // this.clients.subscribe(client => {
    //   this.Clients = client;
    //   console.log(this.Clients);
    // })

  }
  ngOnInit(): void {
   
  }

  }

