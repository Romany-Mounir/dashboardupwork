import { Component, OnInit } from '@angular/core';
import { GetadminsService } from 'src/app/services/getadmins.service';
import { Admins } from './../../ViewModels/admins';
import { DeleteadminService } from './../../services/deleteadmin.service';

@Component({
  selector: 'app-listsofadmins',
  templateUrl: './listsofadmins.component.html',
  styleUrls: ['./listsofadmins.component.css']
})
export class ListsofadminsComponent implements OnInit {

  Admins: Admins[];

  constructor(private adminService:  GetadminsService,private deleteservice:DeleteadminService) { }

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

  removeAdmin = admin => this.deleteservice.deleteAdmin(admin);
}


