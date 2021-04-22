import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      name: [''],
      email: [''],
      phone: [],
      password:[''],
      imgUrl:[''],
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.adminService.getAdminDoc(id).subscribe(res => {
      this.adminRef = res;
      this.editForm = this.formBuilder.group({
        name: [this.adminRef.name],
        email: [this.adminRef.email],
        phone: [this.adminRef.phone],
        password: [this.adminRef.password],
        imgUrl:[this.adminRef.imgUrl],
      })      
    })
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');    
    this.adminService.updateAdmin(this.editForm.value, id);
    this.router.navigate(['list-admins']);
  };



}
