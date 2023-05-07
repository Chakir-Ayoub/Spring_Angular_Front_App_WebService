import { AccountService } from './../../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentUser:null;
  constructor(private accountService:AccountService,private tokenService:TokenService,private route:Router){}
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
