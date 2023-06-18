import { AddressService } from 'src/app/services/address.service';
import { AccountService } from './../../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { MatDialog } from '@angular/material/dialog';
import { AddAddressComponent } from '../../add-address/add-address.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [
    MatDialog
  ]
})
export class NavbarComponent implements OnInit {
  currentUser:null;
  constructor(private _dialog: MatDialog, private accountService:AccountService,private tokenService:TokenService,private route:Router,private addserv:AddressService){}
  ngOnInit(): void {
      this.accountService.authStatus.subscribe(res=>{
        this.currentUser=this.tokenService.getInfos();
      })
  }

  lougout(){
    this.tokenService.remove();
    this.accountService.changesStatus(false);
    this.route.navigateByUrl("/login");
  }


}
