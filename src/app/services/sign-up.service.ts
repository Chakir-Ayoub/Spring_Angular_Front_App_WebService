import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient, private tokenservice:TokenService) { }

  Sign_Up(data: User): Observable<User> {
    return this.http.post<User>("http://localhost:8080/api/users", data);
  }
}
