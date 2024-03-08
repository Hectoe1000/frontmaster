
import { Injectable } from '@angular/core';
import { LoginRequest } from '../moldes/login-request.model';
import { Observable } from 'rxjs';
import { LoginResponse } from '../moldes/login-response.model';
import { url } from '../api-url/url-constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) {}

  login(request:LoginRequest):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(url.Auth,request); 
  }

}
