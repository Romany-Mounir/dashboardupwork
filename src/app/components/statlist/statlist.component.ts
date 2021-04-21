import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-statlist',
  templateUrl: './statlist.component.html',
  styleUrls: ['./statlist.component.css']
})
export class StatlistComponent implements OnInit {
  
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
  
  }



}
