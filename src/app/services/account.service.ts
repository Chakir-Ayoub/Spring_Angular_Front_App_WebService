import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private tokenService:TokenService) { }
  private loggedIn=new BehaviorSubject<Boolean>(this.tokenService.loggedIn());

  authStatus=this.loggedIn.asObservable();

  changesStatus(value:boolean){
      this.loggedIn.next(value);
  }
}
