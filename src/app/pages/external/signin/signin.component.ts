import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, public AuthenticationService: AuthService) { }

  ngOnInit(): void {
  }
  //private userservic: UserService,
  // Login(){
  //  this.userservic.login("testtoken");
  //    this.router.navigateByUrl('/overview');
  // }

}
