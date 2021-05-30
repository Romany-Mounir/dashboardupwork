import { Component, OnInit } from '@angular/core';
import { AdminsService } from 'src/app/services/adminsservices/admins.service';
import { AuthService } from 'src/app/services/authservices/auth.service';
import { Admins } from '../../models/admins';

@Component({
  selector: 'app-listsofadmins',
  templateUrl: './listsofadmins.component.html',
  styleUrls: ['./listsofadmins.component.css']
})
export class ListsofadminsComponent implements OnInit {

  Admins: Admins[];

  constructor(private adminService:AdminsService,private auth:AuthService ) { }

  ngOnInit() {
    this.adminService.getAdminList().subscribe(res => {
      this.Admins= res.map( e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as Admins;
      })
    });    
  }

  removeAdmin =(admin )=> {
    this.adminService.deleteAdmin(admin);
  }
}


