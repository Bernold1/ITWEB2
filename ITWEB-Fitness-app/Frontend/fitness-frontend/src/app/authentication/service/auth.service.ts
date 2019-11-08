import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
//Most stuff for authentication is inspired by following youtube playlist(only angular parts)
// https://www.youtube.com/watch?v=ozXGkqpzo_A&list=PLC3y8-rFHvwg2RBz6UplKTGIXREj9dV0G&index=1
export class AuthService {
  //property to store backend api URL
  private _registerURL = "http://localhost:3000/api/user/register";
  private _loginURL = "http://localhost:3000/api/user/login";

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(user) {
    return this.http.post<any>(this._registerURL, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginURL, user);
  }

  isLoggedIn() {
    //return true if token is present, false if not (thats what the !! does)
    return !!localStorage.getItem("token");
  }

  getJWTToken() {
    return localStorage.getItem("token");
  }

  logOut() {
    localStorage.removeItem("token");
    this.router.navigate(["/home"]);
  }
}
