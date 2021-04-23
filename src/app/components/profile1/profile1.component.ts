import {
  AfterViewInit,
  Component,
  ChangeDetectorRef,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EditadminService } from 'src/app/services/editadmin.service';
import { firebase } from '@firebase/app';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.component.html',
  styleUrls: ['./profile1.component.css'],
})
export class Profile1Component implements OnInit, AfterViewInit, OnChanges {
  adminRef?: any;
  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFirestore,
    public adminService: EditadminService,
    private auth: AuthService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnChanges(changes: SimpleChanges): void {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.adminRef = JSON.parse(localStorage.getItem('user'));
    console.log(this.adminRef);
  }
}
