import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddadminService } from 'src/app/services/addadmin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component implements OnInit {

  public adminForm: FormGroup;

  constructor(
    public adminService: AddadminService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router,
   public AuthenticationService: AuthService
  ) { 
    this.adminForm = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [],
      password: [''],
    })      
  }
  
  ngOnInit(): void {
  }

  onSubmit() {
   var email=this.adminForm.get('email').value;
   var pass=this.adminForm.get('password').value;
    this.AuthenticationService.SignUp(email,pass,this.adminForm.value);
  }
  
}
