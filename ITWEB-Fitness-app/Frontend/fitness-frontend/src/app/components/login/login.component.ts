import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../authentication/service/auth.service";
import { Router } from "@angular/router";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginUserData: UserLogin = { email: "", password: "" };
  email = new FormControl("", [Validators.required, Validators.email]);

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(res => {
      console.log(res);
      localStorage.setItem("token", res.token);
      this._router.navigate(["/home"]);
    });
  }

  getErrorMessage() {
    return this.email.hasError("required")
      ? "You must enter a value"
      : this.email.hasError("email")
      ? "Not a valid email"
      : "";
  }
}
