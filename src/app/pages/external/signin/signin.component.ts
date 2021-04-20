import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private userservic: UserService,private router: Router) { }

  ngOnInit(): void {
  }
  Login(){
   this.userservic.login("testtoken");
     this.router.navigateByUrl('/overview');
  }

}
