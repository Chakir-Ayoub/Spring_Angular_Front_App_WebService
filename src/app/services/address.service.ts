import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Address } from '../models/address';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient, private tokenservice:TokenService) {

   }

  getAll(){
    return this.http.get("http://localhost:8080/api/adresses");
  }

  addAdresse(data: Address): Observable<Address> {
    return this.http.post<Address>("http://localhost:8080/api/adresses", data);
  }

  delete(id: string):Observable<any>{
    return this.http.delete(`http://localhost:8080/api/adresses/${id}`)
  }

  Update(id:string, data:Address):Observable<Address>{
    return this.http.put<Address>(`http://localhost:8080/api/adresses/${id}`,data);
  }

  GetById(id:string):Observable<Address>{
    return this.http.get<Address>(`http://localhost:8080/api/adresses/${id}`);
  }


}
