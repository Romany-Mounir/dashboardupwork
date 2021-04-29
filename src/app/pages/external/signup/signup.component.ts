import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditadminService } from 'src/app/services/editadmin.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public editForm: FormGroup;
  adminRef: any

  constructor(
    public adminService:EditadminService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.minLength(7),Validators.maxLength(12)]],
      // email: ['',[Validators.required,Validators.email]],
      phone: [ ,[Validators.required,Validators.maxLength(11), Validators.pattern("^((\\+91-?)|0)?[0-9]{11}$")]],
      // password: ['',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]],
      // imgUrl:[''],
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.adminService.getAdminDoc(id).subscribe(res => {
      this.adminRef = res;
      this.editForm = this.formBuilder.group({
        name: [this.adminRef.name],
        // email: [this.adminRef.email],
        phone: [this.adminRef.phone],
        // password: [this.adminRef.password],
        // imgUrl:[this.adminRef.imgUrl],
      })      
    })
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');    
    this.adminService.updateAdmin(this.editForm.value, id);
    this.router.navigate(['list-admins']);
  };
}
