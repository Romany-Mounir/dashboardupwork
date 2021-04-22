import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddadminService } from './../../services/addadmin.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  public adminForm: FormGroup;

  constructor(
    public adminService: AddadminService,
    public formBuilder: FormBuilder,
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
    this.adminService.createAdmin(this.adminForm.value);
   };
}

