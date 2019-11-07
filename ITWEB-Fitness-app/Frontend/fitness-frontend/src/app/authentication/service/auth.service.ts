import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  //property to store backend api URL
  private _registerURL = "http://localhost:3000/api/user/register";
  private _loginURL = "http://localhost:3000/api/user/login";

  constructor(private http: HttpClient) {}

  registerUser(user) {
    return this.http.post<any>(this._registerURL, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginURL, user);
  }
}
