import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
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
      name: ['', [Validators.required,Validators.minLength(7),Validators.maxLength(12)]],
      email: ['',[Validators.required,Validators.email]],
      phone: [ ,[Validators.required,Validators.maxLength(11), Validators.pattern("^((\\+91-?)|0)?[0-9]{11}$")]],
      password: ['',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]],
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
