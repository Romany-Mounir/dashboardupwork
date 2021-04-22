import { Component, OnInit } from '@angular/core';
import { DeleteadminService } from 'src/app/services/deleteadmin.service';
import { GetadminsService } from 'src/app/services/getadmins.service';
import { Admins } from 'src/app/ViewModels/admins';
import { firebase } from '@firebase/app';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {  
  Admins: Admins[];
  constructor(private adminService:  GetadminsService,private deleteservice:DeleteadminService) { }

  ngOnInit() {
    this.adminService.getAdminList().subscribe(res => {
      const localUser=firebase.auth().currentUser.uid;
      console.log(localUser);
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
